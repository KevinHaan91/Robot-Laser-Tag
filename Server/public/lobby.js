//Connect to socket
var socket = connectToUserSocket();

//Redirect user as instructed by server
socket.on('redirect', function(destination) {
	window.location.href = destination;
});

//Set ID cookie
socket.emit('request user id', getCookie('username'));
socket.on('get user id', function(id) {
	document.cookie = "ID=" + id + "; path=/";
	
	//Set profile picture
	var urlBase = "http://proj-309-rb-b-2.cs.iastate.edu:3000/avatars/";
	var url = "";
	if (urlExists(urlBase + getCookie("ID") + ".png")) {
		url = urlBase + getCookie("ID") + ".png";
	}
	else if (urlExists(urlBase + getCookie("ID") + ".jpg")) {
		url = urlBase + getCookie("ID") + ".jpg";
	}
	else if (urlExists(urlBase + getCookie("ID") + ".jpeg")) {
		url = urlBase + getCookie("ID") + ".jpeg";
	}
	else {
		url = urlBase + "default.jpg";
	}
	document.getElementById('profileLink').innerHTML = '<img src="' + url + '" class="profile-pic" alt="Profile Image"/>'
});

/** The chat box function.  Displays each new message upon recieving it, as well as sends messages submitted by the user
 * @author Gabriel Stackhouse
 * @author Ryan Pals*/
$(function () {
	$('#msgform').submit(function(){
	  socket.emit('chat message lobby', $('#m').val());
	  $('#m').val('');
	  return false;
	});
	socket.on('chat message', function(msg){
	  $('#messages').append($('<li><strong>[' + msg.type + ']' + msg.username + ":</strong> " + msg.message + '</li>'));
	  var chatDiv = document.getElementById("chat-box");
	  chatDiv.scrollTop = chatDiv.scrollHeight;
	});
});

//Operator page(s) redirect
document.getElementById("operatorButton").addEventListener("click", function(){
    socket.emit("request-for-redirect", getCookie("username"));
});

document.getElementById("leaderboardButton").addEventListener("click", function(){
    window.location.href = "http://proj-309-rb-b-2.cs.iastate.edu:3000/leaderboard";
});

//Display connected users
socket.on('usernames', function(data) {

	var html = '';
	for (i = 0; i < data.length; i++) {
		html += data[i] + '<br/>';
	}
	document.getElementById("users").innerHTML = html;
});

//Display connected robots
socket.emit('request robot list');

/** Displays connected robots and options to join, depending on which slots have openings
 * @param data - JSON containing: gunner (String of connected gunner), driver (String of connected driver), spectators (ArrayList of Strings of connected spectators)
 * @author - Gabriel Stackhouse */
socket.on('robotInfo', function(data) {
	var html = '';
	for (i = 0; i < data.length; i++) {
		
		//Robot name
		html += '<span style="font-size: 22px">' + data[i].name + '</span><br/>';
		
		//Gunner
		html += "<span style='font-size: 18px' id='gunner" + i + "'>Gunner: "
		if (data[i].gunner != "")
			html += data[i].gunner + "</span><br/>";
		else {
			var varString = '' + i + ', "gunner", "' + data[i].name + '"';
			html += "<button type='button' onclick='setOperator(" + varString + ");'>Join</button></span><br/>";
		}
		
		//Driver
		html += "<span style='font-size: 18px' id='driver" + i + "'>Driver: "
		if (data[i].driver != "")
			html += data[i].driver + "</span><br/>";
		else {
			var varString = '' + i + ', "driver", "' + data[i].name + '"';
			html += "<button type='button' onclick='setOperator(" + varString + ");'>Join</button></span><br/>";
		}
		html += '<br />';
	}
	document.getElementById("robots").innerHTML = html;
});

/** When a button is clicked, set user as the operator type of specified robot
 * @param index - index of the robot
 * @param operatorType - the chosen operator type (gunner, driver, etc.)
 * @param robotName - the name of the robot
 * @author Gabriel Stackhouse*/
function setOperator(index, operatorType, robotName) {
	var obj = {'username':getCookie("username"), 'robotIndex':index, 'operatorType':operatorType};
	document.cookie = "robotIndex=" + index + "; path=/";
	document.cookie = "operatorType=" + operatorType + "; path=/";
	document.cookie = "currentRobot=" + robotName + "; path=/";
	socket.emit('set user operator', obj);
	var opType = "";
	if (operatorType == "driver")
		opType = "Driver";
	else
		opType = "Gunner";
	document.getElementById("" + operatorType + index).innerHTML = "<span style='font-size: 18px'>" + opType + ": " + obj.username + "</span>";
	
}

/** Check if URL exists
 * @param url - the url to check */
function urlExists(url) {
	var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

/** Logout user*/
function logout() {
	window.location.href = 'http://proj-309-rb-b-2.cs.iastate.edu:3000/login';
}