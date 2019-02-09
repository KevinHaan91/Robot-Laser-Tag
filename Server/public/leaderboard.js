var socket= connectToUserSocket();


socket.on('redirect', function(destination) {
	window.location.href = destination;
});

socket.emit('request user leaderboard');
socket.emit('request robot leaderboard');

var bodySelect = d3.select("body").append("div");
var svgSelect = bodySelect.append("svg")
				.attr("preserveAspectRatio", "xMinYMin meet")
				.attr("viewBox", "0 0 1200 800")
				.classed("svg-content-responsive", true); 

				

var fillGroup = svgSelect.append('g');
var logoGroup = svgSelect.append('g');

/*
/
/	BACKGROUND FILL
/
*/
var fillOuter = fillGroup.append('rect')
	.attr('x','0')
	.attr('y','18%')
	.attr('width','100%')
	.attr('height','100%')
	.style('fill', '#0070C0');
	
var fillInner = fillGroup.append('rect')
	.attr('x','4%')
	.attr('y','26%')
	.attr('width','92.5%')
	.attr('height','100%')
	.style('fill', '#f0f0f0')
	.attr('stroke-width', "2%")
	.attr('stroke', '#bababa');

/*
/
/	LOGO BANNER
/
*/
var logoBack = logoGroup.append('rect')
	.attr('x','0%')
	.attr('y','0')
	.attr('height', '18%')
	.attr('width', '100%')
	.style('fill', '#f0f0f0')
	.attr('stroke-width', 12)
	.attr('stroke','#bababa');
	
var logoImage = logoGroup.append('image')
	.attr('href', 'logo.png')
	.attr('alt', 'logo')
	.attr('x','2%')
	.attr('y','0%')
	.attr('height', '10%')
	.attr('width', '13%')
	.attr("style","opacity:.9");
	
var logoLabel = logoGroup.append('text')
	.attr('x', '30%')
	.attr('y', '12%')
	.attr('font-family', 'trebuchet ms')
	.attr('font-size' , '72px')
	.attr('font-weight', '700') 
	.attr('fill', '#00B0F0')
	.attr('stroke-width', 4)
	.attr('stroke', '#0070C0')
	.style('text-decoration', 'underline')
	.text('Leaderboards');
	
var backBtn = logoGroup.append('rect')
	.attr('x','2%')
	.attr('y','12%')
	.attr('height', '4%')
	.attr('width', '8%')
	.style('cursor','pointer')
	.style('fill', '#bababa')
	.attr('stroke-width', 5)
	.attr('stroke','#0070C0')
	.on('click', function(){
		back();
	});
var backText = logoGroup.append('text')
	.attr('x', '2.25%')
	.attr('y', '15%')
	.attr('font-family', 'sans-serif')
	.attr('font-size' , '22px')
	.attr('font-weight', '900') 
	.attr('fill', '#0070C0')
	.style('cursor','pointer')
	.text('< Back')
	.on('click', function(){
		back();
	});
/*
/
/	LEADERBOARD DIVIDER
/
*/
	
var boardDivider = fillGroup.append('rect')
	.attr('x', '49%')
	.attr('y', '26%')
	.attr('height', '100%')
	.attr('width', '2%')
	.style('fill','#bababa');
	
/*
/
/	USER LEADERBOARD LABELS	
/
*/
var labelUserSVG = svgSelect.append('svg')
	.attr('x', '5.5%')
	.attr('y', '28%')
	.attr('width', '43%')
	.attr('height', '100%');
	
var labelUserNum = labelUserSVG.append('text')
	.attr('x', '2%')
	.attr('y', '4%')
	.attr('font-size', '30px')
	.attr('font-weight', '700') 
	.attr('font-family', 'trebuchet ms')
	.style('fill','#0070C0')
	.style('text-decoration', 'underline')
	.text('#');
	
var labelUserName = labelUserSVG.append('text')
	.attr('x', '12%')
	.attr('y', '4%')
	.attr('font-size', '30px')
	.attr('font-weight', '700') 
	.attr('font-family', 'trebuchet ms')
	.style('fill','#0070C0')
	.style('text-decoration', 'underline')
	.text('USER');
	
var labelUserPoints = labelUserSVG.append('text')
	.attr('x', '75%')
	.attr('y', '4%')
	.attr('font-size', '30px')
	.attr('font-weight', '700') 
	.attr('font-family', 'trebuchet ms')
	.style('fill','#0070C0')
	.style('text-decoration', 'underline')
	.text('POINTS');
	
/*
/
/	ROBOT LEADERBOARD LABELS
/
*/		
var labelRobotSVG = svgSelect.append('svg')
	.attr('x', '51.8%')
	.attr('y', '28%')
	.attr('width', '43%')
	.attr('height', '100%');
	
var labelRobotNum = labelRobotSVG.append('text')
	.attr('x', '2%')
	.attr('y', '4%')
	.attr('font-size', '30px')
	.attr('font-weight', '700') 
	.attr('font-family', 'trebuchet ms')
	.style('fill','#0070C0')
	.style('text-decoration', 'underline')
	.text('#');
	
