var socket = connectToUserSocket();	

		
function viewFriends(){
	socket.emit('request friend list', getCookie("ID"));
	socket.on('friend list update', function(list){

		var friendsList = bootbox.dialog({
			title: "Friend List",
			message: "<svg></svg> <script> "+
			"var svgSel = d3.select('svg')"+
				".attr('x', '0')"+
				".attr('y', '0')"+
				".attr('width', '100%')"+
				".attr('height', '100%'); "+
				
			"svgSel.append('rect')"+
				".attr('x', '0%')"+
				".attr('y', '0%')"+
				".attr('width', '100%')"+
				".attr('height', '100%')"+
				".style('fill', '#f0f0f0'); "+
				
			"var zebraGroup = svgSel.append('g'); "+
			
			"var color; " +
			"for(var j=0, var i = 6; i < 100; j++, i+= 3){ " +
				"if(j%2==0){ color ='#bababa';} " +
				"else{ color='#f0f0f0';} " +
				
				"zebraGroup.append('rect')" +
					".attr('x', '0%')" +
					".attr('y', i +'%')" + 
					".attr('width', '100%')" +
					".attr('height', '4%')" +
					".style('fill', color);"+
			 "} "+
			 
			 "zebraGroup.append('text')" +
				".attr('x', '2%')" +
				".attr('y', '4%')" + 
				".attr('font-size' , '28px')" +
				".attr('font-weight', '600')" +
				".attr('font-family', 'trebuchet ms')" +
				".style('fill','#0070C0')" +
				".text('Friend'); "+

			"zebraGroup.append('text')" +
				".attr('x', '80%')" +
				".attr('y', '4%')" + 
				".attr('font-size' , '28px')" +
				".attr('font-weight', '600') " +
				".attr('font-family', 'trebuchet ms')" +
				".style('fill','#0070C0')" +
				".text('Online');"+
			
			"var friendNames = zebraGroup.append('g'); " +
			"friendNames.selectAll('text').remove(); " +
			
			"var k = '.8%'; "+
			
			"friendNames.selectAll('text')"+
				".data(list)"+
				".enter()" +
					".attr('x', '3%')"+
					".attr('y', k + 3 + '%')"+
					".text(function(d){ " +
						"return d.name});" +
					
			"var friendStatus = zebraGroup.append('g');"+
			"friendStatus.selectAll('text').remove(); " +
			
			"k = '.8%';" +
			
			"friendStatus.selectAll('text')"+
				".data(list)"+
				".enter()" +
					".attr('x', '3%')"+
					".attr('y', k + 3 + '%')"+
					".text(function(d){ " +
					"return d.online});" +
		"</script>"
		
		});
	});


}



