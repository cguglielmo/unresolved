import {Form} from "@eclipse-scout/core"

let form = /** @type Form */ scout.create('Form', {
    rootGroupBox: {
        objectType: 'GroupBox',
        fields: [{
            id: 'MyField',
            objectType: 'StringField'
        }]
    }
})
console.log(form.closable);