var labelRobotName = labelRobotSVG.append('text')
	.attr('x', '12%')
	.attr('y', '4%')
	.attr('font-size', '30px')
	.attr('font-weight', '700') 
	.attr('font-family', 'trebuchet ms')
	.style('fill','#0070C0')
	.style('text-decoration', 'underline')
	.text('ROBOT');
	
var labelRobotPoints = labelRobotSVG.append('text')
	.attr('x', '75%')
	.attr('y', '4%')
	.attr('font-size', '30px')
	.attr('font-weight', '700') 
	.attr('font-family', 'trebuchet ms')
	.style('fill','#0070C0')
	.style('text-decoration', 'underline')
	.text('POINTS');
	
	
/*
/
/	LEADERBOARD SVG's
/
*/
	
var boardUserSVG = labelUserSVG.append('svg')
	.attr('x', '1%')
	.attr('y', '6%')
	.attr('width', '98%')
	.attr('height', '100%');
	
var boardRobotSVG = labelRobotSVG.append('svg')
	.attr('x', '1%')
	.attr('y', '6%')
	.attr('width', '98%')
	.attr('height', '100%');
	
/*
/
/	LEADERBOARD ZEBRA-STRIPING
/
*/

for(var j=0, i = 0; i < 100; j++, i+= 3){
	var color;
	
	if(j%2==0){ color ='#bababa';}
	else{ color='#f0f0f0';}
	
	boardUserSVG.append('rect')
		.attr('x', '0%')
		.attr('y', i + '%')
		.attr('width', '100%')
		.attr('height', '4%')
		.style('fill', color);
		
	boardRobotSVG.append('rect')
		.attr('x', '0%')
		.attr('y', i + '%')
		.attr('width', '100%')
		.attr('height', '4%')
		.style('fill', color);
}
	


function buildUserLeaderboard(data){
	
	boardUserSVG.selectAll('text').remove();
	var texts = boardUserSVG.selectAll('text').data(data).enter();
	
	/*
	/	USER #
	*/
	y = -.8;
	texts.append('text')
			.attr('x', '1%')
			.attr('y', function(d){
				y += 3;
				return y + '%'})
			.attr('font-family', 'trebuchet ms')
			.style('fill','#0070C0')
			.text(function(d){
				return data.indexOf(d)+1;
			});
			
	/*
	/	USER NAME
	*/	
	y = -.8;
	texts.append('text')
			.attr('x', '12%')
			.attr('y', function(d){
				y += 3;
				return y + '%'})
			.attr('font-family', 'trebuchet ms')
			.style('fill','#0070C0')
			.text(function(d){
				return d['username'];
			});
			
	/*
	/	USER POINTS
	*/	
	y =
	y=-.8;
	texts.append('text')
			.attr('x', '80%')
			.attr('y', function(d){
				y += 3;
				return y + '%'})
			.attr('font-family', 'trebuchet ms')
			.style('fill','#0070C0')
			.text(function(d){
				return d['totalPoints'];
			});
}

function buildRobotLeaderboard(data){
	
	boardRobotSVG.selectAll('text').remove();
	var texts = boardRobotSVG.selectAll('text').data(data).enter();
	
	/*
	/	ROBOT #
	*/
	y = -.8;
	texts.append('text')
			.attr('x', '1%')
			.attr('y', function(d){
				y += 3;
				return y + '%'})
			.attr('font-family', 'trebuchet ms')
			.style('fill','#0070C0')
			.text(function(d){
				return data.indexOf(d)+1;
			});
			
	/*
	/	ROBOT NAME
	*/	
	y = -.8;
	texts.append('text')
			.attr('x', '12%')
			.attr('y', function(d){
				y += 3;
				return y + '%'})
			.attr('font-family', 'trebuchet ms')
			.style('fill','#0070C0')
			.text(function(d){
				return d['robotName'];
			});
			
	/*
	/	ROBOT POINTS
	*/	
	y =
	y=-.8;
	texts.append('text')
			.attr('x', '80%')
			.attr('y', function(d){
				y += 3;
				return y + '%'})
			.attr('font-family', 'trebuchet ms')
			.style('fill','#0070C0')
			.text(function(d){
				return d['totalPoints'];
			});
}



/*
/	REQUEST UPDATE FROM SERVER EVERY MINUTE
*/
var requestUpdate = setInterval(function(){
	socket.emit('request user leaderboard');
	socket.emit('request robot leaderboard');
}, 60000);

/*
/	REQUEST TO GO BACK TO PREVIOUS PAGE 
/	BASED ON ADMIN OR USER
*/
function back(){
	//clearInterval(requestUpdate());
	socket.emit('redirect back', getCookie("username"));
}

/*
/	RECEIVE LEADERBOARD DATA AND BUILD TABLES 
*/
socket.on('robot leaderboard update', function(data){
	buildRobotLeaderboard(data)
});
socket.on('user leaderboard update', function(data){
	buildUserLeaderboard(data)
});


