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
    }
};

//# sourceMappingURL=index.js.map

export { VDOM };
//# sourceMappingURL=vdom.esm.js.map
