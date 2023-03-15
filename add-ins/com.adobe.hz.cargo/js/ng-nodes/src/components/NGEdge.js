const TEMPLATE = `
<style>
:host {
    z-index: 1;
    pointer-events: none;
}
:host, svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
path {
    stroke: var(--color-edges);
    stroke-width: var(--size-node-border);
    stroke-linecap: round;
    fill: none;
}
</style>
<svg>
    <path></path>
</svg>
`

const EDGE_PROPS = ['outNodeId', 'outPortId', 'inNodeId', 'inPortId']

class NGEdge extends HTMLElement {
    static get observedAttributes() {
        return ['out-node-id', 'out-port-id', 'in-node-id', 'in-port-id']
    }

    get outNodeId() {
        return this.getAttribute('out-node-id')
    }
    set outNodeId(value) {
        this.setAttribute('out-node-id', value)
    }

    get outPortId() {
        return this.getAttribute('out-port-id')
    }
    set outPortId(value) {
        this.setAttribute('out-port-id', value)
    }

    get inNodeId() {
        return this.getAttribute('in-node-id')
    }
    set inNodeId(value) {
        this.setAttribute('in-node-id', value)
    }

    get inPortId() {
        return this.getAttribute('in-port-id')
    }
    set inPortId(value) {
        this.setAttribute('in-port-id', value)
    }

    get edge() {
        return Object.fromEntries(EDGE_PROPS.map((prop) => [prop, this[prop]]))
    }
    set edge(value) {
        EDGE_PROPS.forEach((prop) => {
            if (prop in value) {
                this[prop] = value[prop]
            }
        })
    }

    get path() {
        return this.shadowRoot.querySelector('path')
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = TEMPLATE
    }
}

if (!customElements.get('ng-edge')) {
    customElements.define('ng-edge', NGEdge)
}
export default NGEdge
