var Metronome = {
  playing: false,

  bpm: function() {
    return parseInt($("#bpm").val());
  },

  changeSpeed: function(delta) {
    $("#bpm").val(Metronome.bpm() + delta);
  },

  increase: function() {
    Metronome.changeSpeed(5);
  },

  decrease: function() {
    Metronome.changeSpeed(-5);
  },



  play: function() {
    if (Metronome.playing) {
      $("#play").val("Play");
      Metronome.playing = false;
    } else {
      $("#play").val("Pause");
      Metronome.playing = true;
      Metronome.click();
    }
  },

  click: function() {
    if (Metronome.playing) {
      $("#click")[0].play();
      console.log("Click!");
      var msPerBeat = 60*1000 / Metronome.bpm();
      setTimeout(Metronome.click, msPerBeat);
    }
  }
}


// on document ready
$(function() {
  $("#increase").click(Metronome.increase);
  $("#decrease").click(Metronome.decrease);
  $("#play").click(Metronome.play);
});
