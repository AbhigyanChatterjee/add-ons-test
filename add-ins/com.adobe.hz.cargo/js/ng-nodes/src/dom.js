function getGraphEl(childEl) {
    return childEl.closest('ng-node-graph')
}

function getGraphContainerEl(graphEl) {
    return graphEl.shadowRoot.querySelector('.graph')
}

function getNodeEls(graphEl) {
    return graphEl.querySelectorAll('ng-node')
}

function getNodeElById(graphEl, nodeId) {
    return graphEl.querySelector(`ng-node[node-id="${nodeId}"]`)
}

function getNodeElPortEls(nodeEl, slot = undefined) {
    if (!slot) {
        return nodeEl.querySelectorAll('ng-port')
    }

    if (slot === 'in' || slot === 'out') {
        return nodeEl.querySelectorAll(`ng-port[slot="${slot}"]`)
    }
}

function getNodeElEdgeEls(graphEl, nodeEl, slot = undefined) {
    if (!slot) {
        return graphEl.querySelectorAll(
            `ng-edge[in-node-id="${nodeEl.nodeId}"], ng-edge[out-node-id="${nodeEl.nodeId}"]`
        )
    }

    return graphEl.querySelectorAll(
        `ng-edge[${slot}-node-id="${nodeEl.nodeId}"]`
    )
}

function getEdgeEls(graphEl) {
    return graphEl.querySelectorAll('ng-edge')
}

function getActiveEdgeEl(graphEl) {
    return graphEl.querySelector('ng-edge.active')
}

function getEdgePortEls(graphEl, edge) {
    const { outNodeId, outPortId, inNodeId, inPortId } = edge
    const outPortEl = graphEl.querySelector(
        `ng-node[node-id="${outNodeId}"] ng-port[port-id="${outPortId}"][slot="out"]`
    )
    const inPortEl = graphEl.querySelector(
        `ng-node[node-id="${inNodeId}"] ng-port[port-id="${inPortId}"][slot="in"]`
    )
    return { outPortEl, inPortEl }
}

function getPortElEdgeEls(graphEl, portEl) {
    const nodeEl = getPortElNodeEl(portEl)
    return graphEl.querySelectorAll(
        `ng-edge[${portEl.slot}-node-id="${nodeEl.nodeId}"][${portEl.slot}-port-id="${portEl.portId}"]`
    )
}

function getPortElIndex(nodeEl, portEl) {
    const portEls = nodeEl.querySelectorAll(`ng-port[slot="${portEl.slot}"]`)
    return Array.from(portEls).findIndex((currPortEl) => currPortEl === portEl)
}

function getPortElNodeEl(portEl) {
    return portEl.closest('ng-node')
}

function createNodeEl(graphEl, node) {
    const nodeEl = document.createElement('ng-node')
    nodeEl.node = node
    graphEl.appendChild(nodeEl)
    return nodeEl
}

function createPortEl(nodeEl, port, slot) {
    const portEl = document.createElement('ng-port')
    portEl.port = port
    portEl.slot = slot
    nodeEl.appendChild(portEl)
    return portEl
}

function createEdgeEl(graphEl, edge) {
    const edgeEl = document.createElement('ng-edge')
    edgeEl.edge = edge
    graphEl.appendChild(edgeEl)
    return edgeEl
}

export {
    getGraphEl,
    getGraphContainerEl,
    getNodeEls,
    getNodeElById,
    getNodeElPortEls,
    getNodeElEdgeEls,
    getEdgeEls,
    getActiveEdgeEl,
    getEdgePortEls,
    getPortElEdgeEls,
    getPortElIndex,
    getPortElNodeEl,
    createNodeEl,
    createPortEl,
    createEdgeEl,
}
