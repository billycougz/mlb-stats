                                                                                                                                                                                                                                                                                                var numSeasons = 2;
var numTeams = 30;
var numPlayers = 20;

var season = 0000;
var teamName = "";
var teamLocation = "";

var playerArray = [];
var teamArray = [];
var seasonArray = [];
var logoArray = [];

var playerList = "";
var teamList = "";
var playerCount = 0;
var teamCount = 0;

var seasonIndex = 0;

var statTable = '';
var selectedPlayerArray = [];














//*********************************************************************************************************On page load
window.onload = function () {

// Set the global configs to synchronous 
$.ajaxSetup({
    async: false
});
	
	for(var seasonLoop = 0; seasonLoop < numSeasons; seasonLoop += 1){
	
		switch(seasonLoop) {
		    case 0:
		    	season = 2012;
		        break;
		    case 1:
		    	season = 2013;
		        break;
		    default:
		        break; 
		}//End switch
	
		for(var teamLoop = 0; teamLoop < numTeams; teamLoop += 1){

			switch(teamLoop) {
			    case 0:
			        teamName = "Angels";
			        teamLocation = "Los Angeles";
			        break;
			    case 1:
			        teamName = "Astros";
			        teamLocation = "Houston";
			        break;
			    case 2:
			        teamName = "Athletics";
			        teamLocation = "Oakland";
			        break;
			    case 3:
			        teamName = "Blue Jays";
			        teamLocation = "Toronto";
			        break;
			    case 4:
			        teamName = "Braves";
			        teamLocation = "Atlanta";
			        break;
			    case 5:
			        teamName = "Brewers";
			        teamLocation = "Milwaukee";
			        break;
			    case 6:
			        teamName = "Cardinals";
			        teamLocation = "St. Louis";
			        break;
			    case 7:
			        teamName = "Cubs";
			        teamLocation = "Chicago";
			        break;
			    case 8:
			        teamName = "Diamondbacks";
			        teamLocation = "Arizona";
			        break;
			    case 9:
			        teamName = "Dodgers";
			        teamLocation = "Los Angeles";
			        break;
			    case 10:
			        teamName = "Giants";
			        teamLocation = "San Francisco";
			        break;
			    case 11:
			        teamName = "Indians";
			        teamLocation = "Clevland";
			        break;
			    case 12:
			        teamName = "Mariners";
			        teamLocation = "Seattle";
			        break;
			    case 13:
			        teamName = "Marlins";
			        teamLocation = "Miami";
			        break;
			    case 14:
			        teamName = "Mets";
			        teamLocation = "New York";
			        break;
			    case 15:
			        teamName = "Nationals";
			        teamLocation = "Washington";
			        break;
			    case 16:
			        teamName = "Orioles";
			        teamLocation = "Baltimore";
			        break;
			    case 17:
			        teamName = "Padres";
			        teamLocation = "San Diego";
			        break;
			    case 18:
			        teamName = "Phillies";
			        teamLocation = "Philadelphia";
			        break;
			    case 19:
			        teamName = "Pirates";
			        teamLocation = "Pittsburgh";
			        break;
			    case 20:
			        teamName = "Rangers";
			        teamLocation = "Texas";
			        break;
			    case 21:
			        teamName = "Rays";
			        teamLocation = "Tampa Bay";
			        break;
			    case 22:
			        teamName = "Red Sox";
			        teamLocation = "Boston";
			        break;
			    case 23:
			        teamName = "Reds";
			        teamLocation = "Cincinatti";
			        break;
			    case 24:
			        teamName = "Rockies";
			        teamLocation = "Colorado";
			        break;
			    case 25:
			        teamName = "Royals";
			        teamLocation = "Kansas City";
			        break;
			    case 26:
			        teamName = "Tigers";
			        teamLocation = "Detroit";
			        break;
			    case 27:
			        teamName = "Twins";
			        teamLocation = "Minnesota";
			        break;
			    case 28:
			        teamName = "White Sox";
			        teamLocation = "Chicago";
			        break;
			    case 29:
			        teamName = "Yankees";
			        teamLocation = "New York";
			        break;
			    default:
			        break; 
			}//End switch
			
			src = "data/" + season + "/" + teamName.toLowerCase() + ".json";
			
			$.getJSON(src, function (response) {
				
				$.each(response, function (index, player) {
				
					player.teamName = teamName;
					player.team = teamLocation + " " + teamName;
					player.season = season;
					playerArray.push(player);
				});
			
			});//End getJSON
			
			//Load logo array
			var logoSrc = "logos/" + teamName.toLowerCase() + "_logo.jpg";
			logoArray[teamLoop] = new Image();
			logoArray[teamLoop].team = teamName;
			logoArray[teamLoop].src = logoSrc;
			
		}//End team loop	
		
	if(seasonLoop == 1){
		$('#loading').text('');
		document.getElementById("seasonSelect").style.display = "block";
	}
			
	}//End season loop
}














