var lobbySound = $('#lobby')[0];
$('#lobby-area')
	.mouseenter(function() {
		lobbySound.play();
	});
$('#lobby-area')
	.mouseleave(function() {
        lobbySound.pause();
	});

var cinemaSound = $('#cinema')[0];
$('#cinema-area')
	.mouseenter(function() {
		cinemaSound.play();
	});
$('#cinema-area')
	.mouseleave(function() {
        cinemaSound.pause();
	});

var happinessSound = $('#happiness')[0];
$('#happiness-area')
	.mouseenter(function() {
		happinessSound.play();
	});
$('#happiness-area')
	.mouseleave(function() {
        happinessSound.pause();
	});

var darknessSound = $('#darkness')[0];
$('#darkness-area')
	.mouseenter(function() {
		darknessSound.play();
	});
$('#darkness-area')
	.mouseleave(function() {
        darknessSound.pause();
	});

var sadnessSound = $('#sadness')[0];
$('#sadness-area')
	.mouseenter(function() {
		sadnessSound.play();
	});
$('#sadness-area')
	.mouseleave(function() {
        sadnessSound.pause();
	});

var creditSound = $('#sweeping-credit')[0];
$('#sweeping-credit-area')
	.mouseenter(function() {
		creditSound.play();
	});
$('#sweeping-credit-area')
	.mouseleave(function() {
        creditSound.pause();
	});

var sweepingSound = $('#sweeping-beat')[0];
$('#sweeping-beat-area')
	.mouseenter(function() {
		sweepingSound.play();
	});
$('#sweeping-beat-area')
	.mouseleave(function() {
        sweepingSound.pause();
	});