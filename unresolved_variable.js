import {Form, TreeVisitResult, Widget} from "@eclipse-scout/core"

let form = /** @type Form */ scout.create('Form', {
    rootGroupBox: {
        objectType: 'GroupBox',
        fields: [{
            id: 'MyField',
            objectType: 'StringField'
        }]
    }
})
// displayText is a property of StringField but form.widget returns a Widget (which is the base class of the StringField)
// displayTextABC does not exist so warning is correct there
let field = form.widget('MyField');
console.log(field.displayText);
console.log(field.displayTextABC);

// Explicit cast "works"
let field2 = /** @type StringField */ form.widget('MyField');
console.log(field2.displayText);
console.log(field2.displayTextABC);

// No warning with a custom find method because return value is not clear (no js doc, no obvious type used)
let field3 = find('field3');
console.log(field3.displayText);

function find(id) {
    let found = null;
    form.visitChildren(child => {
        if (child.id === id) {
            found = child;
            return TreeVisitResult.TERMINATE;
        }
    })
    return found;
}

// It works with type <any>. -> So when a sub class is returned we either have to define return value as <any> or cast
// explicitly when calling the function?
let field4 = find2('MyField');
console.log(field4.displayText);

/**
 * @param id
 * @returns {Widget|any}
 */
function find2(id) {
    return new Widget();
}