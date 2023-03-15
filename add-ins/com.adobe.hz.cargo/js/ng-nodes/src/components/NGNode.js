import { createPortEl, getNodeElPortEls } from '../dom.js'

const TEMPLATE = `
<style>
:host {
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    height: 0;
}
:host(.is-dragging) .node-body {
    box-shadow: 5px 5px 3px rgb(0 0 0 / 20%);
    opacity: 0.9;
    z-index: 3;
}
.node-body {
    display: block;
    box-sizing: border-box;
    z-index: 2;
    border: var(--size-node-border) solid var(--color-node-outline);
    border-radius: 12px;
    background: var(--color-node-bg);
    position: relative;
    min-width: 150px;
    max-width: 250px;
    left: 0px;
    top: 0px;
    color: var(--color-node-content);
    user-select: none;
    touch-action: none;
}
h3 {
    font-family: sans-serif;
    margin: var(--size-node-border) var(--size-node-border) 0;
    padding: 0.2em;
    background: var(--color-node-outline);
    border-radius: 5px 5px 0 0;
    text-align: center;
}
h3.hidden {
    display: none;
}
.ports {
    display: flex;
    justify-content: space-between;
    pointer-events: none;
}
</style>
<div class="node-body">
    <h3></h3>
    <div class="options">
        <slot name="options"></slot>
    </div>
    <div class="ports">
        <div class="ports-col ports-in">
            <slot name="in"></slot>
        </div>
        <div class="ports-col ports-out">
            <slot name="out"></slot>
        </div>
    </div>
</div>
`

const NODE_PROPS = ['nodeId', 'label']

class NGNode extends HTMLElement {
    static get observedAttributes() {
        return ['x', 'y', 'label', 'node-id']
    }

    get x() {
        return +this.getAttribute('x')
    }
    set x(value) {
        this.setAttribute('x', value)
    }

    get y() {
        return +this.getAttribute('y')
    }
    set y(value) {
        this.setAttribute('y', value)
    }

    get label() {
        return this.getAttribute('label')
    }
    set label(value) {
        const strValue = value ? String(value) : ''
        this.setAttribute('label', strValue)
        this.shadowRoot
            .querySelector('h3')
            .classList.toggle('hidden', !strValue)
    }

    get nodeId() {
        return this.getAttribute('node-id')
    }
    set nodeId(value) {
        this.setAttribute('node-id', value)
    }

    get node() {
        const nodeProps = Object.fromEntries(
            NODE_PROPS.map((prop) => [prop, this[prop]])
        )
        const mapPort = (portEl) => portEl.port
        const inPorts = Array.from(getNodeElPortEls(this, 'in'), mapPort)
        const outPorts = Array.from(getNodeElPortEls(this, 'out'), mapPort)
        return {
            ...nodeProps,
            inPorts,
            outPorts,
        }
    }
    set node(value) {
        NODE_PROPS.forEach((prop) => {
            if (prop in value) {
                this[prop] = value[prop]
            }
        })

        const replacePorts = (key, slot) => {
            if (key in value) {
                for (let portEl of getNodeElPortEls(this, slot)) {
                    portEl.remove()
                }

                for (let port of value[key]) {
                    createPortEl(this, port, slot)
                }
            }
        }
        replacePorts('inPorts', 'in')
        replacePorts('outPorts', 'out')
    }

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = TEMPLATE
    }

    attributeChangedCallback(attrName, _oldVal, newVal) {
        switch (attrName) {
            case 'x': {
                this.shadowRoot.querySelector(
                    '.node-body'
                ).style.transform = `translate(${newVal}px, ${this.y}px)`
                break
            }
            case 'y': {
                this.shadowRoot.querySelector(
                    '.node-body'
                ).style.transform = `translate(${this.x}px, ${newVal}px)`
                break
            }
            case 'label': {
                this.shadowRoot.querySelector('h3').textContent = newVal
                break
            }
        }
    }
}

if (!customElements.get('ng-node')) {
    customElements.define('ng-node', NGNode)
}
export default NGNode
