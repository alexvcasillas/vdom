var VDOM = /** @class */ (function () {
    function VDOM() {
        this.components = [];
    }
    VDOM.prototype.addComponent = function (component) {
        console.log('[VDOM@addComponent]');
        console.log('Component to add: ', component);
        console.log('----');
        if (component.parent) {
            var parentComponent = this.components.filter(function (parentComponent) { return parentComponent.identifier === component.parent; })[0];
            if (!parentComponent.children)
                parentComponent.children = [];
            parentComponent.children.push(component);
            return;
        }
        this.components.push(component);
    };
    VDOM.prototype.updateComponent = function (component) {
        console.log('[VDOM@updateComponent]');
        console.log('Component to update: ', component);
        console.log('----');
        if (component.parent) {
            console.log('The component has a parent!');
            var parentComponent = this.components.filter(function (parentComponent) { return parentComponent.identifier === component.parent; })[0];
            console.log('Parent component: ', parentComponent);
            console.log('----');
            if (!parentComponent.children)
                parentComponent.children = [];
            parentComponent.children.map(function (childrenComponent) {
                if (childrenComponent.identifier === component.identifier) {
                    console.log('Component to update: ', childrenComponent);
                    Object.assign(childrenComponent, component);
                    console.log('Component after update: ', childrenComponent);
                }
            });
            console.log('----');
            return;
        }
        console.log("Component doesn't have a parent!");
        this.components.map(function (searchComponent) {
            if (searchComponent.identifier === component.identifier) {
                console.log('Component to update: ', searchComponent);
                Object.assign(searchComponent, component);
                console.log('Component after update: ', searchComponent);
            }
        });
        console.log('----');
    };
    VDOM.prototype.removeComponent = function (component) { };
    VDOM.prototype.renderVDOM = function () {
        return JSON.stringify(this.components, null, 2);
    };
    return VDOM;
}());

var renderElement = function (component) {
    console.log('[DOM@renderElement]');
    console.log('Component to render: ', JSON.stringify(component, null, 2));
};

export { VDOM, renderElement };
