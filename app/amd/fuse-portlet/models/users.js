'use strict';

define(['exports', 'dojo/_base/declare', 'dmodel/Model'], function (exports, _declare, _Model) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _declare2 = _interopRequireDefault(_declare);

    var _Model2 = _interopRequireDefault(_Model);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    exports.default = (0, _declare2.default)([_Model2.default], {
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
                getValue: function getValue(FirstName, LastName) {
                    // compute the full name
                    return FirstName + ' ' + LastName;
                },
                setValue: function setValue(value, parent) {
                    // support setting this property as well
                    var parts = value.split(' ');
                    parent.set('FirstName', parts[0]);
                    parent.set('LastName', parts[1]);
                }
            },
            Email: 'string',
            Phone: 'string',
            IsActive: 'string',
            UserAuthorizations: [{
                ID: 'string',
                OrganisationID: 'string',
                OrganisationName: 'string',
                RoleID: 'string',
                RoleName: 'string',
                userId: 'string'
            }]
        }
    });
    console.log('fuse-portlet/models/users');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7c0JBV2UsdUJBQVEsaUJBQU8sRUFBRTtBQUM5QixjQUFNLEVBQUU7QUFDSixjQUFFLEVBQUUsUUFBUTtBQUNaLG9CQUFRLEVBQUU7QUFDTixvQkFBSSxFQUFFLFFBQVE7QUFDWix3QkFBUSxFQUFFLElBQUk7YUFDakI7QUFDSCxxQkFBUyxFQUFFLFFBQVE7QUFDbkIsb0JBQVEsRUFBRTtBQUNOLG9CQUFJLEVBQUUsUUFBUTtBQUNkLHdCQUFRLEVBQUUsSUFBSTthQUNqQjtBQUNELG9CQUFRLEVBQUU7QUFDTix5QkFBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztBQUNwQyx3QkFBUSxFQUFFLGtCQUFVLFNBQVMsRUFBRSxRQUFRLEVBQUU7O0FBRXJDLDJCQUFPLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO2lCQUNyQztBQUNELHdCQUFRLEVBQUUsa0JBQVMsS0FBSyxFQUFFLE1BQU0sRUFBQzs7QUFFN0Isd0JBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsMEJBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLDBCQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEM7YUFDSjtBQUNELGlCQUFLLEVBQUUsUUFBUTtBQUNmLGlCQUFLLEVBQUUsUUFBUTtBQUNmLG9CQUFRLEVBQUUsUUFBUTtBQUNsQiw4QkFBa0IsRUFBQyxDQUFDO0FBQ2hCLGtCQUFFLEVBQUUsUUFBUTtBQUNaLDhCQUFjLEVBQUUsUUFBUTtBQUN4QixnQ0FBZ0IsRUFBRSxRQUFRO0FBQzFCLHNCQUFNLEVBQUUsUUFBUTtBQUNoQix3QkFBUSxFQUFFLFFBQVE7QUFDbEIsc0JBQU0sRUFBRSxRQUFRO2FBQ25CLENBQUM7U0FDTDtLQUNGLENBQUMiLCJmaWxlIjoiZnVzZS1wb3J0bGV0L21vZGVscy91c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWNsYXJlIGZyb20gJ2Rvam8vX2Jhc2UvZGVjbGFyZSc7XHJcbmltcG9ydCBNb2RlbCBmcm9tICdkbW9kZWwvTW9kZWwnO1xyXG4vKlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKXtcclxuICAgIFxyXG4gICAgcmV0dXJuIChkZWNsYXJlKE1vZGVsLCB7XHJcbiAgICAgICAgXHJcbiAgICB9KSk7XHJcbn1cclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlY2xhcmUoW01vZGVsXSwge1xyXG4gIHNjaGVtYToge1xyXG4gICAgICBJRDogJ3N0cmluZycsXHJcbiAgICAgIFVzZXJOYW1lOiB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICBGaXJzdE5hbWU6ICdudW1iZXInLFxyXG4gICAgICBMYXN0TmFtZToge1xyXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBmdWxsTmFtZToge1xyXG4gICAgICAgICAgZGVwZW5kc09uOiBbJ0ZpcnN0TmFtZScsICdMYXN0TmFtZSddLFxyXG4gICAgICAgICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIChGaXJzdE5hbWUsIExhc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29tcHV0ZSB0aGUgZnVsbCBuYW1lXHJcbiAgICAgICAgICAgICAgcmV0dXJuIEZpcnN0TmFtZSArICcgJyArIExhc3ROYW1lO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNldFZhbHVlOiBmdW5jdGlvbih2YWx1ZSwgcGFyZW50KXtcclxuICAgICAgICAgICAgICAvLyBzdXBwb3J0IHNldHRpbmcgdGhpcyBwcm9wZXJ0eSBhcyB3ZWxsXHJcbiAgICAgICAgICAgICAgdmFyIHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgICBwYXJlbnQuc2V0KCdGaXJzdE5hbWUnLCBwYXJ0c1swXSk7XHJcbiAgICAgICAgICAgICAgcGFyZW50LnNldCgnTGFzdE5hbWUnLCBwYXJ0c1sxXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIEVtYWlsOiAnc3RyaW5nJyxcclxuICAgICAgUGhvbmU6ICdzdHJpbmcnLFxyXG4gICAgICBJc0FjdGl2ZTogJ3N0cmluZycsXHJcbiAgICAgIFVzZXJBdXRob3JpemF0aW9uczpbe1xyXG4gICAgICAgICAgSUQ6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgT3JnYW5pc2F0aW9uSUQ6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgT3JnYW5pc2F0aW9uTmFtZTogJ3N0cmluZycsXHJcbiAgICAgICAgICBSb2xlSUQ6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgUm9sZU5hbWU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgdXNlcklkOiAnc3RyaW5nJ1xyXG4gICAgICB9XSxcclxuICB9XHJcbn0pO1xyXG5jb25zb2xlLmxvZygnZnVzZS1wb3J0bGV0L21vZGVscy91c2VycycpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
