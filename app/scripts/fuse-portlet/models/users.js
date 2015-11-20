import declare from 'dojo/_base/declare';
import Model from 'dmodel/Model';
/*
export default function (){
    
    return (declare(Model, {
        
    }));
}
*/

export default declare([Model], {
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