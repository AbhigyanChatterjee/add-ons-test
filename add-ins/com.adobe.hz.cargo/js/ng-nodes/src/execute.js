function getNodeLookups(model) {
    const nodesById = {}
    const portsById = {}
    const inNodesById = {}
    const inEdgesById = {}

    // nodesById and portsById (internal only)
    model.nodes.forEach((node) => {
        const { nodeId } = node
        if (!nodeId) {
            return
        }
        nodesById[nodeId] = node
        portsById[nodeId] = {
            inPorts: {},
            outPorts: {},
        }

        for (let inPort of node.inPorts) {
            const { portId } = inPort
            if (portId) {
                portsById[nodeId].inPorts[portId] = inPort
            }
        }

        for (let outPort of node.outPorts) {
            const { portId } = outPort
            if (portId) {
                portsById[nodeId].outPorts[portId] = outPort
            }
        }
    })

    for (let nodeId of Object.keys(nodesById)) {
        inNodesById[nodeId] = []
    }

    // inNodesById and inEdgesById
    model.edges.forEach((edge) => {
        const { inNodeId, inPortId, outNodeId, outPortId } = edge
        const inNode = nodesById[inNodeId]
        const outNode = nodesById[outNodeId]
        if (!inNode || !outNode) {
            return
        }

        const inPort = portsById[inNodeId].inPorts[inPortId]
        const outPort = portsById[outNodeId].outPorts[outPortId]
        if (!inPort || !outPort) {
            return
        }

        inNodesById[inNodeId].push(outNode)

        if (!inEdgesById[inNodeId]) {
            inEdgesById[inNodeId] = {}
        }
        inEdgesById[inNodeId][inPortId] = {
            outNodeId,
            outPortId,
        }
    })

    return {
        nodesById,
        inNodesById,
        inEdgesById,
    }
}

function executeGraph(model, handler, defaultsObjOrFn = {}) {
    const getDefaults =
        typeof defaultsObjOrFn === 'function'
            ? defaultsObjOrFn
            : (nodeId) => defaultsObjOrFn[nodeId]
    const results = {}
    const { nodesById, inNodesById, inEdgesById } = getNodeLookups(model)

    function assignNodeResults(node) {
        const { nodeId } = node
        if (results.hasOwnProperty(nodeId)) {
            return
        }

        inNodesById[nodeId].forEach(assignNodeResults)

        let nodeEdges = inEdgesById.hasOwnProperty(nodeId)
            ? inEdgesById[nodeId] || {}
            : {}

        const portValues = {}
        const edgeEntries = Object.entries(nodeEdges)
        for (let [inPortId, { outNodeId, outPortId }] of edgeEntries) {
            if (results[outNodeId].hasOwnProperty(outPortId)) {
                portValues[inPortId] = results[outNodeId][outPortId]
            }
        }

        const initialValues = getDefaults(nodeId, model) || {}
        const inputValues = { ...initialValues, ...portValues }
        results[nodeId] = handler(inputValues, nodeId, model) || inputValues
    }

    Object.values(nodesById).forEach(assignNodeResults)

    return results
}

export { executeGraph }
