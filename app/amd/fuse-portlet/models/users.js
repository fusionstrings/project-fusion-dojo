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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7c0JBV2UsdUJBQVEsaUJBQU8sRUFBRTtBQUM5QixjQUFNLEVBQUU7QUFDSixjQUFFLEVBQUUsUUFBUTtBQUNaLG9CQUFRLEVBQUU7QUFDTixvQkFBSSxFQUFFLFFBQVE7QUFDWix3QkFBUSxFQUFFLElBQUk7YUFDakI7QUFDSCxxQkFBUyxFQUFFLFFBQVE7QUFDbkIsb0JBQVEsRUFBRTtBQUNOLG9CQUFJLEVBQUUsUUFBUTtBQUNkLHdCQUFRLEVBQUUsSUFBSTthQUNqQjtBQUNELG9CQUFRLEVBQUU7QUFDTix5QkFBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztBQUNwQyx3QkFBUSxFQUFFLGtCQUFVLFNBQVMsRUFBRSxRQUFRLEVBQUU7O0FBRXJDLDJCQUFPLFNBQVMsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO2lCQUNyQztBQUNELHdCQUFRLEVBQUUsa0JBQVMsS0FBSyxFQUFFLE1BQU0sRUFBQzs7QUFFN0Isd0JBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsMEJBQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLDBCQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEM7YUFDSjtBQUNELGlCQUFLLEVBQUUsUUFBUTtBQUNmLGlCQUFLLEVBQUUsUUFBUTtBQUNmLG9CQUFRLEVBQUUsUUFBUTtBQUNsQiw4QkFBa0IsRUFBQyxDQUFDO0FBQ2hCLGtCQUFFLEVBQUUsUUFBUTtBQUNaLDhCQUFjLEVBQUUsUUFBUTtBQUN4QixnQ0FBZ0IsRUFBRSxRQUFRO0FBQzFCLHNCQUFNLEVBQUUsUUFBUTtBQUNoQix3QkFBUSxFQUFFLFFBQVE7QUFDbEIsc0JBQU0sRUFBRSxRQUFRO2FBQ25CLENBQUM7U0FDTDtLQUNGLENBQUMiLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVjbGFyZSBmcm9tICdkb2pvL19iYXNlL2RlY2xhcmUnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnZG1vZGVsL01vZGVsJztcclxuLypcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCl7XHJcbiAgICBcclxuICAgIHJldHVybiAoZGVjbGFyZShNb2RlbCwge1xyXG4gICAgICAgIFxyXG4gICAgfSkpO1xyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWNsYXJlKFtNb2RlbF0sIHtcclxuICBzY2hlbWE6IHtcclxuICAgICAgSUQ6ICdzdHJpbmcnLFxyXG4gICAgICBVc2VyTmFtZToge1xyXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgRmlyc3ROYW1lOiAnbnVtYmVyJyxcclxuICAgICAgTGFzdE5hbWU6IHtcclxuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgfSxcclxuICAgICAgZnVsbE5hbWU6IHtcclxuICAgICAgICAgIGRlcGVuZHNPbjogWydGaXJzdE5hbWUnLCAnTGFzdE5hbWUnXSxcclxuICAgICAgICAgIGdldFZhbHVlOiBmdW5jdGlvbiAoRmlyc3ROYW1lLCBMYXN0TmFtZSkge1xyXG4gICAgICAgICAgICAgIC8vIGNvbXB1dGUgdGhlIGZ1bGwgbmFtZVxyXG4gICAgICAgICAgICAgIHJldHVybiBGaXJzdE5hbWUgKyAnICcgKyBMYXN0TmFtZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXRWYWx1ZTogZnVuY3Rpb24odmFsdWUsIHBhcmVudCl7XHJcbiAgICAgICAgICAgICAgLy8gc3VwcG9ydCBzZXR0aW5nIHRoaXMgcHJvcGVydHkgYXMgd2VsbFxyXG4gICAgICAgICAgICAgIHZhciBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgICAgcGFyZW50LnNldCgnRmlyc3ROYW1lJywgcGFydHNbMF0pO1xyXG4gICAgICAgICAgICAgIHBhcmVudC5zZXQoJ0xhc3ROYW1lJywgcGFydHNbMV0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBFbWFpbDogJ3N0cmluZycsXHJcbiAgICAgIFBob25lOiAnc3RyaW5nJyxcclxuICAgICAgSXNBY3RpdmU6ICdzdHJpbmcnLFxyXG4gICAgICBVc2VyQXV0aG9yaXphdGlvbnM6W3tcclxuICAgICAgICAgIElEOiAnc3RyaW5nJyxcclxuICAgICAgICAgIE9yZ2FuaXNhdGlvbklEOiAnc3RyaW5nJyxcclxuICAgICAgICAgIE9yZ2FuaXNhdGlvbk5hbWU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgUm9sZUlEOiAnc3RyaW5nJyxcclxuICAgICAgICAgIFJvbGVOYW1lOiAnc3RyaW5nJyxcclxuICAgICAgICAgIHVzZXJJZDogJ3N0cmluZydcclxuICAgICAgfV0sXHJcbiAgfVxyXG59KTtcclxuY29uc29sZS5sb2coJ2Z1c2UtcG9ydGxldC9tb2RlbHMvdXNlcnMnKTsiXX0=