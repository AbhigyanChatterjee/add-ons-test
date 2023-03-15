import {
    getActiveEdgeEl,
    getEdgeEls,
    getEdgePortEls,
    getNodeEls,
    getNodeElPortEls,
    getPortElEdgeEls,
    createEdgeEl,
    getGraphContainerEl,
} from './dom.js'
import { GlobalListeners } from './util/GlobalListeners.js'

const CURVE_FACTOR = 3 // lower is more curve
const CURVE_MAX = 200 // px
const listeners = new GlobalListeners()

function setActive(graphEl, partialEdge, event) {
    clearActive(graphEl)
    graphEl.activeEdge = partialEdge

    const activeEl = createEdgeEl(graphEl, partialEdge)
    activeEl.classList.add('active')

    const currRenderActiveEdge = listeners.add(
        graphEl,
        'renderActiveEdge',
        (event) =>
            renderActiveEdge(graphEl, { x: event.clientX, y: event.clientY })
    )
    document.addEventListener('pointermove', currRenderActiveEdge)
    currRenderActiveEdge(event)
    graphEl.render()
    graphEl.emitChanged()
}

function clearActive(graphEl) {
    document.removeEventListener(
        'pointermove',
        listeners.remove(graphEl, 'renderActiveEdge')
    )

    graphEl.activeEdge = null

    const edgeEl = getActiveEdgeEl(graphEl)
    if (edgeEl) {
        edgeEl.remove()
        graphEl.render()
        graphEl.emitChanged()
    }
}

function getGraphOffset(graphEl) {
    const consBounds = getGraphContainerEl(graphEl).getBoundingClientRect()
    return { x: -consBounds.left, y: -consBounds.top }
}

function renderActiveEdge(graphEl, toPt) {
    const activeEl = getActiveEdgeEl(graphEl)
    const { outPortEl, inPortEl } = getEdgePortEls(graphEl, graphEl.activeEdge)
    const graphOffset = getGraphOffset(graphEl)

    if (outPortEl) {
        drawEdgePath(
            activeEl.path,
            outPortEl.getClientPosition(),
            toPt,
            graphOffset
        )
    } else if (inPortEl) {
        drawEdgePath(
            activeEl.path,
            toPt,
            inPortEl.getClientPosition(),
            graphOffset
        )
    }
}

function renderEdges(graphEl) {
    const graphOffset = getGraphOffset(graphEl)
    getEdgeEls(graphEl).forEach((edgeEl) => {
        const { outPortEl, inPortEl } = getEdgePortEls(graphEl, edgeEl.edge)
        if (!outPortEl || !inPortEl) {
            if (!edgeEl.matches('.active')) {
                undrawEdgePath(edgeEl.path)
            }
            return
        }
        drawEdgePath(
            edgeEl.path,
            outPortEl.getClientPosition(),
            inPortEl.getClientPosition(),
            graphOffset
        )
    })
}

function drawEdgePath(pathEl, fromPt, toPt, offsetPt = { x: 0, y: 0 }) {
    const fromX = fromPt.x + offsetPt.x
    const fromY = fromPt.y + offsetPt.y
    const toX = toPt.x + offsetPt.x
    const toY = toPt.y + offsetPt.y
    const diffX = Math.abs(toX - fromX)
    const diffY = Math.abs(toY - fromY)
    const curveOff = Math.min(CURVE_MAX, (diffX + diffY) / CURVE_FACTOR)
    pathEl.setAttribute(
        'd',
        `M ${fromX} ${fromY} C ${fromX + curveOff} ${fromY}, ${
            toX - curveOff
        } ${toY}, ${toX} ${toY}`
    )
}

function undrawEdgePath(pathEl) {
    pathEl.setAttribute('d', '')
}

function renderPorts(graphEl) {
    getNodeEls(graphEl).forEach((nodeEl) => {
        getNodeElPortEls(nodeEl).forEach((portEl) => {
            if (getPortElEdgeEls(graphEl, portEl).length) {
                portEl.classList.add('connected')
            } else {
                portEl.classList.remove('connected')
            }
        })
    })
}

function handleNodeDrag(ngEvent) {
    const graphEl = ngEvent.currentTarget
    renderEdges(graphEl)
}

function handlePortPress(ngEvent) {
    const graphEl = ngEvent.currentTarget
    const portEl = ngEvent.target
    const { activeEdge } = graphEl

    // replace existing edge with new active edge
    if (portEl.slot === 'in') {
        const [edgeEl] = getPortElEdgeEls(graphEl, portEl)
        if (edgeEl) {
            const { outPortEl } = getEdgePortEls(graphEl, edgeEl.edge)
            if (outPortEl) {
                edgeEl.remove()
                setActive(graphEl, outPortEl.partialEdge, ngEvent.detail.event)
                graphEl.emitChanged()
            }
            return
        }
    }

    if (!activeEdge) {
        setActive(graphEl, portEl.partialEdge, ngEvent.detail.event)
    }
}

function handleRelease(event, graphEl) {
    const { activeEdge } = graphEl
    if (!activeEdge) {
        return
    }

    const portEl = document.elementFromPoint(event.clientX, event.clientY)
    if (!portEl || !portEl.matches('ng-port')) {
        clearActive(graphEl)
        return
    }

    event.preventDefault()

    const edge = { ...portEl.partialEdge, ...activeEdge }
    const { outNodeId, outPortId, inNodeId, inPortId } = edge

    // validate connection
    if (!outNodeId || !outPortId || !inNodeId || !inPortId) {
        clearActive(graphEl)
        console.warn('Incompatible port')
        return
    }

    // check for circular dependencies
    if (
        inNodeId === outNodeId ||
        graphEl.getGraphNodeDependencies(outNodeId).has(inNodeId)
    ) {
        clearActive(graphEl)
        console.warn('Incompatible circular port')
        return
    }

    // re-target existing edge to active edge origin
    if (portEl.slot === 'in') {
        const edgeEl = getPortElEdgeEls(graphEl, portEl)[0]
        if (edgeEl) {
            clearActive(graphEl)
            edgeEl.outPortId = outPortId
            edgeEl.outNodeId = outNodeId
            graphEl.render()
            graphEl.emitChanged()
            return
        }
    }

    // normal connection
    clearActive(graphEl)
    createEdgeEl(graphEl, edge)
    graphEl.render()
    graphEl.emitChanged()
}

function setUpEdgeListeners(graphEl) {
    cleanUpEdgeListeners(graphEl)
    graphEl.addEventListener('ng-nodedrag', handleNodeDrag)
    graphEl.addEventListener('ng-portdown', handlePortPress)
    document.addEventListener(
        'pointerup',
        listeners.add(graphEl, 'handleRelease', (event) =>
            handleRelease(event, graphEl)
        )
    )
}

function cleanUpEdgeListeners(graphEl) {
    graphEl.removeEventListener('ng-nodedrag', handleNodeDrag)
    graphEl.removeEventListener('ng-portdown', handlePortPress)
    document.removeEventListener(
        'pointerup',
        listeners.remove(graphEl, 'handleRelease')
    )
    clearActive(graphEl)
}

export { renderEdges, renderPorts, setUpEdgeListeners, cleanUpEdgeListeners }
