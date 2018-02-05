	<!DOCTYPE html>
	<html>
	<head>
		<title>SoundTrack | Start</title>

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" type="text/css" href="styles.css">
		<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
<?php include('index.php') ?>
	</head>
	<body>
		<div class="container">
			<center>
				<div class="jumbotron">
					<h1>SoundTrack</h1>
				</div>

				<button type="button" onclick="helpStart()">?</button>

				<br><br>
				<h4>Soundscape</h4>

				<div class="sound" id="sound1">
					<a href="" class="thumbnail">
						<p>Soundscape sound goes here</p>
					</a>
				</div>
				<button type="button" ">Left</button>
				<button type="button" ">Right</button>

				<br><br>
				<h4>Alert Sound</h4>
				<div class="sound" id="sound5">
					<a href="" class="thumbnail">
						<p>Alert sound goes here</p>
					</a>
				</div>
				<button type="button" ">Left</button>
				<button type="button" ">Right</button>

				<br><br><br><br>
				<output id="downtime" for="downtimeRange">20</output>
				<br><br>
				<div class="slidecontainer">
					<input type="range" min="1" max="40" value="20" class="slider" id="downtimeRange" oninput="downtime.value = downtimeRange.value">
				</div>

				<br><br>
				<div class="button" id="start">
					<a href="screen2.html" class="thumbnail">
						<p>Start Working!</p>
					</a>
				</div>
			</center>
		</div>

		<script src="https://code.jquery.com/jquery.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="script.js"></script>


	</body>
	</html>