//***************************************************************************************************************************Season selected
$(document).ready(function () {                              
$("body").on("change", "#seasonSelect", function(){
	
	playerList = "";
	teamList = "";
	playerCount = 0;
	teamCount = 0;
	teamArray = [];
	$('#playerList').html('');

//****************************************************************
	$(playerArray).each(function(index, player){
	
		if(player.season == $('#seasonSelect').val()){
			var option = $("<option>").html(player.lname + ", " + player.finit).attr("teamName", player.teamName.toString()).attr("position", player.position.toString()).attr("games", player.games.toString()).attr("ab", player.ab.toString()).attr("hits", player.hits.toString()).attr("runs", player.runs.toString()).attr("doubles", player.doubles.toString()).attr("triples", player.triples.toString()).attr("hr", player.hr.toString()).attr("rbi", player.rbi.toString()).attr("bb", player.bb.toString()).attr("so", player.so.toString()).attr("sb", player.sb.toString()).attr("cs", player.cs.toString()).attr("avg", player.avg.toString()).attr("obp", player.obp.toString()).attr("slg", player.slg.toString());

		$('#playerList').append(option);
//*****************************************************************
		playerCount += 1;}
	});

	$('#playerCount').html(" " + playerCount);


}).trigger( "change" );
}); //end ready














//*******************************************************************************************************************Team is selected
$(document).ready(function () {
$("body").on("click", "#teamList", function(){

	if($('#seasonSelect').val() == "Select a Season"){
		bootbox.alert("Select a season before selecting a team.");
		return;
	}

	playerList = "";
	$('#playerList').html("");
	playerCount = 0;
	
	$(playerArray).each(function(index, player){
		if(player.season == $('#seasonSelect').val()){
		if(player.team == $("#teamList").val() || $("#teamList").val() == "All Teams"){
		
			var option = $("<option>").html(player.lname + ", " + player.finit).attr("teamName", player.teamName.toString()).attr("position", player.position.toString()).attr("games", player.games.toString()).attr("ab", player.ab.toString()).attr("hits", player.hits.toString()).attr("runs", player.runs.toString()).attr("doubles", player.doubles.toString()).attr("triples", player.triples.toString()).attr("hr", player.hr.toString()).attr("rbi", player.rbi.toString()).attr("bb", player.bb.toString()).attr("so", player.so.toString()).attr("sb", player.sb.toString()).attr("cs", player.cs.toString()).attr("avg", player.avg.toString()).attr("obp", player.obp.toString()).attr("slg", player.slg.toString());

			playerCount += 1;
		};
		}
		
		$('#playerList').append(option);

	});
	
	
	$('#playerCount').html(" " + playerCount);


}).trigger( "click" );
}); //end ready














