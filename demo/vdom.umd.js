(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vDOM = {})));
}(this, (function (exports) { 'use strict';

var VDOM = {
    // Here we will store our virtual components
    virtualComponents: new Map(),
    // Here we will store the listeners for our virtual components
    virtualListeners: new Map(),
    getParentComponent: function (virtualComponent) {
        return virtualComponent;
    },
    addVirtualComponent: function (virtualComponent) {
        console.log("[VirtualDOM@addVirtualComponent]");
        this.virtualComponents.set(virtualComponent.identifier, virtualComponent);
        this.virtualListeners.set(virtualComponent.identifier, function () {
            console.log('Virtual component listener called');
        });
        return virtualComponent;
    },
    updateVirtualComponent: function (virtualComponent) {
        return virtualComponent;
    },
    deleteVirtualComponent: function (virtualComponent) {
        return virtualComponent;
    },
    virtualDOM: function () {
        return this.virtualComponents;
    },
    /**
     * This method sets all of the attributes from the virtual component
     * to the DOM element.
     * @param element DOM Element to add attributes to
     * @param virtualComponent Virtual Component that contains all the attributes to be added
     */
    setElementAttributes: function (element, attributes) {
        if (!attributes)
            return;
        Object.keys(attributes).forEach(function (attribute) {
            // Do something with attributes ...
        });
    },
    /**
     * This method creates a virtual component and mounts it
     * at the given mount point.
     * @param virtualComponent Virtual Component to create
     * @param mountPoint Mount point of the given Virtual Component
     */
    createElement: function (virtualComponent, mountPoint) {
        var _this = this;
        console.log("[VirtualDOM@createElement]");
        // Create the element
        var element = document.createElement(virtualComponent.nodeName);
        // Set the vdom-key attribute (development only)
        element.setAttribute('vdom-key', virtualComponent.identifier);
        this.setElementAttributes(element, virtualComponent.attributes);
        // Check if this virtual component has childrens
        if (virtualComponent.children) {
            // If it does, iterate though each of them
            virtualComponent.children.forEach(function (children) {
                // Recursively call the createElement with the children and the mount point
                _this.createElement(children, element);
            });
        }
        // Append this element to the mount point
        mountPoint.appendChild(element);
    },
    /**
     * This method starts the creation process of the Virtual DOM Tree
     * @param virtualComponent Virtual Component to render
     * @param mount Mount point of the given Virtual Component
     */
    render: function (virtualComponent, mount) {
        console.log("[VirtualDOM@render]");
        // Call the create element with the virtual component and the mount point
        this.createElement(virtualComponent, mount);
    },
};
//# sourceMappingURL=index.js.map

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Component = {
    __state: {},
    __props: {},
    setState: function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('setState called !!');
                        console.log('Received: ', state);
                        if (!(typeof state === 'function')) return [3 /*break*/, 2];
                        return [4 /*yield*/, state()];
                    case 1:
                        result = _a.sent();
                        // Assign the new state changes
                        this.__state = Object.assign({}, __assign({}, this.__state), __assign({}, result));
                        // Return the current state after changes
                        return [2 /*return*/, this.__state];
                    case 2:
                        // Assign the new state changes
                        this.__state = Object.assign({}, __assign({}, this.__state), __assign({}, state));
                        // Return the current state after changes
                        return [2 /*return*/, this.__state];
                }
            });
        });
    },
    constructor: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    },
    componentDidMount: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    },
    shouldComponentUpdate: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    },
    render: function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Original render called');
                return [2 /*return*/];
            });
        });
    },
};

//# sourceMappingURL=index.js.map

//# sourceMappingURL=index.js.map

exports.VDOM = VDOM;
exports.Component = Component;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vdom.umd.js.map
