var socket_server = connectToUserSocket();
var robot_ip = "http://raspberrypi3-a.student.iastate.edu";
/*
socket_server.on('Robot Address', function(data){
  robot_ip = data.ip;
});
*/

//Redirect user as instructed by server
socket_server.on('redirect', function(destination) {
  window.location.href = destination;
});

var socket_robot = io(robot_ip + ':5210');
var cur_addr = "raspberrypi3-a.student.iastate.edu";


//Chat Box
$(function () {
  $('#msgform').submit(function(){
    socket_server.emit('chat message spectator', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket_server.on('chat message', function(msg){
    $('#messages').append($('<li><strong>[' + msg.type + ']' + msg.username + ":</strong> " + msg.message + '</li>'));
    var chatDiv = document.getElementById("chat-box");
    chatDiv.scrollTop = chatDiv.scrollHeight;
  });
});



window.addEventListener("load", function(){
  
  
  var webcam_addr = cur_addr;
  var webcam_port = "12000";
  var webcam_host = $(".feed img");
  var cam_socket = io.connect('http://' + webcam_addr + ':' + webcam_port);
  var logout = document.getElementById('logout');
  var lobby = document.getElementById('lobby');
  var right = document.getElementById('rightRobotSwitch');
  var left = document.getElementById('leftRobotSwitch');


  cam_socket.on("connection", function(socket){
    console.log("Connected");
  });

  cam_socket.on('image', function (data) {
    webcam_host.attr("src", "data:image/jpeg;base64," + data );
  });

  logout.addEventListener('mouseup', function(){
    console.log("Logging out...");
    window.location.href = 'http://proj-309-rb-b-2.cs.iastate.edu:3000/';
    //Update Database with Robot score
  });

  lobby.addEventListener('mouseup', function(){
    console.log("Redirecting back to lobby");
    window.location.href = 'http://proj-309-rb-b-2.cs.iastate.edu:3000/lobby';
  });
  
    left.addEventListener('mouseup', function() {
	    console.log("Toggling left");
		var cornelius = "raspberrypi3-a.student.iastate.edu";
		var mrRobot = "monmodenic.student.iastate.edu";
		
		if (cur_addr == cornelius)
			cur_addr = mrRobot;
		else if (cur_addr == mrRobot)
			cur_addr = cornelius;
		
		var webcam_addr = cur_addr;
	});
	
	right.addEventListener('mouseup', function() {
	    console.log("Toggling right");
		
		var cornelius = "raspberrypi3-a.student.iastate.edu";
		var mrRobot = "monmodenic.student.iastate.edu";
		
		if (cur_addr == cornelius)
			cur_addr = mrRobot;
		else if (cur_addr == mrRobot)
			cur_addr = cornelius;
		
		var webcam_addr = cur_addr;
		
	});

});



function switchCamera() {
	document.getElementById('video').src = "";
	
	/*var cornelius = "raspberrypi3-a.student.iastate.edu";
	var mrRobot = "monmodenic.student.iastate.edu";
	
	if (cur_addr == cornelius)
		cur_addr = mrRobot;
	else if (cur_addr == mrRobot)
		cur_addr = cornelius;
	
    var webcam_addr = cur_addr;
    var webcam_port = "12000";
    var webcam_host = $(".feed img");
    var cam_socket = io.connect('http://' + webcam_addr + ':' + webcam_port);

    cam_socket.on("connection", function(socket){
      console.log("Connected");
    });

    cam_socket.on('image', function (data) {
      webcam_host.attr("src", "data:image/jpeg;base64," + data );
    });
	
	*/
}