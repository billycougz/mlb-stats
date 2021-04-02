                                                                                                                                                                                                                                                                                                                                                                                                                                <?php 
	$pageTitle = "MLB Stats on Deck";
	include('inc/header.php');
?>

	<div id="mlb_banner" class="row" style="opactity: 0.5; margin-left: -8%;">
		<div class="container">
			<br><br><br>
			<div class="row">
				<div  style="text-align: center;">
					<h1 style="font-family: collegedregular;font-size: xx-large; margin-left: 8%">MLB Stats</h1>
					<h1 style="font-family: collegedregular;font-size: xx-large; margin-left: 8%">on Deck</h1>
				</div>
			</div>
			
			<br>
			<div class="row">
				<div class="seasonSelectClass" align="center">
					<select id="seasonSelect" style="margin-left: 8%; display: none">
						<option>Select a Season</option>
						<option>2013</option>
						<option>2012</option>
					</select>
					<h1 id="loading" style="color: #3D86C5; margin-left: 8%">Loading: Please Wait</h1>
				</div>
			</div>
			<br><br>
		</div>
	</div>

<div class="container" style="margin-TOP: 1%;">

	<div class="row" style="margin-bottom: 2%">
	
		<div class="col-md-2">
			<h3 style="margin: 0"><span class="label label-danger">Teams</span></h3>
			<select style="width:100%" id="teamList">
				<option>All Teams</option>
				<option>Arizona Diamondbacks</option>
				<option>Atlanta Braves</option>
				<option>Baltimore Orioles</option>
				<option>Boston Red Sox</option>
				<option>Chicago Cubs</option>
				<option>Chicago White Sox</option>
				<option>Cincinatti Reds</option>
				<option>Clevland Indians</option>
				<option>Detroit Tigers</option>
				<option>Colorado Rockies</option>
				<option>Houston Astros</option>
				<option>Kansas City Royals</option>
				<option>Los Angeles Angels</option>
				<option>Los Angeles Dodgers</option>
				<option>Miami Marlins</option>
				<option>Milwaukee Brewers</option>
				<option>Minnesota Twins</option>
				<option>New York Mets</option>
				<option>New York Yankees</option>
				<option>Oakland Athletics</option>
				<option>Philadelphia Phillies</option>
				<option>Pittsburgh Pirates</option>
				<option>San Diego Padres</option>
				<option>San Francisco Giants</option>
				<option>Seattle Mariners</option>
				<option>St. Louis Cardinals</option>
				<option>Tampa Bay Rays</option>
				<option>Texas Rangers</option>
				<option>Toronto Blue Jays</option>
				<option>Washington Nationals</option>
			</select>
		</div>
			
		<div class="col-md-2">
			<h3 style="margin: 0"><span class="label label-danger">Search</span></h3>
			<input id="nameSearch" type="text" style="width:100%; height: 20px;" placeholder="Search by last name">
		</div>
		
		<div class="col-md-2">
			<button type="button" id="clearTable" class="btn btn-sm btn-danger" style="width: 100%; margin-top: 16px;">Clear Table</button>
		</div>
	</div>
	
	
	<div class="row">

			<div class="col-md-2">
				<h3 style="margin: 0"><span class="label label-primary">Players</span></h3>
				<select size="15" style="width:100%" id="playerList">
				</select>
				<label>Number of Players: </label><span id="playerCount"></span>
			</div>
	
	
	
			<br>
			<div class="col-md-10">
				<div class="panel panel-primary" style="min-height: 256px;"><div class="panel-heading"><h3 class="panel-title">Player Stats</h3></div><div class="panel-body">
				<table id="playerStats" class="table">
				<thread><tr><th>Team</th><th>Name</th><th>Pos</th><th>G</th><th>AB</th><th>H</th><th>R</th><th>2B</th><th>3B</th><th>HR</th><th>RBI</th><th>BB</th><th>SO</th><th>SB</th><th>CS</th><th>AVG</th><th>OBP</th><th>SLG</th><th> </th></tr></thread>
				<tbody id="statTableBody"><tr></tr></tbody></table></div></div>
			</div>
			
</div><!--End container-->
	
	
	
	</div>
</div>

<?php include('inc/footer.php');?>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            