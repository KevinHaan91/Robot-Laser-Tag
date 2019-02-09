
var socket= connectToUserSocket();

socket.on('redirect', function(destination) {
	window.location.href = destination;
});

//Set ID cookie
socket.emit('request user id', getCookie('username'));
socket.on('get user id', function(id) {
	document.cookie = "ID=" + id + "; path=/";
});

var bodySelect = d3.select("body").select("div");
var svgSelect = bodySelect.append("svg")
				.attr("preserveAspectRatio", "xMinYMin meet")
				.attr("viewBox", "0 0 1200 800")
				.classed("svg-content-responsive", true); 

				
var logoGroup = svgSelect.append('g');
var menuGroup = svgSelect.append('g');
var bannerGroup =  svgSelect.append('g');
var mainGroup = svgSelect.append('g');
var robotTextGroup = svgSelect.append('g');
var driverTextGroup = svgSelect.append('g');
var gunnerTextGroup = svgSelect.append('g');
var userTextGroup = svgSelect.append('g');
var dbTextGroup = svgSelect.append('g');
var adminToolsGroup = svgSelect.append('g');
var logoutGroup = svgSelect.append('g');

var logoBack = logoGroup.append('rect')
	.attr('height', '13%')
	.attr('width', '100%')
	.attr('x','15%')
	.attr('y','0')
	.style('fill', '#f0f0f0')
	.attr('stroke-width', 10)
	.attr('stroke','#bababa');
	
var logoImage = logoGroup.append('image')
	.attr('href', 'logo.png')
	.attr('alt', 'logo')
	.attr('height', '12%')
	.attr('width', '85%')
	.attr('x','0')
	.attr('y','5');

var menuBar = menuGroup.append('rect')
	.attr('x','0')
	.attr('y','0')
	.attr('width','15%')
	.attr('height','100%')
	.style('fill', '#0070C0');
	
var gearImage = menuGroup
	.append('image')
	.attr('href', 'gear.png')
	.attr('alt', 'gear')
	.attr('height', '10%')
	.attr('width', '10%')
	.attr('x', '2.5%')
	.attr('y', '1.5%');
	
var bannerBar = bannerGroup.append('rect')
	.attr('x','0')
	.attr('y','13%')
	.attr('width','100%')
	.attr('height','7%')
	.style('fill', '#0070C0');
	
var adminToolsLabel = adminToolsGroup.append('text')
	.attr('x', '1.25%')
	.attr('y', '18%')
	.attr('font-family', 'sans-serif')
	.attr('font-size' , '24px')
	.attr('font-weight', '700') 
	.attr('fill', 'white')
	.style('text-decoration', 'underline')
	.text('Admin Tools');
	
var robotsLabel = mainGroup.append('text')
	.attr('x', '23%')
	.attr('y', '18%')
	.attr('font-family', 'sans-serif')
	.attr('font-size' , '24px')
	.attr('font-weight', '700') 
	.attr('fill', 'white')
	.style('text-decoration', 'underline')
	.text('Active Robots');
	
var usersLabel = mainGroup.append('text')
	.attr('x', '51%')
	.attr('y', '18%')
	.attr('font-family', 'sans-serif')
	.attr('font-size' , '24px')
	.attr('font-weight', '700') 
	.attr('fill', 'white')
	.style('text-decoration', 'underline')
	.text('Active Users');

var dbLabel = mainGroup.append('text')
	.attr('x', '79%')
	.attr('y', '18%')
	.attr('font-family', 'sans-serif')
	.attr('font-size' , '24px')
	.attr('font-weight', '700') 
	.attr('fill', 'white')
	.style('text-decoration', 'underline')
	.text('User Database');	

var kickUserBtn = adminToolsGroup.append('rect')
	.attr('x', '1.5%')
	.attr('y', '27.35%')
	.attr('width', '10%')
	.attr('height', '4%')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke', 'black')
	.style('cursor','pointer')
	.on('click', function(){
		kickUser();
	});;
	
