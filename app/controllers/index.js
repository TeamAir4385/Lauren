/* This might need some work. The goal is to tell index to load the actionbar 
 * for Android and load the normal stuff for iOS if that is the platform.
 * Help here would be appreciated. I think this is where it is having an 
 * issue loading for iOS.
 */


var args = arguments[0] || {};
$.index.open();
$.doLoginBtn.addEventListener('click', doLoginBtnClicked);

function doLoginBtnClicked() {

	// create instance of the user model
	var user = Alloy.createModel('User');

	// call the extended model’s function
	user.login($.email.value, $.password.value, userActionResponseHandler);
};
function userActionResponseHandler(_resp) {
	if (_resp.success === true) {

		alert("loginSuccess");
		$.loginText.text = _resp.model.id;
		// Do stuff after successful login.
		//Alloy.Globals.loggedIn = true;
		//Alloy.Globals.CURRENT_USER = _resp.model;

		//$.parentController.loginSuccessAction(_resp);

	} else {
		// Show the error message and let the user try again.
		alert("loginFailed", _resp.error.message);

		//Alloy.Globals.CURRENT_USER = null;
		//Alloy.Globals.loggedIn = false;
	}
};



if (OS_IOS) {
	Alloy.Globals.navgroup = $.index;
}

if (OS_ANDROID) {
	$.home.getView().open();
} else {
	$.index.open();
}

//code runs on Android without this. 