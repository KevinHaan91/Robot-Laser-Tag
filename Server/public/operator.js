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


//Chat Box
$(function () {
	$('#msgform').submit(function(){
	  socket_server.emit('chat message', $('#m').val());
	  $('#m').val('');
	  return false;
	});
	socket_server.on('chat message', function(msg){
	  $('#messages').append($('<li><strong>' + msg.username + ":</strong> " + msg.message + '</li>'));
	  var chatDiv = document.getElementById("chat-box");
	  chatDiv.scrollTop = chatDiv.scrollHeight;
	});
});



window.addEventListener("load", function(){
	
  var buttonUp = document.getElementById('buttonUp');
  var buttonLeft = document.getElementById('buttonLeft');
  var buttonRight = document.getElementById('buttonRight');
  var buttonDown = document.getElementById('buttonDown');

  buttonUp.addEventListener('mousedown', function() {
      console.log("w");
      socket_robot.emit('Serial Movement', { dir: 'w'});
  });
  buttonUp.addEventListener('mouseup', function() {
      console.log("x");
      socket_robot.emit('Serial Movement', { dir: 'x'});
  });
  
  
  
  buttonLeft.addEventListener('mousedown', function() {
      console.log("a");
      socket_robot.emit('Serial Movement', { dir: 'a'});
  });
  buttonLeft.addEventListener('mouseup', function() {
      console.log("x");
      socket_robot.emit('Serial Movement', { dir: 'x'});
  });
  
  
  
  buttonRight.addEventListener('mousedown', function() {
      console.log("d");
      socket_robot.emit('Serial Movement', { dir: 'd'});
  });
  buttonRight.addEventListener('mouseup', function() {
      console.log("x");
      socket_robot.emit('Serial Movement', { dir: 'x'});
  });  
  
  
  buttonDown.addEventListener('mousedown', function() {
      console.log("s");
      socket_robot.emit('Serial Movement', { dir: 's'});
  });
  buttonDown.addEventListener('mouseup', function() {
      console.log("x");
      socket_robot.emit('Serial Movement', { dir: 'x'});
  });
  
    var webcam_addr = "raspberrypi3-a.student.iastate.edu";
	var webcam_port = "12000";
	var webcam_host = $(".feed img");
	var cam_socket = io.connect('http://' + webcam_addr + ':' + webcam_port);


	cam_socket.on("connection", function(socket){
		console.log("Connected");
	});

	cam_socket.on('image', function (data) {
		webcam_host.attr("src", "data:image/jpeg;base64," + data );
	});

});