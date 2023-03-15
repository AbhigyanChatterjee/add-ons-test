import { getPortElIndex, getPortElNodeEl } from '../dom.js'

const TEMPLATE = `
<style>
.port-row {
    display: flex;
    align-items: center;
    margin: 0.25em 0;
}
.port-row.port-out {
    flex-direction: row-reverse;
}
.port-target {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: var(--size-port-target);
    height: var(--size-port-target);
    flex-shrink: 0;
    cursor: pointer;
    pointer-events: all;
}
.port-in .port-target {
    margin-left: calc(var(--size-port-target) / -2);
}
.port-out .port-target {
    margin-right: calc(var(--size-port-target) / -2);
}
.port-label {
    font-family: sans-serif;
    font-size: 0.9rem;
    flex-grow: 1;
}
.port-in .port-label {
    text-align: left;
    margin-right: 0.5em;
}
.port-out .port-label {
    text-align: right;
    margin-left: 0.5em;
}
.port-target::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: var(--size-node-border) solid var(--color-node-outline);
    background: var(--color-node-bg);
}
.port-in .port-target::before {
    right: calc(var(--size-port-target) / 2);
    border-top-left-radius: var(--size-port-target);
    border-bottom-left-radius: var(--size-port-target);
    border-right-width: 0;
}
.port-out .port-target::before {
    left: calc(var(--size-port-target) / 2);
    border-top-right-radius: var(--size-port-target);
    border-bottom-right-radius: var(--size-port-target);
    border-left-width: 0;
}
.port-target::after {
    content: '';
    display: block;
    position: absolute;
    top: var(--size-node-border);
    right: var(--size-node-border);
    bottom: var(--size-node-border);
    left: var(--size-node-border);
    border: var(--size-node-border) solid var(--color-node-bg);
    border-radius: 20px;
    background: var(--color-node-content);
}
:host(.connected) .port-target::after {
    background: var(--color-edges);
}
@media (hover: hover) {
    .port-target:hover::after {
        background: var(--color-edges);
    }
}
</style>
<div class="port-row">
    <div class="port-target"></div>
    <span class="port-label"></span>
</div>
`

const PORT_PROPS = ['label', 'portId']

class NGPort extends HTMLElement {
    static get observedAttributes() {
        return ['label', 'slot']
    }

    get portId() {
        return this.getAttribute('port-id')
    }
    set portId(value) {
        this.setAttribute('port-id', value)
    }

    get label() {
        return this.getAttribute('label')
    }
    set label(value) {
        this.setAttribute('label', value)
    }

    get port() {
        return Object.fromEntries(PORT_PROPS.map((prop) => [prop, this[prop]]))
    }
    set port(value) {
        PORT_PROPS.forEach((prop) => {
            if (prop in value) {
                this[prop] = value[prop]
            }
        })
    }

    get index() {
        const nodeEl = getPortElNodeEl(this)
        return getPortElIndex(nodeEl, this)
    }

    get nodeId() {
        return getPortElNodeEl(this)?.nodeId
    }

    get partialEdge() {
        if (!this.isValidSlot()) {
            return {}
        }

        const nodeEl = getPortElNodeEl(this)

        if (this.slot === 'out') {
            return { outNodeId: nodeEl.nodeId, outPortId: this.portId }
        }
        return { inNodeId: nodeEl.nodeId, inPortId: this.portId }
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = TEMPLATE
        this.setUpPortListeners()
    }

    setUpPortListeners() {
        this.shadowRoot.addEventListener('pointerdown', (event) => {
            if (event.target.closest('.port-target')) {
                event.preventDefault()
                this.dispatchEvent(
                    new CustomEvent('ng-portdown', {
                        bubbles: true,
                        detail: {
                            event,
                        },
                    })
                )
            }
        })
    }

    isValidSlot(slot = this.slot) {
        return slot === 'in' || slot === 'out'
    }

    getClientPosition() {
        const rect = this.shadowRoot
            .querySelector('.port-target')
            .getBoundingClientRect()
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal === newVal) {
            return
        }

        switch (attrName) {
            case 'label': {
                this.shadowRoot.querySelector('.port-label').textContent =
                    newVal
                break
            }
            case 'slot': {
                const rowEl = this.shadowRoot.querySelector('.port-row')
                rowEl.classList.remove('port-in', 'port-out')
                if (this.isValidSlot(newVal)) {
                    rowEl.classList.add(`port-${newVal}`)
                }
                break
            }
        }
    }
}

if (!customElements.get('ng-port')) {
    customElements.define('ng-port', NGPort)
}
export default NGPort
