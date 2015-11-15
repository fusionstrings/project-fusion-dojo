"use strict";

require(['dstore/Memory','dojo/_base/declare', 'dmodel/Model'], function(Memory, declare, Model){

    let MyModel = declare(Model, {
        schema: {
            firstName: 'number', // simple definition
            lastName: {
                type: 'string',
                required: true
            }
        }
    });
    var employeeStore = new Memory({
    model: MyModel
});
console.log(employeeStore)
employeeStore.add({firstName:'George'});
    var salesEmployees = employeeStore.filter({firstName:'George'});
    salesEmployees.forEach(function(employee){
        // this is called for each employee in the sales department
        console.log(employee, employee.firstName);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==