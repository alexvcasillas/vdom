var VDOM = /** @class */ (function () {
    function VDOM() {
        this.VirtualComponents = [];
    }
    VDOM.prototype.addVirtualComponent = function (VirtualComponent) {
        console.log('[VDOM@addVirtualComponent]');
        console.log('VirtualComponent to add: ', VirtualComponent);
        console.log('----');
        if (VirtualComponent.parent) {
            var parentVirtualComponent = this.VirtualComponents.filter(function (parentVirtualComponent) { return parentVirtualComponent.identifier === VirtualComponent.parent; })[0];
            if (!parentVirtualComponent.children)
                parentVirtualComponent.children = [];
            parentVirtualComponent.children.push(VirtualComponent);
            return;
        }
        this.VirtualComponents.push(VirtualComponent);
    };
    VDOM.prototype.updateVirtualComponent = function (VirtualComponent) {
        console.log('[VDOM@updateVirtualComponent]');
        console.log('VirtualComponent to update: ', VirtualComponent);
        console.log('----');
        if (VirtualComponent.parent) {
            console.log('The VirtualComponent has a parent!');
            var parentVirtualComponent = this.VirtualComponents.filter(function (parentVirtualComponent) { return parentVirtualComponent.identifier === VirtualComponent.parent; })[0];
            console.log('Parent VirtualComponent: ', parentVirtualComponent);
            console.log('----');
            if (!parentVirtualComponent.children)
                parentVirtualComponent.children = [];
            parentVirtualComponent.children.map(function (childrenVirtualComponent) {
                if (childrenVirtualComponent.identifier === VirtualComponent.identifier) {
                    console.log('VirtualComponent to update: ', childrenVirtualComponent);
                    Object.assign(childrenVirtualComponent, VirtualComponent);
                    console.log('VirtualComponent after update: ', childrenVirtualComponent);
                }
            });
            console.log('----');
            return;
        }
        console.log("VirtualComponent doesn't have a parent!");
        this.VirtualComponents.map(function (searchVirtualComponent) {
            if (searchVirtualComponent.identifier === VirtualComponent.identifier) {
                console.log('VirtualComponent to update: ', searchVirtualComponent);
                Object.assign(searchVirtualComponent, VirtualComponent);
                console.log('VirtualComponent after update: ', searchVirtualComponent);
            }
        });
        console.log('----');
    };
    VDOM.prototype.removeVirtualComponent = function (VirtualComponent) { };
    VDOM.prototype.renderVDOM = function () {
        return JSON.stringify(this.VirtualComponents, null, 2);
    };
    return VDOM;
}());

var RDOM = {
    render: function (component, container, callback) {
        console.log('[DOM@renderElement]');
        console.log('Component to render: ', JSON.stringify(component, null, 2));
    },
};

var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());

export { VDOM, RDOM, Component };
