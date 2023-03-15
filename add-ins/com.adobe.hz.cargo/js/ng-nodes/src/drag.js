import { GlobalListeners } from './util/GlobalListeners.js'

const listeners = new GlobalListeners()

function beginDrag(event, dragEl) {
    event.preventDefault()
    const { clientX, clientY, currentTarget: graphEl } = event
    listeners.remove(graphEl, 'dragCleanup')?.()

    let lastX = clientX
    let lastY = clientY

    dragEl.classList.add('is-dragging')
    graphEl.classList.add('has-dragging')

    function emitDrag() {
        graphEl.dispatchEvent(
            new CustomEvent('ng-nodedrag', {
                bubbles: true,
                detail: {
                    event,
                },
            })
        )
    }

    function handleDrag(event) {
        event.preventDefault()
        let { clientX, clientY } = event

        let offX = clientX - lastX
        let offY = clientY - lastY

        dragEl.x += offX
        dragEl.y += offY

        lastX = clientX
        lastY = clientY
        emitDrag()
    }

    function handleRelease(event) {
        event.preventDefault()
        listeners.remove(graphEl, 'dragCleanup')?.()
        emitDrag()
    }

    function dragCleanup() {
        dragEl.classList.remove('is-dragging')
        graphEl.classList.remove('has-dragging')

        document.removeEventListener('pointermove', handleDrag)
        document.removeEventListener('pointerup', handleRelease)
    }

    listeners.add(graphEl, 'dragCleanup', dragCleanup)
    document.addEventListener('pointermove', handleDrag)
    document.addEventListener('pointerup', handleRelease)
}

function handlePress(event) {
    const { button, target } = event

    if (button !== 0) {
        return
    }

    let portEl = target.closest('ng-port')
    if (portEl) {
        return
    }

    let nodeEl = target.closest('ng-node')
    if (!nodeEl) {
        return
    }

    if (nodeEl.matches('.locked')) {
        return
    }

    beginDrag(event, nodeEl)
}

function setUpDragListeners(graphEl) {
    cleanUpDragListeners(graphEl)
    graphEl.addEventListener('pointerdown', handlePress)
}

function cleanUpDragListeners(graphEl) {
    graphEl.removeEventListener('pointerdown', handlePress)
    listeners.remove(graphEl, 'dragCleanup')?.()
}

export { setUpDragListeners, cleanUpDragListeners }
