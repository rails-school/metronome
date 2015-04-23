console.log("This is javascript");

var playing = false;
var audioContext;

function changeSpeed(event) {
    if ($(event.target).hasClass("increase")) {
        increaseSpeed(5);
    } else if ($(event.target).hasClass("decrease")) {
        increaseSpeed(-5);
    } else {
        console.dir(event);
        console.log("Oops! We triggered this function from the wrong event!");
    }
}

function increaseSpeed(delta) {
    var bpmInput = $("#bpm");
    bpmInput.val(parseInt(bpmInput.val()) + delta);
}

function play() {
    if (playing) {
        playing = false;
    } else {
        playing = true;
        beat();
    }
}
function beat() {
    var bpm = parseInt($("#bpm").val());
    click();
    var millisecondsToNextBeat = 60*1000 / bpm;

    if (playing) {
        setTimeout(beat, millisecondsToNextBeat);
    }
}
function click() {
    console.log("Click!");
    var oscillator = audioContext.createOscillator();
    oscillator.frequency.value = 440;
    oscillator.type = "triangle";
    oscillator.connect(audioContext.destination);
    oscillator.start(0);
    setTimeout(function() {
        oscillator.stop(0)
    }, 100);
}

function pause() {
    playing = false;
}


function initAudio() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext);
    } catch (e) {
        alert('No web audio oscillator support in this browser');
    }
}

/*
   This is jquery's way of saying,
   run this code when the page has loaded
*/
$(function() {
    $("#play")
        .button()
        .click(play);
    $(".speed")
        .button()
        .click(changeSpeed);
    $("#bpm").prop('disabled', true);
    initAudio();
});