var kickUserText = adminToolsGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '30%')
	.attr('font-size' , '16px')
	.attr('font-weight', '900') 
	.attr('font-family', 'sans-serif')
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('Kick User')
	.on('click', function(){
		kickUser();
	});
	
var banUserBtn = adminToolsGroup.append('rect')
	.attr('x', '1.5%')
	.attr('y', '34.35%')
	.attr('width', '10%')
	.attr('height', '4%')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke', 'black')
	.style('cursor','pointer')
	.on('click', function(){
		banUser();
	});;
	
var banUserText = adminToolsGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '37%')
	.attr('font-size' , '16px')
	.attr('font-weight', '900') 
	.attr('font-family', 'sans-serif')
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('Ban User')
	.on('click', function(){
		banUser();
	});
	
var deleteAccountBtn = adminToolsGroup.append('rect')
	.attr('x', '1.5%')
	.attr('y', '41.35%')
	.attr('width', '10%')
	.attr('height', '6%')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke', 'black')
	.style('cursor','pointer')
	.on('click', function(){
		deleteAccount();
	});;
	
var deleteAccountText = adminToolsGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '44%')
	.attr('font-size' , '16px')
	.attr('font-weight', '900') 
	.attr('font-family', 'sans-serif')
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('Delete')
	.on('click', function(){
			deleteAccount();
		})
	.append('tspan')
		.attr('dy', '1.1em')
		.attr('dx', '-2.5em')
		.text('Account');

var spectateBtn = adminToolsGroup.append('rect')
	.attr('x', '1.5%')
	.attr('y', '50.35%')
	.attr('width', '10%')
	.attr('height', '4%')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke', 'black')
	.style('cursor','pointer')
	.on('click', function(){
		spectate();
	});;
	
var spectateText = adminToolsGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '53%')
	.attr('font-size' , '16px')
	.attr('font-weight', '900') 
	.attr('font-family', 'sans-serif')
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('Spectate')
	.on('click', function(){
		spectate();
	});
	
var leaderboardBtn = adminToolsGroup.append('rect')
	.attr('x', '1.5%')
	.attr('y', '57.35%')
	.attr('width', '10%')
	.attr('height', '4%')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke', 'black')
	.style('cursor','pointer')
	.on('click', function(){
		leaderboard();
	});;
	
var leaderboardText = adminToolsGroup.append('text')
	.attr('x', '2%')
	.attr('y', '60%')
	.attr('font-size' , '16px')
	.attr('font-weight', '900') 
	.attr('font-family', 'sans-serif')
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('Leaderboard')
	.on('click', function(){
		leaderboard();
	});
	
var profileBtn = adminToolsGroup.append('rect')
	.attr('x', '1.5%')
	.attr('y', '65.35%')
	.attr('width', '10%')
	.attr('height', '6%')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke', 'black')
	.style('cursor','pointer')
	.on('click', function(){
		profile();
	});
	
var profileText = adminToolsGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '68%')
	.attr('font-size' , '16px')
	.attr('font-weight', '900') 
	.attr('font-family', 'sans-serif')
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('View')
	.on('click', function(){
			profile();
		})
	.append('tspan')
		.attr('dy', '1.1em')
		.attr('dx', '-1.5em')
		.text('Profile');
	
var logoutBtn = logoutGroup.append('rect')
	.attr('height', '4%')
	.attr('width', '8%')
	.attr('x','1.5%')
	.attr('y','75%')
	.style('cursor','pointer')
	.style('fill', 'white')
	.attr('stroke-width', 3)
	.attr('stroke','black')
	.on('click', function(){
		logout();
	});
	
var logoutText = logoutGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '77.75%')
	.attr('font-family', 'sans-serif')
	.attr('font-size' , '18px')
	.attr('font-weight', '900') 
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('Logout')
	.on('click', function(){
		logout();
	});
	
