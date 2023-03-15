import { createEdgeEl, createNodeEl, getEdgeEls, getNodeEls } from './dom.js'
import { createView, updateFromView } from './view.js'

function createModel(graphEl) {
    return {
        nodes: Array.from(getNodeEls(graphEl), (nodeEl) => nodeEl.node),
        edges: Array.from(getEdgeEls(graphEl), (edgeEl) => edgeEl.edge),
    }
}

function updateFromModel(graphEl, model) {
    const view = createView(graphEl)

    if ('nodes' in model) {
        for (let nodeEl of getNodeEls(graphEl)) {
            nodeEl.remove()
        }
        for (let node of model.nodes ?? []) {
            createNodeEl(graphEl, node)
        }
    }

    if ('edges' in model) {
        for (let edgeEl of getEdgeEls(graphEl)) {
            edgeEl.remove()
        }
        for (let node of model.edges ?? []) {
            createEdgeEl(graphEl, node)
        }
    }

    updateFromView(graphEl, view)
}

export { createModel, updateFromModel }