var logoImg;
//******************************************************************************************************************Add player to stat table
$(document).ready(function () {
$("body").on("change", "#playerList", function(){

	var selectedTeam = $("#teamList").val();
	var selectedPlayer = $('option:selected', this).html() + $('option:selected', this).attr('position') + $('option:selected', this).attr('ab');
	console.log(selectedPlayer );
				
	if($.inArray(selectedPlayer, selectedPlayerArray) == -1){
				
//*************************************************************
	var playerName = $('option:selected', this).val();
	var playerTeam = $('option:selected', this).attr('teamName');
	var position = $('option:selected', this).attr('position');
	var games = $('option:selected', this).attr('games');
	var ab = $('option:selected', this).attr('ab');
	var hits = $('option:selected', this).attr('hits');
	var runs = $('option:selected', this).attr('runs');
	var doubles = $('option:selected', this).attr('doubles');
	var triples = $('option:selected', this).attr('triples');
	var hr = $('option:selected', this).attr('hr');
	var rbi = $('option:selected', this).attr('rbi');
	var bb = $('option:selected', this).attr('bb');
	var so  = $('option:selected', this).attr('so');
	var sb = $('option:selected', this).attr('sb');
	var cs = $('option:selected', this).attr('cs');
	var avg = $('option:selected', this).attr('avg');
	var obp = $('option:selected', this).attr('obp');
	var slg = $('option:selected', this).attr('slg');
//***********************************************************

		$(logoArray).each(function(index, logo){
		
			if(playerTeam == logo.team){logoImg = logo.src;}
		});
				
				statTable += '<tr><td><img style="width: 50px" src="' + logoImg + '"></td><td class="playerName">' + playerName + '</td><td class="position">' + position + '</td><td>' + games+ '</td><td class="ab">' + ab+ '</td><td>' + hits + '</td><td>' + runs + '</td><td>' + doubles + '</td><td>' + triples + '</td><td>' + hr + '</td><td>' + rbi + '</td><td>' + bb + '</td><td>' + so + '</td><td>' + sb + '</td><td>' + cs + '</td><td>' + avg + '</td><td>' + obp + '</td><td>' + slg + '</td><td><button type="button" class="btn btn-xs btn-danger">X</button></td></tr>';
				selectedPlayerArray.push(selectedPlayer);
	}
	
	$('#statTableBody').html(statTable);
	
}).trigger( "change" );
}); //end ready














//******************************************************************************************************************************Delete table row (a player stats row)
$(document).ready(function () {
$("body").on("click", "table#playerStats tr td button", function(){  

	var removedPlayer = $(this).closest('tr').find('.playerName').html() + $(this).closest('tr').find('.position').html() + $(this).closest('tr').find('.ab').html();
	console.log(removedPlayer);
	var rowIndex = $(this).closest('td').parent()[0].sectionRowIndex;
	
	document.getElementById("playerStats").deleteRow(rowIndex + 1);
	statTable = $('#statTableBody').html();
	
	var index = selectedPlayerArray.indexOf(removedPlayer);
	if (index > -1) {
		selectedPlayerArray.splice(index, 1);
	}
	
}).trigger( "click" );
}); //end ready    














//********************************************************************************************************************************Clear table
$(document).ready(function () {
$("body").on("click", "#clearTable", function(){  

	statTable = '';
	selectedPlayerArray = [];
	$('#statTableBody').html(statTable);
	
}).trigger( "click" );
}); //end ready       














var nameSearch = '';
//**********************************************************************************************************************************Search player by name
$(document).ready(function () {
$("body").on("keyup", "#nameSearch", function(){  

	$('#playerList').html("");
	playerCount = 0;
	
	nameSearch = $( "#nameSearch" ).val();
	
	$(playerArray).each(function(index, player){
	
		if(player.season == $('#seasonSelect').val()){
		if(player.lname.toLowerCase().indexOf(nameSearch.toLowerCase()) >= 0 ||nameSearch == ''){
		
			var option = $("<option>").html(player.lname + ", " + player.finit).attr("teamName", player.teamName.toString()).attr("position", player.position.toString()).attr("games", player.games.toString()).attr("ab", player.ab.toString()).attr("hits", player.hits.toString()).attr("runs", player.runs.toString()).attr("doubles", player.doubles.toString()).attr("triples", player.triples.toString()).attr("hr", player.hr.toString()).attr("rbi", player.rbi.toString()).attr("bb", player.bb.toString()).attr("so", player.so.toString()).attr("sb", player.sb.toString()).attr("cs", player.cs.toString()).attr("avg", player.avg.toString()).attr("obp", player.obp.toString()).attr("slg", player.slg.toString()); 
			
			playerCount += 1;
		
		}
		}
	$('#playerList').append(option);
	});
	
	$('#playerCount').html(" " + playerCount);

}).trigger( "keyup" );
}); //end ready           
                                      
                            
                            
                            
                            
                            
                            
                            
                            
                            