var mainBox = mainGroup.append('rect')
	.attr('x','15%')
	.attr('y','20%')
	.attr('width','100%')
	.attr('height','100%')
	.style('fill', '#bababa');
	
var robotBox = mainGroup.append('rect')
	.attr('x','16%')
	.attr('y','22%')
	.attr('width','27%')
	.attr('height','100%')
	.style('fill', '#f0f0f0');
	
var userBox = mainGroup.append('rect')
	.attr('x','44%')
	.attr('y','22%')
	.attr('width','27%')
	.attr('height','100%')
	.style('fill', '#f0f0f0');
	
var dbBox = mainGroup.append('rect')
	.attr('x','72%')
	.attr('y','22%')
	.attr('width','27%')
	.attr('height','100%')
	.style('fill', '#f0f0f0');

	
socket.on('robotInfo', function(data){
	var y = 17;
	var y2 = 19;
	var y3 = 21;
	
	robotTextGroup.selectAll('text').remove();
	
	robotTextGroup.selectAll('text')
		.data(data)
		.enter()
		.append('text')
			.attr('x', '16.5%')
			.attr('y', function(d){
				y+=8; 
				console.log(d['name']);
				return y+"%";})
			.attr('font-family', 'sans-serif')
			.text(function(d) { return d['name'];});
			
	driverTextGroup.selectAll('text').remove();
			
	driverTextGroup.selectAll('text')
		.data(data)
		.enter()
		.append('text')
			.attr('x', '16.5%')
			.attr('y', function(){
				y2+=8;
				return y2 + "%";})
			.attr('font-family', 'sans-serif')
			.attr('font-size', '10px')
			.text(function(d) {return "  Driver: " + d['driver'];});
		
	gunnerTextGroup.selectAll('text').remove();		
	gunnerTextGroup.selectAll('text')
		.data(data)
		.enter()
		.append('text')
			.attr('x', '16.5%')
			.attr('y', function(){
				y3+=8;
				return y3 + "%";})
			.attr('font-family', 'sans-serif')
			.attr('font-size', '10px')
			.text(function(d) {return "  Gunner: " + d['gunner'];});
});
	
	
socket.on('usernames', function(data) {
	var y = 23;

	userTextGroup.selectAll('text').remove();
	
	userTextGroup.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.attr('x', '44.5%')
		.attr('y', function(d){
			y = y+=2; 
			return y+"%";})
		.attr('font-family', 'sans-serif')
		.text(function(d) { return d;});
});

socket.on('dblist', function(data) {
	var y = 23;

	dbTextGroup.selectAll('text').remove();
	
	dbTextGroup.selectAll('text')
		.data(data)
		.enter()
		.append('text')
		.attr('x', '72.5%')
		.attr('y', function(d){
			y = y+=2; 
			return y+"%";})
		.attr('font-family', 'sans-serif')
		.text(function(d) { return d;});
});

socket.emit('request robot list');

function kickUser(){
	var username = prompt("Enter the name of the user to remove from a robot \n ");
	
	if(username != ""){
		socket.emit("kick user", username);
	}
}

function banUser(){
	var username = prompt("Enter the name of the user you would like to ban \n\n   (*Note - This user will no longer be able to log on)\n ");
	
	if(username != ""){
		socket.emit("ban user", username);
	}
}

function deleteAccount(){
	var username = prompt("Enter the name of the account you would like to delete \n ");
	
	if(username != ""){
		socket.emit("delete account", username);
	}
}
function spectate(){
	var robot = prompt("Enter the name of the robot you would like to spectate \n ");
	
	if(robot != ""){
		socket.emit("spectate", robot);
	}
}
function leaderboard(){
	socket.emit("redirect leaderboard");	
}
function profile(){
	socket.emit("redirect profile");	
}


function logout(){
	var check = confirm("Are you sure you want to log out?");
	
	if(check){
		socket.emit("logout");
	}
}