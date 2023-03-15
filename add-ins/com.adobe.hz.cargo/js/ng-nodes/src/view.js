import { getNodeEls } from './dom.js'

function createView(graphEl) {
    return Object.fromEntries(
        Array.from(getNodeEls(graphEl), ({ nodeId, x, y, classList }) => [
            nodeId,
            { x, y, classList: classList.toString() },
        ])
    )
}

function updateFromView(graphEl, view) {
    for (let nodeEl of getNodeEls(graphEl)) {
        if (view.hasOwnProperty(nodeEl.nodeId)) {
            Object.assign(nodeEl, view[nodeEl.nodeId])
        }
    }
}

export { createView, updateFromView }
