module.exports = function DeviceSettingCtrl(

  $scope
  , SettingsService
  , $routeParams,
  $http
) {

  $scope.defaultData = {
    interval: '',
    pagesize: '',
    loop_message_time: '',
    init_message: '',
    add_contact_flag: false,
    wait_message_time: '',
    serial: $routeParams.serial
    // globalApplication: false
  }

  $scope.submitForm = function() {
    $scope.defaultData.serial = $routeParams.serial

    $http({
      method: 'POST',
      url: 'http://192.168.1.102:5000/device_setting',
      data: $scope.defaultData
    }).then(function successCallback(res) {
    })
  }
  $http({
    method: 'POST',
    url: 'http://192.168.1.102:5000/get_device_setting',
    data: {
      serial: $routeParams.serial
    }
  }).then(function successCallback(res) {
    $scope.defaultData = res.data.data
  })
}
