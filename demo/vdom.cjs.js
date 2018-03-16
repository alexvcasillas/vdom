'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    createElement: function (virtualComponent, mountPoint) {
        var _this = this;
        console.log("[VirtualDOM@createElement]");
        console.log('Element to be created: ', virtualComponent);
        var element = document.createElement(virtualComponent.nodeName);
        element.innerText = virtualComponent.identifier;
        if (virtualComponent.children) {
            console.log('The component has children !!');
            virtualComponent.children.forEach(function (children) {
                console.log('Children: ', children);
                _this.createElement(children, element);
            });
        }
        mountPoint.appendChild(element);
        return element;
    },
    render: function (virtualComponent, mount) {
        console.log("[VirtualDOM@render]");
        console.log('Component to render: ', virtualComponent);
        console.log('Mount point: ', mount);
        this.createElement(virtualComponent, mount);
    }
};

//# sourceMappingURL=index.js.map

exports.VDOM = VDOM;
//# sourceMappingURL=vdom.cjs.js.map
