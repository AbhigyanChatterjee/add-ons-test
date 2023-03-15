/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@lit-labs/observers/development/mutation_controller.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@lit-labs/observers/development/mutation_controller.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "MutationController": function() { return /* binding */ MutationController; }
    /* harmony export */ });
    /**
     * MutationController is a ReactiveController that integrates a MutationObserver
     * with a ReactiveControllerHost's reactive update lifecycle. This is typically
     * a ReactiveElement or LitElement. MutationObservers can be used to detect
     * arbitrary changes to DOM, including nodes being added and remove and
     * attributes changing.
     *
     * The controller can specify a `target` element to observe and the
     * configuration options to pass to the MutationObserver. The `observe`
     * method can be called to observe additional elements.
     *
     * When a change is detected, the controller's given `callback` function is
     * used to process the result into a value which is stored on the controller.
     * The controller's `value` is usable during the host's update cycle.
     */
    class MutationController {
        constructor(host, { target, config, callback, skipInitial }) {
            this._skipInitial = false;
            /**
             * Flag used to help manage calling the `callback` when observe is called
             * in addition to when a mutation occurs. This is done to help setup initial
             * state and is performed async by requesting a host update and calling
             * `handleChanges` once by checking and then resetting this flag.
             */
            this._unobservedUpdate = false;
            /**
             * Function that returns a value processed from the observer's changes.
             * The result is stored in the `value` property.
             */
            this.callback = () => true;
            (this._host = host).addController(this);
            // Target defaults to `host` unless explicitly `null`.
            this._target =
                target === null ? target : target !== null && target !== void 0 ? target : this._host;
            this._config = config;
            this._skipInitial = skipInitial !== null && skipInitial !== void 0 ? skipInitial : this._skipInitial;
            this.callback = callback !== null && callback !== void 0 ? callback : this.callback;
            // Check browser support.
            if (!window.MutationObserver) {
                console.warn(`MutationController error: browser does not support MutationObserver.`);
                return;
            }
            this._observer = new MutationObserver((records) => {
                this.handleChanges(records);
                this._host.requestUpdate();
            });
        }
        /**
         * Process the observer's changes with the controller's `callback`
         * function to produce a result stored in the `value` property.
         */
        handleChanges(records) {
            this.value = this.callback(records, this._observer);
        }
        hostConnected() {
            if (this._target) {
                this.observe(this._target);
            }
        }
        hostDisconnected() {
            this.disconnect();
        }
        async hostUpdated() {
            // Eagerly deliver any changes that happened during update.
            // And handle initial state as a set of 0 changes. This helps setup initial
            // state and promotes UI = f(state) since ideally the callback does not
            // rely on changes.
            const pendingRecords = this._observer.takeRecords();
            if (pendingRecords.length ||
                (!this._skipInitial && this._unobservedUpdate)) {
                this.handleChanges(pendingRecords);
            }
            this._unobservedUpdate = false;
        }
        /**
         * Observe the target element. The controller's `target` is automatically
         * observed when the host connects.
         * @param target Element to observe
         */
        observe(target) {
            this._observer.observe(target, this._config);
            this._unobservedUpdate = true;
            this._host.requestUpdate();
        }
        /**
         * Disconnects the observer. This is done automatically when the host
         * disconnects.
         */
        disconnect() {
            this._observer.disconnect();
        }
    }
    //# sourceMappingURL=mutation_controller.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
      \*******************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "CSSResult": function() { return /* binding */ CSSResult; },
    /* harmony export */   "adoptStyles": function() { return /* binding */ adoptStyles; },
    /* harmony export */   "css": function() { return /* binding */ css; },
    /* harmony export */   "getCompatibleStyle": function() { return /* binding */ getCompatibleStyle; },
    /* harmony export */   "supportsAdoptingStyleSheets": function() { return /* binding */ supportsAdoptingStyleSheets; },
    /* harmony export */   "unsafeCSS": function() { return /* binding */ unsafeCSS; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const NODE_MODE = false;
    const global = NODE_MODE ? globalThis : window;
    /**
     * Whether the current browser supports `adoptedStyleSheets`.
     */
    const supportsAdoptingStyleSheets = global.ShadowRoot &&
        (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) &&
        'adoptedStyleSheets' in Document.prototype &&
        'replace' in CSSStyleSheet.prototype;
    const constructionToken = Symbol();
    const cssTagCache = new WeakMap();
    /**
     * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
     *
     * CSSResult is the return value of `css`-tagged template literals and
     * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
     * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
     */
    class CSSResult {
        constructor(cssText, strings, safeToken) {
            // This property needs to remain unminified.
            this['_$cssResult$'] = true;
            if (safeToken !== constructionToken) {
                throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
            }
            this.cssText = cssText;
            this._strings = strings;
        }
        // This is a getter so that it's lazy. In practice, this means stylesheets
        // are not created until the first element instance is made.
        get styleSheet() {
            // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
            // constructable.
            let styleSheet = this._styleSheet;
            const strings = this._strings;
            if (supportsAdoptingStyleSheets && styleSheet === undefined) {
                const cacheable = strings !== undefined && strings.length === 1;
                if (cacheable) {
                    styleSheet = cssTagCache.get(strings);
                }
                if (styleSheet === undefined) {
                    (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
                    if (cacheable) {
                        cssTagCache.set(strings, styleSheet);
                    }
                }
            }
            return styleSheet;
        }
        toString() {
            return this.cssText;
        }
    }
    const textFromCSSResult = (value) => {
        // This property needs to remain unminified.
        if (value['_$cssResult$'] === true) {
            return value.cssText;
        }
        else if (typeof value === 'number') {
            return value;
        }
        else {
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ` +
                `${value}. Use 'unsafeCSS' to pass non-literal values, but take care ` +
                `to ensure page security.`);
        }
    };
    /**
     * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
     *
     * This is unsafe because untrusted CSS text can be used to phone home
     * or exfiltrate data to an attacker controlled site. Take care to only use
     * this with trusted input.
     */
    const unsafeCSS = (value) => new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
    /**
     * A template literal tag which can be used with LitElement's
     * {@linkcode LitElement.styles} property to set element styles.
     *
     * For security reasons, only literal string values and number may be used in
     * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
     * may be used inside an expression.
     */
    const css = (strings, ...values) => {
        const cssText = strings.length === 1
            ? strings[0]
            : values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
        return new CSSResult(cssText, strings, constructionToken);
    };
    /**
     * Applies the given styles to a `shadowRoot`. When Shadow DOM is
     * available but `adoptedStyleSheets` is not, styles are appended to the
     * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     * Note, when shimming is used, any styles that are subsequently placed into
     * the shadowRoot should be placed *before* any shimmed adopted styles. This
     * will match spec behavior that gives adopted sheets precedence over styles in
     * shadowRoot.
     */
    const adoptStyles = (renderRoot, styles) => {
        if (supportsAdoptingStyleSheets) {
            renderRoot.adoptedStyleSheets = styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
        }
        else {
            styles.forEach((s) => {
                const style = document.createElement('style');
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const nonce = global['litNonce'];
                if (nonce !== undefined) {
                    style.setAttribute('nonce', nonce);
                }
                style.textContent = s.cssText;
                renderRoot.appendChild(style);
            });
        }
    };
    const cssResultFromStyleSheet = (sheet) => {
        let cssText = '';
        for (const rule of sheet.cssRules) {
            cssText += rule.cssText;
        }
        return unsafeCSS(cssText);
    };
    const getCompatibleStyle = supportsAdoptingStyleSheets
        ? (s) => s
        : (s) => s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
    //# sourceMappingURL=css-tag.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
      \***************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "decorateProperty": function() { return /* binding */ decorateProperty; },
    /* harmony export */   "legacyPrototypeMethod": function() { return /* binding */ legacyPrototypeMethod; },
    /* harmony export */   "standardPrototypeMethod": function() { return /* binding */ standardPrototypeMethod; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const legacyPrototypeMethod = (descriptor, proto, name) => {
        Object.defineProperty(proto, name, descriptor);
    };
    const standardPrototypeMethod = (descriptor, element) => ({
        kind: 'method',
        placement: 'prototype',
        key: element.key,
        descriptor,
    });
    /**
     * Helper for decorating a property that is compatible with both TypeScript
     * and Babel decorators. The optional `finisher` can be used to perform work on
     * the class. The optional `descriptor` should return a PropertyDescriptor
     * to install for the given property.
     *
     * @param finisher {function} Optional finisher method; receives the element
     * constructor and property key as arguments and has no return value.
     * @param descriptor {function} Optional descriptor method; receives the
     * property key as an argument and returns a property descriptor to define for
     * the given property.
     * @returns {ClassElement|void}
     */
    const decorateProperty = ({ finisher, descriptor, }) => (protoOrDescriptor, name
    // Note TypeScript requires the return type to be `void|any`
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => {
        var _a;
        // TypeScript / Babel legacy mode
        if (name !== undefined) {
            const ctor = protoOrDescriptor
                .constructor;
            if (descriptor !== undefined) {
                Object.defineProperty(protoOrDescriptor, name, descriptor(name));
            }
            finisher === null || finisher === void 0 ? void 0 : finisher(ctor, name);
            // Babel standard mode
        }
        else {
            // Note, the @property decorator saves `key` as `originalKey`
            // so try to use it here.
            const key = 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (_a = protoOrDescriptor.originalKey) !== null && _a !== void 0 ? _a : protoOrDescriptor.key;
            const info = descriptor != undefined
                ? {
                    kind: 'method',
                    placement: 'prototype',
                    key,
                    descriptor: descriptor(protoOrDescriptor.key),
                }
                : { ...protoOrDescriptor, key };
            if (finisher != undefined) {
                info.finisher = function (ctor) {
                    finisher(ctor, key);
                };
            }
            return info;
        }
    };
    //# sourceMappingURL=base.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
      \*************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "customElement": function() { return /* binding */ customElement; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const legacyCustomElement = (tagName, clazz) => {
        customElements.define(tagName, clazz);
        // Cast as any because TS doesn't recognize the return type as being a
        // subtype of the decorated class when clazz is typed as
        // `Constructor<HTMLElement>` for some reason.
        // `Constructor<HTMLElement>` is helpful to make sure the decorator is
        // applied to elements however.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return clazz;
    };
    const standardCustomElement = (tagName, descriptor) => {
        const { kind, elements } = descriptor;
        return {
            kind,
            elements,
            // This callback is called once the class is otherwise fully defined
            finisher(clazz) {
                customElements.define(tagName, clazz);
            },
        };
    };
    /**
     * Class decorator factory that defines the decorated class as a custom element.
     *
     * ```js
     * @customElement('my-element')
     * class MyElement extends LitElement {
     *   render() {
     *     return html``;
     *   }
     * }
     * ```
     * @category Decorator
     * @param tagName The tag name of the custom element to define.
     */
    const customElement = (tagName) => (classOrDescriptor) => typeof classOrDescriptor === 'function'
        ? legacyCustomElement(tagName, classOrDescriptor)
        : standardCustomElement(tagName, classOrDescriptor);
    //# sourceMappingURL=custom-element.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
      \************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "eventOptions": function() { return /* binding */ eventOptions; }
    /* harmony export */ });
    /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    /**
     * Adds event listener options to a method used as an event listener in a
     * lit-html template.
     *
     * @param options An object that specifies event listener options as accepted by
     * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
     *
     * Current browsers support the `capture`, `passive`, and `once` options. See:
     * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
     *
     * ```ts
     * class MyElement {
     *   clicked = false;
     *
     *   render() {
     *     return html`
     *       <div @click=${this._onClick}>
     *         <button></button>
     *       </div>
     *     `;
     *   }
     *
     *   @eventOptions({capture: true})
     *   _onClick(e) {
     *     this.clicked = true;
     *   }
     * }
     * ```
     * @category Decorator
     */
    function eventOptions(options) {
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
            finisher: (ctor, name) => {
                Object.assign(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ctor.prototype[name], options);
            },
        });
    }
    //# sourceMappingURL=event-options.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
      \*******************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "property": function() { return /* binding */ property; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const standardProperty = (options, element) => {
        // When decorating an accessor, pass it through and add property metadata.
        // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
        // stomp over the user's accessor.
        if (element.kind === 'method' &&
            element.descriptor &&
            !('value' in element.descriptor)) {
            return {
                ...element,
                finisher(clazz) {
                    clazz.createProperty(element.key, options);
                },
            };
        }
        else {
            // createProperty() takes care of defining the property, but we still
            // must return some kind of descriptor, so return a descriptor for an
            // unused prototype field. The finisher calls createProperty().
            return {
                kind: 'field',
                key: Symbol(),
                placement: 'own',
                descriptor: {},
                // store the original key so subsequent decorators have access to it.
                originalKey: element.key,
                // When @babel/plugin-proposal-decorators implements initializers,
                // do this instead of the initializer below. See:
                // https://github.com/babel/babel/issues/9260 extras: [
                //   {
                //     kind: 'initializer',
                //     placement: 'own',
                //     initializer: descriptor.initializer,
                //   }
                // ],
                initializer() {
                    if (typeof element.initializer === 'function') {
                        this[element.key] = element.initializer.call(this);
                    }
                },
                finisher(clazz) {
                    clazz.createProperty(element.key, options);
                },
            };
        }
    };
    const legacyProperty = (options, proto, name) => {
        proto.constructor.createProperty(name, options);
    };
    /**
     * A property decorator which creates a reactive property that reflects a
     * corresponding attribute value. When a decorated property is set
     * the element will update and render. A {@linkcode PropertyDeclaration} may
     * optionally be supplied to configure property features.
     *
     * This decorator should only be used for public fields. As public fields,
     * properties should be considered as primarily settable by element users,
     * either via attribute or the property itself.
     *
     * Generally, properties that are changed by the element should be private or
     * protected fields and should use the {@linkcode state} decorator.
     *
     * However, sometimes element code does need to set a public property. This
     * should typically only be done in response to user interaction, and an event
     * should be fired informing the user; for example, a checkbox sets its
     * `checked` property when clicked and fires a `changed` event. Mutating public
     * properties should typically not be done for non-primitive (object or array)
     * properties. In other cases when an element needs to manage state, a private
     * property decorated via the {@linkcode state} decorator should be used. When
     * needed, state properties can be initialized via public properties to
     * facilitate complex interactions.
     *
     * ```ts
     * class MyElement {
     *   @property({ type: Boolean })
     *   clicked = false;
     * }
     * ```
     * @category Decorator
     * @ExportDecoratedItems
     */
    function property(options) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (protoOrDescriptor, name) => name !== undefined
            ? legacyProperty(options, protoOrDescriptor, name)
            : standardProperty(options, protoOrDescriptor);
    }
    //# sourceMappingURL=property.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
    /*!********************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
      \********************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "queryAll": function() { return /* binding */ queryAll; }
    /* harmony export */ });
    /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    /**
     * A property decorator that converts a class property into a getter
     * that executes a querySelectorAll on the element's renderRoot.
     *
     * @param selector A DOMString containing one or more selectors to match.
     *
     * See:
     * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
     *
     * ```ts
     * class MyElement {
     *   @queryAll('div')
     *   divs: NodeListOf<HTMLDivElement>;
     *
     *   render() {
     *     return html`
     *       <div id="first"></div>
     *       <div id="second"></div>
     *     `;
     *   }
     * }
     * ```
     * @category Decorator
     */
    function queryAll(selector) {
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
            descriptor: (_name) => ({
                get() {
                    var _a, _b;
                    return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector)) !== null && _b !== void 0 ? _b : [];
                },
                enumerable: true,
                configurable: true,
            }),
        });
    }
    //# sourceMappingURL=query-all.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
      \**********************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "queryAssignedElements": function() { return /* binding */ queryAssignedElements; }
    /* harmony export */ });
    /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var _a;
    /*
     * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
     * property decorators (but not class decorators) in this file that have
     * an @ExportDecoratedItems annotation must be defined as a regular function,
     * not an arrow function.
     */
    
    const NODE_MODE = false;
    const global = NODE_MODE ? globalThis : window;
    /**
     * A tiny module scoped polyfill for HTMLSlotElement.assignedElements.
     */
    const slotAssignedElements = ((_a = global.HTMLSlotElement) === null || _a === void 0 ? void 0 : _a.prototype.assignedElements) != null
        ? (slot, opts) => slot.assignedElements(opts)
        : (slot, opts) => slot
            .assignedNodes(opts)
            .filter((node) => node.nodeType === Node.ELEMENT_NODE);
    /**
     * A property decorator that converts a class property into a getter that
     * returns the `assignedElements` of the given `slot`. Provides a declarative
     * way to use
     * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
     *
     * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
     *
     * Example usage:
     * ```ts
     * class MyElement {
     *   @queryAssignedElements({ slot: 'list' })
     *   listItems!: Array<HTMLElement>;
     *   @queryAssignedElements()
     *   unnamedSlotEls!: Array<HTMLElement>;
     *
     *   render() {
     *     return html`
     *       <slot name="list"></slot>
     *       <slot></slot>
     *     `;
     *   }
     * }
     * ```
     *
     * Note, the type of this property should be annotated as `Array<HTMLElement>`.
     *
     * @category Decorator
     */
    function queryAssignedElements(options) {
        const { slot, selector } = options !== null && options !== void 0 ? options : {};
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
            descriptor: (_name) => ({
                get() {
                    var _a;
                    const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                    const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                    const elements = slotEl != null ? slotAssignedElements(slotEl, options) : [];
                    if (selector) {
                        return elements.filter((node) => node.matches(selector));
                    }
                    return elements;
                },
                enumerable: true,
                configurable: true,
            }),
        });
    }
    //# sourceMappingURL=query-assigned-elements.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
      \*******************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "queryAssignedNodes": function() { return /* binding */ queryAssignedNodes; }
    /* harmony export */ });
    /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
    /* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    /*
     * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
     * property decorators (but not class decorators) in this file that have
     * an @ExportDecoratedItems annotation must be defined as a regular function,
     * not an arrow function.
     */
    
    
    function queryAssignedNodes(slotOrOptions, flatten, selector) {
        // Normalize the overloaded arguments.
        let slot = slotOrOptions;
        let assignedNodesOptions;
        if (typeof slotOrOptions === 'object') {
            slot = slotOrOptions.slot;
            assignedNodesOptions = slotOrOptions;
        }
        else {
            assignedNodesOptions = { flatten };
        }
        // For backwards compatibility, queryAssignedNodes with a selector behaves
        // exactly like queryAssignedElements with a selector.
        if (selector) {
            return (0,_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__.queryAssignedElements)({
                slot: slot,
                flatten,
                selector,
            });
        }
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
            descriptor: (_name) => ({
                get() {
                    var _a, _b;
                    const slotSelector = `slot${slot ? `[name=${slot}]` : ':not([name])'}`;
                    const slotEl = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(slotSelector);
                    return (_b = slotEl === null || slotEl === void 0 ? void 0 : slotEl.assignedNodes(assignedNodesOptions)) !== null && _b !== void 0 ? _b : [];
                },
                enumerable: true,
                configurable: true,
            }),
        });
    }
    //# sourceMappingURL=query-assigned-nodes.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
      \**********************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "queryAsync": function() { return /* binding */ queryAsync; }
    /* harmony export */ });
    /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    // Note, in the future, we may extend this decorator to support the use case
    // where the queried element may need to do work to become ready to interact
    // with (e.g. load some implementation code). If so, we might elect to
    // add a second argument defining a function that can be run to make the
    // queried element loaded/updated/ready.
    /**
     * A property decorator that converts a class property into a getter that
     * returns a promise that resolves to the result of a querySelector on the
     * element's renderRoot done after the element's `updateComplete` promise
     * resolves. When the queried property may change with element state, this
     * decorator can be used instead of requiring users to await the
     * `updateComplete` before accessing the property.
     *
     * @param selector A DOMString containing one or more selectors to match.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
     *
     * ```ts
     * class MyElement {
     *   @queryAsync('#first')
     *   first: Promise<HTMLDivElement>;
     *
     *   render() {
     *     return html`
     *       <div id="first"></div>
     *       <div id="second"></div>
     *     `;
     *   }
     * }
     *
     * // external usage
     * async doSomethingWithFirst() {
     *  (await aMyElement.first).doSomething();
     * }
     * ```
     * @category Decorator
     */
    function queryAsync(selector) {
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
            descriptor: (_name) => ({
                async get() {
                    var _a;
                    await this.updateComplete;
                    return (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
                },
                enumerable: true,
                configurable: true,
            }),
        });
    }
    //# sourceMappingURL=query-async.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
      \****************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "query": function() { return /* binding */ query; }
    /* harmony export */ });
    /* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    /**
     * A property decorator that converts a class property into a getter that
     * executes a querySelector on the element's renderRoot.
     *
     * @param selector A DOMString containing one or more selectors to match.
     * @param cache An optional boolean which when true performs the DOM query only
     *     once and caches the result.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
     *
     * ```ts
     * class MyElement {
     *   @query('#first')
     *   first: HTMLDivElement;
     *
     *   render() {
     *     return html`
     *       <div id="first"></div>
     *       <div id="second"></div>
     *     `;
     *   }
     * }
     * ```
     * @category Decorator
     */
    function query(selector, cache) {
        return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.decorateProperty)({
            descriptor: (name) => {
                const descriptor = {
                    get() {
                        var _a, _b;
                        return (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                    },
                    enumerable: true,
                    configurable: true,
                };
                if (cache) {
                    const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                    descriptor.get = function () {
                        var _a, _b;
                        if (this[key] === undefined) {
                            this[key] = (_b = (_a = this.renderRoot) === null || _a === void 0 ? void 0 : _a.querySelector(selector)) !== null && _b !== void 0 ? _b : null;
                        }
                        return this[key];
                    };
                }
                return descriptor;
            },
        });
    }
    //# sourceMappingURL=query.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
      \****************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "state": function() { return /* binding */ state; }
    /* harmony export */ });
    /* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    /*
     * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
     * property decorators (but not class decorators) in this file that have
     * an @ExportDecoratedItems annotation must be defined as a regular function,
     * not an arrow function.
     */
    
    /**
     * Declares a private or protected reactive property that still triggers
     * updates to the element when it changes. It does not reflect from the
     * corresponding attribute.
     *
     * Properties declared this way must not be used from HTML or HTML templating
     * systems, they're solely for properties internal to the element. These
     * properties may be renamed by optimization tools like closure compiler.
     * @category Decorator
     */
    function state(options) {
        return (0,_property_js__WEBPACK_IMPORTED_MODULE_0__.property)({
            ...options,
            state: true,
        });
    }
    //# sourceMappingURL=state.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
      \****************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "CSSResult": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.CSSResult; },
    /* harmony export */   "ReactiveElement": function() { return /* binding */ ReactiveElement; },
    /* harmony export */   "adoptStyles": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles; },
    /* harmony export */   "css": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.css; },
    /* harmony export */   "defaultConverter": function() { return /* binding */ defaultConverter; },
    /* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle; },
    /* harmony export */   "notEqual": function() { return /* binding */ notEqual; },
    /* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets; },
    /* harmony export */   "unsafeCSS": function() { return /* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS; }
    /* harmony export */ });
    /* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var _a, _b, _c, _d;
    var _e;
    /**
     * Use this module if you want to create your own base class extending
     * {@link ReactiveElement}.
     * @packageDocumentation
     */
    
    
    const NODE_MODE = false;
    const global = NODE_MODE ? globalThis : window;
    if (NODE_MODE) {
        (_a = global.customElements) !== null && _a !== void 0 ? _a : (global.customElements = {
            define() { },
        });
    }
    const DEV_MODE = true;
    let requestUpdateThenable;
    let issueWarning;
    const trustedTypes = global
        .trustedTypes;
    // Temporary workaround for https://crbug.com/993268
    // Currently, any attribute starting with "on" is considered to be a
    // TrustedScript source. Such boolean attributes must be set to the equivalent
    // trusted emptyScript value.
    const emptyStringForBooleanAttribute = trustedTypes
        ? trustedTypes.emptyScript
        : '';
    const polyfillSupport = DEV_MODE
        ? global.reactiveElementPolyfillSupportDevMode
        : global.reactiveElementPolyfillSupport;
    if (DEV_MODE) {
        // Ensure warnings are issued only 1x, even if multiple versions of Lit
        // are loaded.
        const issuedWarnings = ((_b = global.litIssuedWarnings) !== null && _b !== void 0 ? _b : (global.litIssuedWarnings = new Set()));
        // Issue a warning, if we haven't already.
        issueWarning = (code, warning) => {
            warning += ` See https://lit.dev/msg/${code} for more information.`;
            if (!issuedWarnings.has(warning)) {
                console.warn(warning);
                issuedWarnings.add(warning);
            }
        };
        issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
        // Issue polyfill support warning.
        if (((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.inUse) && polyfillSupport === undefined) {
            issueWarning('polyfill-support-missing', `Shadow DOM is being polyfilled via \`ShadyDOM\` but ` +
                `the \`polyfill-support\` module has not been loaded.`);
        }
        requestUpdateThenable = (name) => ({
            then: (onfulfilled, _onrejected) => {
                issueWarning('request-update-promise', `The \`requestUpdate\` method should no longer return a Promise but ` +
                    `does so on \`${name}\`. Use \`updateComplete\` instead.`);
                if (onfulfilled !== undefined) {
                    onfulfilled(false);
                }
            },
        });
    }
    /**
     * Useful for visualizing and logging insights into what the Lit template system is doing.
     *
     * Compiled out of prod mode builds.
     */
    const debugLogEvent = DEV_MODE
        ? (event) => {
            const shouldEmit = global
                .emitLitDebugLogEvents;
            if (!shouldEmit) {
                return;
            }
            global.dispatchEvent(new CustomEvent('lit-debug', {
                detail: event,
            }));
        }
        : undefined;
    /*
     * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
     * replaced at compile time by the munged name for object[property]. We cannot
     * alias this function, so we have to use a small shim that has the same
     * behavior when not compiling.
     */
    /*@__INLINE__*/
    const JSCompiler_renameProperty = (prop, _obj) => prop;
    const defaultConverter = {
        toAttribute(value, type) {
            switch (type) {
                case Boolean:
                    value = value ? emptyStringForBooleanAttribute : null;
                    break;
                case Object:
                case Array:
                    // if the value is `null` or `undefined` pass this through
                    // to allow removing/no change behavior.
                    value = value == null ? value : JSON.stringify(value);
                    break;
            }
            return value;
        },
        fromAttribute(value, type) {
            let fromValue = value;
            switch (type) {
                case Boolean:
                    fromValue = value !== null;
                    break;
                case Number:
                    fromValue = value === null ? null : Number(value);
                    break;
                case Object:
                case Array:
                    // Do *not* generate exception when invalid JSON is set as elements
                    // don't normally complain on being mis-configured.
                    // TODO(sorvell): Do generate exception in *dev mode*.
                    try {
                        // Assert to adhere to Bazel's "must type assert JSON parse" rule.
                        fromValue = JSON.parse(value);
                    }
                    catch (e) {
                        fromValue = null;
                    }
                    break;
            }
            return fromValue;
        },
    };
    /**
     * Change function that returns true if `value` is different from `oldValue`.
     * This method is used as the default for a property's `hasChanged` function.
     */
    const notEqual = (value, old) => {
        // This ensures (old==NaN, value==NaN) always returns false
        return old !== value && (old === old || value === value);
    };
    const defaultPropertyDeclaration = {
        attribute: true,
        type: String,
        converter: defaultConverter,
        reflect: false,
        hasChanged: notEqual,
    };
    /**
     * The Closure JS Compiler doesn't currently have good support for static
     * property semantics where "this" is dynamic (e.g.
     * https://github.com/google/closure-compiler/issues/3177 and others) so we use
     * this hack to bypass any rewriting by the compiler.
     */
    const finalized = 'finalized';
    const htmlElementShimNeeded = NODE_MODE && global.HTMLElement === undefined;
    if (htmlElementShimNeeded) {
        global.HTMLElement = class HTMLElement {
        };
    }
    /**
     * Base element class which manages element properties and attributes. When
     * properties change, the `update` method is asynchronously called. This method
     * should be supplied by subclassers to render updates as desired.
     * @noInheritDoc
     */
    class ReactiveElement extends HTMLElement {
        constructor() {
            super();
            this.__instanceProperties = new Map();
            /**
             * True if there is a pending update as a result of calling `requestUpdate()`.
             * Should only be read.
             * @category updates
             */
            this.isUpdatePending = false;
            /**
             * Is set to `true` after the first update. The element code cannot assume
             * that `renderRoot` exists before the element `hasUpdated`.
             * @category updates
             */
            this.hasUpdated = false;
            /**
             * Name of currently reflecting property
             */
            this.__reflectingProperty = null;
            this._initialize();
        }
        /**
         * Adds an initializer function to the class that is called during instance
         * construction.
         *
         * This is useful for code that runs against a `ReactiveElement`
         * subclass, such as a decorator, that needs to do work for each
         * instance, such as setting up a `ReactiveController`.
         *
         * ```ts
         * const myDecorator = (target: typeof ReactiveElement, key: string) => {
         *   target.addInitializer((instance: ReactiveElement) => {
         *     // This is run during construction of the element
         *     new MyController(instance);
         *   });
         * }
         * ```
         *
         * Decorating a field will then cause each instance to run an initializer
         * that adds a controller:
         *
         * ```ts
         * class MyElement extends LitElement {
         *   @myDecorator foo;
         * }
         * ```
         *
         * Initializers are stored per-constructor. Adding an initializer to a
         * subclass does not add it to a superclass. Since initializers are run in
         * constructors, initializers will run in order of the class hierarchy,
         * starting with superclasses and progressing to the instance's class.
         *
         * @nocollapse
         */
        static addInitializer(initializer) {
            var _a;
            (_a = this._initializers) !== null && _a !== void 0 ? _a : (this._initializers = []);
            this._initializers.push(initializer);
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         * @category attributes
         */
        static get observedAttributes() {
            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            const attributes = [];
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.elementProperties.forEach((v, p) => {
                const attr = this.__attributeNameForProperty(p, v);
                if (attr !== undefined) {
                    this.__attributeToPropertyMap.set(attr, p);
                    attributes.push(attr);
                }
            });
            return attributes;
        }
        /**
         * Creates a property accessor on the element prototype if one does not exist
         * and stores a {@linkcode PropertyDeclaration} for the property with the
         * given options. The property setter calls the property's `hasChanged`
         * property option or uses a strict identity check to determine whether or not
         * to request an update.
         *
         * This method may be overridden to customize properties; however,
         * when doing so, it's important to call `super.createProperty` to ensure
         * the property is setup correctly. This method calls
         * `getPropertyDescriptor` internally to get a descriptor to install.
         * To customize what properties do when they are get or set, override
         * `getPropertyDescriptor`. To customize the options for a property,
         * implement `createProperty` like this:
         *
         * ```ts
         * static createProperty(name, options) {
         *   options = Object.assign(options, {myOption: true});
         *   super.createProperty(name, options);
         * }
         * ```
         *
         * @nocollapse
         * @category properties
         */
        static createProperty(name, options = defaultPropertyDeclaration) {
            var _a;
            // if this is a state property, force the attribute to false.
            if (options.state) {
                // Cast as any since this is readonly.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options.attribute = false;
            }
            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure finalization has been kicked off.
            this.finalize();
            this.elementProperties.set(name, options);
            // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it
            if (!options.noAccessor && !this.prototype.hasOwnProperty(name)) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                const descriptor = this.getPropertyDescriptor(name, key, options);
                if (descriptor !== undefined) {
                    Object.defineProperty(this.prototype, name, descriptor);
                    if (DEV_MODE) {
                        // If this class doesn't have its own set, create one and initialize
                        // with the values in the set from the nearest ancestor class, if any.
                        if (!this.hasOwnProperty('__reactivePropertyKeys')) {
                            this.__reactivePropertyKeys = new Set((_a = this.__reactivePropertyKeys) !== null && _a !== void 0 ? _a : []);
                        }
                        this.__reactivePropertyKeys.add(name);
                    }
                }
            }
        }
        /**
         * Returns a property descriptor to be defined on the given named property.
         * If no descriptor is returned, the property will not become an accessor.
         * For example,
         *
         * ```ts
         * class MyElement extends LitElement {
         *   static getPropertyDescriptor(name, key, options) {
         *     const defaultDescriptor =
         *         super.getPropertyDescriptor(name, key, options);
         *     const setter = defaultDescriptor.set;
         *     return {
         *       get: defaultDescriptor.get,
         *       set(value) {
         *         setter.call(this, value);
         *         // custom action.
         *       },
         *       configurable: true,
         *       enumerable: true
         *     }
         *   }
         * }
         * ```
         *
         * @nocollapse
         * @category properties
         */
        static getPropertyDescriptor(name, key, options) {
            return {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                get() {
                    return this[key];
                },
                set(value) {
                    const oldValue = this[name];
                    this[key] = value;
                    this.requestUpdate(name, oldValue, options);
                },
                configurable: true,
                enumerable: true,
            };
        }
        /**
         * Returns the property options associated with the given property.
         * These options are defined with a `PropertyDeclaration` via the `properties`
         * object or the `@property` decorator and are registered in
         * `createProperty(...)`.
         *
         * Note, this method should be considered "final" and not overridden. To
         * customize the options for a given property, override
         * {@linkcode createProperty}.
         *
         * @nocollapse
         * @final
         * @category properties
         */
        static getPropertyOptions(name) {
            return this.elementProperties.get(name) || defaultPropertyDeclaration;
        }
        /**
         * Creates property accessors for registered properties, sets up element
         * styling, and ensures any superclasses are also finalized. Returns true if
         * the element was finalized.
         * @nocollapse
         */
        static finalize() {
            if (this.hasOwnProperty(finalized)) {
                return false;
            }
            this[finalized] = true;
            // finalize any superclasses
            const superCtor = Object.getPrototypeOf(this);
            superCtor.finalize();
            this.elementProperties = new Map(superCtor.elementProperties);
            // initialize Map populated in observedAttributes
            this.__attributeToPropertyMap = new Map();
            // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.
            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
                const props = this.properties;
                // support symbols in properties (IE11 does not support this)
                const propKeys = [
                    ...Object.getOwnPropertyNames(props),
                    ...Object.getOwnPropertySymbols(props),
                ];
                // This for/of is ok because propKeys is an array
                for (const p of propKeys) {
                    // note, use of `any` is due to TypeScript lack of support for symbol in
                    // index types
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    this.createProperty(p, props[p]);
                }
            }
            this.elementStyles = this.finalizeStyles(this.styles);
            // DEV mode warnings
            if (DEV_MODE) {
                const warnRemovedOrRenamed = (name, renamed = false) => {
                    if (this.prototype.hasOwnProperty(name)) {
                        issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${this.name}. It ` +
                            `has been ${renamed ? 'renamed' : 'removed'} ` +
                            `in this version of LitElement.`);
                    }
                };
                warnRemovedOrRenamed('initialize');
                warnRemovedOrRenamed('requestUpdateInternal');
                warnRemovedOrRenamed('_getUpdateComplete', true);
            }
            return true;
        }
        /**
         * Takes the styles the user supplied via the `static styles` property and
         * returns the array of styles to apply to the element.
         * Override this method to integrate into a style management system.
         *
         * Styles are deduplicated preserving the _last_ instance in the list. This
         * is a performance optimization to avoid duplicated styles that can occur
         * especially when composing via subclassing. The last item is kept to try
         * to preserve the cascade order with the assumption that it's most important
         * that last added styles override previous styles.
         *
         * @nocollapse
         * @category styles
         */
        static finalizeStyles(styles) {
            const elementStyles = [];
            if (Array.isArray(styles)) {
                // Dedupe the flattened array in reverse order to preserve the last items.
                // Casting to Array<unknown> works around TS error that
                // appears to come from trying to flatten a type CSSResultArray.
                const set = new Set(styles.flat(Infinity).reverse());
                // Then preserve original order by adding the set items in reverse order.
                for (const s of set) {
                    elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(s));
                }
            }
            else if (styles !== undefined) {
                elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle)(styles));
            }
            return elementStyles;
        }
        /**
         * Returns the property name for the given attribute `name`.
         * @nocollapse
         */
        static __attributeNameForProperty(name, options) {
            const attribute = options.attribute;
            return attribute === false
                ? undefined
                : typeof attribute === 'string'
                    ? attribute
                    : typeof name === 'string'
                        ? name.toLowerCase()
                        : undefined;
        }
        /**
         * Internal only override point for customizing work done when elements
         * are constructed.
         *
         * @internal
         */
        _initialize() {
            var _a;
            this.__updatePromise = new Promise((res) => (this.enableUpdating = res));
            this._$changedProperties = new Map();
            this.__saveInstanceProperties();
            // ensures first update will be caught by an early access of
            // `updateComplete`
            this.requestUpdate();
            (_a = this.constructor._initializers) === null || _a === void 0 ? void 0 : _a.forEach((i) => i(this));
        }
        /**
         * Registers a `ReactiveController` to participate in the element's reactive
         * update cycle. The element automatically calls into any registered
         * controllers during its lifecycle callbacks.
         *
         * If the element is connected when `addController()` is called, the
         * controller's `hostConnected()` callback will be immediately called.
         * @category controllers
         */
        addController(controller) {
            var _a, _b;
            ((_a = this.__controllers) !== null && _a !== void 0 ? _a : (this.__controllers = [])).push(controller);
            // If a controller is added after the element has been connected,
            // call hostConnected. Note, re-using existence of `renderRoot` here
            // (which is set in connectedCallback) to avoid the need to track a
            // first connected state.
            if (this.renderRoot !== undefined && this.isConnected) {
                (_b = controller.hostConnected) === null || _b === void 0 ? void 0 : _b.call(controller);
            }
        }
        /**
         * Removes a `ReactiveController` from the element.
         * @category controllers
         */
        removeController(controller) {
            var _a;
            // Note, if the indexOf is -1, the >>> will flip the sign which makes the
            // splice do nothing.
            (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.splice(this.__controllers.indexOf(controller) >>> 0, 1);
        }
        /**
         * Fixes any properties set on the instance before upgrade time.
         * Otherwise these would shadow the accessor and break these properties.
         * The properties are stored in a Map which is played back after the
         * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
         * (<=41), properties created for native platform properties like (`id` or
         * `name`) may not have default values set in the element constructor. On
         * these browsers native properties appear on instances and therefore their
         * default value will overwrite any element default (e.g. if the element sets
         * this.id = 'id' in the constructor, the 'id' will become '' since this is
         * the native platform default).
         */
        __saveInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor.elementProperties.forEach((_v, p) => {
                if (this.hasOwnProperty(p)) {
                    this.__instanceProperties.set(p, this[p]);
                    delete this[p];
                }
            });
        }
        /**
         * Returns the node into which the element should render and by default
         * creates and returns an open shadowRoot. Implement to customize where the
         * element's DOM is rendered. For example, to render into the element's
         * childNodes, return `this`.
         *
         * @return Returns a node into which to render.
         * @category rendering
         */
        createRenderRoot() {
            var _a;
            const renderRoot = (_a = this.shadowRoot) !== null && _a !== void 0 ? _a : this.attachShadow(this.constructor.shadowRootOptions);
            (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_0__.adoptStyles)(renderRoot, this.constructor.elementStyles);
            return renderRoot;
        }
        /**
         * On first connection, creates the element's renderRoot, sets up
         * element styling, and enables updating.
         * @category lifecycle
         */
        connectedCallback() {
            var _a;
            // create renderRoot before first update.
            if (this.renderRoot === undefined) {
                this.renderRoot = this.createRenderRoot();
            }
            this.enableUpdating(true);
            (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostConnected) === null || _a === void 0 ? void 0 : _a.call(c); });
        }
        /**
         * Note, this method should be considered final and not overridden. It is
         * overridden on the element instance with a function that triggers the first
         * update.
         * @category updates
         */
        enableUpdating(_requestedUpdate) { }
        /**
         * Allows for `super.disconnectedCallback()` in extensions while
         * reserving the possibility of making non-breaking feature additions
         * when disconnecting at some point in the future.
         * @category lifecycle
         */
        disconnectedCallback() {
            var _a;
            (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostDisconnected) === null || _a === void 0 ? void 0 : _a.call(c); });
        }
        /**
         * Synchronizes property values when attributes change.
         *
         * Specifically, when an attribute is set, the corresponding property is set.
         * You should rarely need to implement this callback. If this method is
         * overridden, `super.attributeChangedCallback(name, _old, value)` must be
         * called.
         *
         * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
         * on MDN for more information about the `attributeChangedCallback`.
         * @category attributes
         */
        attributeChangedCallback(name, _old, value) {
            this._$attributeToProperty(name, value);
        }
        __propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
            var _a;
            const attr = this.constructor.__attributeNameForProperty(name, options);
            if (attr !== undefined && options.reflect === true) {
                const converter = ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.toAttribute) !==
                    undefined
                    ? options.converter
                    : defaultConverter;
                const attrValue = converter.toAttribute(value, options.type);
                if (DEV_MODE &&
                    this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
                    attrValue === undefined) {
                    issueWarning('undefined-attribute-value', `The attribute value for the ${name} property is ` +
                        `undefined on element ${this.localName}. The attribute will be ` +
                        `removed, but in the previous version of \`ReactiveElement\`, ` +
                        `the attribute would not have changed.`);
                }
                // Track if the property is being reflected to avoid
                // setting the property again via `attributeChangedCallback`. Note:
                // 1. this takes advantage of the fact that the callback is synchronous.
                // 2. will behave incorrectly if multiple attributes are in the reaction
                // stack at time of calling. However, since we process attributes
                // in `update` this should not be possible (or an extreme corner case
                // that we'd like to discover).
                // mark state reflecting
                this.__reflectingProperty = name;
                if (attrValue == null) {
                    this.removeAttribute(attr);
                }
                else {
                    this.setAttribute(attr, attrValue);
                }
                // mark state not reflecting
                this.__reflectingProperty = null;
            }
        }
        /** @internal */
        _$attributeToProperty(name, value) {
            var _a;
            const ctor = this.constructor;
            // Note, hint this as an `AttributeMap` so closure clearly understands
            // the type; it has issues with tracking types through statics
            const propName = ctor.__attributeToPropertyMap.get(name);
            // Use tracking info to avoid reflecting a property value to an attribute
            // if it was just set because the attribute changed.
            if (propName !== undefined && this.__reflectingProperty !== propName) {
                const options = ctor.getPropertyOptions(propName);
                const converter = typeof options.converter === 'function'
                    ? { fromAttribute: options.converter }
                    : ((_a = options.converter) === null || _a === void 0 ? void 0 : _a.fromAttribute) !== undefined
                        ? options.converter
                        : defaultConverter;
                // mark state reflecting
                this.__reflectingProperty = propName;
                this[propName] = converter.fromAttribute(value, options.type
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                );
                // mark state not reflecting
                this.__reflectingProperty = null;
            }
        }
        /**
         * Requests an update which is processed asynchronously. This should be called
         * when an element should update based on some state not triggered by setting
         * a reactive property. In this case, pass no arguments. It should also be
         * called when manually implementing a property setter. In this case, pass the
         * property `name` and `oldValue` to ensure that any configured property
         * options are honored.
         *
         * @param name name of requesting property
         * @param oldValue old value of requesting property
         * @param options property options to use instead of the previously
         *     configured options
         * @category updates
         */
        requestUpdate(name, oldValue, options) {
            let shouldRequestUpdate = true;
            // If we have a property key, perform property update steps.
            if (name !== undefined) {
                options =
                    options ||
                        this.constructor.getPropertyOptions(name);
                const hasChanged = options.hasChanged || notEqual;
                if (hasChanged(this[name], oldValue)) {
                    if (!this._$changedProperties.has(name)) {
                        this._$changedProperties.set(name, oldValue);
                    }
                    // Add to reflecting properties set.
                    // Note, it's important that every change has a chance to add the
                    // property to `_reflectingProperties`. This ensures setting
                    // attribute + property reflects correctly.
                    if (options.reflect === true && this.__reflectingProperty !== name) {
                        if (this.__reflectingProperties === undefined) {
                            this.__reflectingProperties = new Map();
                        }
                        this.__reflectingProperties.set(name, options);
                    }
                }
                else {
                    // Abort the request if the property should not be considered changed.
                    shouldRequestUpdate = false;
                }
            }
            if (!this.isUpdatePending && shouldRequestUpdate) {
                this.__updatePromise = this.__enqueueUpdate();
            }
            // Note, since this no longer returns a promise, in dev mode we return a
            // thenable which warns if it's called.
            return DEV_MODE
                ? requestUpdateThenable(this.localName)
                : undefined;
        }
        /**
         * Sets up the element to asynchronously update.
         */
        async __enqueueUpdate() {
            this.isUpdatePending = true;
            try {
                // Ensure any previous update has resolved before updating.
                // This `await` also ensures that property changes are batched.
                await this.__updatePromise;
            }
            catch (e) {
                // Refire any previous errors async so they do not disrupt the update
                // cycle. Errors are refired so developers have a chance to observe
                // them, and this can be done by implementing
                // `window.onunhandledrejection`.
                Promise.reject(e);
            }
            const result = this.scheduleUpdate();
            // If `scheduleUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
            return !this.isUpdatePending;
        }
        /**
         * Schedules an element update. You can override this method to change the
         * timing of updates by returning a Promise. The update will await the
         * returned Promise, and you should resolve the Promise to allow the update
         * to proceed. If this method is overridden, `super.scheduleUpdate()`
         * must be called.
         *
         * For instance, to schedule updates to occur just before the next frame:
         *
         * ```ts
         * override protected async scheduleUpdate(): Promise<unknown> {
         *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
         *   super.scheduleUpdate();
         * }
         * ```
         * @category updates
         */
        scheduleUpdate() {
            return this.performUpdate();
        }
        /**
         * Performs an element update. Note, if an exception is thrown during the
         * update, `firstUpdated` and `updated` will not be called.
         *
         * Call `performUpdate()` to immediately process a pending update. This should
         * generally not be needed, but it can be done in rare cases when you need to
         * update synchronously.
         *
         * Note: To ensure `performUpdate()` synchronously completes a pending update,
         * it should not be overridden. In LitElement 2.x it was suggested to override
         * `performUpdate()` to also customizing update scheduling. Instead, you should now
         * override `scheduleUpdate()`. For backwards compatibility with LitElement 2.x,
         * scheduling updates via `performUpdate()` continues to work, but will make
         * also calling `performUpdate()` to synchronously process updates difficult.
         *
         * @category updates
         */
        performUpdate() {
            var _a, _b;
            // Abort any update if one is not pending when this is called.
            // This can happen if `performUpdate` is called early to "flush"
            // the update.
            if (!this.isUpdatePending) {
                return;
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({ kind: 'update' });
            // create renderRoot before first update.
            if (!this.hasUpdated) {
                // Produce warning if any class properties are shadowed by class fields
                if (DEV_MODE) {
                    const shadowedProperties = [];
                    (_a = this.constructor.__reactivePropertyKeys) === null || _a === void 0 ? void 0 : _a.forEach((p) => {
                        var _a;
                        if (this.hasOwnProperty(p) && !((_a = this.__instanceProperties) === null || _a === void 0 ? void 0 : _a.has(p))) {
                            shadowedProperties.push(p);
                        }
                    });
                    if (shadowedProperties.length) {
                        throw new Error(`The following properties on element ${this.localName} will not ` +
                            `trigger updates as expected because they are set using class ` +
                            `fields: ${shadowedProperties.join(', ')}. ` +
                            `Native class fields and some compiled output will overwrite ` +
                            `accessors used for detecting changes. See ` +
                            `https://lit.dev/msg/class-field-shadowing ` +
                            `for more information.`);
                    }
                }
            }
            // Mixin instance properties once, if they exist.
            if (this.__instanceProperties) {
                // Use forEach so this works even if for/of loops are compiled to for loops
                // expecting arrays
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.__instanceProperties.forEach((v, p) => (this[p] = v));
                this.__instanceProperties = undefined;
            }
            let shouldUpdate = false;
            const changedProperties = this._$changedProperties;
            try {
                shouldUpdate = this.shouldUpdate(changedProperties);
                if (shouldUpdate) {
                    this.willUpdate(changedProperties);
                    (_b = this.__controllers) === null || _b === void 0 ? void 0 : _b.forEach((c) => { var _a; return (_a = c.hostUpdate) === null || _a === void 0 ? void 0 : _a.call(c); });
                    this.update(changedProperties);
                }
                else {
                    this.__markUpdated();
                }
            }
            catch (e) {
                // Prevent `firstUpdated` and `updated` from running when there's an
                // update exception.
                shouldUpdate = false;
                // Ensure element can accept additional updates after an exception.
                this.__markUpdated();
                throw e;
            }
            // The update is no longer considered pending and further updates are now allowed.
            if (shouldUpdate) {
                this._$didUpdate(changedProperties);
            }
        }
        /**
         * Invoked before `update()` to compute values needed during the update.
         *
         * Implement `willUpdate` to compute property values that depend on other
         * properties and are used in the rest of the update process.
         *
         * ```ts
         * willUpdate(changedProperties) {
         *   // only need to check changed properties for an expensive computation.
         *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
         *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
         *   }
         * }
         *
         * render() {
         *   return html`SHA: ${this.sha}`;
         * }
         * ```
         *
         * @category updates
         */
        willUpdate(_changedProperties) { }
        // Note, this is an override point for polyfill-support.
        // @internal
        _$didUpdate(changedProperties) {
            var _a;
            (_a = this.__controllers) === null || _a === void 0 ? void 0 : _a.forEach((c) => { var _a; return (_a = c.hostUpdated) === null || _a === void 0 ? void 0 : _a.call(c); });
            if (!this.hasUpdated) {
                this.hasUpdated = true;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
            if (DEV_MODE &&
                this.isUpdatePending &&
                this.constructor.enabledWarnings.indexOf('change-in-update') >= 0) {
                issueWarning('change-in-update', `Element ${this.localName} scheduled an update ` +
                    `(generally because a property was set) ` +
                    `after an update completed, causing a new update to be scheduled. ` +
                    `This is inefficient and should be avoided unless the next update ` +
                    `can only be scheduled as a side effect of the previous update.`);
            }
        }
        __markUpdated() {
            this._$changedProperties = new Map();
            this.isUpdatePending = false;
        }
        /**
         * Returns a Promise that resolves when the element has completed updating.
         * The Promise value is a boolean that is `true` if the element completed the
         * update without triggering another update. The Promise result is `false` if
         * a property was set inside `updated()`. If the Promise is rejected, an
         * exception was thrown during the update.
         *
         * To await additional asynchronous work, override the `getUpdateComplete`
         * method. For example, it is sometimes useful to await a rendered element
         * before fulfilling this Promise. To do this, first await
         * `super.getUpdateComplete()`, then any subsequent state.
         *
         * @return A promise of a boolean that resolves to true if the update completed
         *     without triggering another update.
         * @category updates
         */
        get updateComplete() {
            return this.getUpdateComplete();
        }
        /**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         * ```ts
         * class MyElement extends LitElement {
         *   override async getUpdateComplete() {
         *     const result = await super.getUpdateComplete();
         *     await this._myChild.updateComplete;
         *     return result;
         *   }
         * }
         * ```
         *
         * @return A promise of a boolean that resolves to true if the update completed
         *     without triggering another update.
         * @category updates
         */
        getUpdateComplete() {
            return this.__updatePromise;
        }
        /**
         * Controls whether or not `update()` should be called when the element requests
         * an update. By default, this method always returns `true`, but this can be
         * customized to control when to update.
         *
         * @param _changedProperties Map of changed properties with old values
         * @category updates
         */
        shouldUpdate(_changedProperties) {
            return true;
        }
        /**
         * Updates the element. This method reflects property values to attributes.
         * It can be overridden to render and keep updated element DOM.
         * Setting properties inside this method will *not* trigger
         * another update.
         *
         * @param _changedProperties Map of changed properties with old values
         * @category updates
         */
        update(_changedProperties) {
            if (this.__reflectingProperties !== undefined) {
                // Use forEach so this works even if for/of loops are compiled to for
                // loops expecting arrays
                this.__reflectingProperties.forEach((v, k) => this.__propertyToAttribute(k, this[k], v));
                this.__reflectingProperties = undefined;
            }
            this.__markUpdated();
        }
        /**
         * Invoked whenever the element is updated. Implement to perform
         * post-updating tasks via DOM APIs, for example, focusing an element.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         * @category updates
         */
        updated(_changedProperties) { }
        /**
         * Invoked when the element is first updated. Implement to perform one time
         * work on the element after update.
         *
         * ```ts
         * firstUpdated() {
         *   this.renderRoot.getElementById('my-text-area').focus();
         * }
         * ```
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         * @category updates
         */
        firstUpdated(_changedProperties) { }
    }
    _e = finalized;
    /**
     * Marks class as having finished creating properties.
     */
    ReactiveElement[_e] = true;
    /**
     * Memoized list of all element properties, including any superclass properties.
     * Created lazily on user subclasses when finalizing the class.
     * @nocollapse
     * @category properties
     */
    ReactiveElement.elementProperties = new Map();
    /**
     * Memoized list of all element styles.
     * Created lazily on user subclasses when finalizing the class.
     * @nocollapse
     * @category styles
     */
    ReactiveElement.elementStyles = [];
    /**
     * Options used when calling `attachShadow`. Set this property to customize
     * the options for the shadowRoot; for example, to create a closed
     * shadowRoot: `{mode: 'closed'}`.
     *
     * Note, these options are used in `createRenderRoot`. If this method
     * is customized, options should be respected if possible.
     * @nocollapse
     * @category rendering
     */
    ReactiveElement.shadowRootOptions = { mode: 'open' };
    if (htmlElementShimNeeded) {
        delete global.HTMLElement;
    }
    // Apply polyfills if available
    polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ ReactiveElement });
    // Dev mode warnings...
    if (DEV_MODE) {
        // Default warning set.
        ReactiveElement.enabledWarnings = ['change-in-update'];
        const ensureOwnWarnings = function (ctor) {
            if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
                ctor.enabledWarnings = ctor.enabledWarnings.slice();
            }
        };
        ReactiveElement.enableWarning = function (warning) {
            ensureOwnWarnings(this);
            if (this.enabledWarnings.indexOf(warning) < 0) {
                this.enabledWarnings.push(warning);
            }
        };
        ReactiveElement.disableWarning = function (warning) {
            ensureOwnWarnings(this);
            const i = this.enabledWarnings.indexOf(warning);
            if (i >= 0) {
                this.enabledWarnings.splice(i, 1);
            }
        };
    }
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for ReactiveElement usage.
    ((_d = global.reactiveElementVersions) !== null && _d !== void 0 ? _d : (global.reactiveElementVersions = [])).push('1.4.0');
    if (DEV_MODE && global.reactiveElementVersions.length > 1) {
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
            `is not recommended.`);
    }
    //# sourceMappingURL=reactive-element.js.map
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/base/src/Base.dev.js":
    /*!********************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/base/src/Base.dev.js ***!
      \********************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "SpectrumElement": function() { return /* binding */ SpectrumElement; },
    /* harmony export */   "SpectrumMixin": function() { return /* binding */ SpectrumMixin; }
    /* harmony export */ });
    /* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
    /* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    
    const observedForElements = /* @__PURE__ */ new Set();
    const updateRTL = () => {
      const dir = document.documentElement.dir === "rtl" ? document.documentElement.dir : "ltr";
      observedForElements.forEach((el) => {
        el.setAttribute("dir", dir);
      });
    };
    const rtlObserver = new MutationObserver(updateRTL);
    rtlObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"]
    });
    const canManageContentDirection = (el) => typeof el.startManagingContentDirection !== "undefined" || el.tagName === "SP-THEME";
    function SpectrumMixin(constructor) {
      class SlotTextObservingElement extends constructor {
        constructor() {
          super(...arguments);
          this.dir = "ltr";
        }
        get isLTR() {
          return this.dir === "ltr";
        }
        hasVisibleFocusInTree() {
          const activeElement = this.getRootNode().activeElement;
          if (!activeElement) {
            return false;
          }
          try {
            return activeElement.matches(":focus-visible") || activeElement.matches(".focus-visible");
          } catch (error) {
            return activeElement.matches(".focus-visible");
          }
        }
        connectedCallback() {
          if (!this.hasAttribute("dir")) {
            let dirParent = this.assignedSlot || this.parentNode;
            while (dirParent !== document.documentElement && !canManageContentDirection(dirParent)) {
              dirParent = dirParent.assignedSlot || dirParent.parentNode || dirParent.host;
            }
            const oldDir = this.dir;
            this.dir = dirParent.dir === "rtl" ? dirParent.dir : this.dir || "ltr";
            if (oldDir === this.dir) {
              this.setAttribute("dir", this.dir);
            }
            if (dirParent === document.documentElement) {
              observedForElements.add(this);
            } else {
              const { localName } = dirParent;
              if (localName.search("-") > -1 && !customElements.get(localName)) {
                customElements.whenDefined(localName).then(() => {
                  dirParent.startManagingContentDirection(this);
                });
              } else {
                dirParent.startManagingContentDirection(this);
              }
            }
            this._dirParent = dirParent;
          }
          super.connectedCallback();
        }
        disconnectedCallback() {
          super.disconnectedCallback();
          if (this._dirParent) {
            if (this._dirParent === document.documentElement) {
              observedForElements.delete(this);
            } else {
              this._dirParent.stopManagingContentDirection(this);
            }
            this.removeAttribute("dir");
          }
        }
      }
      __decorateClass([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ reflect: true })
      ], SlotTextObservingElement.prototype, "dir", 2);
      return SlotTextObservingElement;
    }
    class SpectrumElement extends SpectrumMixin(lit__WEBPACK_IMPORTED_MODULE_0__.LitElement) {
    }
    if (true) {
      window.__swc = {
        ...window.__swc,
        issuedWarnings: /* @__PURE__ */ new Set(),
        warn: (element, message, url, { type = "api", level = "default", issues } = {}) => {
          var _a, _b, _c;
          const { localName = "base" } = element || {};
          const id = `${localName}:${type}:${level}`;
          if (!window.__swc.verbose && window.__swc.issuedWarnings.has(id))
            return;
          window.__swc.issuedWarnings.add(id);
          if ((_a = window.__swc.ignoreWarningLocalNames) == null ? void 0 : _a[localName])
            return;
          if ((_b = window.__swc.ignoreWarningTypes) == null ? void 0 : _b[type])
            return;
          if ((_c = window.__swc.ignoreWarningLevels) == null ? void 0 : _c[level])
            return;
          let listedIssues = "";
          if (issues && issues.length) {
            issues.unshift("");
            listedIssues = issues.join("\n    - ") + "\n";
          }
          const intro = level === "deprecation" ? "DEPRECATION NOTICE: " : "";
          const inspectElement = element ? "\nInspect this issue in the follow element:" : "";
          const displayURL = (element ? "\n\n" : "\n") + url + "\n";
          const messages = [];
          messages.push(intro + message + "\n" + listedIssues + inspectElement);
          if (element) {
            messages.push(element);
          }
          messages.push(displayURL, {
            data: {
              localName,
              type,
              level
            }
          });
          console.warn(...messages);
        }
      };
      window.__swc.warn(void 0, "Spectrum Web Components is in dev mode. Not recommended for production!", "https://opensource.adobe.com/spectrum-web-components/dev-mode/", { type: "default" });
    }
    //# sourceMappingURL=Base.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/base/src/decorators.dev.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/base/src/decorators.dev.js ***!
      \**************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "customElement": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.customElement; },
    /* harmony export */   "eventOptions": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.eventOptions; },
    /* harmony export */   "property": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.property; },
    /* harmony export */   "query": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.query; },
    /* harmony export */   "queryAll": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.queryAll; },
    /* harmony export */   "queryAssignedElements": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.queryAssignedElements; },
    /* harmony export */   "queryAssignedNodes": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.queryAssignedNodes; },
    /* harmony export */   "queryAsync": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.queryAsync; },
    /* harmony export */   "state": function() { return /* reexport safe */ lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.state; }
    /* harmony export */ });
    /* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
    
    //# sourceMappingURL=decorators.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/base/src/directives.dev.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/base/src/directives.dev.js ***!
      \**************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "classMap": function() { return /* reexport safe */ lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__.classMap; },
    /* harmony export */   "ifDefined": function() { return /* reexport safe */ lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined; },
    /* harmony export */   "live": function() { return /* reexport safe */ lit_directives_live_js__WEBPACK_IMPORTED_MODULE_5__.live; },
    /* harmony export */   "repeat": function() { return /* reexport safe */ lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_1__.repeat; },
    /* harmony export */   "styleMap": function() { return /* reexport safe */ lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__.styleMap; },
    /* harmony export */   "until": function() { return /* reexport safe */ lit_directives_until_js__WEBPACK_IMPORTED_MODULE_4__.until; },
    /* harmony export */   "when": function() { return /* reexport safe */ lit_directives_when_js__WEBPACK_IMPORTED_MODULE_6__.when; }
    /* harmony export */ });
    /* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
    /* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
    /* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
    /* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
    /* harmony import */ var lit_directives_until_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/directives/until.js */ "./node_modules/lit/directives/until.js");
    /* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/directives/live.js */ "./node_modules/lit/directives/live.js");
    /* harmony import */ var lit_directives_when_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lit/directives/when.js */ "./node_modules/lit/directives/when.js");
    
    
    
    
    
    
    
    //# sourceMappingURL=directives.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/base/src/index.dev.js":
    /*!*********************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/base/src/index.dev.js ***!
      \*********************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "CSSResult": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.CSSResult; },
    /* harmony export */   "ElementSizes": function() { return /* reexport safe */ _sizedMixin_dev_js__WEBPACK_IMPORTED_MODULE_1__.ElementSizes; },
    /* harmony export */   "LitElement": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.LitElement; },
    /* harmony export */   "ReactiveElement": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement; },
    /* harmony export */   "SizedMixin": function() { return /* reexport safe */ _sizedMixin_dev_js__WEBPACK_IMPORTED_MODULE_1__.SizedMixin; },
    /* harmony export */   "SpectrumElement": function() { return /* reexport safe */ _Base_dev_js__WEBPACK_IMPORTED_MODULE_0__.SpectrumElement; },
    /* harmony export */   "SpectrumMixin": function() { return /* reexport safe */ _Base_dev_js__WEBPACK_IMPORTED_MODULE_0__.SpectrumMixin; },
    /* harmony export */   "UpdatingElement": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement; },
    /* harmony export */   "_$LE": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__._$LE; },
    /* harmony export */   "_$LH": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__._$LH; },
    /* harmony export */   "adoptStyles": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.adoptStyles; },
    /* harmony export */   "css": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.css; },
    /* harmony export */   "defaultConverter": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.defaultConverter; },
    /* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle; },
    /* harmony export */   "html": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.html; },
    /* harmony export */   "noChange": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.noChange; },
    /* harmony export */   "notEqual": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.notEqual; },
    /* harmony export */   "nothing": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.nothing; },
    /* harmony export */   "render": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.render; },
    /* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets; },
    /* harmony export */   "svg": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.svg; },
    /* harmony export */   "unsafeCSS": function() { return /* reexport safe */ lit__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS; }
    /* harmony export */ });
    /* harmony import */ var _Base_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.dev.js */ "./node_modules/@spectrum-web-components/base/src/Base.dev.js");
    /* harmony import */ var _sizedMixin_dev_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizedMixin.dev.js */ "./node_modules/@spectrum-web-components/base/src/sizedMixin.dev.js");
    /* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
    
    
    
    //# sourceMappingURL=index.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/base/src/sizedMixin.dev.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/base/src/sizedMixin.dev.js ***!
      \**************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "ElementSizes": function() { return /* binding */ ElementSizes; },
    /* harmony export */   "SizedMixin": function() { return /* binding */ SizedMixin; }
    /* harmony export */ });
    /* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    const ElementSizes = {
      xxs: "xxs",
      xs: "xs",
      s: "s",
      m: "m",
      l: "l",
      xl: "xl",
      xxl: "xxl"
    };
    function SizedMixin(constructor, {
      validSizes = ["s", "m", "l", "xl"],
      noDefaultSize,
      defaultSize = "m"
    } = {}) {
      class SizedElement extends constructor {
        constructor() {
          super(...arguments);
          this._size = defaultSize;
        }
        get size() {
          return this._size || defaultSize;
        }
        set size(value) {
          const fallbackSize = noDefaultSize ? null : defaultSize;
          const size = value ? value.toLocaleLowerCase() : value;
          const validSize = validSizes.includes(size) ? size : fallbackSize;
          if (validSize) {
            this.setAttribute("size", validSize);
          }
          if (this._size === validSize) {
            return;
          }
          const oldSize = this._size;
          this._size = validSize;
          this.requestUpdate("size", oldSize);
        }
        update(changes) {
          if (!this.hasAttribute("size") && !noDefaultSize) {
            this.setAttribute("size", this.size);
          }
          super.update(changes);
        }
      }
      __decorateClass([
        (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_0__.property)({ type: String, reflect: true })
      ], SizedElement.prototype, "size", 1);
      return SizedElement;
    }
    //# sourceMappingURL=sizedMixin.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/button/sp-button.dev.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/button/sp-button.dev.js ***!
      \***********************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _src_Button_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Button.dev.js */ "./node_modules/@spectrum-web-components/button/src/Button.dev.js");
    
    customElements.define("sp-button", _src_Button_dev_js__WEBPACK_IMPORTED_MODULE_0__.Button);
    //# sourceMappingURL=sp-button.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/button/src/Button.dev.js":
    /*!************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/button/src/Button.dev.js ***!
      \************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Button": function() { return /* binding */ Button; },
    /* harmony export */   "VALID_VARIANTS": function() { return /* binding */ VALID_VARIANTS; }
    /* harmony export */ });
    /* harmony import */ var _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base */ "./node_modules/@spectrum-web-components/base/src/index.dev.js");
    /* harmony import */ var _spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spectrum-web-components/base/src/decorators.js */ "./node_modules/@spectrum-web-components/base/src/decorators.dev.js");
    /* harmony import */ var _StyledButton_dev_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyledButton.dev.js */ "./node_modules/@spectrum-web-components/button/src/StyledButton.dev.js");
    /* harmony import */ var _button_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css.js */ "./node_modules/@spectrum-web-components/button/src/button.css.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    
    
    
    const VALID_VARIANTS = [
      "accent",
      "primary",
      "secondary",
      "negative",
      "white",
      "black"
    ];
    class Button extends (0,_spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.SizedMixin)(_StyledButton_dev_js__WEBPACK_IMPORTED_MODULE_2__.StyledButton) {
      constructor() {
        super(...arguments);
        this._variant = "accent";
        this.treatment = "fill";
      }
      static get styles() {
        return [...super.styles, _button_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]];
      }
      get variant() {
        return this._variant;
      }
      set variant(variant) {
        if (variant === this.variant)
          return;
        this.requestUpdate("variant", this.variant);
        switch (variant) {
          case "cta":
            this._variant = "accent";
            break;
          case "overBackground":
            this._variant = "white";
            this.treatment = "outline";
            break;
          default:
            if (!VALID_VARIANTS.includes(variant)) {
              this._variant = "accent";
            } else {
              this._variant = variant;
            }
            break;
        }
        this.setAttribute("variant", this.variant);
      }
      set quiet(quiet) {
        this.treatment = quiet ? "outline" : "fill";
      }
      firstUpdated(changes) {
        super.firstUpdated(changes);
        if (!this.hasAttribute("variant")) {
          this.setAttribute("variant", this.variant);
        }
      }
    }
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
    ], Button.prototype, "variant", 1);
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ reflect: true })
    ], Button.prototype, "treatment", 2);
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
    ], Button.prototype, "quiet", 1);
    //# sourceMappingURL=Button.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/button/src/ButtonBase.dev.js":
    /*!****************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/button/src/ButtonBase.dev.js ***!
      \****************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "ButtonBase": function() { return /* binding */ ButtonBase; }
    /* harmony export */ });
    /* harmony import */ var _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base */ "./node_modules/@spectrum-web-components/base/src/index.dev.js");
    /* harmony import */ var _spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spectrum-web-components/base/src/decorators.js */ "./node_modules/@spectrum-web-components/base/src/decorators.dev.js");
    /* harmony import */ var _spectrum_web_components_shared_src_like_anchor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spectrum-web-components/shared/src/like-anchor.js */ "./node_modules/@spectrum-web-components/shared/src/like-anchor.dev.js");
    /* harmony import */ var _spectrum_web_components_shared_src_focusable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spectrum-web-components/shared/src/focusable.js */ "./node_modules/@spectrum-web-components/shared/src/focusable.dev.js");
    /* harmony import */ var _spectrum_web_components_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @spectrum-web-components/shared */ "./node_modules/@spectrum-web-components/shared/src/index.dev.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    
    
    
    
    class ButtonBase extends (0,_spectrum_web_components_shared_src_like_anchor_js__WEBPACK_IMPORTED_MODULE_2__.LikeAnchor)((0,_spectrum_web_components_shared__WEBPACK_IMPORTED_MODULE_4__.ObserveSlotText)((0,_spectrum_web_components_shared__WEBPACK_IMPORTED_MODULE_4__.ObserveSlotPresence)(_spectrum_web_components_shared_src_focusable_js__WEBPACK_IMPORTED_MODULE_3__.Focusable, '[slot="icon"]'))) {
      constructor() {
        super();
        this.active = false;
        this.type = "button";
        this.proxyFocus = this.proxyFocus.bind(this);
        this.addEventListener("click", this.handleClickCapture, {
          capture: true
        });
      }
      get hasIcon() {
        return this.slotContentIsPresent;
      }
      get hasLabel() {
        return this.slotHasContent;
      }
      get focusElement() {
        return this;
      }
      get buttonContent() {
        const content = [
          _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.html`
                    <div id="label" ?hidden=${!this.hasLabel}>
                        <slot
                            id="slot"
                            @slotchange=${this.manageTextObservedSlot}
                        ></slot>
                    </div>
                `
        ];
        if (this.hasIcon) {
          content.unshift(_spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.html`
                    <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
                `);
        }
        return content;
      }
      click() {
        if (this.disabled) {
          return;
        }
        if (this.shouldProxyClick()) {
          return;
        }
        super.click();
      }
      handleClickCapture(event) {
        if (this.disabled) {
          event.preventDefault();
          event.stopImmediatePropagation();
          event.stopPropagation();
          return false;
        }
      }
      proxyFocus() {
        this.focus();
      }
      shouldProxyClick() {
        let handled = false;
        if (this.anchorElement) {
          this.anchorElement.click();
          handled = true;
        } else if (this.type !== "button") {
          const proxy = document.createElement("button");
          proxy.type = this.type;
          this.insertAdjacentElement("afterend", proxy);
          proxy.click();
          proxy.remove();
          handled = true;
        }
        return handled;
      }
      renderAnchor() {
        return _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.html`
                ${this.buttonContent}
                ${super.renderAnchor({
          id: "button",
          ariaHidden: true,
          className: "button anchor hidden"
        })}
            `;
      }
      renderButton() {
        return _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.html`
                ${this.buttonContent}
            `;
      }
      render() {
        return this.href && this.href.length > 0 ? this.renderAnchor() : this.renderButton();
      }
      handleKeydown(event) {
        const { code } = event;
        switch (code) {
          case "Space":
            event.preventDefault();
            if (typeof this.href === "undefined") {
              this.addEventListener("keyup", this.handleKeyup);
              this.active = true;
            }
            break;
          default:
            break;
        }
      }
      handleKeypress(event) {
        const { code } = event;
        switch (code) {
          case "Enter":
          case "NumpadEnter":
            this.click();
            break;
          default:
            break;
        }
      }
      handleKeyup(event) {
        const { code } = event;
        switch (code) {
          case "Space":
            this.removeEventListener("keyup", this.handleKeyup);
            this.active = false;
            this.click();
            break;
          default:
            break;
        }
      }
      handleRemoveActive() {
        this.active = false;
      }
      handlePointerdown() {
        this.active = true;
      }
      manageAnchor() {
        if (this.href && this.href.length > 0) {
          if (this.getAttribute("role") === "button") {
            this.setAttribute("role", "link");
          }
          this.removeEventListener("click", this.shouldProxyClick);
        } else {
          if (!this.hasAttribute("role") || this.getAttribute("role") === "link") {
            this.setAttribute("role", "button");
          }
          this.addEventListener("click", this.shouldProxyClick);
        }
      }
      firstUpdated(changed) {
        super.firstUpdated(changed);
        if (!this.hasAttribute("tabindex")) {
          this.tabIndex = 0;
        }
        this.manageAnchor();
        this.addEventListener("keydown", this.handleKeydown);
        this.addEventListener("keypress", this.handleKeypress);
        this.addEventListener("pointerdown", this.handlePointerdown);
      }
      updated(changed) {
        super.updated(changed);
        if (changed.has("href")) {
          this.manageAnchor();
        }
        if (changed.has("label")) {
          this.setAttribute("aria-label", this.label || "");
        }
        if (changed.has("active")) {
          if (this.active) {
            this.addEventListener("focusout", this.handleRemoveActive);
            this.addEventListener("pointerup", this.handleRemoveActive);
            this.addEventListener("pointerleave", this.handleRemoveActive);
          } else {
            this.removeEventListener("focusout", this.handleRemoveActive);
            this.removeEventListener("pointerup", this.handleRemoveActive);
            this.removeEventListener("pointerleave", this.handleRemoveActive);
          }
        }
        if (this.anchorElement) {
          this.anchorElement.addEventListener("focus", this.proxyFocus);
          this.anchorElement.tabIndex = -1;
        }
      }
    }
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
    ], ButtonBase.prototype, "active", 2);
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
    ], ButtonBase.prototype, "type", 2);
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)(".anchor")
    ], ButtonBase.prototype, "anchorElement", 2);
    //# sourceMappingURL=ButtonBase.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/button/src/StyledButton.dev.js":
    /*!******************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/button/src/StyledButton.dev.js ***!
      \******************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "StyledButton": function() { return /* binding */ StyledButton; }
    /* harmony export */ });
    /* harmony import */ var _ButtonBase_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonBase.dev.js */ "./node_modules/@spectrum-web-components/button/src/ButtonBase.dev.js");
    /* harmony import */ var _button_base_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-base.css.js */ "./node_modules/@spectrum-web-components/button/src/button-base.css.js");
    
    
    class StyledButton extends _ButtonBase_dev_js__WEBPACK_IMPORTED_MODULE_0__.ButtonBase {
      static get styles() {
        return [_button_base_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
      }
    }
    //# sourceMappingURL=StyledButton.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/button/src/button-base.css.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/button/src/button-base.css.js ***!
      \*****************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base */ "./node_modules/@spectrum-web-components/base/src/index.dev.js");
    const e=_spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.css`
    :host{display:inline-flex;vertical-align:top}:host([dir]){-webkit-appearance:none}:host([disabled]){cursor:auto;pointer-events:none}#button{inset:0;position:absolute}:host:after{pointer-events:none}slot[name=icon]::slotted(img),slot[name=icon]::slotted(svg){fill:currentcolor;stroke:currentcolor;height:var(
    --spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
    );width:var(
    --spectrum-alias-workflow-icon-size-m,var(--spectrum-global-dimension-size-225)
    )}
    `;/* harmony default export */ __webpack_exports__["default"] = (e);
    //# sourceMappingURL=button-base.css.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/button/src/button.css.js":
    /*!************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/button/src/button.css.js ***!
      \************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base */ "./node_modules/@spectrum-web-components/base/src/index.dev.js");
    const o=_spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.css`
    :host{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;align-items:center;-webkit-appearance:button;box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:var(
    --spectrum-alias-body-text-font-family,var(--spectrum-global-font-family-base)
    );justify-content:center;line-height:var(
    --spectrum-alias-component-text-line-height,var(--spectrum-global-font-line-height-small)
    );margin:0;overflow:visible;position:relative;text-decoration:none;text-transform:none;transition:background var(--spectrum-global-animation-duration-100,.13s) ease-out,border-color var(--spectrum-global-animation-duration-100,.13s) ease-out,color var(--spectrum-global-animation-duration-100,.13s) ease-out,box-shadow var(--spectrum-global-animation-duration-100,.13s) ease-out;user-select:none;-webkit-user-select:none;vertical-align:top}:host(:focus){outline:none}:host(::-moz-focus-inner){border:0;border-style:none;margin-bottom:-2px;margin-top:-2px;padding:0}:host([disabled]){cursor:default}::slotted([slot=icon]){flex-shrink:0;max-height:100%}:host:after{border-radius:calc(var(
    --spectrum-button-m-primary-fill-texticon-border-radius,
    var(--spectrum-global-dimension-size-200)
    ) + var(
    --spectrum-alias-focus-ring-gap,
    var(--spectrum-global-dimension-static-size-25)
    ));bottom:0;content:"";display:block;left:0;margin:calc(var(
    --spectrum-alias-focus-ring-gap,
    var(--spectrum-global-dimension-static-size-25)
    )*-1);position:absolute;right:0;top:0;transition:opacity var(--spectrum-global-animation-duration-100,.13s) ease-out,margin var(--spectrum-global-animation-duration-100,.13s) ease-out}:host(.focus-visible):after{margin:calc(var(
    --spectrum-alias-focus-ring-gap,
    var(--spectrum-global-dimension-static-size-25)
    )*-2)}:host(:focus-visible):after{margin:calc(var(
    --spectrum-alias-focus-ring-gap,
    var(--spectrum-global-dimension-static-size-25)
    )*-2)}#label{align-self:center;justify-self:center;text-align:center}#label:empty{display:none}:host([size=s]){--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
    --spectrum-button-s-primary-fill-textonly-text-padding-bottom
    );--spectrum-button-primary-fill-texticon-text-size:var(
    --spectrum-button-s-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-75)
    );--spectrum-button-primary-fill-texticon-text-font-weight:var(
    --spectrum-button-s-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
    );--spectrum-button-primary-fill-texticon-text-line-height:var(
    --spectrum-button-s-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
    );--spectrum-button-primary-fill-texticon-icon-gap:var(
    --spectrum-button-s-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-85)
    );--spectrum-button-primary-fill-texticon-focus-ring-size:var(
    --spectrum-button-s-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
    );--spectrum-button-primary-fill-texticon-border-size:var(
    --spectrum-button-s-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-texticon-padding-left:var(
    --spectrum-button-s-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-125)
    );--spectrum-button-primary-fill-texticon-border-radius:var(
    --spectrum-button-s-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-150)
    );--spectrum-button-primary-fill-textonly-border-size:var(
    --spectrum-button-s-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-textonly-min-width:var(
    --spectrum-button-s-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-675)
    );--spectrum-button-primary-fill-textonly-padding-left:var(
    --spectrum-button-s-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-150)
    );--spectrum-button-primary-fill-textonly-padding-right:var(
    --spectrum-button-s-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-150)
    );--spectrum-button-primary-fill-textonly-height:var(
    --spectrum-button-s-primary-fill-textonly-height,var(--spectrum-global-dimension-size-300)
    );--spectrum-button-primary-fill-textonly-text-padding-top:calc(var(
    --spectrum-button-s-primary-fill-textonly-text-padding-top,
    var(--spectrum-global-dimension-static-size-50)
    ) - 1px)}:host([size=m]){--spectrum-button-primary-fill-texticon-padding-left:var(
    --spectrum-button-m-primary-fill-texticon-padding-left
    );--spectrum-button-primary-fill-texticon-text-size:var(
    --spectrum-button-m-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-100)
    );--spectrum-button-primary-fill-texticon-text-font-weight:var(
    --spectrum-button-m-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
    );--spectrum-button-primary-fill-texticon-text-line-height:var(
    --spectrum-button-m-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
    );--spectrum-button-primary-fill-texticon-icon-gap:var(
    --spectrum-button-m-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-100)
    );--spectrum-button-primary-fill-texticon-focus-ring-size:var(
    --spectrum-button-m-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
    );--spectrum-button-primary-fill-texticon-border-size:var(
    --spectrum-button-m-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-texticon-border-radius:var(
    --spectrum-button-m-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-200)
    );--spectrum-button-primary-fill-textonly-text-padding-top:var(
    --spectrum-button-m-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-75)
    );--spectrum-button-primary-fill-textonly-border-size:var(
    --spectrum-button-m-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-textonly-min-width:var(
    --spectrum-button-m-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-900)
    );--spectrum-button-primary-fill-textonly-padding-left:var(
    --spectrum-button-m-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-200)
    );--spectrum-button-primary-fill-textonly-padding-right:var(
    --spectrum-button-m-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-200)
    );--spectrum-button-primary-fill-textonly-height:var(
    --spectrum-button-m-primary-fill-textonly-height,var(--spectrum-global-dimension-size-400)
    );--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
    --spectrum-button-m-primary-fill-textonly-text-padding-bottom,
    var(--spectrum-global-dimension-size-115)
    ) - 1px)}:host([size=l]){--spectrum-button-primary-fill-textonly-text-padding-top:var(
    --spectrum-button-l-primary-fill-textonly-text-padding-top
    );--spectrum-button-primary-fill-texticon-text-size:var(
    --spectrum-button-l-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-200)
    );--spectrum-button-primary-fill-texticon-text-font-weight:var(
    --spectrum-button-l-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
    );--spectrum-button-primary-fill-texticon-text-line-height:var(
    --spectrum-button-l-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
    );--spectrum-button-primary-fill-texticon-icon-gap:var(
    --spectrum-button-l-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-115)
    );--spectrum-button-primary-fill-texticon-focus-ring-size:var(
    --spectrum-button-l-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
    );--spectrum-button-primary-fill-texticon-border-size:var(
    --spectrum-button-l-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-texticon-padding-left:var(
    --spectrum-button-l-primary-fill-texticon-padding-left,var(--spectrum-global-dimension-size-225)
    );--spectrum-button-primary-fill-texticon-border-radius:var(
    --spectrum-button-l-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-250)
    );--spectrum-button-primary-fill-textonly-text-padding-bottom:var(
    --spectrum-button-l-primary-fill-textonly-text-padding-bottom,var(--spectrum-global-dimension-size-130)
    );--spectrum-button-primary-fill-textonly-border-size:var(
    --spectrum-button-l-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-textonly-min-width:var(
    --spectrum-button-l-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1125)
    );--spectrum-button-primary-fill-textonly-padding-left:var(
    --spectrum-button-l-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-250)
    );--spectrum-button-primary-fill-textonly-padding-right:var(
    --spectrum-button-l-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-250)
    );--spectrum-button-primary-fill-textonly-height:var(
    --spectrum-button-l-primary-fill-textonly-height,var(--spectrum-global-dimension-size-500)
    )}:host([size=xl]){--spectrum-button-primary-fill-texticon-padding-left:var(
    --spectrum-button-xl-primary-fill-texticon-padding-left
    );--spectrum-button-primary-fill-texticon-text-size:var(
    --spectrum-button-xl-primary-fill-texticon-text-size,var(--spectrum-global-dimension-font-size-300)
    );--spectrum-button-primary-fill-texticon-text-font-weight:var(
    --spectrum-button-xl-primary-fill-texticon-text-font-weight,var(--spectrum-global-font-weight-bold)
    );--spectrum-button-primary-fill-texticon-text-line-height:var(
    --spectrum-button-xl-primary-fill-texticon-text-line-height,var(--spectrum-alias-component-text-line-height)
    );--spectrum-button-primary-fill-texticon-icon-gap:var(
    --spectrum-button-xl-primary-fill-texticon-icon-gap,var(--spectrum-global-dimension-size-125)
    );--spectrum-button-primary-fill-texticon-focus-ring-size:var(
    --spectrum-button-xl-primary-fill-texticon-focus-ring-size,var(--spectrum-alias-focus-ring-size)
    );--spectrum-button-primary-fill-texticon-border-size:var(
    --spectrum-button-xl-primary-fill-texticon-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-texticon-border-radius:var(
    --spectrum-button-xl-primary-fill-texticon-border-radius,var(--spectrum-global-dimension-size-300)
    );--spectrum-button-primary-fill-textonly-text-padding-top:var(
    --spectrum-button-xl-primary-fill-textonly-text-padding-top,var(--spectrum-global-dimension-size-150)
    );--spectrum-button-primary-fill-textonly-border-size:var(
    --spectrum-button-xl-primary-fill-textonly-border-size,var(--spectrum-alias-border-size-thick)
    );--spectrum-button-primary-fill-textonly-min-width:var(
    --spectrum-button-xl-primary-fill-textonly-min-width,var(--spectrum-global-dimension-size-1250)
    );--spectrum-button-primary-fill-textonly-padding-left:var(
    --spectrum-button-xl-primary-fill-textonly-padding-left,var(--spectrum-global-dimension-size-300)
    );--spectrum-button-primary-fill-textonly-padding-right:var(
    --spectrum-button-xl-primary-fill-textonly-padding-right,var(--spectrum-global-dimension-size-300)
    );--spectrum-button-primary-fill-textonly-height:var(
    --spectrum-button-xl-primary-fill-textonly-height,var(--spectrum-global-dimension-size-600)
    );--spectrum-button-primary-fill-textonly-text-padding-bottom:calc(var(
    --spectrum-button-xl-primary-fill-textonly-text-padding-bottom,
    var(--spectrum-global-dimension-size-175)
    ) - 1px)}:host{--spectrum-button-primary-fill-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-texticon-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-left-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-left) - var(--spectrum-button-primary-fill-texticon-border-size));--spectrum-button-primary-fill-textonly-padding-right-adjusted:calc(var(--spectrum-button-primary-fill-textonly-padding-right) - var(--spectrum-button-primary-fill-texticon-border-size))}:host([dir=ltr]){padding-left:var(
    --spectrum-button-primary-fill-textonly-padding-left-adjusted
    );padding-right:var(
    --spectrum-button-primary-fill-textonly-padding-right-adjusted
    )}:host([dir=rtl]){padding-left:var(
    --spectrum-button-primary-fill-textonly-padding-right-adjusted
    );padding-right:var(
    --spectrum-button-primary-fill-textonly-padding-left-adjusted
    )}:host{--spectrum-button-focus-ring-color:var(
    --spectrum-button-m-primary-fill-texticon-focus-ring-color-key-focus,var(--spectrum-alias-focus-ring-color)
    );border-radius:var(--spectrum-button-primary-fill-texticon-border-radius);border-style:solid;border-width:var(
    --spectrum-button-primary-fill-texticon-border-size
    );color:inherit;font-size:var(--spectrum-button-primary-fill-texticon-text-size);font-weight:var(--spectrum-button-primary-fill-texticon-text-font-weight);height:auto;min-height:var(--spectrum-button-primary-fill-textonly-height);min-width:var(--spectrum-button-primary-fill-textonly-min-width);padding-bottom:0;padding-top:0}:host(:hover),:host([active]){box-shadow:none}:host([dir=ltr]) ::slotted([slot=icon]){margin-left:calc((var(
    --spectrum-button-primary-fill-textonly-padding-left-adjusted
    ) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=rtl]) ::slotted([slot=icon]){margin-right:calc((var(
    --spectrum-button-primary-fill-textonly-padding-left-adjusted
    ) - var(--spectrum-button-primary-fill-padding-left-adjusted))*-1)}:host([dir=ltr]) slot[name=icon]+#label{padding-left:var(
    --spectrum-button-primary-fill-texticon-icon-gap
    )}:host([dir=rtl]) slot[name=icon]+#label{padding-right:var(
    --spectrum-button-primary-fill-texticon-icon-gap
    )}:host([dir=ltr]) slot[name=icon]+#label{padding-right:0}:host([dir=rtl]) slot[name=icon]+#label{padding-left:0}:host:after{border-radius:calc(var(--spectrum-button-primary-fill-texticon-border-radius) + var(
    --spectrum-alias-focus-ring-gap,
    var(--spectrum-global-dimension-static-size-25)
    ))}#label{line-height:var(
    --spectrum-button-primary-fill-texticon-text-line-height
    );padding-bottom:calc(var(--spectrum-button-primary-fill-textonly-text-padding-bottom) - var(--spectrum-button-primary-fill-textonly-border-size));padding-top:calc(var(--spectrum-button-primary-fill-textonly-text-padding-top) - var(--spectrum-button-primary-fill-textonly-border-size))}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) var(--spectrum-button-focus-ring-color)}:host([variant=white]){--spectrum-button-focus-ring-color:var(
    --spectrum-button-m-primary-fill-white-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-white)
    )}:host([variant=black]){--spectrum-button-focus-ring-color:var(
    --spectrum-button-m-primary-fill-black-texticon-focus-ring-color-key-focus,var(--spectrum-global-color-static-black)
    )}:host(:not([variant=white]):not([variant=black])[disabled]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-fill-texticon-icon-color-disabled,var(--spectrum-global-color-gray-500)
    )}:host(:not([variant=white]):not([variant=black])[disabled]) #label{color:var(
    --spectrum-button-m-primary-fill-texticon-text-color-disabled,var(--spectrum-global-color-gray-500)
    )}:host([variant=white][disabled]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-fill-white-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
    )}:host([variant=white][disabled]) #label{color:var(
    --spectrum-button-m-primary-fill-white-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-white-500)
    )}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
    --spectrum-button-m-primary-fill-white-texticon-background-color,var(--spectrum-global-color-static-white)
    )}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=white][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color,var(--spectrum-global-color-static-transparent-white-200)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-white-texticon-icon-color,var(--spectrum-global-color-static-white)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
    --spectrum-button-m-secondary-fill-white-texticon-text-color,var(--spectrum-global-color-static-white)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=fill][disabled]){background-color:var(
    --spectrum-button-m-secondary-fill-white-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
    )}:host([variant=white][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-white-texticon-icon-color,var(--spectrum-global-color-static-white)
    )}:host([variant=white][treatment=outline]:not([disabled])) #label{color:var(
    --spectrum-button-m-secondary-outline-white-texticon-text-color,var(--spectrum-global-color-static-white)
    )}:host([variant=white][treatment=outline][disabled]){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-white-200)
    )}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
    --spectrum-button-m-primary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-primary-outline-white-texticon-border-color,var(--spectrum-global-color-static-white)
    )}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-primary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-primary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
    )}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-primary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-border-color,var(--spectrum-global-color-static-transparent-white-200)
    )}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color-down,var(--spectrum-global-color-static-transparent-white-400)
    )}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=white][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-secondary-outline-white-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-white-300)
    )}:host([variant=black][disabled]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-fill-black-texticon-icon-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
    )}:host([variant=black][disabled]) #label{color:var(
    --spectrum-button-m-primary-fill-black-texticon-text-color-disabled,var(--spectrum-global-color-static-transparent-black-500)
    )}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])){background-color:var(
    --spectrum-button-m-primary-fill-black-texticon-background-color,var(--spectrum-global-color-static-black)
    )}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) ::slotted([slot=icon]){color:inherit}:host([variant=black][treatment=fill]:not([variant=secondary]):not([disabled])) #label{color:inherit}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color,var(--spectrum-global-color-static-transparent-black-200)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-black-texticon-icon-color,var(--spectrum-global-color-static-black)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])) #label{color:var(
    --spectrum-button-m-secondary-fill-black-texticon-text-color,var(--spectrum-global-color-static-black)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):hover){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled])[active]){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=fill][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=fill][disabled]){background-color:var(
    --spectrum-button-m-secondary-fill-black-texticon-background-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
    )}:host([variant=black][treatment=outline]:not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-black-texticon-icon-color,var(--spectrum-global-color-static-black)
    )}:host([variant=black][treatment=outline]:not([disabled])) #label{color:var(
    --spectrum-button-m-secondary-outline-black-texticon-text-color,var(--spectrum-global-color-static-black)
    )}:host([variant=black][treatment=outline][disabled]){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-border-color-disabled,var(--spectrum-global-color-static-transparent-black-200)
    )}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])){background-color:var(
    --spectrum-button-m-primary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-primary-outline-black-texticon-border-color,var(--spectrum-global-color-static-black)
    )}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-primary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-primary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
    )}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline]:not([variant=secondary]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-primary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-border-color,var(--spectrum-global-color-static-transparent-black-200)
    )}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):hover){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color-hover,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline][variant=secondary]:not([disabled])[active]){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color-down,var(--spectrum-global-color-static-transparent-black-400)
    )}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([variant=black][treatment=outline][variant=secondary]:not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-secondary-outline-black-texticon-background-color-key-focus,var(--spectrum-global-color-static-transparent-black-300)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-accent-fill-texticon-background-color,var(--spectrum-semantic-cta-background-color-default)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-accent-fill-texticon-text-color,var(--spectrum-global-color-static-white)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-accent-fill-texticon-background-color-hover,var(--spectrum-semantic-cta-background-color-hover)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-accent-fill-texticon-background-color-down,var(--spectrum-semantic-cta-background-color-down)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
    )}:host([treatment=fill][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-accent-fill-texticon-background-color-key-focus,var(--spectrum-semantic-cta-background-color-key-focus)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-negative-fill-texticon-background-color,var(--spectrum-global-color-static-red-600)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-fill-texticon-icon-color,var(--spectrum-global-color-static-white)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-negative-fill-texticon-text-color,var(--spectrum-global-color-static-white)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-negative-fill-texticon-background-color-hover,var(--spectrum-global-color-static-red-700)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-negative-fill-texticon-background-color-down,var(--spectrum-global-color-static-red-800)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
    )}:host([treatment=fill][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-negative-fill-texticon-background-color-key-focus,var(--spectrum-global-color-static-red-700)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-fill-texticon-icon-color,var(--spectrum-global-color-gray-50)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-primary-fill-texticon-text-color,var(--spectrum-global-color-gray-50)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-secondary-fill-texticon-background-color,var(--spectrum-global-color-gray-200)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-texticon-icon-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-secondary-fill-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
    --spectrum-button-m-secondary-fill-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-secondary-fill-texticon-background-color-down,var(--spectrum-global-color-gray-400)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
    --spectrum-button-m-secondary-fill-texticon-text-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
    --spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
    --spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-secondary-fill-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-fill-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
    --spectrum-button-m-secondary-fill-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=fill][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-secondary-fill-texticon-text-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=fill]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
    --spectrum-button-m-primary-fill-texticon-background-color-disabled,var(--spectrum-global-color-gray-200)
    )}:host([treatment=fill][disabled]){border-color:var(
    --spectrum-button-m-primary-fill-texticon-border-color-disabled,transparent
    )}:host([treatment=fill]:not([disabled])){border-color:var(
    --spectrum-button-m-primary-fill-texticon-border-color,transparent
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-accent-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-accent-outline-texticon-border-color,var(--spectrum-semantic-emphasized-border-color-default)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-outline-texticon-icon-color,var(--spectrum-semantic-emphasized-border-color-default)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-accent-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-blue-background-color-hover)
    );border-color:var(
    --spectrum-button-m-accent-outline-texticon-border-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-outline-texticon-icon-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
    --spectrum-button-m-accent-outline-texticon-text-color-hover,var(--spectrum-semantic-emphasized-border-color-hover)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-accent-outline-texticon-background-color-down,var(--spectrum-alias-transparent-blue-background-color-down)
    );border-color:var(
    --spectrum-button-m-accent-outline-texticon-border-color-down,var(--spectrum-semantic-emphasized-border-color-down)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-outline-texticon-icon-color-down,var(--spectrum-semantic-emphasized-border-color-down)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
    --spectrum-button-m-accent-outline-texticon-text-color-down,var(--spectrum-semantic-emphasized-border-color-down)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
    );border-color:var(
    --spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
    );border-color:var(
    --spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
    --spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
    --spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-accent-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-blue-background-color-key-focus)
    );border-color:var(
    --spectrum-button-m-accent-outline-texticon-border-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-accent-outline-texticon-icon-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
    --spectrum-button-m-accent-outline-texticon-text-color-key-focus,var(--spectrum-semantic-emphasized-border-color-key-focus)
    )}:host([treatment=outline][variant=accent]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-accent-outline-texticon-text-color,var(--spectrum-semantic-emphasized-border-color-default)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-negative-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-negative-outline-texticon-border-color,var(--spectrum-global-color-red-500)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-outline-texticon-icon-color,var(--spectrum-global-color-red-500)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-negative-outline-texticon-background-color-hover,var(--spectrum-alias-transparent-red-background-color-hover)
    );border-color:var(
    --spectrum-button-m-negative-outline-texticon-border-color-hover,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-outline-texticon-icon-color-hover,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
    --spectrum-button-m-negative-outline-texticon-text-color-hover,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-negative-outline-texticon-background-color-down,var(--spectrum-alias-transparent-red-background-color-down)
    );border-color:var(
    --spectrum-button-m-negative-outline-texticon-border-color-down,var(--spectrum-global-color-red-700)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-outline-texticon-icon-color-down,var(--spectrum-global-color-red-700)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
    --spectrum-button-m-negative-outline-texticon-text-color-down,var(--spectrum-global-color-red-700)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
    );border-color:var(
    --spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
    );border-color:var(
    --spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
    --spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
    --spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-negative-outline-texticon-background-color-key-focus,var(--spectrum-alias-transparent-red-background-color-key-focus)
    );border-color:var(
    --spectrum-button-m-negative-outline-texticon-border-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-negative-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
    --spectrum-button-m-negative-outline-texticon-text-color-key-focus,var(--spectrum-global-color-red-600)
    )}:host([treatment=outline][variant=negative]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-negative-outline-texticon-text-color,var(--spectrum-global-color-red-500)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
    --spectrum-button-m-primary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
    --spectrum-button-m-primary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
    --spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
    --spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-primary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
    --spectrum-button-m-primary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=primary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-primary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])){background-color:var(
    --spectrum-button-m-secondary-outline-texticon-background-color,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-secondary-outline-texticon-border-color,var(--spectrum-global-color-gray-300)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-texticon-icon-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover){background-color:var(
    --spectrum-button-m-secondary-outline-texticon-background-color-hover,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-secondary-outline-texticon-border-color-hover,var(--spectrum-global-color-gray-400)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-texticon-icon-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):hover) #label{color:var(
    --spectrum-button-m-secondary-outline-texticon-text-color-hover,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]){background-color:var(
    --spectrum-button-m-secondary-outline-texticon-background-color-down,var(--spectrum-global-color-gray-400)
    );border-color:var(
    --spectrum-button-m-secondary-outline-texticon-border-color-down,var(--spectrum-global-color-gray-500)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-texticon-icon-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])[active]) #label{color:var(
    --spectrum-button-m-secondary-outline-texticon-text-color-down,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible){background-color:var(
    --spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible){background-color:var(
    --spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).focus-visible) #label{color:var(
    --spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]):focus-visible) #label{color:var(
    --spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused){background-color:var(
    --spectrum-button-m-secondary-outline-texticon-background-color-key-focus,var(--spectrum-global-color-gray-300)
    );border-color:var(
    --spectrum-button-m-secondary-outline-texticon-border-color-key-focus,var(--spectrum-global-color-gray-400)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) ::slotted([slot=icon]){color:var(
    --spectrum-button-m-secondary-outline-texticon-icon-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled]).is-keyboardFocused) #label{color:var(
    --spectrum-button-m-secondary-outline-texticon-text-color-key-focus,var(--spectrum-global-color-gray-900)
    )}:host([treatment=outline][variant=secondary]:not([variant=white]):not([variant=black]):not([disabled])) #label{color:var(
    --spectrum-button-m-secondary-outline-texticon-text-color,var(--spectrum-global-color-gray-800)
    )}:host([treatment=outline]:not([variant=white]):not([variant=black])[disabled]){background-color:var(
    --spectrum-button-m-primary-outline-texticon-background-color-disabled,var(--spectrum-alias-background-color-transparent)
    );border-color:var(
    --spectrum-button-m-primary-outline-texticon-border-color-disabled,var(--spectrum-global-color-gray-200)
    )}@media (forced-colors:active){:host{--spectrum-button-m-accent-fill-texticon-background-color-down:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-hover:Highlight;--spectrum-button-m-accent-fill-texticon-background-color-key-focus:Highlight;--spectrum-button-m-accent-fill-texticon-background-color:ButtonText;--spectrum-button-m-accent-fill-texticon-icon-color:ButtonFace;--spectrum-button-m-accent-fill-texticon-text-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-down:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-hover:ButtonFace;--spectrum-button-m-accent-outline-texticon-background-color-key-focus:ButtonFace;--spectrum-button-m-accent-outline-texticon-border-color:ButtonText;--spectrum-button-m-accent-outline-texticon-border-color-down:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-hover:Highlight;--spectrum-button-m-accent-outline-texticon-border-color-key-focus:Highlight;--spectrum-button-m-accent-outline-texticon-icon-color:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-icon-color-key-focus:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-down:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-hover:ButtonText;--spectrum-button-m-accent-outline-texticon-text-color-key-focus:ButtonText;--spectrum-button-m-primary-fill-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-texticon-text-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-white-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-white-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-black-texticon-icon-color-disabled:GrayText;--spectrum-button-m-primary-fill-black-texticon-text-color-disabled:GrayText;--spectrum-button-m-secondary-fill-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-secondary-outline-black-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-fill-texticon-background-color-disabled:ButtonFace;--spectrum-button-m-primary-outline-texticon-background-color-disabled:ButtonFace}:host(.focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host(:focus-visible):after,:host([focused]):after{box-shadow:0 0 0 var(--spectrum-button-primary-fill-texticon-focus-ring-size) ButtonText;forced-color-adjust:none}:host([variant=accent]) #label{forced-color-adjust:none}}:host([size=s]){--spectrum-icon-tshirt-size-height:var(
    --spectrum-alias-workflow-icon-size-s
    );--spectrum-icon-tshirt-size-width:var(
    --spectrum-alias-workflow-icon-size-s
    );--spectrum-ui-icon-tshirt-size-height:var(
    --spectrum-alias-ui-icon-cornertriangle-size-75
    );--spectrum-ui-icon-tshirt-size-width:var(
    --spectrum-alias-ui-icon-cornertriangle-size-75
    )}:host([size=m]){--spectrum-icon-tshirt-size-height:var(
    --spectrum-alias-workflow-icon-size-m
    );--spectrum-icon-tshirt-size-width:var(
    --spectrum-alias-workflow-icon-size-m
    );--spectrum-ui-icon-tshirt-size-height:var(
    --spectrum-alias-ui-icon-cornertriangle-size-100
    );--spectrum-ui-icon-tshirt-size-width:var(
    --spectrum-alias-ui-icon-cornertriangle-size-100
    )}:host([size=l]){--spectrum-icon-tshirt-size-height:var(
    --spectrum-alias-workflow-icon-size-l
    );--spectrum-icon-tshirt-size-width:var(
    --spectrum-alias-workflow-icon-size-l
    );--spectrum-ui-icon-tshirt-size-height:var(
    --spectrum-alias-ui-icon-cornertriangle-size-200
    );--spectrum-ui-icon-tshirt-size-width:var(
    --spectrum-alias-ui-icon-cornertriangle-size-200
    )}:host([size=xl]){--spectrum-icon-tshirt-size-height:var(
    --spectrum-alias-workflow-icon-size-xl
    );--spectrum-icon-tshirt-size-width:var(
    --spectrum-alias-workflow-icon-size-xl
    );--spectrum-ui-icon-tshirt-size-height:var(
    --spectrum-alias-ui-icon-cornertriangle-size-300
    );--spectrum-ui-icon-tshirt-size-width:var(
    --spectrum-alias-ui-icon-cornertriangle-size-300
    )}@media (forced-colors:active){:host([treatment][disabled]){border-color:graytext}:host([treatment]:not([disabled]):hover){border-color:highlight}}
    `;/* harmony default export */ __webpack_exports__["default"] = (o);
    //# sourceMappingURL=button.css.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/first-focusable-in.dev.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/first-focusable-in.dev.js ***!
      \************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "firstFocusableIn": function() { return /* binding */ firstFocusableIn; }
    /* harmony export */ });
    const firstFocusableSelector = 'button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"]), [focusable]:not([tabindex="-1"])';
    const firstFocusableIn = (root) => {
      const firstFocusable = root.querySelector(firstFocusableSelector);
      return firstFocusable;
    };
    //# sourceMappingURL=first-focusable-in.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/focus-visible.dev.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/focus-visible.dev.js ***!
      \*******************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "FocusVisiblePolyfillMixin": function() { return /* binding */ FocusVisiblePolyfillMixin; }
    /* harmony export */ });
    let hasFocusVisible = true;
    try {
      document.body.querySelector(":focus-visible");
    } catch (error) {
      hasFocusVisible = false;
      //__webpack_require__.e(/*! import() */ "vendors-node_modules_focus-visible_dist_focus-visible_js").then(__webpack_require__.t.bind(__webpack_require__, /*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js", 19));
    }
    const FocusVisiblePolyfillMixin = (SuperClass) => {
      var _a;
      const coordinateWithPolyfill = (instance) => {
        if (instance.shadowRoot == null || instance.hasAttribute("data-js-focus-visible")) {
          return () => {
          };
        }
        if (self.applyFocusVisiblePolyfill) {
          self.applyFocusVisiblePolyfill(instance.shadowRoot);
          if (instance.manageAutoFocus) {
            instance.manageAutoFocus();
          }
        } else {
          const coordinationHandler = () => {
            if (self.applyFocusVisiblePolyfill && instance.shadowRoot) {
              self.applyFocusVisiblePolyfill(instance.shadowRoot);
            }
            if (instance.manageAutoFocus) {
              instance.manageAutoFocus();
            }
          };
          self.addEventListener("focus-visible-polyfill-ready", coordinationHandler, { once: true });
          return () => {
            self.removeEventListener("focus-visible-polyfill-ready", coordinationHandler);
          };
        }
        return () => {
        };
      };
      const $endPolyfillCoordination = Symbol("endPolyfillCoordination");
      class FocusVisibleCoordinator extends SuperClass {
        constructor() {
          super(...arguments);
          this[_a] = null;
        }
        connectedCallback() {
          super.connectedCallback && super.connectedCallback();
          if (!hasFocusVisible) {
            requestAnimationFrame(() => {
              if (this[$endPolyfillCoordination] == null) {
                this[$endPolyfillCoordination] = coordinateWithPolyfill(this);
              }
            });
          }
        }
        disconnectedCallback() {
          super.disconnectedCallback && super.disconnectedCallback();
          if (!hasFocusVisible) {
            requestAnimationFrame(() => {
              if (this[$endPolyfillCoordination] != null) {
                this[$endPolyfillCoordination]();
                this[$endPolyfillCoordination] = null;
              }
            });
          }
        }
      }
      _a = $endPolyfillCoordination;
      return FocusVisibleCoordinator;
    };
    //# sourceMappingURL=focus-visible.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/focusable.dev.js":
    /*!***************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/focusable.dev.js ***!
      \***************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Focusable": function() { return /* binding */ Focusable; }
    /* harmony export */ });
    /* harmony import */ var _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base */ "./node_modules/@spectrum-web-components/base/src/index.dev.js");
    /* harmony import */ var _spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spectrum-web-components/base/src/decorators.js */ "./node_modules/@spectrum-web-components/base/src/decorators.dev.js");
    /* harmony import */ var _focus_visible_dev_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focus-visible.dev.js */ "./node_modules/@spectrum-web-components/shared/src/focus-visible.dev.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    
    
    class Focusable extends (0,_focus_visible_dev_js__WEBPACK_IMPORTED_MODULE_2__.FocusVisiblePolyfillMixin)(_spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.SpectrumElement) {
      constructor() {
        super(...arguments);
        this.disabled = false;
        this.autofocus = false;
        this._tabIndex = 0;
        this.manipulatingTabindex = false;
      }
      get tabIndex() {
        if (this.focusElement === this) {
          const tabindex = this.hasAttribute("tabindex") ? Number(this.getAttribute("tabindex")) : NaN;
          return !isNaN(tabindex) ? tabindex : -1;
        }
        const tabIndexAttribute = parseFloat(this.hasAttribute("tabindex") ? this.getAttribute("tabindex") || "0" : "0");
        if (this.disabled || tabIndexAttribute < 0) {
          return -1;
        }
        if (!this.focusElement) {
          return tabIndexAttribute;
        }
        return this.focusElement.tabIndex;
      }
      set tabIndex(tabIndex) {
        if (this.manipulatingTabindex) {
          this.manipulatingTabindex = false;
          return;
        }
        if (this.focusElement === this) {
          if (tabIndex !== this.tabIndex) {
            this._tabIndex = tabIndex;
            const tabindex = this.disabled ? "-1" : "" + tabIndex;
            this.setAttribute("tabindex", tabindex);
          }
          return;
        }
        if (tabIndex === -1) {
          this.addEventListener("pointerdown", this.onPointerdownManagementOfTabIndex);
        } else {
          this.manipulatingTabindex = true;
          this.removeEventListener("pointerdown", this.onPointerdownManagementOfTabIndex);
        }
        if (tabIndex === -1 || this.disabled) {
          this.setAttribute("tabindex", "-1");
          this.removeAttribute("focusable");
          if (tabIndex !== -1) {
            this.manageFocusElementTabindex(tabIndex);
          }
          return;
        }
        this.setAttribute("focusable", "");
        if (this.hasAttribute("tabindex")) {
          this.removeAttribute("tabindex");
        } else {
          this.manipulatingTabindex = false;
        }
        this.manageFocusElementTabindex(tabIndex);
      }
      onPointerdownManagementOfTabIndex() {
        if (this.tabIndex === -1) {
          this.tabIndex = 0;
          this.focus({ preventScroll: true });
        }
      }
      async manageFocusElementTabindex(tabIndex) {
        if (!this.focusElement) {
          await this.updateComplete;
        }
        if (tabIndex === null) {
          this.focusElement.removeAttribute("tabindex");
        } else {
          this.focusElement.tabIndex = tabIndex;
        }
      }
      get focusElement() {
        throw new Error("Must implement focusElement getter!");
      }
      focus(options) {
        if (this.disabled || !this.focusElement) {
          return;
        }
        if (this.focusElement !== this) {
          this.focusElement.focus(options);
        } else {
          HTMLElement.prototype.focus.apply(this, [options]);
        }
      }
      blur() {
        const focusElement = this.focusElement || this;
        if (focusElement !== this) {
          focusElement.blur();
        } else {
          HTMLElement.prototype.blur.apply(this);
        }
      }
      click() {
        if (this.disabled) {
          return;
        }
        const focusElement = this.focusElement || this;
        if (focusElement !== this) {
          focusElement.click();
        } else {
          HTMLElement.prototype.click.apply(this);
        }
      }
      manageAutoFocus() {
        if (this.autofocus) {
          this.dispatchEvent(new KeyboardEvent("keydown", {
            code: "Tab"
          }));
          this.focusElement.focus();
        }
      }
      firstUpdated(changes) {
        super.firstUpdated(changes);
        if (!this.hasAttribute("tabindex") || this.getAttribute("tabindex") !== "-1") {
          this.setAttribute("focusable", "");
        }
      }
      update(changedProperties) {
        if (changedProperties.has("disabled")) {
          this.handleDisabledChanged(this.disabled, changedProperties.get("disabled"));
        }
        super.update(changedProperties);
      }
      updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("disabled") && this.disabled) {
          this.blur();
        }
      }
      async handleDisabledChanged(disabled, oldDisabled) {
        const canSetDisabled = () => this.focusElement !== this && typeof this.focusElement.disabled !== "undefined";
        if (disabled) {
          this.manipulatingTabindex = true;
          this.setAttribute("tabindex", "-1");
          await this.updateComplete;
          if (canSetDisabled()) {
            this.focusElement.disabled = true;
          } else {
            this.setAttribute("aria-disabled", "true");
          }
        } else if (oldDisabled) {
          this.manipulatingTabindex = true;
          if (this.focusElement === this) {
            this.setAttribute("tabindex", "" + this._tabIndex);
          } else {
            this.removeAttribute("tabindex");
          }
          await this.updateComplete;
          if (canSetDisabled()) {
            this.focusElement.disabled = false;
          } else {
            this.removeAttribute("aria-disabled");
          }
        }
      }
      connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => {
          requestAnimationFrame(() => {
            this.manageAutoFocus();
          });
        });
      }
    }
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
    ], Focusable.prototype, "disabled", 2);
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
    ], Focusable.prototype, "autofocus", 2);
    __decorateClass([
      (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Number })
    ], Focusable.prototype, "tabIndex", 1);
    //# sourceMappingURL=focusable.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/get-active-element.dev.js":
    /*!************************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/get-active-element.dev.js ***!
      \************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "getActiveElement": function() { return /* binding */ getActiveElement; }
    /* harmony export */ });
    const getActiveElement = (el) => {
      return el.getRootNode().activeElement;
    };
    //# sourceMappingURL=get-active-element.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/index.dev.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/index.dev.js ***!
      \***********************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "FocusVisiblePolyfillMixin": function() { return /* reexport safe */ _focus_visible_dev_js__WEBPACK_IMPORTED_MODULE_1__.FocusVisiblePolyfillMixin; },
    /* harmony export */   "Focusable": function() { return /* reexport safe */ _focusable_dev_js__WEBPACK_IMPORTED_MODULE_2__.Focusable; },
    /* harmony export */   "LikeAnchor": function() { return /* reexport safe */ _like_anchor_dev_js__WEBPACK_IMPORTED_MODULE_4__.LikeAnchor; },
    /* harmony export */   "ObserveSlotPresence": function() { return /* reexport safe */ _observe_slot_presence_dev_js__WEBPACK_IMPORTED_MODULE_5__.ObserveSlotPresence; },
    /* harmony export */   "ObserveSlotText": function() { return /* reexport safe */ _observe_slot_text_dev_js__WEBPACK_IMPORTED_MODULE_6__.ObserveSlotText; },
    /* harmony export */   "firstFocusableIn": function() { return /* reexport safe */ _first_focusable_in_dev_js__WEBPACK_IMPORTED_MODULE_0__.firstFocusableIn; },
    /* harmony export */   "getActiveElement": function() { return /* reexport safe */ _get_active_element_dev_js__WEBPACK_IMPORTED_MODULE_3__.getActiveElement; },
    /* harmony export */   "isAndroid": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isAndroid; },
    /* harmony export */   "isAppleDevice": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isAppleDevice; },
    /* harmony export */   "isChrome": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isChrome; },
    /* harmony export */   "isIOS": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isIOS; },
    /* harmony export */   "isIPad": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isIPad; },
    /* harmony export */   "isIPhone": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isIPhone; },
    /* harmony export */   "isMac": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isMac; },
    /* harmony export */   "isWebKit": function() { return /* reexport safe */ _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__.isWebKit; },
    /* harmony export */   "reparentChildren": function() { return /* reexport safe */ _reparent_children_dev_js__WEBPACK_IMPORTED_MODULE_8__.reparentChildren; }
    /* harmony export */ });
    /* harmony import */ var _first_focusable_in_dev_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-focusable-in.dev.js */ "./node_modules/@spectrum-web-components/shared/src/first-focusable-in.dev.js");
    /* harmony import */ var _focus_visible_dev_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focus-visible.dev.js */ "./node_modules/@spectrum-web-components/shared/src/focus-visible.dev.js");
    /* harmony import */ var _focusable_dev_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusable.dev.js */ "./node_modules/@spectrum-web-components/shared/src/focusable.dev.js");
    /* harmony import */ var _get_active_element_dev_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-active-element.dev.js */ "./node_modules/@spectrum-web-components/shared/src/get-active-element.dev.js");
    /* harmony import */ var _like_anchor_dev_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like-anchor.dev.js */ "./node_modules/@spectrum-web-components/shared/src/like-anchor.dev.js");
    /* harmony import */ var _observe_slot_presence_dev_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./observe-slot-presence.dev.js */ "./node_modules/@spectrum-web-components/shared/src/observe-slot-presence.dev.js");
    /* harmony import */ var _observe_slot_text_dev_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./observe-slot-text.dev.js */ "./node_modules/@spectrum-web-components/shared/src/observe-slot-text.dev.js");
    /* harmony import */ var _platform_dev_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platform.dev.js */ "./node_modules/@spectrum-web-components/shared/src/platform.dev.js");
    /* harmony import */ var _reparent_children_dev_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reparent-children.dev.js */ "./node_modules/@spectrum-web-components/shared/src/reparent-children.dev.js");
    
    
    
    
    
    
    
    
    
    //# sourceMappingURL=index.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/like-anchor.dev.js":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/like-anchor.dev.js ***!
      \*****************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "LikeAnchor": function() { return /* binding */ LikeAnchor; }
    /* harmony export */ });
    /* harmony import */ var _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base */ "./node_modules/@spectrum-web-components/base/src/index.dev.js");
    /* harmony import */ var _spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spectrum-web-components/base/src/decorators.js */ "./node_modules/@spectrum-web-components/base/src/decorators.dev.js");
    /* harmony import */ var _spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spectrum-web-components/base/src/directives.js */ "./node_modules/@spectrum-web-components/base/src/directives.dev.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    
    
    function LikeAnchor(constructor) {
      class LikeAnchorElement extends constructor {
        renderAnchor({
          id,
          className,
          ariaHidden,
          labelledby,
          tabindex,
          anchorContent = _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.html`<slot></slot>`
        }) {
          return _spectrum_web_components_base__WEBPACK_IMPORTED_MODULE_0__.html`<a
                        id=${id}
                        class=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(className)}
                        href=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.href)}
                        download=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.download)}
                        target=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.target)}
                        aria-label=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.label)}
                        aria-labelledby=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(labelledby)}
                        aria-hidden=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(ariaHidden ? "true" : void 0)}
                        tabindex=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(tabindex)}
                        rel=${(0,_spectrum_web_components_base_src_directives_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(this.rel)}
                    >${anchorContent}</a>`;
        }
      }
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ reflect: true })
      ], LikeAnchorElement.prototype, "download", 2);
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)()
      ], LikeAnchorElement.prototype, "label", 2);
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ reflect: true })
      ], LikeAnchorElement.prototype, "href", 2);
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ reflect: true })
      ], LikeAnchorElement.prototype, "target", 2);
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ reflect: true })
      ], LikeAnchorElement.prototype, "rel", 2);
      return LikeAnchorElement;
    }
    //# sourceMappingURL=like-anchor.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/observe-slot-presence.dev.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/observe-slot-presence.dev.js ***!
      \***************************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "ObserveSlotPresence": function() { return /* binding */ ObserveSlotPresence; }
    /* harmony export */ });
    /* harmony import */ var _lit_labs_observers_mutation_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit-labs/observers/mutation_controller.js */ "./node_modules/@lit-labs/observers/development/mutation_controller.js");
    
    const slotContentIsPresent = Symbol("slotContentIsPresent");
    function ObserveSlotPresence(constructor, lightDomSelector) {
      var _a;
      const lightDomSelectors = Array.isArray(lightDomSelector) ? lightDomSelector : [lightDomSelector];
      class SlotPresenceObservingElement extends constructor {
        constructor(...args) {
          super(args);
          this[_a] = /* @__PURE__ */ new Map();
          this.managePresenceObservedSlot = () => {
            let changes = false;
            lightDomSelectors.forEach((selector) => {
              const nextValue = !!this.querySelector(selector);
              const previousValue = this[slotContentIsPresent].get(selector) || false;
              changes = changes || previousValue !== nextValue;
              this[slotContentIsPresent].set(selector, !!this.querySelector(selector));
            });
            if (changes) {
              this.updateComplete.then(() => {
                this.requestUpdate();
              });
            }
          };
          new _lit_labs_observers_mutation_controller_js__WEBPACK_IMPORTED_MODULE_0__.MutationController(this, {
            config: {
              childList: true,
              subtree: true
            },
            callback: () => {
              this.managePresenceObservedSlot();
            }
          });
          this.managePresenceObservedSlot();
        }
        get slotContentIsPresent() {
          if (lightDomSelectors.length === 1) {
            return this[slotContentIsPresent].get(lightDomSelectors[0]) || false;
          } else {
            throw new Error("Multiple selectors provided to `ObserveSlotPresence` use `getSlotContentPresence(selector: string)` instead.");
          }
        }
        getSlotContentPresence(selector) {
          if (this[slotContentIsPresent].has(selector)) {
            return this[slotContentIsPresent].get(selector) || false;
          }
          throw new Error(`The provided selector \`${selector}\` is not being observed.`);
        }
      }
      _a = slotContentIsPresent;
      return SlotPresenceObservingElement;
    }
    //# sourceMappingURL=observe-slot-presence.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/observe-slot-text.dev.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/observe-slot-text.dev.js ***!
      \***********************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "ObserveSlotText": function() { return /* binding */ ObserveSlotText; }
    /* harmony export */ });
    /* harmony import */ var _spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/base/src/decorators.js */ "./node_modules/@spectrum-web-components/base/src/decorators.dev.js");
    /* harmony import */ var _lit_labs_observers_mutation_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit-labs/observers/mutation_controller.js */ "./node_modules/@lit-labs/observers/development/mutation_controller.js");
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };
    
    
    const assignedNodesList = Symbol("assignedNodes");
    function ObserveSlotText(constructor, slotName) {
      var _a;
      class SlotTextObservingElement extends constructor {
        constructor(...args) {
          super(args);
          this.slotHasContent = false;
          new _lit_labs_observers_mutation_controller_js__WEBPACK_IMPORTED_MODULE_1__.MutationController(this, {
            config: {
              characterData: true,
              subtree: true
            },
            callback: (mutationsList) => {
              for (const mutation of mutationsList) {
                if (mutation.type === "characterData") {
                  this.manageTextObservedSlot();
                  return;
                }
              }
            }
          });
        }
        manageTextObservedSlot() {
          if (!this[assignedNodesList])
            return;
          const assignedNodes = [...this[assignedNodesList]].filter((node) => {
            if (node.tagName) {
              return true;
            }
            return node.textContent ? node.textContent.trim() : false;
          });
          this.slotHasContent = assignedNodes.length > 0;
        }
        update(changedProperties) {
          if (!this.hasUpdated) {
            const { childNodes } = this;
            const textNodes = [...childNodes].filter((node) => {
              if (node.tagName) {
                return slotName ? node.getAttribute("slot") === slotName : !node.hasAttribute("slot");
              }
              return node.textContent ? node.textContent.trim() : false;
            });
            this.slotHasContent = textNodes.length > 0;
          }
          super.update(changedProperties);
        }
        firstUpdated(changedProperties) {
          super.firstUpdated(changedProperties);
          this.updateComplete.then(() => {
            this.manageTextObservedSlot();
          });
        }
      }
      _a = assignedNodesList;
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_0__.property)({ type: Boolean, attribute: false })
      ], SlotTextObservingElement.prototype, "slotHasContent", 2);
      __decorateClass([
        (0,_spectrum_web_components_base_src_decorators_js__WEBPACK_IMPORTED_MODULE_0__.queryAssignedNodes)(slotName, true)
      ], SlotTextObservingElement.prototype, _a, 2);
      return SlotTextObservingElement;
    }
    //# sourceMappingURL=observe-slot-text.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/platform.dev.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/platform.dev.js ***!
      \**************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "isAndroid": function() { return /* binding */ isAndroid; },
    /* harmony export */   "isAppleDevice": function() { return /* binding */ isAppleDevice; },
    /* harmony export */   "isChrome": function() { return /* binding */ isChrome; },
    /* harmony export */   "isIOS": function() { return /* binding */ isIOS; },
    /* harmony export */   "isIPad": function() { return /* binding */ isIPad; },
    /* harmony export */   "isIPhone": function() { return /* binding */ isIPhone; },
    /* harmony export */   "isMac": function() { return /* binding */ isMac; },
    /* harmony export */   "isWebKit": function() { return /* binding */ isWebKit; }
    /* harmony export */ });
    function testUserAgent(re) {
      return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator.userAgent) : false;
    }
    function testPlatform(re) {
      return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator.platform) : false;
    }
    function isMac() {
      return testPlatform(/^Mac/);
    }
    function isIPhone() {
      return testPlatform(/^iPhone/);
    }
    function isIPad() {
      return testPlatform(/^iPad/) || isMac() && navigator.maxTouchPoints > 1;
    }
    function isIOS() {
      return isIPhone() || isIPad();
    }
    function isAppleDevice() {
      return isMac() || isIOS();
    }
    function isWebKit() {
      return testUserAgent(/AppleWebKit/) && !isChrome();
    }
    function isChrome() {
      return testUserAgent(/Chrome/);
    }
    function isAndroid() {
      return testUserAgent(/Android/);
    }
    //# sourceMappingURL=platform.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/@spectrum-web-components/shared/src/reparent-children.dev.js":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@spectrum-web-components/shared/src/reparent-children.dev.js ***!
      \***********************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "reparentChildren": function() { return /* binding */ reparentChildren; }
    /* harmony export */ });
    function restoreChildren(placeholderItems, srcElements, cleanupCallbacks = []) {
      for (let index = 0; index < srcElements.length; ++index) {
        const srcElement = srcElements[index];
        const placeholderItem = placeholderItems[index];
        const parentElement = placeholderItem.parentElement || placeholderItem.getRootNode();
        if (cleanupCallbacks[index]) {
          cleanupCallbacks[index](srcElement);
        }
        if (parentElement && parentElement !== placeholderItem) {
          parentElement.replaceChild(srcElement, placeholderItem);
        }
        delete placeholderItems[index];
      }
      return srcElements;
    }
    const reparentChildren = (srcElements, destination, {
      position,
      prepareCallback
    } = { position: "beforeend" }) => {
      let { length } = srcElements;
      if (length === 0) {
        return () => srcElements;
      }
      let step = 1;
      let index = 0;
      if (position === "afterbegin" || position === "afterend") {
        step = -1;
        index = length - 1;
      }
      const placeholderItems = new Array(length);
      const cleanupCallbacks = new Array(length);
      const placeholderTemplate = document.createComment("placeholder for reparented element");
      do {
        const srcElement = srcElements[index];
        if (prepareCallback) {
          cleanupCallbacks[index] = prepareCallback(srcElement);
        }
        placeholderItems[index] = placeholderTemplate.cloneNode();
        const parentElement = srcElement.parentElement || srcElement.getRootNode();
        if (parentElement && parentElement !== srcElement) {
          parentElement.replaceChild(placeholderItems[index], srcElement);
        }
        destination.insertAdjacentElement(position, srcElement);
        index += step;
      } while (--length > 0);
      return function() {
        return restoreChildren(placeholderItems, srcElements, cleanupCallbacks);
      };
    };
    //# sourceMappingURL=reparent-children.dev.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit-element/development/lit-element.js":
    /*!*************************************************************!*\
      !*** ./node_modules/lit-element/development/lit-element.js ***!
      \*************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "CSSResult": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.CSSResult; },
    /* harmony export */   "LitElement": function() { return /* binding */ LitElement; },
    /* harmony export */   "ReactiveElement": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement; },
    /* harmony export */   "UpdatingElement": function() { return /* binding */ UpdatingElement; },
    /* harmony export */   "_$LE": function() { return /* binding */ _$LE; },
    /* harmony export */   "_$LH": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__._$LH; },
    /* harmony export */   "adoptStyles": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.adoptStyles; },
    /* harmony export */   "css": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.css; },
    /* harmony export */   "defaultConverter": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.defaultConverter; },
    /* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.getCompatibleStyle; },
    /* harmony export */   "html": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.html; },
    /* harmony export */   "noChange": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange; },
    /* harmony export */   "notEqual": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.notEqual; },
    /* harmony export */   "nothing": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.nothing; },
    /* harmony export */   "render": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.render; },
    /* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.supportsAdoptingStyleSheets; },
    /* harmony export */   "svg": function() { return /* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_1__.svg; },
    /* harmony export */   "unsafeCSS": function() { return /* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.unsafeCSS; }
    /* harmony export */ });
    /* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
    /* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var _a, _b, _c;
    /**
     * The main LitElement module, which defines the {@linkcode LitElement} base
     * class and related APIs.
     *
     *  LitElement components can define a template and a set of observed
     * properties. Changing an observed property triggers a re-render of the
     * element.
     *
     *  Import {@linkcode LitElement} and {@linkcode html} from this module to
     * create a component:
     *
     *  ```js
     * import {LitElement, html} from 'lit-element';
     *
     * class MyElement extends LitElement {
     *
     *   // Declare observed properties
     *   static get properties() {
     *     return {
     *       adjective: {}
     *     }
     *   }
     *
     *   constructor() {
     *     this.adjective = 'awesome';
     *   }
     *
     *   // Define the element's template
     *   render() {
     *     return html`<p>your ${adjective} template here</p>`;
     *   }
     * }
     *
     * customElements.define('my-element', MyElement);
     * ```
     *
     * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
     * templating. The `ReactiveElement` class is provided for users that want to
     * build their own custom element base classes that don't use lit-html.
     *
     * @packageDocumentation
     */
    
    
    
    
    // For backwards compatibility export ReactiveElement as UpdatingElement. Note,
    // IE transpilation requires exporting like this.
    const UpdatingElement = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement;
    const DEV_MODE = true;
    let issueWarning;
    if (DEV_MODE) {
        // Ensure warnings are issued only 1x, even if multiple versions of Lit
        // are loaded.
        const issuedWarnings = ((_a = globalThis.litIssuedWarnings) !== null && _a !== void 0 ? _a : (globalThis.litIssuedWarnings = new Set()));
        // Issue a warning, if we haven't already.
        issueWarning = (code, warning) => {
            warning += ` See https://lit.dev/msg/${code} for more information.`;
            if (!issuedWarnings.has(warning)) {
                console.warn(warning);
                issuedWarnings.add(warning);
            }
        };
    }
    /**
     * Base element class that manages element properties and attributes, and
     * renders a lit-html template.
     *
     * To define a component, subclass `LitElement` and implement a
     * `render` method to provide the component's template. Define properties
     * using the {@linkcode LitElement.properties properties} property or the
     * {@linkcode property} decorator.
     */
    class LitElement extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement {
        constructor() {
            super(...arguments);
            /**
             * @category rendering
             */
            this.renderOptions = { host: this };
            this.__childPart = undefined;
        }
        /**
         * @category rendering
         */
        createRenderRoot() {
            var _a;
            var _b;
            const renderRoot = super.createRenderRoot();
            // When adoptedStyleSheets are shimmed, they are inserted into the
            // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
            // any styles in Lit content render before adoptedStyleSheets. This is
            // important so that adoptedStyleSheets have precedence over styles in
            // the shadowRoot.
            (_a = (_b = this.renderOptions).renderBefore) !== null && _a !== void 0 ? _a : (_b.renderBefore = renderRoot.firstChild);
            return renderRoot;
        }
        /**
         * Updates the element. This method reflects property values to attributes
         * and calls `render` to render DOM via lit-html. Setting properties inside
         * this method will *not* trigger another update.
         * @param changedProperties Map of changed properties with old values
         * @category updates
         */
        update(changedProperties) {
            // Setting properties in `render` should not trigger an update. Since
            // updates are allowed after super.update, it's important to call `render`
            // before that.
            const value = this.render();
            if (!this.hasUpdated) {
                this.renderOptions.isConnected = this.isConnected;
            }
            super.update(changedProperties);
            this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_1__.render)(value, this.renderRoot, this.renderOptions);
        }
        /**
         * Invoked when the component is added to the document's DOM.
         *
         * In `connectedCallback()` you should setup tasks that should only occur when
         * the element is connected to the document. The most common of these is
         * adding event listeners to nodes external to the element, like a keydown
         * event handler added to the window.
         *
         * ```ts
         * connectedCallback() {
         *   super.connectedCallback();
         *   addEventListener('keydown', this._handleKeydown);
         * }
         * ```
         *
         * Typically, anything done in `connectedCallback()` should be undone when the
         * element is disconnected, in `disconnectedCallback()`.
         *
         * @category lifecycle
         */
        connectedCallback() {
            var _a;
            super.connectedCallback();
            (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(true);
        }
        /**
         * Invoked when the component is removed from the document's DOM.
         *
         * This callback is the main signal to the element that it may no longer be
         * used. `disconnectedCallback()` should ensure that nothing is holding a
         * reference to the element (such as event listeners added to nodes external
         * to the element), so that it is free to be garbage collected.
         *
         * ```ts
         * disconnectedCallback() {
         *   super.disconnectedCallback();
         *   window.removeEventListener('keydown', this._handleKeydown);
         * }
         * ```
         *
         * An element may be re-connected after being disconnected.
         *
         * @category lifecycle
         */
        disconnectedCallback() {
            var _a;
            super.disconnectedCallback();
            (_a = this.__childPart) === null || _a === void 0 ? void 0 : _a.setConnected(false);
        }
        /**
         * Invoked on each update to perform rendering tasks. This method may return
         * any value renderable by lit-html's `ChildPart` - typically a
         * `TemplateResult`. Setting properties inside this method will *not* trigger
         * the element to update.
         * @category rendering
         */
        render() {
            return lit_html__WEBPACK_IMPORTED_MODULE_1__.noChange;
        }
    }
    /**
     * Ensure this class is marked as `finalized` as an optimization ensuring
     * it will not needlessly try to `finalize`.
     *
     * Note this property name is a string to prevent breaking Closure JS Compiler
     * optimizations. See @lit/reactive-element for more information.
     */
    LitElement['finalized'] = true;
    // This property needs to remain unminified.
    LitElement['_$litElement$'] = true;
    // Install hydration if available
    (_b = globalThis.litElementHydrateSupport) === null || _b === void 0 ? void 0 : _b.call(globalThis, { LitElement });
    // Apply polyfills if available
    const polyfillSupport = DEV_MODE
        ? globalThis.litElementPolyfillSupportDevMode
        : globalThis.litElementPolyfillSupport;
    polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport({ LitElement });
    // DEV mode warnings
    if (DEV_MODE) {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        // Note, for compatibility with closure compilation, this access
        // needs to be as a string property index.
        LitElement['finalize'] = function () {
            const finalized = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__.ReactiveElement.finalize.call(this);
            if (!finalized) {
                return false;
            }
            const warnRemovedOrRenamed = (obj, name, renamed = false) => {
                if (obj.hasOwnProperty(name)) {
                    const ctorName = (typeof obj === 'function' ? obj : obj.constructor)
                        .name;
                    issueWarning(renamed ? 'renamed-api' : 'removed-api', `\`${name}\` is implemented on class ${ctorName}. It ` +
                        `has been ${renamed ? 'renamed' : 'removed'} ` +
                        `in this version of LitElement.`);
                }
            };
            warnRemovedOrRenamed(this, 'render');
            warnRemovedOrRenamed(this, 'getStyles', true);
            warnRemovedOrRenamed(this.prototype, 'adoptStyles');
            return true;
        };
        /* eslint-enable @typescript-eslint/no-explicit-any */
    }
    /**
     * END USERS SHOULD NOT RELY ON THIS OBJECT.
     *
     * Private exports for use by other Lit packages, not intended for use by
     * external users.
     *
     * We currently do not make a mangled rollup build of the lit-ssr code. In order
     * to keep a number of (otherwise private) top-level exports  mangled in the
     * client side code, we export a _$LE object containing those members (or
     * helper methods for accessing private fields of those members), and then
     * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
     * client-side code is being used in `dev` mode or `prod` mode.
     *
     * This has a unique name, to disambiguate it from private exports in
     * lit-html, since this module re-exports all of lit-html.
     *
     * @private
     */
    const _$LE = {
        _$attributeToProperty: (el, name, value) => {
            // eslint-disable-next-line
            el._$attributeToProperty(name, value);
        },
        // eslint-disable-next-line
        _$changedProperties: (el) => el._$changedProperties,
    };
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for LitElement usage.
    ((_c = globalThis.litElementVersions) !== null && _c !== void 0 ? _c : (globalThis.litElementVersions = [])).push('3.2.2');
    if (DEV_MODE && globalThis.litElementVersions.length > 1) {
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. Loading multiple versions ` +
            `is not recommended.`);
    }
    //# sourceMappingURL=lit-element.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/async-directive.js":
    /*!**************************************************************!*\
      !*** ./node_modules/lit-html/development/async-directive.js ***!
      \**************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "AsyncDirective": function() { return /* binding */ AsyncDirective; },
    /* harmony export */   "Directive": function() { return /* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive; },
    /* harmony export */   "PartType": function() { return /* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType; },
    /* harmony export */   "directive": function() { return /* reexport safe */ _directive_js__WEBPACK_IMPORTED_MODULE_1__.directive; }
    /* harmony export */ });
    /* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
    /* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive.js */ "./node_modules/lit-html/development/directive.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    
    
    const DEV_MODE = true;
    /**
     * Recursively walks down the tree of Parts/TemplateInstances/Directives to set
     * the connected state of directives and run `disconnected`/ `reconnected`
     * callbacks.
     *
     * @return True if there were children to disconnect; false otherwise
     */
    const notifyChildrenConnectedChanged = (parent, isConnected) => {
        var _a, _b;
        const children = parent._$disconnectableChildren;
        if (children === undefined) {
            return false;
        }
        for (const obj of children) {
            // The existence of `_$notifyDirectiveConnectionChanged` is used as a "brand" to
            // disambiguate AsyncDirectives from other DisconnectableChildren
            // (as opposed to using an instanceof check to know when to call it); the
            // redundancy of "Directive" in the API name is to avoid conflicting with
            // `_$notifyConnectionChanged`, which exists `ChildParts` which are also in
            // this list
            // Disconnect Directive (and any nested directives contained within)
            // This property needs to remain unminified.
            (_b = (_a = obj)['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(_a, isConnected, false);
            // Disconnect Part/TemplateInstance
            notifyChildrenConnectedChanged(obj, isConnected);
        }
        return true;
    };
    /**
     * Removes the given child from its parent list of disconnectable children, and
     * if the parent list becomes empty as a result, removes the parent from its
     * parent, and so forth up the tree when that causes subsequent parent lists to
     * become empty.
     */
    const removeDisconnectableFromParent = (obj) => {
        let parent, children;
        do {
            if ((parent = obj._$parent) === undefined) {
                break;
            }
            children = parent._$disconnectableChildren;
            children.delete(obj);
            obj = parent;
        } while ((children === null || children === void 0 ? void 0 : children.size) === 0);
    };
    const addDisconnectableToParent = (obj) => {
        // Climb the parent tree, creating a sparse tree of children needing
        // disconnection
        for (let parent; (parent = obj._$parent); obj = parent) {
            let children = parent._$disconnectableChildren;
            if (children === undefined) {
                parent._$disconnectableChildren = children = new Set();
            }
            else if (children.has(obj)) {
                // Once we've reached a parent that already contains this child, we
                // can short-circuit
                break;
            }
            children.add(obj);
            installDisconnectAPI(parent);
        }
    };
    /**
     * Changes the parent reference of the ChildPart, and updates the sparse tree of
     * Disconnectable children accordingly.
     *
     * Note, this method will be patched onto ChildPart instances and called from
     * the core code when parts are moved between different parents.
     */
    function reparentDisconnectables(newParent) {
        if (this._$disconnectableChildren !== undefined) {
            removeDisconnectableFromParent(this);
            this._$parent = newParent;
            addDisconnectableToParent(this);
        }
        else {
            this._$parent = newParent;
        }
    }
    /**
     * Sets the connected state on any directives contained within the committed
     * value of this part (i.e. within a TemplateInstance or iterable of
     * ChildParts) and runs their `disconnected`/`reconnected`s, as well as within
     * any directives stored on the ChildPart (when `valueOnly` is false).
     *
     * `isClearingValue` should be passed as `true` on a top-level part that is
     * clearing itself, and not as a result of recursively disconnecting directives
     * as part of a `clear` operation higher up the tree. This both ensures that any
     * directive on this ChildPart that produced a value that caused the clear
     * operation is not disconnected, and also serves as a performance optimization
     * to avoid needless bookkeeping when a subtree is going away; when clearing a
     * subtree, only the top-most part need to remove itself from the parent.
     *
     * `fromPartIndex` is passed only in the case of a partial `_clear` running as a
     * result of truncating an iterable.
     *
     * Note, this method will be patched onto ChildPart instances and called from the
     * core code when parts are cleared or the connection state is changed by the
     * user.
     */
    function notifyChildPartConnectedChanged(isConnected, isClearingValue = false, fromPartIndex = 0) {
        const value = this._$committedValue;
        const children = this._$disconnectableChildren;
        if (children === undefined || children.size === 0) {
            return;
        }
        if (isClearingValue) {
            if (Array.isArray(value)) {
                // Iterable case: Any ChildParts created by the iterable should be
                // disconnected and removed from this ChildPart's disconnectable
                // children (starting at `fromPartIndex` in the case of truncation)
                for (let i = fromPartIndex; i < value.length; i++) {
                    notifyChildrenConnectedChanged(value[i], false);
                    removeDisconnectableFromParent(value[i]);
                }
            }
            else if (value != null) {
                // TemplateInstance case: If the value has disconnectable children (will
                // only be in the case that it is a TemplateInstance), we disconnect it
                // and remove it from this ChildPart's disconnectable children
                notifyChildrenConnectedChanged(value, false);
                removeDisconnectableFromParent(value);
            }
        }
        else {
            notifyChildrenConnectedChanged(this, isConnected);
        }
    }
    /**
     * Patches disconnection API onto ChildParts.
     */
    const installDisconnectAPI = (obj) => {
        var _a, _b;
        var _c, _d;
        if (obj.type == _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
            (_a = (_c = obj)._$notifyConnectionChanged) !== null && _a !== void 0 ? _a : (_c._$notifyConnectionChanged = notifyChildPartConnectedChanged);
            (_b = (_d = obj)._$reparentDisconnectables) !== null && _b !== void 0 ? _b : (_d._$reparentDisconnectables = reparentDisconnectables);
        }
    };
    /**
     * An abstract `Directive` base class whose `disconnected` method will be
     * called when the part containing the directive is cleared as a result of
     * re-rendering, or when the user calls `part.setConnected(false)` on
     * a part that was previously rendered containing the directive (as happens
     * when e.g. a LitElement disconnects from the DOM).
     *
     * If `part.setConnected(true)` is subsequently called on a
     * containing part, the directive's `reconnected` method will be called prior
     * to its next `update`/`render` callbacks. When implementing `disconnected`,
     * `reconnected` should also be implemented to be compatible with reconnection.
     *
     * Note that updates may occur while the directive is disconnected. As such,
     * directives should generally check the `this.isConnected` flag during
     * render/update to determine whether it is safe to subscribe to resources
     * that may prevent garbage collection.
     */
    class AsyncDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
        constructor() {
            super(...arguments);
            // @internal
            this._$disconnectableChildren = undefined;
        }
        /**
         * Initialize the part with internal fields
         * @param part
         * @param parent
         * @param attributeIndex
         */
        _$initialize(part, parent, attributeIndex) {
            super._$initialize(part, parent, attributeIndex);
            addDisconnectableToParent(this);
            this.isConnected = part._$isConnected;
        }
        // This property needs to remain unminified.
        /**
         * Called from the core code when a directive is going away from a part (in
         * which case `shouldRemoveFromParent` should be true), and from the
         * `setChildrenConnected` helper function when recursively changing the
         * connection state of a tree (in which case `shouldRemoveFromParent` should
         * be false).
         *
         * @param isConnected
         * @param isClearingDirective - True when the directive itself is being
         *     removed; false when the tree is being disconnected
         * @internal
         */
        ['_$notifyDirectiveConnectionChanged'](isConnected, isClearingDirective = true) {
            var _a, _b;
            if (isConnected !== this.isConnected) {
                this.isConnected = isConnected;
                if (isConnected) {
                    (_a = this.reconnected) === null || _a === void 0 ? void 0 : _a.call(this);
                }
                else {
                    (_b = this.disconnected) === null || _b === void 0 ? void 0 : _b.call(this);
                }
            }
            if (isClearingDirective) {
                notifyChildrenConnectedChanged(this, isConnected);
                removeDisconnectableFromParent(this);
            }
        }
        /**
         * Sets the value of the directive's Part outside the normal `update`/`render`
         * lifecycle of a directive.
         *
         * This method should not be called synchronously from a directive's `update`
         * or `render`.
         *
         * @param directive The directive to update
         * @param value The value to set
         */
        setValue(value) {
            if ((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.isSingleExpression)(this.__part)) {
                this.__part._$setValue(value, this);
            }
            else {
                // this.__attributeIndex will be defined in this case, but
                // assert it in dev mode
                if (DEV_MODE && this.__attributeIndex === undefined) {
                    throw new Error(`Expected this.__attributeIndex to be a number`);
                }
                const newValues = [...this.__part._$committedValue];
                newValues[this.__attributeIndex] = value;
                this.__part._$setValue(newValues, this, 0);
            }
        }
        /**
         * User callbacks for implementing logic to release any resources/subscriptions
         * that may have been retained by this directive. Since directives may also be
         * re-connected, `reconnected` should also be implemented to restore the
         * working state of the directive prior to the next render.
         */
        disconnected() { }
        reconnected() { }
    }
    //# sourceMappingURL=async-directive.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directive-helpers.js":
    /*!****************************************************************!*\
      !*** ./node_modules/lit-html/development/directive-helpers.js ***!
      \****************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "TemplateResultType": function() { return /* binding */ TemplateResultType; },
    /* harmony export */   "clearPart": function() { return /* binding */ clearPart; },
    /* harmony export */   "getCommittedValue": function() { return /* binding */ getCommittedValue; },
    /* harmony export */   "getDirectiveClass": function() { return /* binding */ getDirectiveClass; },
    /* harmony export */   "insertPart": function() { return /* binding */ insertPart; },
    /* harmony export */   "isDirectiveResult": function() { return /* binding */ isDirectiveResult; },
    /* harmony export */   "isPrimitive": function() { return /* binding */ isPrimitive; },
    /* harmony export */   "isSingleExpression": function() { return /* binding */ isSingleExpression; },
    /* harmony export */   "isTemplateResult": function() { return /* binding */ isTemplateResult; },
    /* harmony export */   "removePart": function() { return /* binding */ removePart; },
    /* harmony export */   "setChildPartValue": function() { return /* binding */ setChildPartValue; },
    /* harmony export */   "setCommittedValue": function() { return /* binding */ setCommittedValue; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var _a, _b;
    
    const { _ChildPart: ChildPart } = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
    const ENABLE_SHADYDOM_NOPATCH = true;
    const wrap = ENABLE_SHADYDOM_NOPATCH &&
        ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) &&
        ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true
        ? window.ShadyDOM.wrap
        : (node) => node;
    /**
     * Tests if a value is a primitive value.
     *
     * See https://tc39.github.io/ecma262/#sec-typeof-operator
     */
    const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
    const TemplateResultType = {
        HTML: 1,
        SVG: 2,
    };
    /**
     * Tests if a value is a TemplateResult.
     */
    const isTemplateResult = (value, type) => type === undefined
        ? // This property needs to remain unminified.
            (value === null || value === void 0 ? void 0 : value['_$litType$']) !== undefined
        : (value === null || value === void 0 ? void 0 : value['_$litType$']) === type;
    /**
     * Tests if a value is a DirectiveResult.
     */
    const isDirectiveResult = (value) => 
    // This property needs to remain unminified.
    (value === null || value === void 0 ? void 0 : value['_$litDirective$']) !== undefined;
    /**
     * Retrieves the Directive class for a DirectiveResult
     */
    const getDirectiveClass = (value) => 
    // This property needs to remain unminified.
    value === null || value === void 0 ? void 0 : value['_$litDirective$'];
    /**
     * Tests whether a part has only a single-expression with no strings to
     * interpolate between.
     *
     * Only AttributePart and PropertyPart can have multiple expressions.
     * Multi-expression parts have a `strings` property and single-expression
     * parts do not.
     */
    const isSingleExpression = (part) => part.strings === undefined;
    const createMarker = () => document.createComment('');
    /**
     * Inserts a ChildPart into the given container ChildPart's DOM, either at the
     * end of the container ChildPart, or before the optional `refPart`.
     *
     * This does not add the part to the containerPart's committed value. That must
     * be done by callers.
     *
     * @param containerPart Part within which to add the new ChildPart
     * @param refPart Part before which to add the new ChildPart; when omitted the
     *     part added to the end of the `containerPart`
     * @param part Part to insert, or undefined to create a new part
     */
    const insertPart = (containerPart, refPart, part) => {
        var _a;
        const container = wrap(containerPart._$startNode).parentNode;
        const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
        if (part === undefined) {
            const startNode = wrap(container).insertBefore(createMarker(), refNode);
            const endNode = wrap(container).insertBefore(createMarker(), refNode);
            part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
        }
        else {
            const endNode = wrap(part._$endNode).nextSibling;
            const oldParent = part._$parent;
            const parentChanged = oldParent !== containerPart;
            if (parentChanged) {
                (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart);
                // Note that although `_$reparentDisconnectables` updates the part's
                // `_$parent` reference after unlinking from its current parent, that
                // method only exists if Disconnectables are present, so we need to
                // unconditionally set it here
                part._$parent = containerPart;
                // Since the _$isConnected getter is somewhat costly, only
                // read it once we know the subtree has directives that need
                // to be notified
                let newConnectionState;
                if (part._$notifyConnectionChanged !== undefined &&
                    (newConnectionState = containerPart._$isConnected) !==
                        oldParent._$isConnected) {
                    part._$notifyConnectionChanged(newConnectionState);
                }
            }
            if (endNode !== refNode || parentChanged) {
                let start = part._$startNode;
                while (start !== endNode) {
                    const n = wrap(start).nextSibling;
                    wrap(container).insertBefore(start, refNode);
                    start = n;
                }
            }
        }
        return part;
    };
    /**
     * Sets the value of a Part.
     *
     * Note that this should only be used to set/update the value of user-created
     * parts (i.e. those created using `insertPart`); it should not be used
     * by directives to set the value of the directive's container part. Directives
     * should return a value from `update`/`render` to update their part state.
     *
     * For directives that require setting their part value asynchronously, they
     * should extend `AsyncDirective` and call `this.setValue()`.
     *
     * @param part Part to set
     * @param value Value to set
     * @param index For `AttributePart`s, the index to set
     * @param directiveParent Used internally; should not be set by user
     */
    const setChildPartValue = (part, value, directiveParent = part) => {
        part._$setValue(value, directiveParent);
        return part;
    };
    // A sentinal value that can never appear as a part value except when set by
    // live(). Used to force a dirty-check to fail and cause a re-render.
    const RESET_VALUE = {};
    /**
     * Sets the committed value of a ChildPart directly without triggering the
     * commit stage of the part.
     *
     * This is useful in cases where a directive needs to update the part such
     * that the next update detects a value change or not. When value is omitted,
     * the next update will be guaranteed to be detected as a change.
     *
     * @param part
     * @param value
     */
    const setCommittedValue = (part, value = RESET_VALUE) => (part._$committedValue = value);
    /**
     * Returns the committed value of a ChildPart.
     *
     * The committed value is used for change detection and efficient updates of
     * the part. It can differ from the value set by the template or directive in
     * cases where the template value is transformed before being commited.
     *
     * - `TemplateResult`s are committed as a `TemplateInstance`
     * - Iterables are committed as `Array<ChildPart>`
     * - All other types are committed as the template value or value returned or
     *   set by a directive.
     *
     * @param part
     */
    const getCommittedValue = (part) => part._$committedValue;
    /**
     * Removes a ChildPart from the DOM, including any of its content.
     *
     * @param part The Part to remove
     */
    const removePart = (part) => {
        var _a;
        (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
        let start = part._$startNode;
        const end = wrap(part._$endNode).nextSibling;
        while (start !== end) {
            const n = wrap(start).nextSibling;
            wrap(start).remove();
            start = n;
        }
    };
    const clearPart = (part) => {
        part._$clear();
    };
    //# sourceMappingURL=directive-helpers.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directive.js":
    /*!********************************************************!*\
      !*** ./node_modules/lit-html/development/directive.js ***!
      \********************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Directive": function() { return /* binding */ Directive; },
    /* harmony export */   "PartType": function() { return /* binding */ PartType; },
    /* harmony export */   "directive": function() { return /* binding */ directive; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const PartType = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6,
    };
    /**
     * Creates a user-facing directive function from a Directive class. This
     * function has the same parameters as the directive's render() method.
     */
    const directive = (c) => (...values) => ({
        // This property needs to remain unminified.
        ['_$litDirective$']: c,
        values,
    });
    /**
     * Base class for creating custom directives. Users should extend this class,
     * implement `render` and/or `update`, and then pass their subclass to
     * `directive`.
     */
    class Directive {
        constructor(_partInfo) { }
        // See comment in Disconnectable interface for why this is a getter
        get _$isConnected() {
            return this._$parent._$isConnected;
        }
        /** @internal */
        _$initialize(part, parent, attributeIndex) {
            this.__part = part;
            this._$parent = parent;
            this.__attributeIndex = attributeIndex;
        }
        /** @internal */
        _$resolve(part, props) {
            return this.update(part, props);
        }
        update(_part, props) {
            return this.render(...props);
        }
    }
    //# sourceMappingURL=directive.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/class-map.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/class-map.js ***!
      \*******************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "classMap": function() { return /* binding */ classMap; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    
    class ClassMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
        constructor(partInfo) {
            var _a;
            super(partInfo);
            if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
                partInfo.name !== 'class' ||
                ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
                throw new Error('`classMap()` can only be used in the `class` attribute ' +
                    'and must be the only part in the attribute.');
            }
        }
        render(classInfo) {
            // Add spaces to ensure separation from static classes
            return (' ' +
                Object.keys(classInfo)
                    .filter((key) => classInfo[key])
                    .join(' ') +
                ' ');
        }
        update(part, [classInfo]) {
            var _a, _b;
            // Remember dynamic classes on the first render
            if (this._previousClasses === undefined) {
                this._previousClasses = new Set();
                if (part.strings !== undefined) {
                    this._staticClasses = new Set(part.strings
                        .join(' ')
                        .split(/\s/)
                        .filter((s) => s !== ''));
                }
                for (const name in classInfo) {
                    if (classInfo[name] && !((_a = this._staticClasses) === null || _a === void 0 ? void 0 : _a.has(name))) {
                        this._previousClasses.add(name);
                    }
                }
                return this.render(classInfo);
            }
            const classList = part.element.classList;
            // Remove old classes that no longer apply
            // We use forEach() instead of for-of so that we don't require down-level
            // iteration.
            this._previousClasses.forEach((name) => {
                if (!(name in classInfo)) {
                    classList.remove(name);
                    this._previousClasses.delete(name);
                }
            });
            // Add or remove classes based on their classMap value
            for (const name in classInfo) {
                // We explicitly want a loose truthy check of `value` because it seems
                // more convenient that '' and 0 are skipped.
                const value = !!classInfo[name];
                if (value !== this._previousClasses.has(name) &&
                    !((_b = this._staticClasses) === null || _b === void 0 ? void 0 : _b.has(name))) {
                    if (value) {
                        classList.add(name);
                        this._previousClasses.add(name);
                    }
                    else {
                        classList.remove(name);
                        this._previousClasses.delete(name);
                    }
                }
            }
            return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
        }
    }
    /**
     * A directive that applies dynamic CSS classes.
     *
     * This must be used in the `class` attribute and must be the only part used in
     * the attribute. It takes each property in the `classInfo` argument and adds
     * the property name to the element's `classList` if the property value is
     * truthy; if the property value is falsey, the property name is removed from
     * the element's `class`.
     *
     * For example `{foo: bar}` applies the class `foo` if the value of `bar` is
     * truthy.
     *
     * @param classInfo
     */
    const classMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(ClassMapDirective);
    //# sourceMappingURL=class-map.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/if-defined.js":
    /*!********************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
      \********************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "ifDefined": function() { return /* binding */ ifDefined; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    /**
     * For AttributeParts, sets the attribute if the value is defined and removes
     * the attribute if the value is undefined.
     *
     * For other part types, this directive is a no-op.
     */
    const ifDefined = (value) => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    //# sourceMappingURL=if-defined.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/live.js":
    /*!**************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/live.js ***!
      \**************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "live": function() { return /* binding */ live; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
    /* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    
    
    class LiveDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
        constructor(partInfo) {
            super(partInfo);
            if (!(partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.PROPERTY ||
                partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
                partInfo.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.BOOLEAN_ATTRIBUTE)) {
                throw new Error('The `live` directive is not allowed on child or event bindings');
            }
            if (!(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.isSingleExpression)(partInfo)) {
                throw new Error('`live` bindings can only contain a single expression');
            }
        }
        render(value) {
            return value;
        }
        update(part, [value]) {
            if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange || value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing) {
                return value;
            }
            const element = part.element;
            const name = part.name;
            if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.PROPERTY) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (value === element[name]) {
                    return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
                }
            }
            else if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.BOOLEAN_ATTRIBUTE) {
                if (!!value === element.hasAttribute(name)) {
                    return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
                }
            }
            else if (part.type === _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE) {
                if (element.getAttribute(name) === String(value)) {
                    return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
                }
            }
            // Resets the part's value, causing its dirty-check to fail so that it
            // always sets the value.
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setCommittedValue)(part);
            return value;
        }
    }
    /**
     * Checks binding values against live DOM values, instead of previously bound
     * values, when determining whether to update the value.
     *
     * This is useful for cases where the DOM value may change from outside of
     * lit-html, such as with a binding to an `<input>` element's `value` property,
     * a content editable elements text, or to a custom element that changes it's
     * own properties or attributes.
     *
     * In these cases if the DOM value changes, but the value set through lit-html
     * bindings hasn't, lit-html won't know to update the DOM value and will leave
     * it alone. If this is not what you want--if you want to overwrite the DOM
     * value with the bound value no matter what--use the `live()` directive:
     *
     * ```js
     * html`<input .value=${live(x)}>`
     * ```
     *
     * `live()` performs a strict equality check against the live DOM value, and if
     * the new value is equal to the live value, does nothing. This means that
     * `live()` should not be used when the binding will cause a type conversion. If
     * you use `live()` with an attribute binding, make sure that only strings are
     * passed in, or the binding will update every render.
     */
    const live = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(LiveDirective);
    //# sourceMappingURL=live.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/private-async-helpers.js":
    /*!*******************************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/private-async-helpers.js ***!
      \*******************************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "Pauser": function() { return /* binding */ Pauser; },
    /* harmony export */   "PseudoWeakRef": function() { return /* binding */ PseudoWeakRef; },
    /* harmony export */   "forAwaitOf": function() { return /* binding */ forAwaitOf; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    // Note, this module is not included in package exports so that it's private to
    // our first-party directives. If it ends up being useful, we can open it up and
    // export it.
    /**
     * Helper to iterate an AsyncIterable in its own closure.
     * @param iterable The iterable to iterate
     * @param callback The callback to call for each value. If the callback returns
     * `false`, the loop will be broken.
     */
    const forAwaitOf = async (iterable, callback) => {
        for await (const v of iterable) {
            if ((await callback(v)) === false) {
                return;
            }
        }
    };
    /**
     * Holds a reference to an instance that can be disconnected and reconnected,
     * so that a closure over the ref (e.g. in a then function to a promise) does
     * not strongly hold a ref to the instance. Approximates a WeakRef but must
     * be manually connected & disconnected to the backing instance.
     */
    class PseudoWeakRef {
        constructor(ref) {
            this._ref = ref;
        }
        /**
         * Disassociates the ref with the backing instance.
         */
        disconnect() {
            this._ref = undefined;
        }
        /**
         * Reassociates the ref with the backing instance.
         */
        reconnect(ref) {
            this._ref = ref;
        }
        /**
         * Retrieves the backing instance (will be undefined when disconnected)
         */
        deref() {
            return this._ref;
        }
    }
    /**
     * A helper to pause and resume waiting on a condition in an async function
     */
    class Pauser {
        constructor() {
            this._promise = undefined;
            this._resolve = undefined;
        }
        /**
         * When paused, returns a promise to be awaited; when unpaused, returns
         * undefined. Note that in the microtask between the pauser being resumed
         * an an await of this promise resolving, the pauser could be paused again,
         * hence callers should check the promise in a loop when awaiting.
         * @returns A promise to be awaited when paused or undefined
         */
        get() {
            return this._promise;
        }
        /**
         * Creates a promise to be awaited
         */
        pause() {
            var _a;
            (_a = this._promise) !== null && _a !== void 0 ? _a : (this._promise = new Promise((resolve) => (this._resolve = resolve)));
        }
        /**
         * Resolves the promise which may be awaited
         */
        resume() {
            var _a;
            (_a = this._resolve) === null || _a === void 0 ? void 0 : _a.call(this);
            this._promise = this._resolve = undefined;
        }
    }
    //# sourceMappingURL=private-async-helpers.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/repeat.js":
    /*!****************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/repeat.js ***!
      \****************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "repeat": function() { return /* binding */ repeat; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
    /* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    
    
    // Helper for generating a map of array item to its index over a subset
    // of an array (used to lazily generate `newKeyToIndexMap` and
    // `oldKeyToIndexMap`)
    const generateMap = (list, start, end) => {
        const map = new Map();
        for (let i = start; i <= end; i++) {
            map.set(list[i], i);
        }
        return map;
    };
    class RepeatDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
        constructor(partInfo) {
            super(partInfo);
            if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
                throw new Error('repeat() can only be used in text expressions');
            }
        }
        _getValuesAndKeys(items, keyFnOrTemplate, template) {
            let keyFn;
            if (template === undefined) {
                template = keyFnOrTemplate;
            }
            else if (keyFnOrTemplate !== undefined) {
                keyFn = keyFnOrTemplate;
            }
            const keys = [];
            const values = [];
            let index = 0;
            for (const item of items) {
                keys[index] = keyFn ? keyFn(item, index) : index;
                values[index] = template(item, index);
                index++;
            }
            return {
                values,
                keys,
            };
        }
        render(items, keyFnOrTemplate, template) {
            return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
        }
        update(containerPart, [items, keyFnOrTemplate, template]) {
            var _a;
            // Old part & key lists are retrieved from the last update (which may
            // be primed by hydration)
            const oldParts = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.getCommittedValue)(containerPart);
            const { values: newValues, keys: newKeys } = this._getValuesAndKeys(items, keyFnOrTemplate, template);
            // We check that oldParts, the committed value, is an Array as an
            // indicator that the previous value came from a repeat() call. If
            // oldParts is not an Array then this is the first render and we return
            // an array for lit-html's array handling to render, and remember the
            // keys.
            if (!Array.isArray(oldParts)) {
                this._itemKeys = newKeys;
                return newValues;
            }
            // In SSR hydration it's possible for oldParts to be an arrray but for us
            // to not have item keys because the update() hasn't run yet. We set the
            // keys to an empty array. This will cause all oldKey/newKey comparisons
            // to fail and execution to fall to the last nested brach below which
            // reuses the oldPart.
            const oldKeys = ((_a = this._itemKeys) !== null && _a !== void 0 ? _a : (this._itemKeys = []));
            // New part list will be built up as we go (either reused from
            // old parts or created for new keys in this update). This is
            // saved in the above cache at the end of the update.
            const newParts = [];
            // Maps from key to index for current and previous update; these
            // are generated lazily only when needed as a performance
            // optimization, since they are only required for multiple
            // non-contiguous changes in the list, which are less common.
            let newKeyToIndexMap;
            let oldKeyToIndexMap;
            // Head and tail pointers to old parts and new values
            let oldHead = 0;
            let oldTail = oldParts.length - 1;
            let newHead = 0;
            let newTail = newValues.length - 1;
            // Overview of O(n) reconciliation algorithm (general approach
            // based on ideas found in ivi, vue, snabbdom, etc.):
            //
            // * We start with the list of old parts and new values (and
            //   arrays of their respective keys), head/tail pointers into
            //   each, and we build up the new list of parts by updating
            //   (and when needed, moving) old parts or creating new ones.
            //   The initial scenario might look like this (for brevity of
            //   the diagrams, the numbers in the array reflect keys
            //   associated with the old parts or new values, although keys
            //   and parts/values are actually stored in parallel arrays
            //   indexed using the same head/tail pointers):
            //
            //      oldHead v                 v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [ ,  ,  ,  ,  ,  ,  ]
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
            //                                      item order
            //      newHead ^                 ^ newTail
            //
            // * Iterate old & new lists from both sides, updating,
            //   swapping, or removing parts at the head/tail locations
            //   until neither head nor tail can move.
            //
            // * Example below: keys at head pointers match, so update old
            //   part 0 in-place (no need to move it) and record part 0 in
            //   the `newParts` list. The last thing we do is advance the
            //   `oldHead` and `newHead` pointers (will be reflected in the
            //   next diagram).
            //
            //      oldHead v                 v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
            //                                      & newHead
            //      newHead ^                 ^ newTail
            //
            // * Example below: head pointers don't match, but tail
            //   pointers do, so update part 6 in place (no need to move
            //   it), and record part 6 in the `newParts` list. Last,
            //   advance the `oldTail` and `oldHead` pointers.
            //
            //         oldHead v              v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
            //                                      & newTail
            //         newHead ^              ^ newTail
            //
            // * If neither head nor tail match; next check if one of the
            //   old head/tail items was removed. We first need to generate
            //   the reverse map of new keys to index (`newKeyToIndexMap`),
            //   which is done once lazily as a performance optimization,
            //   since we only hit this case if multiple non-contiguous
            //   changes were made. Note that for contiguous removal
            //   anywhere in the list, the head and tails would advance
            //   from either end and pass each other before we get to this
            //   case and removals would be handled in the final while loop
            //   without needing to generate the map.
            //
            // * Example below: The key at `oldTail` was removed (no longer
            //   in the `newKeyToIndexMap`), so remove that part from the
            //   DOM and advance just the `oldTail` pointer.
            //
            //         oldHead v           v oldTail
            //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
            //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
            //         newHead ^           ^ newTail
            //
            // * Once head and tail cannot move, any mismatches are due to
            //   either new or moved items; if a new key is in the previous
            //   "old key to old index" map, move the old part to the new
            //   location, otherwise create and insert a new part. Note
            //   that when moving an old part we null its position in the
            //   oldParts array if it lies between the head and tail so we
            //   know to skip it when the pointers get there.
            //
            // * Example below: neither head nor tail match, and neither
            //   were removed; so find the `newHead` key in the
            //   `oldKeyToIndexMap`, and move that old part's DOM into the
            //   next head position (before `oldParts[oldHead]`). Last,
            //   null the part in the `oldPart` array since it was
            //   somewhere in the remaining oldParts still to be scanned
            //   (between the head and tail pointers) so that we know to
            //   skip that old part on future iterations.
            //
            //         oldHead v        v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
            //                                      newHead
            //         newHead ^           ^ newTail
            //
            // * Note that for moves/insertions like the one above, a part
            //   inserted at the head pointer is inserted before the
            //   current `oldParts[oldHead]`, and a part inserted at the
            //   tail pointer is inserted before `newParts[newTail+1]`. The
            //   seeming asymmetry lies in the fact that new parts are
            //   moved into place outside in, so to the right of the head
            //   pointer are old parts, and to the right of the tail
            //   pointer are new parts.
            //
            // * We always restart back from the top of the algorithm,
            //   allowing matching and simple updates in place to
            //   continue...
            //
            // * Example below: the head pointers once again match, so
            //   simply update part 1 and record it in the `newParts`
            //   array.  Last, advance both head pointers.
            //
            //         oldHead v        v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
            //                                      & newHead
            //            newHead ^        ^ newTail
            //
            // * As mentioned above, items that were moved as a result of
            //   being stuck (the final else clause in the code below) are
            //   marked with null, so we always advance old pointers over
            //   these so we're comparing the next actual old value on
            //   either end.
            //
            // * Example below: `oldHead` is null (already placed in
            //   newParts), so advance `oldHead`.
            //
            //            oldHead v     v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
            //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
            //               newHead ^     ^ newTail
            //
            // * Note it's not critical to mark old parts as null when they
            //   are moved from head to tail or tail to head, since they
            //   will be outside the pointer range and never visited again.
            //
            // * Example below: Here the old tail key matches the new head
            //   key, so the part at the `oldTail` position and move its
            //   DOM to the new head position (before `oldParts[oldHead]`).
            //   Last, advance `oldTail` and `newHead` pointers.
            //
            //               oldHead v  v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
            //                                     advance oldTail & newHead
            //               newHead ^     ^ newTail
            //
            // * Example below: Old and new head keys match, so update the
            //   old head part in place, and advance the `oldHead` and
            //   `newHead` pointers.
            //
            //               oldHead v oldTail
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
            //                                      newHead
            //                  newHead ^  ^ newTail
            //
            // * Once the new or old pointers move past each other then all
            //   we have left is additions (if old list exhausted) or
            //   removals (if new list exhausted). Those are handled in the
            //   final while loops at the end.
            //
            // * Example below: `oldHead` exceeded `oldTail`, so we're done
            //   with the main loop.  Create the remaining part and insert
            //   it at the new head position, and the update is complete.
            //
            //                   (oldHead > oldTail)
            //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
            //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
            //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
            //                     newHead ^ newTail
            //
            // * Note that the order of the if/else clauses is not
            //   important to the algorithm, as long as the null checks
            //   come first (to ensure we're always working on valid old
            //   parts) and that the final else clause comes last (since
            //   that's where the expensive moves occur). The order of
            //   remaining clauses is is just a simple guess at which cases
            //   will be most common.
            //
            // * Note, we could calculate the longest
            //   increasing subsequence (LIS) of old items in new position,
            //   and only move those not in the LIS set. However that costs
            //   O(nlogn) time and adds a bit more code, and only helps
            //   make rare types of mutations require fewer moves. The
            //   above handles removes, adds, reversal, swaps, and single
            //   moves of contiguous items in linear time, in the minimum
            //   number of moves. As the number of multiple moves where LIS
            //   might help approaches a random shuffle, the LIS
            //   optimization becomes less helpful, so it seems not worth
            //   the code at this point. Could reconsider if a compelling
            //   case arises.
            while (oldHead <= oldTail && newHead <= newTail) {
                if (oldParts[oldHead] === null) {
                    // `null` means old part at head has already been used
                    // below; skip
                    oldHead++;
                }
                else if (oldParts[oldTail] === null) {
                    // `null` means old part at tail has already been used
                    // below; skip
                    oldTail--;
                }
                else if (oldKeys[oldHead] === newKeys[newHead]) {
                    // Old head matches new head; update in place
                    newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldHead], newValues[newHead]);
                    oldHead++;
                    newHead++;
                }
                else if (oldKeys[oldTail] === newKeys[newTail]) {
                    // Old tail matches new tail; update in place
                    newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldTail], newValues[newTail]);
                    oldTail--;
                    newTail--;
                }
                else if (oldKeys[oldHead] === newKeys[newTail]) {
                    // Old head matches new tail; update and move to new tail
                    newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldHead], newValues[newTail]);
                    (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, newParts[newTail + 1], oldParts[oldHead]);
                    oldHead++;
                    newTail--;
                }
                else if (oldKeys[oldTail] === newKeys[newHead]) {
                    // Old tail matches new head; update and move to new head
                    newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldTail], newValues[newHead]);
                    (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, oldParts[oldHead], oldParts[oldTail]);
                    oldTail--;
                    newHead++;
                }
                else {
                    if (newKeyToIndexMap === undefined) {
                        // Lazily generate key-to-index maps, used for removals &
                        // moves below
                        newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
                        oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
                    }
                    if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
                        // Old head is no longer in new list; remove
                        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.removePart)(oldParts[oldHead]);
                        oldHead++;
                    }
                    else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
                        // Old tail is no longer in new list; remove
                        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.removePart)(oldParts[oldTail]);
                        oldTail--;
                    }
                    else {
                        // Any mismatches at this point are due to additions or
                        // moves; see if we have an old part we can reuse and move
                        // into place
                        const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
                        const oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;
                        if (oldPart === null) {
                            // No old part for this value; create a new one and
                            // insert it
                            const newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, oldParts[oldHead]);
                            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(newPart, newValues[newHead]);
                            newParts[newHead] = newPart;
                        }
                        else {
                            // Reuse old part
                            newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldPart, newValues[newHead]);
                            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, oldParts[oldHead], oldPart);
                            // This marks the old part as having been used, so that
                            // it will be skipped in the first two checks above
                            oldParts[oldIndex] = null;
                        }
                        newHead++;
                    }
                }
            }
            // Add parts for any remaining new values
            while (newHead <= newTail) {
                // For all remaining additions, we insert before last new
                // tail, since old pointers are no longer valid
                const newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, newParts[newTail + 1]);
                (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(newPart, newValues[newHead]);
                newParts[newHead++] = newPart;
            }
            // Remove any remaining unused old parts
            while (oldHead <= oldTail) {
                const oldPart = oldParts[oldHead++];
                if (oldPart !== null) {
                    (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.removePart)(oldPart);
                }
            }
            // Save order of new parts for next round
            this._itemKeys = newKeys;
            // Directly set part value, bypassing it's dirty-checking
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setCommittedValue)(containerPart, newParts);
            return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
        }
    }
    /**
     * A directive that repeats a series of values (usually `TemplateResults`)
     * generated from an iterable, and updates those items efficiently when the
     * iterable changes based on user-provided `keys` associated with each item.
     *
     * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
     * meaning previous DOM for a given key is moved into the new position if
     * needed, and DOM will never be reused with values for different keys (new DOM
     * will always be created for new keys). This is generally the most efficient
     * way to use `repeat` since it performs minimum unnecessary work for insertions
     * and removals.
     *
     * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
     *
     * ```js
     * html`
     *   <ol>
     *     ${repeat(this.items, (item) => item.id, (item, index) => {
     *       return html`<li>${index}: ${item.name}</li>`;
     *     })}
     *   </ol>
     * `
     * ```
     *
     * **Important**: If providing a `keyFn`, keys *must* be unique for all items in a
     * given call to `repeat`. The behavior when two or more items have the same key
     * is undefined.
     *
     * If no `keyFn` is provided, this directive will perform similar to mapping
     * items to values, and DOM will be reused against potentially different items.
     */
    const repeat = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(RepeatDirective);
    //# sourceMappingURL=repeat.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/style-map.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/style-map.js ***!
      \*******************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "styleMap": function() { return /* binding */ styleMap; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    
    class StyleMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
        constructor(partInfo) {
            var _a;
            super(partInfo);
            if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
                partInfo.name !== 'style' ||
                ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
                throw new Error('The `styleMap` directive must be used in the `style` attribute ' +
                    'and must be the only part in the attribute.');
            }
        }
        render(styleInfo) {
            return Object.keys(styleInfo).reduce((style, prop) => {
                const value = styleInfo[prop];
                if (value == null) {
                    return style;
                }
                // Convert property names from camel-case to dash-case, i.e.:
                //  `backgroundColor` -> `background-color`
                // Vendor-prefixed names need an extra `-` appended to front:
                //  `webkitAppearance` -> `-webkit-appearance`
                // Exception is any property name containing a dash, including
                // custom properties; we assume these are already dash-cased i.e.:
                //  `--my-button-color` --> `--my-button-color`
                prop = prop
                    .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                    .toLowerCase();
                return style + `${prop}:${value};`;
            }, '');
        }
        update(part, [styleInfo]) {
            const { style } = part.element;
            if (this._previousStyleProperties === undefined) {
                this._previousStyleProperties = new Set();
                for (const name in styleInfo) {
                    this._previousStyleProperties.add(name);
                }
                return this.render(styleInfo);
            }
            // Remove old properties that no longer exist in styleInfo
            // We use forEach() instead of for-of so that re don't require down-level
            // iteration.
            this._previousStyleProperties.forEach((name) => {
                // If the name isn't in styleInfo or it's null/undefined
                if (styleInfo[name] == null) {
                    this._previousStyleProperties.delete(name);
                    if (name.includes('-')) {
                        style.removeProperty(name);
                    }
                    else {
                        // Note reset using empty string (vs null) as IE11 does not always
                        // reset via null (https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style#setting_styles)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        style[name] = '';
                    }
                }
            });
            // Add or update properties
            for (const name in styleInfo) {
                const value = styleInfo[name];
                if (value != null) {
                    this._previousStyleProperties.add(name);
                    if (name.includes('-')) {
                        style.setProperty(name, value);
                    }
                    else {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        style[name] = value;
                    }
                }
            }
            return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
        }
    }
    /**
     * A directive that applies CSS properties to an element.
     *
     * `styleMap` can only be used in the `style` attribute and must be the only
     * expression in the attribute. It takes the property names in the
     * {@link StyleInfo styleInfo} object and adds the property values as CSS
     * properties. Property names with dashes (`-`) are assumed to be valid CSS
     * property names and set on the element's style object using `setProperty()`.
     * Names without dashes are assumed to be camelCased JavaScript property names
     * and set on the element's style object using property assignment, allowing the
     * style object to translate JavaScript-style names to CSS property names.
     *
     * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
     * '0'})` sets the `background-color`, `border-top` and `--size` properties.
     *
     * @param styleInfo
     * @see {@link https://lit.dev/docs/templates/directives/#stylemap styleMap code samples on Lit.dev}
     */
    const styleMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(StyleMapDirective);
    //# sourceMappingURL=style-map.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/until.js":
    /*!***************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/until.js ***!
      \***************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "UntilDirective": function() { return /* binding */ UntilDirective; },
    /* harmony export */   "until": function() { return /* binding */ until; }
    /* harmony export */ });
    /* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
    /* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
    /* harmony import */ var _async_directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../async-directive.js */ "./node_modules/lit-html/development/async-directive.js");
    /* harmony import */ var _private_async_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private-async-helpers.js */ "./node_modules/lit-html/development/directives/private-async-helpers.js");
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    
    
    
    
    const isPromise = (x) => {
        return !(0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_1__.isPrimitive)(x) && typeof x.then === 'function';
    };
    // Effectively infinity, but a SMI.
    const _infinity = 0x3fffffff;
    class UntilDirective extends _async_directive_js__WEBPACK_IMPORTED_MODULE_2__.AsyncDirective {
        constructor() {
            super(...arguments);
            this.__lastRenderedIndex = _infinity;
            this.__values = [];
            this.__weakThis = new _private_async_helpers_js__WEBPACK_IMPORTED_MODULE_3__.PseudoWeakRef(this);
            this.__pauser = new _private_async_helpers_js__WEBPACK_IMPORTED_MODULE_3__.Pauser();
        }
        render(...args) {
            var _a;
            return (_a = args.find((x) => !isPromise(x))) !== null && _a !== void 0 ? _a : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
        }
        update(_part, args) {
            const previousValues = this.__values;
            let previousLength = previousValues.length;
            this.__values = args;
            const weakThis = this.__weakThis;
            const pauser = this.__pauser;
            // If our initial render occurs while disconnected, ensure that the pauser
            // and weakThis are in the disconnected state
            if (!this.isConnected) {
                this.disconnected();
            }
            for (let i = 0; i < args.length; i++) {
                // If we've rendered a higher-priority value already, stop.
                if (i > this.__lastRenderedIndex) {
                    break;
                }
                const value = args[i];
                // Render non-Promise values immediately
                if (!isPromise(value)) {
                    this.__lastRenderedIndex = i;
                    // Since a lower-priority value will never overwrite a higher-priority
                    // synchronous value, we can stop processing now.
                    return value;
                }
                // If this is a Promise we've already handled, skip it.
                if (i < previousLength && value === previousValues[i]) {
                    continue;
                }
                // We have a Promise that we haven't seen before, so priorities may have
                // changed. Forget what we rendered before.
                this.__lastRenderedIndex = _infinity;
                previousLength = 0;
                // Note, the callback avoids closing over `this` so that the directive
                // can be gc'ed before the promise resolves; instead `this` is retrieved
                // from `weakThis`, which can break the hard reference in the closure when
                // the directive disconnects
                Promise.resolve(value).then(async (result) => {
                    // If we're disconnected, wait until we're (maybe) reconnected
                    // The while loop here handles the case that the connection state
                    // thrashes, causing the pauser to resume and then get re-paused
                    while (pauser.get()) {
                        await pauser.get();
                    }
                    // If the callback gets here and there is no `this`, it means that the
                    // directive has been disconnected and garbage collected and we don't
                    // need to do anything else
                    const _this = weakThis.deref();
                    if (_this !== undefined) {
                        const index = _this.__values.indexOf(value);
                        // If state.values doesn't contain the value, we've re-rendered without
                        // the value, so don't render it. Then, only render if the value is
                        // higher-priority than what's already been rendered.
                        if (index > -1 && index < _this.__lastRenderedIndex) {
                            _this.__lastRenderedIndex = index;
                            _this.setValue(result);
                        }
                    }
                });
            }
            return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
        }
        disconnected() {
            this.__weakThis.disconnect();
            this.__pauser.pause();
        }
        reconnected() {
            this.__weakThis.reconnect(this);
            this.__pauser.resume();
        }
    }
    /**
     * Renders one of a series of values, including Promises, to a Part.
     *
     * Values are rendered in priority order, with the first argument having the
     * highest priority and the last argument having the lowest priority. If a
     * value is a Promise, low-priority values will be rendered until it resolves.
     *
     * The priority of values can be used to create placeholder content for async
     * data. For example, a Promise with pending content can be the first,
     * highest-priority, argument, and a non_promise loading indicator template can
     * be used as the second, lower-priority, argument. The loading indicator will
     * render immediately, and the primary content will render when the Promise
     * resolves.
     *
     * Example:
     *
     * ```js
     * const content = fetch('./content.txt').then(r => r.text());
     * html`${until(content, html`<span>Loading...</span>`)}`
     * ```
     */
    const until = (0,_async_directive_js__WEBPACK_IMPORTED_MODULE_2__.directive)(UntilDirective);
    /**
     * The type of the class that powers this directive. Necessary for naming the
     * directive's return type.
     */
    // export type {UntilDirective};
    //# sourceMappingURL=until.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/directives/when.js":
    /*!**************************************************************!*\
      !*** ./node_modules/lit-html/development/directives/when.js ***!
      \**************************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "when": function() { return /* binding */ when; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    function when(condition, trueCase, falseCase) {
        return condition ? trueCase() : falseCase === null || falseCase === void 0 ? void 0 : falseCase();
    }
    //# sourceMappingURL=when.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit-html/development/lit-html.js":
    /*!*******************************************************!*\
      !*** ./node_modules/lit-html/development/lit-html.js ***!
      \*******************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "_$LH": function() { return /* binding */ _$LH; },
    /* harmony export */   "html": function() { return /* binding */ html; },
    /* harmony export */   "noChange": function() { return /* binding */ noChange; },
    /* harmony export */   "nothing": function() { return /* binding */ nothing; },
    /* harmony export */   "render": function() { return /* binding */ render; },
    /* harmony export */   "svg": function() { return /* binding */ svg; }
    /* harmony export */ });
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var _a, _b, _c, _d;
    const DEV_MODE = true;
    const ENABLE_EXTRA_SECURITY_HOOKS = true;
    const ENABLE_SHADYDOM_NOPATCH = true;
    const NODE_MODE = false;
    // Use window for browser builds because IE11 doesn't have globalThis.
    const global = NODE_MODE ? globalThis : window;
    /**
     * Useful for visualizing and logging insights into what the Lit template system is doing.
     *
     * Compiled out of prod mode builds.
     */
    const debugLogEvent = DEV_MODE
        ? (event) => {
            const shouldEmit = global
                .emitLitDebugLogEvents;
            if (!shouldEmit) {
                return;
            }
            global.dispatchEvent(new CustomEvent('lit-debug', {
                detail: event,
            }));
        }
        : undefined;
    // Used for connecting beginRender and endRender events when there are nested
    // renders when errors are thrown preventing an endRender event from being
    // called.
    let debugLogRenderId = 0;
    let issueWarning;
    if (DEV_MODE) {
        (_a = global.litIssuedWarnings) !== null && _a !== void 0 ? _a : (global.litIssuedWarnings = new Set());
        // Issue a warning, if we haven't already.
        issueWarning = (code, warning) => {
            warning += code
                ? ` See https://lit.dev/msg/${code} for more information.`
                : '';
            if (!global.litIssuedWarnings.has(warning)) {
                console.warn(warning);
                global.litIssuedWarnings.add(warning);
            }
        };
        issueWarning('dev-mode', `Lit is in dev mode. Not recommended for production!`);
    }
    const wrap = ENABLE_SHADYDOM_NOPATCH &&
        ((_b = global.ShadyDOM) === null || _b === void 0 ? void 0 : _b.inUse) &&
        ((_c = global.ShadyDOM) === null || _c === void 0 ? void 0 : _c.noPatch) === true
        ? global.ShadyDOM.wrap
        : (node) => node;
    const trustedTypes = global.trustedTypes;
    /**
     * Our TrustedTypePolicy for HTML which is declared using the html template
     * tag function.
     *
     * That HTML is a developer-authored constant, and is parsed with innerHTML
     * before any untrusted expressions have been mixed in. Therefor it is
     * considered safe by construction.
     */
    const policy = trustedTypes
        ? trustedTypes.createPolicy('lit-html', {
            createHTML: (s) => s,
        })
        : undefined;
    const identityFunction = (value) => value;
    const noopSanitizer = (_node, _name, _type) => identityFunction;
    /** Sets the global sanitizer factory. */
    const setSanitizer = (newSanitizer) => {
        if (!ENABLE_EXTRA_SECURITY_HOOKS) {
            return;
        }
        if (sanitizerFactoryInternal !== noopSanitizer) {
            throw new Error(`Attempted to overwrite existing lit-html security policy.` +
                ` setSanitizeDOMValueFactory should be called at most once.`);
        }
        sanitizerFactoryInternal = newSanitizer;
    };
    /**
     * Only used in internal tests, not a part of the public API.
     */
    const _testOnlyClearSanitizerFactoryDoNotCallOrElse = () => {
        sanitizerFactoryInternal = noopSanitizer;
    };
    const createSanitizer = (node, name, type) => {
        return sanitizerFactoryInternal(node, name, type);
    };
    // Added to an attribute name to mark the attribute as bound so we can find
    // it easily.
    const boundAttributeSuffix = '$lit$';
    // This marker is used in many syntactic positions in HTML, so it must be
    // a valid element name and attribute name. We don't support dynamic names (yet)
    // but this at least ensures that the parse tree is closer to the template
    // intention.
    const marker = `lit$${String(Math.random()).slice(9)}$`;
    // String used to tell if a comment is a marker comment
    const markerMatch = '?' + marker;
    // Text used to insert a comment marker node. We use processing instruction
    // syntax because it's slightly smaller, but parses as a comment node.
    const nodeMarker = `<${markerMatch}>`;
    const d = NODE_MODE
        ? {
            createTreeWalker() {
                return {};
            },
        }
        : document;
    // Creates a dynamic marker. We never have to search for these in the DOM.
    const createMarker = (v = '') => d.createComment(v);
    const isPrimitive = (value) => value === null || (typeof value != 'object' && typeof value != 'function');
    const isArray = Array.isArray;
    const isIterable = (value) => isArray(value) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof (value === null || value === void 0 ? void 0 : value[Symbol.iterator]) === 'function';
    const SPACE_CHAR = `[ \t\n\f\r]`;
    const ATTR_VALUE_CHAR = `[^ \t\n\f\r"'\`<>=]`;
    const NAME_CHAR = `[^\\s"'>=/]`;
    // These regexes represent the five parsing states that we care about in the
    // Template's HTML scanner. They match the *end* of the state they're named
    // after.
    // Depending on the match, we transition to a new state. If there's no match,
    // we stay in the same state.
    // Note that the regexes are stateful. We utilize lastIndex and sync it
    // across the multiple regexes used. In addition to the five regexes below
    // we also dynamically create a regex to find the matching end tags for raw
    // text elements.
    /**
     * End of text is: `<` followed by:
     *   (comment start) or (tag) or (dynamic tag binding)
     */
    const textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    const COMMENT_START = 1;
    const TAG_NAME = 2;
    const DYNAMIC_TAG_NAME = 3;
    const commentEndRegex = /-->/g;
    /**
     * Comments not started with <!--, like </{, can be ended by a single `>`
     */
    const comment2EndRegex = />/g;
    /**
     * The tagEnd regex matches the end of the "inside an opening" tag syntax
     * position. It either matches a `>`, an attribute-like sequence, or the end
     * of the string after a space (attribute-name position ending).
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#elements-attributes
     *
     * " \t\n\f\r" are HTML space characters:
     * https://infra.spec.whatwg.org/#ascii-whitespace
     *
     * So an attribute is:
     *  * The name: any character except a whitespace character, ("), ('), ">",
     *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    const tagEndRegex = new RegExp(`>|${SPACE_CHAR}(?:(${NAME_CHAR}+)(${SPACE_CHAR}*=${SPACE_CHAR}*(?:${ATTR_VALUE_CHAR}|("|')|))|$)`, 'g');
    const ENTIRE_MATCH = 0;
    const ATTRIBUTE_NAME = 1;
    const SPACES_AND_EQUALS = 2;
    const QUOTE_CHAR = 3;
    const singleQuoteAttrEndRegex = /'/g;
    const doubleQuoteAttrEndRegex = /"/g;
    /**
     * Matches the raw text elements.
     *
     * Comments are not parsed within raw text elements, so we need to search their
     * text content for marker strings.
     */
    const rawTextElement = /^(?:script|style|textarea|title)$/i;
    /** TemplateResult types */
    const HTML_RESULT = 1;
    const SVG_RESULT = 2;
    // TemplatePart types
    // IMPORTANT: these must match the values in PartType
    const ATTRIBUTE_PART = 1;
    const CHILD_PART = 2;
    const PROPERTY_PART = 3;
    const BOOLEAN_ATTRIBUTE_PART = 4;
    const EVENT_PART = 5;
    const ELEMENT_PART = 6;
    const COMMENT_PART = 7;
    /**
     * Generates a template literal tag function that returns a TemplateResult with
     * the given result type.
     */
    const tag = (type) => (strings, ...values) => {
        // Warn against templates octal escape sequences
        // We do this here rather than in render so that the warning is closer to the
        // template definition.
        if (DEV_MODE && strings.some((s) => s === undefined)) {
            console.warn('Some template strings are undefined.\n' +
                'This is probably caused by illegal octal escape sequences.');
        }
        return {
            // This property needs to remain unminified.
            ['_$litType$']: type,
            strings,
            values,
        };
    };
    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     *
     * ```ts
     * const header = (title: string) => html`<h1>${title}</h1>`;
     * ```
     *
     * The `html` tag returns a description of the DOM to render as a value. It is
     * lazy, meaning no work is done until the template is rendered. When rendering,
     * if a template comes from the same expression as a previously rendered result,
     * it's efficiently updated instead of replaced.
     */
    const html = tag(HTML_RESULT);
    /**
     * Interprets a template literal as an SVG fragment that can efficiently
     * render to and update a container.
     *
     * ```ts
     * const rect = svg`<rect width="10" height="10"></rect>`;
     *
     * const myImage = html`
     *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
     *     ${rect}
     *   </svg>`;
     * ```
     *
     * The `svg` *tag function* should only be used for SVG fragments, or elements
     * that would be contained **inside** an `<svg>` HTML element. A common error is
     * placing an `<svg>` *element* in a template tagged with the `svg` tag
     * function. The `<svg>` element is an HTML element and should be used within a
     * template tagged with the {@linkcode html} tag function.
     *
     * In LitElement usage, it's invalid to return an SVG fragment from the
     * `render()` method, as the SVG fragment will be contained within the element's
     * shadow root and thus cannot be used within an `<svg>` HTML element.
     */
    const svg = tag(SVG_RESULT);
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    const noChange = Symbol.for('lit-noChange');
    /**
     * A sentinel value that signals a ChildPart to fully clear its content.
     *
     * ```ts
     * const button = html`${
     *  user.isAdmin
     *    ? html`<button>DELETE</button>`
     *    : nothing
     * }`;
     * ```
     *
     * Prefer using `nothing` over other falsy values as it provides a consistent
     * behavior between various expression binding contexts.
     *
     * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
     * same and render no nodes. In attribute expressions, `nothing` _removes_ the
     * attribute, while `undefined` and `null` will render an empty string. In
     * property expressions `nothing` becomes `undefined`.
     */
    const nothing = Symbol.for('lit-nothing');
    /**
     * The cache of prepared templates, keyed by the tagged TemplateStringsArray
     * and _not_ accounting for the specific template tag used. This means that
     * template tags cannot be dynamic - the must statically be one of html, svg,
     * or attr. This restriction simplifies the cache lookup, which is on the hot
     * path for rendering.
     */
    const templateCache = new WeakMap();
    /**
     * Renders a value, usually a lit-html TemplateResult, to the container.
     *
     * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
     * it to the container `document.body`.
     *
     * ```js
     * import {html, render} from 'lit';
     *
     * const name = "Zoe";
     * render(html`<p>Hello, ${name}!</p>`, document.body);
     * ```
     *
     * @param value Any [renderable
     *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
     *   typically a {@linkcode TemplateResult} created by evaluating a template tag
     *   like {@linkcode html} or {@linkcode svg}.
     * @param container A DOM container to render to. The first render will append
     *   the rendered value to the container, and subsequent renders will
     *   efficiently update the rendered value if the same result type was
     *   previously rendered there.
     * @param options See {@linkcode RenderOptions} for options documentation.
     * @see
     * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
     */
    const render = (value, container, options) => {
        var _a, _b;
        if (DEV_MODE && container == null) {
            // Give a clearer error message than
            //     Uncaught TypeError: Cannot read properties of null (reading
            //     '_$litPart$')
            // which reads like an internal Lit error.
            throw new TypeError(`The container to render into may not be ${container}`);
        }
        const renderId = DEV_MODE ? debugLogRenderId++ : 0;
        const partOwnerNode = (_a = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _a !== void 0 ? _a : container;
        // This property needs to remain unminified.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let part = partOwnerNode['_$litPart$'];
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'begin render',
            id: renderId,
            value,
            container,
            options,
            part,
        });
        if (part === undefined) {
            const endNode = (_b = options === null || options === void 0 ? void 0 : options.renderBefore) !== null && _b !== void 0 ? _b : null;
            // This property needs to remain unminified.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options !== null && options !== void 0 ? options : {});
        }
        part._$setValue(value);
        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
            kind: 'end render',
            id: renderId,
            value,
            container,
            options,
            part,
        });
        return part;
    };
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
        render.setSanitizer = setSanitizer;
        render.createSanitizer = createSanitizer;
        if (DEV_MODE) {
            render._testOnlyClearSanitizerFactoryDoNotCallOrElse =
                _testOnlyClearSanitizerFactoryDoNotCallOrElse;
        }
    }
    const walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */, null, false);
    let sanitizerFactoryInternal = noopSanitizer;
    /**
     * Returns an HTML string for the given TemplateStringsArray and result type
     * (HTML or SVG), along with the case-sensitive bound attribute names in
     * template order. The HTML contains comment markers denoting the `ChildPart`s
     * and suffixes on bound attributes denoting the `AttributeParts`.
     *
     * @param strings template strings array
     * @param type HTML or SVG
     * @return Array containing `[html, attrNames]` (array returned for terseness,
     *     to avoid object fields since this code is shared with non-minified SSR
     *     code)
     */
    const getTemplateHtml = (strings, type) => {
        // Insert makers into the template HTML to represent the position of
        // bindings. The following code scans the template strings to determine the
        // syntactic position of the bindings. They can be in text position, where
        // we insert an HTML comment, attribute value position, where we insert a
        // sentinel string and re-write the attribute name, or inside a tag where
        // we insert the sentinel string.
        const l = strings.length - 1;
        // Stores the case-sensitive bound attribute names in the order of their
        // parts. ElementParts are also reflected in this array as undefined
        // rather than a string, to disambiguate from attribute bindings.
        const attrNames = [];
        let html = type === SVG_RESULT ? '<svg>' : '';
        // When we're inside a raw text tag (not it's text content), the regex
        // will still be tagRegex so we can find attributes, but will switch to
        // this regex when the tag ends.
        let rawTextEndRegex;
        // The current parsing state, represented as a reference to one of the
        // regexes
        let regex = textEndRegex;
        for (let i = 0; i < l; i++) {
            const s = strings[i];
            // The index of the end of the last attribute name. When this is
            // positive at end of a string, it means we're in an attribute value
            // position and need to rewrite the attribute name.
            // We also use a special value of -2 to indicate that we encountered
            // the end of a string in attribute name position.
            let attrNameEndIndex = -1;
            let attrName;
            let lastIndex = 0;
            let match;
            // The conditions in this loop handle the current parse state, and the
            // assignments to the `regex` variable are the state transitions.
            while (lastIndex < s.length) {
                // Make sure we start searching from where we previously left off
                regex.lastIndex = lastIndex;
                match = regex.exec(s);
                if (match === null) {
                    break;
                }
                lastIndex = regex.lastIndex;
                if (regex === textEndRegex) {
                    if (match[COMMENT_START] === '!--') {
                        regex = commentEndRegex;
                    }
                    else if (match[COMMENT_START] !== undefined) {
                        // We started a weird comment, like </{
                        regex = comment2EndRegex;
                    }
                    else if (match[TAG_NAME] !== undefined) {
                        if (rawTextElement.test(match[TAG_NAME])) {
                            // Record if we encounter a raw-text element. We'll switch to
                            // this regex at the end of the tag.
                            rawTextEndRegex = new RegExp(`</${match[TAG_NAME]}`, 'g');
                        }
                        regex = tagEndRegex;
                    }
                    else if (match[DYNAMIC_TAG_NAME] !== undefined) {
                        if (DEV_MODE) {
                            throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' +
                                'See https://lit.dev/docs/templates/expressions/#static-expressions');
                        }
                        regex = tagEndRegex;
                    }
                }
                else if (regex === tagEndRegex) {
                    if (match[ENTIRE_MATCH] === '>') {
                        // End of a tag. If we had started a raw-text element, use that
                        // regex
                        regex = rawTextEndRegex !== null && rawTextEndRegex !== void 0 ? rawTextEndRegex : textEndRegex;
                        // We may be ending an unquoted attribute value, so make sure we
                        // clear any pending attrNameEndIndex
                        attrNameEndIndex = -1;
                    }
                    else if (match[ATTRIBUTE_NAME] === undefined) {
                        // Attribute name position
                        attrNameEndIndex = -2;
                    }
                    else {
                        attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
                        attrName = match[ATTRIBUTE_NAME];
                        regex =
                            match[QUOTE_CHAR] === undefined
                                ? tagEndRegex
                                : match[QUOTE_CHAR] === '"'
                                    ? doubleQuoteAttrEndRegex
                                    : singleQuoteAttrEndRegex;
                    }
                }
                else if (regex === doubleQuoteAttrEndRegex ||
                    regex === singleQuoteAttrEndRegex) {
                    regex = tagEndRegex;
                }
                else if (regex === commentEndRegex || regex === comment2EndRegex) {
                    regex = textEndRegex;
                }
                else {
                    // Not one of the five state regexes, so it must be the dynamically
                    // created raw text regex and we're at the close of that element.
                    regex = tagEndRegex;
                    rawTextEndRegex = undefined;
                }
            }
            if (DEV_MODE) {
                // If we have a attrNameEndIndex, which indicates that we should
                // rewrite the attribute name, assert that we're in a valid attribute
                // position - either in a tag, or a quoted attribute value.
                console.assert(attrNameEndIndex === -1 ||
                    regex === tagEndRegex ||
                    regex === singleQuoteAttrEndRegex ||
                    regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
            }
            // We have four cases:
            //  1. We're in text position, and not in a raw text element
            //     (regex === textEndRegex): insert a comment marker.
            //  2. We have a non-negative attrNameEndIndex which means we need to
            //     rewrite the attribute name to add a bound attribute suffix.
            //  3. We're at the non-first binding in a multi-binding attribute, use a
            //     plain marker.
            //  4. We're somewhere else inside the tag. If we're in attribute name
            //     position (attrNameEndIndex === -2), add a sequential suffix to
            //     generate a unique attribute name.
            // Detect a binding next to self-closing tag end and insert a space to
            // separate the marker from the tag end:
            const end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
            html +=
                regex === textEndRegex
                    ? s + nodeMarker
                    : attrNameEndIndex >= 0
                        ? (attrNames.push(attrName),
                            s.slice(0, attrNameEndIndex) +
                                boundAttributeSuffix +
                                s.slice(attrNameEndIndex)) +
                            marker +
                            end
                        : s +
                            marker +
                            (attrNameEndIndex === -2 ? (attrNames.push(undefined), i) : end);
        }
        const htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
        // A security check to prevent spoofing of Lit template results.
        // In the future, we may be able to replace this with Array.isTemplateObject,
        // though we might need to make that check inside of the html and svg
        // functions, because precompiled templates don't come in as
        // TemplateStringArray objects.
        if (!Array.isArray(strings) || !strings.hasOwnProperty('raw')) {
            let message = 'invalid template strings array';
            if (DEV_MODE) {
                message = `
              Internal Error: expected template strings to be an array
              with a 'raw' field. Faking a template strings array by
              calling html or svg like an ordinary function is effectively
              the same as calling unsafeHtml and can lead to major security
              issues, e.g. opening your code up to XSS attacks.
    
              If you're using the html or svg tagged template functions normally
              and and still seeing this error, please file a bug at
              https://github.com/lit/lit/issues/new?template=bug_report.md
              and include information about your build tooling, if any.
            `
                    .trim()
                    .replace(/\n */g, '\n');
            }
            throw new Error(message);
        }
        // Returned as an array for terseness
        return [
            policy !== undefined
                ? policy.createHTML(htmlResult)
                : htmlResult,
            attrNames,
        ];
    };
    class Template {
        constructor(
        // This property needs to remain unminified.
        { strings, ['_$litType$']: type }, options) {
            /** @internal */
            this.parts = [];
            let node;
            let nodeIndex = 0;
            let attrNameIndex = 0;
            const partCount = strings.length - 1;
            const parts = this.parts;
            // Create template element
            const [html, attrNames] = getTemplateHtml(strings, type);
            this.el = Template.createElement(html, options);
            walker.currentNode = this.el.content;
            // Reparent SVG nodes into template root
            if (type === SVG_RESULT) {
                const content = this.el.content;
                const svgElement = content.firstChild;
                svgElement.remove();
                content.append(...svgElement.childNodes);
            }
            // Walk the template to find binding markers and create TemplateParts
            while ((node = walker.nextNode()) !== null && parts.length < partCount) {
                if (node.nodeType === 1) {
                    if (DEV_MODE) {
                        const tag = node.localName;
                        // Warn if `textarea` includes an expression and throw if `template`
                        // does since these are not supported. We do this by checking
                        // innerHTML for anything that looks like a marker. This catches
                        // cases like bindings in textarea there markers turn into text nodes.
                        if (/^(?:textarea|template)$/i.test(tag) &&
                            node.innerHTML.includes(marker)) {
                            const m = `Expressions are not supported inside \`${tag}\` ` +
                                `elements. See https://lit.dev/msg/expression-in-${tag} for more ` +
                                `information.`;
                            if (tag === 'template') {
                                throw new Error(m);
                            }
                            else
                                issueWarning('', m);
                        }
                    }
                    // TODO (justinfagnani): for attempted dynamic tag names, we don't
                    // increment the bindingIndex, and it'll be off by 1 in the element
                    // and off by two after it.
                    if (node.hasAttributes()) {
                        // We defer removing bound attributes because on IE we might not be
                        // iterating attributes in their template order, and would sometimes
                        // remove an attribute that we still need to create a part for.
                        const attrsToRemove = [];
                        for (const name of node.getAttributeNames()) {
                            // `name` is the name of the attribute we're iterating over, but not
                            // _neccessarily_ the name of the attribute we will create a part
                            // for. They can be different in browsers that don't iterate on
                            // attributes in source order. In that case the attrNames array
                            // contains the attribute name we'll process next. We only need the
                            // attribute name here to know if we should process a bound attribute
                            // on this element.
                            if (name.endsWith(boundAttributeSuffix) ||
                                name.startsWith(marker)) {
                                const realName = attrNames[attrNameIndex++];
                                attrsToRemove.push(name);
                                if (realName !== undefined) {
                                    // Lowercase for case-sensitive SVG attributes like viewBox
                                    const value = node.getAttribute(realName.toLowerCase() + boundAttributeSuffix);
                                    const statics = value.split(marker);
                                    const m = /([.?@])?(.*)/.exec(realName);
                                    parts.push({
                                        type: ATTRIBUTE_PART,
                                        index: nodeIndex,
                                        name: m[2],
                                        strings: statics,
                                        ctor: m[1] === '.'
                                            ? PropertyPart
                                            : m[1] === '?'
                                                ? BooleanAttributePart
                                                : m[1] === '@'
                                                    ? EventPart
                                                    : AttributePart,
                                    });
                                }
                                else {
                                    parts.push({
                                        type: ELEMENT_PART,
                                        index: nodeIndex,
                                    });
                                }
                            }
                        }
                        for (const name of attrsToRemove) {
                            node.removeAttribute(name);
                        }
                    }
                    // TODO (justinfagnani): benchmark the regex against testing for each
                    // of the 3 raw text element names.
                    if (rawTextElement.test(node.tagName)) {
                        // For raw text elements we need to split the text content on
                        // markers, create a Text node for each segment, and create
                        // a TemplatePart for each marker.
                        const strings = node.textContent.split(marker);
                        const lastIndex = strings.length - 1;
                        if (lastIndex > 0) {
                            node.textContent = trustedTypes
                                ? trustedTypes.emptyScript
                                : '';
                            // Generate a new text node for each literal section
                            // These nodes are also used as the markers for node parts
                            // We can't use empty text nodes as markers because they're
                            // normalized when cloning in IE (could simplify when
                            // IE is no longer supported)
                            for (let i = 0; i < lastIndex; i++) {
                                node.append(strings[i], createMarker());
                                // Walk past the marker node we just added
                                walker.nextNode();
                                parts.push({ type: CHILD_PART, index: ++nodeIndex });
                            }
                            // Note because this marker is added after the walker's current
                            // node, it will be walked to in the outer loop (and ignored), so
                            // we don't need to adjust nodeIndex here
                            node.append(strings[lastIndex], createMarker());
                        }
                    }
                }
                else if (node.nodeType === 8) {
                    const data = node.data;
                    if (data === markerMatch) {
                        parts.push({ type: CHILD_PART, index: nodeIndex });
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            parts.push({ type: COMMENT_PART, index: nodeIndex });
                            // Move to the end of the match
                            i += marker.length - 1;
                        }
                    }
                }
                nodeIndex++;
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'template prep',
                template: this,
                clonableTemplate: this.el,
                parts: this.parts,
                strings,
            });
        }
        // Overridden via `litHtmlPolyfillSupport` to provide platform support.
        /** @nocollapse */
        static createElement(html, _options) {
            const el = d.createElement('template');
            el.innerHTML = html;
            return el;
        }
    }
    function resolveDirective(part, value, parent = part, attributeIndex) {
        var _a, _b, _c;
        var _d;
        // Bail early if the value is explicitly noChange. Note, this means any
        // nested directive is still attached and is not run.
        if (value === noChange) {
            return value;
        }
        let currentDirective = attributeIndex !== undefined
            ? (_a = parent.__directives) === null || _a === void 0 ? void 0 : _a[attributeIndex]
            : parent.__directive;
        const nextDirectiveConstructor = isPrimitive(value)
            ? undefined
            : // This property needs to remain unminified.
                value['_$litDirective$'];
        if ((currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective.constructor) !== nextDirectiveConstructor) {
            // This property needs to remain unminified.
            (_b = currentDirective === null || currentDirective === void 0 ? void 0 : currentDirective['_$notifyDirectiveConnectionChanged']) === null || _b === void 0 ? void 0 : _b.call(currentDirective, false);
            if (nextDirectiveConstructor === undefined) {
                currentDirective = undefined;
            }
            else {
                currentDirective = new nextDirectiveConstructor(part);
                currentDirective._$initialize(part, parent, attributeIndex);
            }
            if (attributeIndex !== undefined) {
                ((_c = (_d = parent).__directives) !== null && _c !== void 0 ? _c : (_d.__directives = []))[attributeIndex] =
                    currentDirective;
            }
            else {
                parent.__directive = currentDirective;
            }
        }
        if (currentDirective !== undefined) {
            value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
        }
        return value;
    }
    /**
     * An updateable instance of a Template. Holds references to the Parts used to
     * update the template instance.
     */
    class TemplateInstance {
        constructor(template, parent) {
            /** @internal */
            this._parts = [];
            /** @internal */
            this._$disconnectableChildren = undefined;
            this._$template = template;
            this._$parent = parent;
        }
        // Called by ChildPart parentNode getter
        get parentNode() {
            return this._$parent.parentNode;
        }
        // See comment in Disconnectable interface for why this is a getter
        get _$isConnected() {
            return this._$parent._$isConnected;
        }
        // This method is separate from the constructor because we need to return a
        // DocumentFragment and we don't want to hold onto it with an instance field.
        _clone(options) {
            var _a;
            const { el: { content }, parts: parts, } = this._$template;
            const fragment = ((_a = options === null || options === void 0 ? void 0 : options.creationScope) !== null && _a !== void 0 ? _a : d).importNode(content, true);
            walker.currentNode = fragment;
            let node = walker.nextNode();
            let nodeIndex = 0;
            let partIndex = 0;
            let templatePart = parts[0];
            while (templatePart !== undefined) {
                if (nodeIndex === templatePart.index) {
                    let part;
                    if (templatePart.type === CHILD_PART) {
                        part = new ChildPart(node, node.nextSibling, this, options);
                    }
                    else if (templatePart.type === ATTRIBUTE_PART) {
                        part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
                    }
                    else if (templatePart.type === ELEMENT_PART) {
                        part = new ElementPart(node, this, options);
                    }
                    this._parts.push(part);
                    templatePart = parts[++partIndex];
                }
                if (nodeIndex !== (templatePart === null || templatePart === void 0 ? void 0 : templatePart.index)) {
                    node = walker.nextNode();
                    nodeIndex++;
                }
            }
            return fragment;
        }
        _update(values) {
            let i = 0;
            for (const part of this._parts) {
                if (part !== undefined) {
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'set part',
                        part,
                        value: values[i],
                        valueIndex: i,
                        values,
                        templateInstance: this,
                    });
                    if (part.strings !== undefined) {
                        part._$setValue(values, part, i);
                        // The number of values the part consumes is part.strings.length - 1
                        // since values are in between template spans. We increment i by 1
                        // later in the loop, so increment it by part.strings.length - 2 here
                        i += part.strings.length - 2;
                    }
                    else {
                        part._$setValue(values[i]);
                    }
                }
                i++;
            }
        }
    }
    class ChildPart {
        constructor(startNode, endNode, parent, options) {
            var _a;
            this.type = CHILD_PART;
            this._$committedValue = nothing;
            // The following fields will be patched onto ChildParts when required by
            // AsyncDirective
            /** @internal */
            this._$disconnectableChildren = undefined;
            this._$startNode = startNode;
            this._$endNode = endNode;
            this._$parent = parent;
            this.options = options;
            // Note __isConnected is only ever accessed on RootParts (i.e. when there is
            // no _$parent); the value on a non-root-part is "don't care", but checking
            // for parent would be more code
            this.__isConnected = (_a = options === null || options === void 0 ? void 0 : options.isConnected) !== null && _a !== void 0 ? _a : true;
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                // Explicitly initialize for consistent class shape.
                this._textSanitizer = undefined;
            }
        }
        // See comment in Disconnectable interface for why this is a getter
        get _$isConnected() {
            var _a, _b;
            // ChildParts that are not at the root should always be created with a
            // parent; only RootChildNode's won't, so they return the local isConnected
            // state
            return (_b = (_a = this._$parent) === null || _a === void 0 ? void 0 : _a._$isConnected) !== null && _b !== void 0 ? _b : this.__isConnected;
        }
        /**
         * The parent node into which the part renders its content.
         *
         * A ChildPart's content consists of a range of adjacent child nodes of
         * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
         * `.endNode`).
         *
         * - If both `.startNode` and `.endNode` are non-null, then the part's content
         * consists of all siblings between `.startNode` and `.endNode`, exclusively.
         *
         * - If `.startNode` is non-null but `.endNode` is null, then the part's
         * content consists of all siblings following `.startNode`, up to and
         * including the last child of `.parentNode`. If `.endNode` is non-null, then
         * `.startNode` will always be non-null.
         *
         * - If both `.endNode` and `.startNode` are null, then the part's content
         * consists of all child nodes of `.parentNode`.
         */
        get parentNode() {
            let parentNode = wrap(this._$startNode).parentNode;
            const parent = this._$parent;
            if (parent !== undefined &&
                parentNode.nodeType === 11 /* Node.DOCUMENT_FRAGMENT */) {
                // If the parentNode is a DocumentFragment, it may be because the DOM is
                // still in the cloned fragment during initial render; if so, get the real
                // parentNode the part will be committed into by asking the parent.
                parentNode = parent.parentNode;
            }
            return parentNode;
        }
        /**
         * The part's leading marker node, if any. See `.parentNode` for more
         * information.
         */
        get startNode() {
            return this._$startNode;
        }
        /**
         * The part's trailing marker node, if any. See `.parentNode` for more
         * information.
         */
        get endNode() {
            return this._$endNode;
        }
        _$setValue(value, directiveParent = this) {
            var _a;
            if (DEV_MODE && this.parentNode === null) {
                throw new Error(`This \`ChildPart\` has no \`parentNode\` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's \`innerHTML\` or \`textContent\` can do this.`);
            }
            value = resolveDirective(this, value, directiveParent);
            if (isPrimitive(value)) {
                // Non-rendering child values. It's important that these do not render
                // empty text nodes to avoid issues with preventing default <slot>
                // fallback content.
                if (value === nothing || value == null || value === '') {
                    if (this._$committedValue !== nothing) {
                        debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                            kind: 'commit nothing to child',
                            start: this._$startNode,
                            end: this._$endNode,
                            parent: this._$parent,
                            options: this.options,
                        });
                        this._$clear();
                    }
                    this._$committedValue = nothing;
                }
                else if (value !== this._$committedValue && value !== noChange) {
                    this._commitText(value);
                }
                // This property needs to remain unminified.
            }
            else if (value['_$litType$'] !== undefined) {
                this._commitTemplateResult(value);
            }
            else if (value.nodeType !== undefined) {
                if (DEV_MODE && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.host) === value) {
                    this._commitText(`[probable mistake: rendered a template's host in itself ` +
                        `(commonly caused by writing \${this} in a template]`);
                    console.warn(`Attempted to render the template host`, value, `inside itself. This is almost always a mistake, and in dev mode `, `we render some warning text. In production however, we'll `, `render it, which will usually result in an error, and sometimes `, `in the element disappearing from the DOM.`);
                    return;
                }
                this._commitNode(value);
            }
            else if (isIterable(value)) {
                this._commitIterable(value);
            }
            else {
                // Fallback, will render the string representation
                this._commitText(value);
            }
        }
        _insert(node, ref = this._$endNode) {
            return wrap(wrap(this._$startNode).parentNode).insertBefore(node, ref);
        }
        _commitNode(value) {
            var _a;
            if (this._$committedValue !== value) {
                this._$clear();
                if (ENABLE_EXTRA_SECURITY_HOOKS &&
                    sanitizerFactoryInternal !== noopSanitizer) {
                    const parentNodeName = (_a = this._$startNode.parentNode) === null || _a === void 0 ? void 0 : _a.nodeName;
                    if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
                        let message = 'Forbidden';
                        if (DEV_MODE) {
                            if (parentNodeName === 'STYLE') {
                                message =
                                    `Lit does not support binding inside style nodes. ` +
                                        `This is a security risk, as style injection attacks can ` +
                                        `exfiltrate data and spoof UIs. ` +
                                        `Consider instead using css\`...\` literals ` +
                                        `to compose styles, and make do dynamic styling with ` +
                                        `css custom properties, ::parts, <slot>s, ` +
                                        `and by mutating the DOM rather than stylesheets.`;
                            }
                            else {
                                message =
                                    `Lit does not support binding inside script nodes. ` +
                                        `This is a security risk, as it could allow arbitrary ` +
                                        `code execution.`;
                            }
                        }
                        throw new Error(message);
                    }
                }
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit node',
                    start: this._$startNode,
                    parent: this._$parent,
                    value: value,
                    options: this.options,
                });
                this._$committedValue = this._insert(value);
            }
        }
        _commitText(value) {
            // If the committed value is a primitive it means we called _commitText on
            // the previous render, and we know that this._$startNode.nextSibling is a
            // Text node. We can now just replace the text content (.data) of the node.
            if (this._$committedValue !== nothing &&
                isPrimitive(this._$committedValue)) {
                const node = wrap(this._$startNode).nextSibling;
                if (ENABLE_EXTRA_SECURITY_HOOKS) {
                    if (this._textSanitizer === undefined) {
                        this._textSanitizer = createSanitizer(node, 'data', 'property');
                    }
                    value = this._textSanitizer(value);
                }
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit text',
                    node,
                    value,
                    options: this.options,
                });
                node.data = value;
            }
            else {
                if (ENABLE_EXTRA_SECURITY_HOOKS) {
                    const textNode = document.createTextNode('');
                    this._commitNode(textNode);
                    // When setting text content, for security purposes it matters a lot
                    // what the parent is. For example, <style> and <script> need to be
                    // handled with care, while <span> does not. So first we need to put a
                    // text node into the document, then we can sanitize its content.
                    if (this._textSanitizer === undefined) {
                        this._textSanitizer = createSanitizer(textNode, 'data', 'property');
                    }
                    value = this._textSanitizer(value);
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit text',
                        node: textNode,
                        value,
                        options: this.options,
                    });
                    textNode.data = value;
                }
                else {
                    this._commitNode(d.createTextNode(value));
                    debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                        kind: 'commit text',
                        node: wrap(this._$startNode).nextSibling,
                        value,
                        options: this.options,
                    });
                }
            }
            this._$committedValue = value;
        }
        _commitTemplateResult(result) {
            var _a;
            // This property needs to remain unminified.
            const { values, ['_$litType$']: type } = result;
            // If $litType$ is a number, result is a plain TemplateResult and we get
            // the template from the template cache. If not, result is a
            // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
            // to create the <template> element the first time we see it.
            const template = typeof type === 'number'
                ? this._$getTemplate(result)
                : (type.el === undefined &&
                    (type.el = Template.createElement(type.h, this.options)),
                    type);
            if (((_a = this._$committedValue) === null || _a === void 0 ? void 0 : _a._$template) === template) {
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'template updating',
                    template,
                    instance: this._$committedValue,
                    parts: this._$committedValue._parts,
                    options: this.options,
                    values,
                });
                this._$committedValue._update(values);
            }
            else {
                const instance = new TemplateInstance(template, this);
                const fragment = instance._clone(this.options);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'template instantiated',
                    template,
                    instance,
                    parts: instance._parts,
                    options: this.options,
                    fragment,
                    values,
                });
                instance._update(values);
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'template instantiated and updated',
                    template,
                    instance,
                    parts: instance._parts,
                    options: this.options,
                    fragment,
                    values,
                });
                this._commitNode(fragment);
                this._$committedValue = instance;
            }
        }
        // Overridden via `litHtmlPolyfillSupport` to provide platform support.
        /** @internal */
        _$getTemplate(result) {
            let template = templateCache.get(result.strings);
            if (template === undefined) {
                templateCache.set(result.strings, (template = new Template(result)));
            }
            return template;
        }
        _commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If value is an array, then the previous render was of an
            // iterable and value will contain the ChildParts from the previous
            // render. If value is not an array, clear this part and make a new
            // array for ChildParts.
            if (!isArray(this._$committedValue)) {
                this._$committedValue = [];
                this._$clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            const itemParts = this._$committedValue;
            let partIndex = 0;
            let itemPart;
            for (const item of value) {
                if (partIndex === itemParts.length) {
                    // If no existing part, create a new one
                    // TODO (justinfagnani): test perf impact of always creating two parts
                    // instead of sharing parts between nodes
                    // https://github.com/lit/lit/issues/1266
                    itemParts.push((itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options)));
                }
                else {
                    // Reuse an existing part
                    itemPart = itemParts[partIndex];
                }
                itemPart._$setValue(item);
                partIndex++;
            }
            if (partIndex < itemParts.length) {
                // itemParts always have end nodes
                this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
            }
        }
        /**
         * Removes the nodes contained within this Part from the DOM.
         *
         * @param start Start node to clear from, for clearing a subset of the part's
         *     DOM (used when truncating iterables)
         * @param from  When `start` is specified, the index within the iterable from
         *     which ChildParts are being removed, used for disconnecting directives in
         *     those Parts.
         *
         * @internal
         */
        _$clear(start = wrap(this._$startNode).nextSibling, from) {
            var _a;
            (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, false, true, from);
            while (start && start !== this._$endNode) {
                const n = wrap(start).nextSibling;
                wrap(start).remove();
                start = n;
            }
        }
        /**
         * Implementation of RootPart's `isConnected`. Note that this metod
         * should only be called on `RootPart`s (the `ChildPart` returned from a
         * top-level `render()` call). It has no effect on non-root ChildParts.
         * @param isConnected Whether to set
         * @internal
         */
        setConnected(isConnected) {
            var _a;
            if (this._$parent === undefined) {
                this.__isConnected = isConnected;
                (_a = this._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(this, isConnected);
            }
            else if (DEV_MODE) {
                throw new Error('part.setConnected() may only be called on a ' +
                    'RootPart returned from render().');
            }
        }
    }
    class AttributePart {
        constructor(element, name, strings, parent, options) {
            this.type = ATTRIBUTE_PART;
            /** @internal */
            this._$committedValue = nothing;
            /** @internal */
            this._$disconnectableChildren = undefined;
            this.element = element;
            this.name = name;
            this._$parent = parent;
            this.options = options;
            if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
                this._$committedValue = new Array(strings.length - 1).fill(new String());
                this.strings = strings;
            }
            else {
                this._$committedValue = nothing;
            }
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                this._sanitizer = undefined;
            }
        }
        get tagName() {
            return this.element.tagName;
        }
        // See comment in Disconnectable interface for why this is a getter
        get _$isConnected() {
            return this._$parent._$isConnected;
        }
        /**
         * Sets the value of this part by resolving the value from possibly multiple
         * values and static strings and committing it to the DOM.
         * If this part is single-valued, `this._strings` will be undefined, and the
         * method will be called with a single value argument. If this part is
         * multi-value, `this._strings` will be defined, and the method is called
         * with the value array of the part's owning TemplateInstance, and an offset
         * into the value array from which the values should be read.
         * This method is overloaded this way to eliminate short-lived array slices
         * of the template instance values, and allow a fast-path for single-valued
         * parts.
         *
         * @param value The part value, or an array of values for multi-valued parts
         * @param valueIndex the index to start reading values from. `undefined` for
         *   single-valued parts
         * @param noCommit causes the part to not commit its value to the DOM. Used
         *   in hydration to prime attribute parts with their first-rendered value,
         *   but not set the attribute, and in SSR to no-op the DOM operation and
         *   capture the value for serialization.
         *
         * @internal
         */
        _$setValue(value, directiveParent = this, valueIndex, noCommit) {
            const strings = this.strings;
            // Whether any of the values has changed, for dirty-checking
            let change = false;
            if (strings === undefined) {
                // Single-value binding case
                value = resolveDirective(this, value, directiveParent, 0);
                change =
                    !isPrimitive(value) ||
                        (value !== this._$committedValue && value !== noChange);
                if (change) {
                    this._$committedValue = value;
                }
            }
            else {
                // Interpolation case
                const values = value;
                value = strings[0];
                let i, v;
                for (i = 0; i < strings.length - 1; i++) {
                    v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
                    if (v === noChange) {
                        // If the user-provided value is `noChange`, use the previous value
                        v = this._$committedValue[i];
                    }
                    change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
                    if (v === nothing) {
                        value = nothing;
                    }
                    else if (value !== nothing) {
                        value += (v !== null && v !== void 0 ? v : '') + strings[i + 1];
                    }
                    // We always record each value, even if one is `nothing`, for future
                    // change detection.
                    this._$committedValue[i] = v;
                }
            }
            if (change && !noCommit) {
                this._commitValue(value);
            }
        }
        /** @internal */
        _commitValue(value) {
            if (value === nothing) {
                wrap(this.element).removeAttribute(this.name);
            }
            else {
                if (ENABLE_EXTRA_SECURITY_HOOKS) {
                    if (this._sanitizer === undefined) {
                        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
                    }
                    value = this._sanitizer(value !== null && value !== void 0 ? value : '');
                }
                debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                    kind: 'commit attribute',
                    element: this.element,
                    name: this.name,
                    value,
                    options: this.options,
                });
                wrap(this.element).setAttribute(this.name, (value !== null && value !== void 0 ? value : ''));
            }
        }
    }
    class PropertyPart extends AttributePart {
        constructor() {
            super(...arguments);
            this.type = PROPERTY_PART;
        }
        /** @internal */
        _commitValue(value) {
            if (ENABLE_EXTRA_SECURITY_HOOKS) {
                if (this._sanitizer === undefined) {
                    this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
                }
                value = this._sanitizer(value);
            }
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit property',
                element: this.element,
                name: this.name,
                value,
                options: this.options,
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = value === nothing ? undefined : value;
        }
    }
    // Temporary workaround for https://crbug.com/993268
    // Currently, any attribute starting with "on" is considered to be a
    // TrustedScript source. Such boolean attributes must be set to the equivalent
    // trusted emptyScript value.
    const emptyStringForBooleanAttribute = trustedTypes
        ? trustedTypes.emptyScript
        : '';
    class BooleanAttributePart extends AttributePart {
        constructor() {
            super(...arguments);
            this.type = BOOLEAN_ATTRIBUTE_PART;
        }
        /** @internal */
        _commitValue(value) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit boolean attribute',
                element: this.element,
                name: this.name,
                value: !!(value && value !== nothing),
                options: this.options,
            });
            if (value && value !== nothing) {
                wrap(this.element).setAttribute(this.name, emptyStringForBooleanAttribute);
            }
            else {
                wrap(this.element).removeAttribute(this.name);
            }
        }
    }
    class EventPart extends AttributePart {
        constructor(element, name, strings, parent, options) {
            super(element, name, strings, parent, options);
            this.type = EVENT_PART;
            if (DEV_MODE && this.strings !== undefined) {
                throw new Error(`A \`<${element.localName}>\` has a \`@${name}=...\` listener with ` +
                    'invalid content. Event listeners in templates must have exactly ' +
                    'one expression and no surrounding text.');
            }
        }
        // EventPart does not use the base _$setValue/_resolveValue implementation
        // since the dirty checking is more complex
        /** @internal */
        _$setValue(newListener, directiveParent = this) {
            var _a;
            newListener =
                (_a = resolveDirective(this, newListener, directiveParent, 0)) !== null && _a !== void 0 ? _a : nothing;
            if (newListener === noChange) {
                return;
            }
            const oldListener = this._$committedValue;
            // If the new value is nothing or any options change we have to remove the
            // part as a listener.
            const shouldRemoveListener = (newListener === nothing && oldListener !== nothing) ||
                newListener.capture !==
                    oldListener.capture ||
                newListener.once !==
                    oldListener.once ||
                newListener.passive !==
                    oldListener.passive;
            // If the new value is not nothing and we removed the listener, we have
            // to add the part as a listener.
            const shouldAddListener = newListener !== nothing &&
                (oldListener === nothing || shouldRemoveListener);
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit event listener',
                element: this.element,
                name: this.name,
                value: newListener,
                options: this.options,
                removeListener: shouldRemoveListener,
                addListener: shouldAddListener,
                oldListener,
            });
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.name, this, oldListener);
            }
            if (shouldAddListener) {
                // Beware: IE11 and Chrome 41 don't like using the listener as the
                // options object. Figure out how to deal w/ this in IE11 - maybe
                // patch addEventListener?
                this.element.addEventListener(this.name, this, newListener);
            }
            this._$committedValue = newListener;
        }
        handleEvent(event) {
            var _a, _b;
            if (typeof this._$committedValue === 'function') {
                this._$committedValue.call((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : this.element, event);
            }
            else {
                this._$committedValue.handleEvent(event);
            }
        }
    }
    class ElementPart {
        constructor(element, parent, options) {
            this.element = element;
            this.type = ELEMENT_PART;
            /** @internal */
            this._$disconnectableChildren = undefined;
            this._$parent = parent;
            this.options = options;
        }
        // See comment in Disconnectable interface for why this is a getter
        get _$isConnected() {
            return this._$parent._$isConnected;
        }
        _$setValue(value) {
            debugLogEvent === null || debugLogEvent === void 0 ? void 0 : debugLogEvent({
                kind: 'commit to element binding',
                element: this.element,
                value,
                options: this.options,
            });
            resolveDirective(this, value);
        }
    }
    /**
     * END USERS SHOULD NOT RELY ON THIS OBJECT.
     *
     * Private exports for use by other Lit packages, not intended for use by
     * external users.
     *
     * We currently do not make a mangled rollup build of the lit-ssr code. In order
     * to keep a number of (otherwise private) top-level exports  mangled in the
     * client side code, we export a _$LH object containing those members (or
     * helper methods for accessing private fields of those members), and then
     * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
     * client-side code is being used in `dev` mode or `prod` mode.
     *
     * This has a unique name, to disambiguate it from private exports in
     * lit-element, which re-exports all of lit-html.
     *
     * @private
     */
    const _$LH = {
        // Used in lit-ssr
        _boundAttributeSuffix: boundAttributeSuffix,
        _marker: marker,
        _markerMatch: markerMatch,
        _HTML_RESULT: HTML_RESULT,
        _getTemplateHtml: getTemplateHtml,
        // Used in hydrate
        _TemplateInstance: TemplateInstance,
        _isIterable: isIterable,
        _resolveDirective: resolveDirective,
        // Used in tests and private-ssr-support
        _ChildPart: ChildPart,
        _AttributePart: AttributePart,
        _BooleanAttributePart: BooleanAttributePart,
        _EventPart: EventPart,
        _PropertyPart: PropertyPart,
        _ElementPart: ElementPart,
    };
    // Apply polyfills if available
    const polyfillSupport = DEV_MODE
        ? global.litHtmlPolyfillSupportDevMode
        : global.litHtmlPolyfillSupport;
    polyfillSupport === null || polyfillSupport === void 0 ? void 0 : polyfillSupport(Template, ChildPart);
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for lit-html usage.
    ((_d = global.litHtmlVersions) !== null && _d !== void 0 ? _d : (global.litHtmlVersions = [])).push('2.3.0');
    if (DEV_MODE && global.litHtmlVersions.length > 1) {
        issueWarning('multiple-versions', `Multiple versions of Lit loaded. ` +
            `Loading multiple versions is not recommended.`);
    }
    //# sourceMappingURL=lit-html.js.map
    
    /***/ }),
    
    /***/ "./node_modules/lit/decorators.js":
    /*!****************************************!*\
      !*** ./node_modules/lit/decorators.js ***!
      \****************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "customElement": function() { return /* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement; },
    /* harmony export */   "eventOptions": function() { return /* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions; },
    /* harmony export */   "property": function() { return /* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property; },
    /* harmony export */   "query": function() { return /* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query; },
    /* harmony export */   "queryAll": function() { return /* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll; },
    /* harmony export */   "queryAssignedElements": function() { return /* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements; },
    /* harmony export */   "queryAssignedNodes": function() { return /* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes; },
    /* harmony export */   "queryAsync": function() { return /* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync; },
    /* harmony export */   "state": function() { return /* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state; }
    /* harmony export */ });
    /* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
    /* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
    /* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
    /* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
    /* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
    /* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
    /* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
    /* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
    /* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");
    
    //# sourceMappingURL=decorators.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/class-map.js":
    /*!**************************************************!*\
      !*** ./node_modules/lit/directives/class-map.js ***!
      \**************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "classMap": function() { return /* reexport safe */ lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.classMap; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/development/directives/class-map.js");
    
    //# sourceMappingURL=class-map.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/if-defined.js":
    /*!***************************************************!*\
      !*** ./node_modules/lit/directives/if-defined.js ***!
      \***************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "ifDefined": function() { return /* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");
    
    //# sourceMappingURL=if-defined.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/live.js":
    /*!*********************************************!*\
      !*** ./node_modules/lit/directives/live.js ***!
      \*********************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "live": function() { return /* reexport safe */ lit_html_directives_live_js__WEBPACK_IMPORTED_MODULE_0__.live; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_live_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/live.js */ "./node_modules/lit-html/development/directives/live.js");
    
    //# sourceMappingURL=live.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/repeat.js":
    /*!***********************************************!*\
      !*** ./node_modules/lit/directives/repeat.js ***!
      \***********************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "repeat": function() { return /* reexport safe */ lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__.repeat; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/repeat.js */ "./node_modules/lit-html/development/directives/repeat.js");
    
    //# sourceMappingURL=repeat.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/style-map.js":
    /*!**************************************************!*\
      !*** ./node_modules/lit/directives/style-map.js ***!
      \**************************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "styleMap": function() { return /* reexport safe */ lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__.styleMap; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/style-map.js */ "./node_modules/lit-html/development/directives/style-map.js");
    
    //# sourceMappingURL=style-map.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/until.js":
    /*!**********************************************!*\
      !*** ./node_modules/lit/directives/until.js ***!
      \**********************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "UntilDirective": function() { return /* reexport safe */ lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_0__.UntilDirective; },
    /* harmony export */   "until": function() { return /* reexport safe */ lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_0__.until; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_until_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/until.js */ "./node_modules/lit-html/development/directives/until.js");
    
    //# sourceMappingURL=until.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/directives/when.js":
    /*!*********************************************!*\
      !*** ./node_modules/lit/directives/when.js ***!
      \*********************************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "when": function() { return /* reexport safe */ lit_html_directives_when_js__WEBPACK_IMPORTED_MODULE_0__.when; }
    /* harmony export */ });
    /* harmony import */ var lit_html_directives_when_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/when.js */ "./node_modules/lit-html/development/directives/when.js");
    
    //# sourceMappingURL=when.js.map
    
    
    /***/ }),
    
    /***/ "./node_modules/lit/index.js":
    /*!***********************************!*\
      !*** ./node_modules/lit/index.js ***!
      \***********************************/
    /***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
    
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
    /* harmony export */   "CSSResult": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult; },
    /* harmony export */   "LitElement": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement; },
    /* harmony export */   "ReactiveElement": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement; },
    /* harmony export */   "UpdatingElement": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.UpdatingElement; },
    /* harmony export */   "_$LE": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE; },
    /* harmony export */   "_$LH": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH; },
    /* harmony export */   "adoptStyles": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles; },
    /* harmony export */   "css": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css; },
    /* harmony export */   "defaultConverter": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter; },
    /* harmony export */   "getCompatibleStyle": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle; },
    /* harmony export */   "html": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html; },
    /* harmony export */   "noChange": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange; },
    /* harmony export */   "notEqual": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual; },
    /* harmony export */   "nothing": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing; },
    /* harmony export */   "render": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render; },
    /* harmony export */   "supportsAdoptingStyleSheets": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets; },
    /* harmony export */   "svg": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg; },
    /* harmony export */   "unsafeCSS": function() { return /* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS; }
    /* harmony export */ });
    /* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
    /* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
    /* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
    
    //# sourceMappingURL=index.js.map
    
    
    /***/ })
    
    /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/ 	
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/ 		// Check if module is in cache
    /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
    /******/ 		if (cachedModule !== undefined) {
    /******/ 			return cachedModule.exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = __webpack_module_cache__[moduleId] = {
    /******/ 			// no module.id needed
    /******/ 			// no module.loaded needed
    /******/ 			exports: {}
    /******/ 		};
    /******/ 	
    /******/ 		// Execute the module function
    /******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/ 	
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/ 	
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = __webpack_modules__;
    /******/ 	
    /************************************************************************/
    /******/ 	/* webpack/runtime/create fake namespace object */
    /******/ 	!function() {
    /******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
    /******/ 		var leafPrototypes;
    /******/ 		// create a fake namespace object
    /******/ 		// mode & 1: value is a module id, require it
    /******/ 		// mode & 2: merge all properties of value into the ns
    /******/ 		// mode & 4: return value when already ns object
    /******/ 		// mode & 16: return value when it's Promise-like
    /******/ 		// mode & 8|1: behave like require
    /******/ 		__webpack_require__.t = function(value, mode) {
    /******/ 			if(mode & 1) value = this(value);
    /******/ 			if(mode & 8) return value;
    /******/ 			if(typeof value === 'object' && value) {
    /******/ 				if((mode & 4) && value.__esModule) return value;
    /******/ 				if((mode & 16) && typeof value.then === 'function') return value;
    /******/ 			}
    /******/ 			var ns = Object.create(null);
    /******/ 			__webpack_require__.r(ns);
    /******/ 			var def = {};
    /******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
    /******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
    /******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
    /******/ 			}
    /******/ 			def['default'] = function() { return value; };
    /******/ 			__webpack_require__.d(ns, def);
    /******/ 			return ns;
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/define property getters */
    /******/ 	!function() {
    /******/ 		// define getter functions for harmony exports
    /******/ 		__webpack_require__.d = function(exports, definition) {
    /******/ 			for(var key in definition) {
    /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
    /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
    /******/ 				}
    /******/ 			}
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/ensure chunk */
    /******/ 	!function() {
    /******/ 		__webpack_require__.f = {};
    /******/ 		// This file contains only the entry chunk.
    /******/ 		// The chunk loading function for additional chunks
    /******/ 		__webpack_require__.e = function(chunkId) {
    /******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
    /******/ 				__webpack_require__.f[key](chunkId, promises);
    /******/ 				return promises;
    /******/ 			}, []));
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/get javascript chunk filename */
    /******/ 	!function() {
    /******/ 		// This function allow to reference async chunks
    /******/ 		__webpack_require__.u = function(chunkId) {
    /******/ 			// return url for filenames based on template
    /******/ 			return "" + chunkId + ".bundle.js";
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/get mini-css chunk filename */
    /******/ 	!function() {
    /******/ 		// This function allow to reference async chunks
    /******/ 		__webpack_require__.miniCssF = function(chunkId) {
    /******/ 			// return url for filenames based on template
    /******/ 			return undefined;
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/global */
    /******/ 	!function() {
    /******/ 		__webpack_require__.g = (function() {
    /******/ 			if (typeof globalThis === 'object') return globalThis;
    /******/ 			try {
    /******/ 				return this || new Function('return this')();
    /******/ 			} catch (e) {
    /******/ 				if (typeof window === 'object') return window;
    /******/ 			}
    /******/ 		})();
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/ 	!function() {
    /******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/load script */
    /******/ 	!function() {
    /******/ 		var inProgress = {};
    /******/ 		var dataWebpackPrefix = "example-project-webpack:";
    /******/ 		// loadScript function to load a script via script tag
    /******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
    /******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
    /******/ 			var script, needAttach;
    /******/ 			if(key !== undefined) {
    /******/ 				var scripts = document.getElementsByTagName("script");
    /******/ 				for(var i = 0; i < scripts.length; i++) {
    /******/ 					var s = scripts[i];
    /******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
    /******/ 				}
    /******/ 			}
    /******/ 			if(!script) {
    /******/ 				needAttach = true;
    /******/ 				script = document.createElement('script');
    /******/ 		
    /******/ 				script.charset = 'utf-8';
    /******/ 				script.timeout = 120;
    /******/ 				if (__webpack_require__.nc) {
    /******/ 					script.setAttribute("nonce", __webpack_require__.nc);
    /******/ 				}
    /******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
    /******/ 				script.src = url;
    /******/ 			}
    /******/ 			inProgress[url] = [done];
    /******/ 			var onScriptComplete = function(prev, event) {
    /******/ 				// avoid mem leaks in IE.
    /******/ 				script.onerror = script.onload = null;
    /******/ 				clearTimeout(timeout);
    /******/ 				var doneFns = inProgress[url];
    /******/ 				delete inProgress[url];
    /******/ 				script.parentNode && script.parentNode.removeChild(script);
    /******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
    /******/ 				if(prev) return prev(event);
    /******/ 			}
    /******/ 			;
    /******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
    /******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
    /******/ 			script.onload = onScriptComplete.bind(null, script.onload);
    /******/ 			needAttach && document.head.appendChild(script);
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/make namespace object */
    /******/ 	!function() {
    /******/ 		// define __esModule on exports
    /******/ 		__webpack_require__.r = function(exports) {
    /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    /******/ 			}
    /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
    /******/ 		};
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/publicPath */
    /******/ 	!function() {
    /******/ 		var scriptUrl;
    /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
    /******/ 		var document = __webpack_require__.g.document;
    /******/ 		if (!scriptUrl && document) {
    /******/ 			if (document.currentScript)
    /******/ 				scriptUrl = document.currentScript.src
    /******/ 			if (!scriptUrl) {
    /******/ 				var scripts = document.getElementsByTagName("script");
    /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
    /******/ 			}
    /******/ 		}
    /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
    /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
    /******/ 		__webpack_require__.p = scriptUrl;
    /******/ 	}();
    /******/ 	
    /******/ 	/* webpack/runtime/jsonp chunk loading */
    /******/ 	!function() {
    /******/ 		// no baseURI
    /******/ 		
    /******/ 		// object to store loaded and loading chunks
    /******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ 		var installedChunks = {
    /******/ 			"main": 0
    /******/ 		};
    /******/ 		
    /******/ 		__webpack_require__.f.j = function(chunkId, promises) {
    /******/ 				// JSONP chunk loading for javascript
    /******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
    /******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
    /******/ 		
    /******/ 					// a Promise means "currently loading".
    /******/ 					if(installedChunkData) {
    /******/ 						promises.push(installedChunkData[2]);
    /******/ 					} else {
    /******/ 						if(true) { // all chunks have JS
    /******/ 							// setup Promise in chunk cache
    /******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
    /******/ 							promises.push(installedChunkData[2] = promise);
    /******/ 		
    /******/ 							// start chunk loading
    /******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
    /******/ 							// create error before stack unwound to get useful stacktrace later
    /******/ 							var error = new Error();
    /******/ 							var loadingEnded = function(event) {
    /******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
    /******/ 									installedChunkData = installedChunks[chunkId];
    /******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
    /******/ 									if(installedChunkData) {
    /******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
    /******/ 										var realSrc = event && event.target && event.target.src;
    /******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
    /******/ 										error.name = 'ChunkLoadError';
    /******/ 										error.type = errorType;
    /******/ 										error.request = realSrc;
    /******/ 										installedChunkData[1](error);
    /******/ 									}
    /******/ 								}
    /******/ 							};
    /******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
    /******/ 						} else installedChunks[chunkId] = 0;
    /******/ 					}
    /******/ 				}
    /******/ 		};
    /******/ 		
    /******/ 		// no prefetching
    /******/ 		
    /******/ 		// no preloaded
    /******/ 		
    /******/ 		// no HMR
    /******/ 		
    /******/ 		// no HMR manifest
    /******/ 		
    /******/ 		// no on chunks loaded
    /******/ 		
    /******/ 		// install a JSONP callback for chunk loading
    /******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
    /******/ 			var chunkIds = data[0];
    /******/ 			var moreModules = data[1];
    /******/ 			var runtime = data[2];
    /******/ 			// add "moreModules" to the modules object,
    /******/ 			// then flag all "chunkIds" as loaded and fire callback
    /******/ 			var moduleId, chunkId, i = 0;
    /******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
    /******/ 				for(moduleId in moreModules) {
    /******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
    /******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
    /******/ 					}
    /******/ 				}
    /******/ 				if(runtime) var result = runtime(__webpack_require__);
    /******/ 			}
    /******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
    /******/ 			for(;i < chunkIds.length; i++) {
    /******/ 				chunkId = chunkIds[i];
    /******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
    /******/ 					installedChunks[chunkId][0]();
    /******/ 				}
    /******/ 				installedChunks[chunkId] = 0;
    /******/ 			}
    /******/ 		
    /******/ 		}
    /******/ 		
    /******/ 		var chunkLoadingGlobal = self["webpackChunkexample_project_webpack"] = self["webpackChunkexample_project_webpack"] || [];
    /******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    /******/ 	}();
    /******/ 	
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    !function() {
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _spectrum_web_components_button_sp_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @spectrum-web-components/button/sp-button.js */ "./node_modules/@spectrum-web-components/button/sp-button.dev.js");
    /*
    Copyright 2020 Adobe. All rights reserved.
    This file is licensed to you under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License. You may obtain a copy
    of the License at http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software distributed under
    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
    OF ANY KIND, either express or implied. See the License for the specific language
    governing permissions and limitations under the License.
    */
    
    // import our stylesheets
    // import './styles.css';
    
    // import the components we'll use in this page
    
    
    }();
    /******/ })()
    ;
    //# sourceMappingURL=main.bundle.js.map