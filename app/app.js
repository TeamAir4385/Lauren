// Require the module
var CloudPush = require('ti.cloudpush');
var deviceToken = null;
 
// Initialize the module
CloudPush.retrieveDeviceToken({
    success: deviceTokenSuccess,
    error: deviceTokenError
});
// Enable push notifications for this device
// Save the device token for subsequent API calls
function deviceTokenSuccess(e) {
    deviceToken = e.deviceToken;
}
function deviceTokenError(e) {
    alert('Failed to register for push notifications! ' + e.error);
}
 
// Process incoming push notifications
CloudPush.addEventListener('callback', function (evt) {
    alert("Notification received: " + evt.payload);
});