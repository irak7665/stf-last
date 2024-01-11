module.exports = angular.module('stf.device-setting', [
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/deviceSetting/:serial', {
      template: require('./device-setting.pug')
    })
  }])
  .controller('DeviceSettingCtrl', require('./device-setting-controller'))
