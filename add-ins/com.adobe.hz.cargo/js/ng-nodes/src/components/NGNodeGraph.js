import {
    renderEdges,
    setUpEdgeListeners,
    cleanUpEdgeListeners,
    renderPorts,
} from '../edges.js'
import { setUpDragListeners, cleanUpDragListeners } from '../drag.js'
import { createModel, updateFromModel } from '../model.js'
import { createView, updateFromView } from '../view.js'
import {
    createEdgeEl,
    createNodeEl,
    getEdgeEls,
    getEdgePortEls,
    getNodeElById,
    getNodeElEdgeEls,
} from '../dom.js'
import { executeGraph } from '../execute.js'

const TEMPLATE = `
<style>
:host {
    display: block;
    position: relative;
    width: auto;
    height: 400px;
}
.graph {
    display: block;
    box-sizing: border-box;
    overflow: hidden;
    background: var(--color-graph-bg);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    box-shadow: inset 5px 5px 5px rgb(0 0 0 / 20%);
}
</style>
<div class="graph">
    <slot></slot>
</div>
`

class NGNodeGraph extends HTMLElement {
    /**
     * Executes the node tree one node at a time starting with
     * dependency nodes.  Operations specific to each node is
     * handled through the supplied handler callback.
     * @param model - The graph model to execute.
     * @param handler - A callback used to process each node
     * during execution.  This handler is called with the arguments:
     * handler(inputValues, nodeId, model)
     * where inputValues is an object with properties matching
     * port ids of the current node whose values represent those
     * either from defaultsObjOrFn or another node port connected
     * to that node port. nodeId is the node id of the node currently
     * being handled and model is the model passed into execute().
     * This function should return an object with properties mapping
     * to port ids which have values representing the output values
     * of that node.
     * @param defaultsObjOrFn - An object or function providing
     * default values for node ports.  As an object it should
     * have properties mapping to node ids which have values of
     * objects that have properties mapping to port ids.  Those
     * values would in turn represent the default value for that
     * port.  If a callback function, it should return the object
     * containing port properties for that node.  This callback is
     * called with the arguments:
     * defaultsObjOrFn(nodeId, model)
     * This function should return an object with properties mapping
     * to port ids which have values representing the default input
     * values for that node for when there are no node graph inputs.
     * @return An object with properties mapping to node ids where
     * each of those are objects with properties mapping to
     * calculated port values.
     */
    static execute(model, handler, defaultsObjOrFn) {
        return executeGraph(model, handler, defaultsObjOrFn)
    }

    get model() {
        return createModel(this)
    }

    set model(value) {
        updateFromModel(this, value)
        this.render()
        this.emitChanged()
    }

    get view() {
        return createView(this)
    }

    set view(value) {
        updateFromView(this, value)
        this.render()
    }

    constructor() {
        super()
        this.activeEdge = null
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = TEMPLATE
    }

    async connectedCallback() {
        await 0 // defers render allowing children to connect
        setUpDragListeners(this)
        setUpEdgeListeners(this)
        this.render()
    }

    disconnectedCallback() {
        cleanUpDragListeners(this)
        cleanUpEdgeListeners(this)
    }

    /**
     * Runs NGNodeGraph.execute() using this graph's model.
     */
    execute(handler, defaultsObjOrFn) {
        return NGNodeGraph.execute(this.model, handler, defaultsObjOrFn)
    }

    addGraphNode(nodeModel) {
        const nodeEl = createNodeEl(this, nodeModel)
        this.render()
        this.emitChanged()
        return nodeEl
    }

    /**
     * Updates node with new model values but retains
     * original values if not present in the supplied
     * model.
     */
    updateGraphNode(nodeModel) {
        console.info('update graph node');
        const nodeEl = getNodeElById(this, nodeModel.nodeId)
        if (nodeEl) {
            nodeEl.node = nodeModel
            this.removeStaleGraphEdges()
            this.render()
            this.emitChanged()
            return nodeEl
        }
    }

    /**
     * Removes a single ng-node element if its nodeId
     * matches the supplied nodeId. This will also remove
     * any ng-edge elements associated with that node.
     */
    removeGraphNode(nodeId) {
        const nodeEl = getNodeElById(this, nodeId)
        if (nodeEl) {
            nodeEl.remove()
            this.removeStaleGraphEdges()
            this.render()
            this.emitChanged()
            return nodeEl
        }
    }

    /**
     * Returns a Set nodeIds representing all of the
     * nodes connected to the specified node, either
     * directly or indirectly.
     */
    getGraphNodeDependencies(nodeId) {
        const nodeIds = new Set()

        const addDependencies = (currNodeId) => {
            const nodeEl = getNodeElById(this, currNodeId)
            if (!nodeEl) {
                return
            }
            const inEdgeEls = getNodeElEdgeEls(this, nodeEl, 'in')
            for (let edgeEl of inEdgeEls) {
                const edgeNodeId = edgeEl.outNodeId
                if (edgeNodeId) {
                    if (!nodeIds.has(edgeNodeId) && edgeNodeId !== nodeId) {
                        addDependencies(edgeNodeId)
                    }
                    nodeIds.add(edgeNodeId)
                }
            }
        }

        addDependencies(nodeId)
        return nodeIds
    }

    addGraphEdge(edgeModel) {
        const edgeEl = createEdgeEl(this, edgeModel)
        this.render()
        this.emitChanged()
        return edgeEl
    }

    /**
     * Removes any number of edges that have model values
     * matching those in the supplied model.
     */
    removeGraphEdges(edgeModel) {
        const edgeEls = []
        const keys = Object.keys(edgeModel)
        getEdgeEls(this).forEach((edgeEl) => {
            const currEdge = edgeEl.edge
            if (keys.every((key) => edgeModel[key] === currEdge[key])) {
                edgeEl.remove()
                edgeEls.push(edgeEl)
            }
        })
        if (edgeEls.length) {
            this.render()
            this.emitChanged()
        }
        return edgeEls
    }

    /**
     * Removes any edge that do not have a valid connection.
     */
    removeStaleGraphEdges() {
        const edgeEls = []
        getEdgeEls(this).forEach((edgeEl) => {
            const { outPortEl, inPortEl } = getEdgePortEls(this, edgeEl.edge)
            if (!outPortEl || !inPortEl) {
                edgeEl.remove()
                edgeEls.push(edgeEl)
            }
        })
        return edgeEls
    }

    render() {
        renderEdges(this)
        renderPorts(this)
    }

    emitChanged() {
        this.dispatchEvent(new Event('ng-changed', { bubbles: true }))
    }
}

if (!customElements.get('ng-node-graph')) {
    customElements.define('ng-node-graph', NGNodeGraph)
}
export default NGNodeGraph
