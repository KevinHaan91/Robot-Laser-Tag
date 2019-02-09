//NOTE: Must be placed above .js file associated with each HTML page

function connectToUserSocket() {
	var socket = io.connect('http://proj-309-rb-b-2.cs.iastate.edu:3000');
	socket.emit('new user', getCookie("username")); 
	return socket;
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}