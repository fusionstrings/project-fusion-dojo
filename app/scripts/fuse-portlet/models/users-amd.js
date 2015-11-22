define(['dojo/_base/declare', 'dmodel/Model'], function (declare, Model) { 'use strict';

  declare = 'default' in declare ? declare['default'] : declare;
  Model = 'default' in Model ? Model['default'] : Model;

  /*
  export default function (){
      
      return (declare(Model, {
          
      }));
  }
  */

  var users = declare([Model], {
    schema: {
        ID: 'string',
        UserName: {
            type: 'string',
              required: true
          },
        FirstName: 'number',
        LastName: {
            type: 'string',
            required: true
        },
        fullName: {
            dependsOn: ['FirstName', 'LastName'],
            getValue: function (FirstName, LastName) {
                // compute the full name
                return FirstName + ' ' + LastName;
            },
            setValue: function(value, parent){
                // support setting this property as well
                var parts = value.split(' ');
                parent.set('FirstName', parts[0]);
                parent.set('LastName', parts[1]);
            }
        },
        Email: 'string',
        Phone: 'string',
        IsActive: 'string',
        UserAuthorizations:[{
            ID: 'string',
            OrganisationID: 'string',
            OrganisationName: 'string',
            RoleID: 'string',
            RoleName: 'string',
            userId: 'string'
        }],
    }
  });
  console.log('fuse-portlet/models/users');

  return users;

});