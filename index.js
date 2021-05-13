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
let field = form.widget('MyField');
console.log(field.displayText);
console.log(field.displayTextABC);


let myField = find('MyField');
console.log(myField.displayText);

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

let myField2 = find2('MyField');
console.log(myField2.displayText);
myField2.table.insertRows([]);

/**
 * @param id
 * @returns {Widget|any}
 */
function find2(id) {
    return new Widget();
}