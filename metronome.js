console.log("This is JavaScript");

function bpm() {
  return parseInt($("#bpm").val());
}
function changeSpeed(delta) {
  $("#bpm").val(bpm() + delta);
}
function increase() {
  changeSpeed(5);
}
function decrease() {
  changeSpeed(-5);
}

// on document ready
$(function() {
  $("#increase").click(increase);
  $("#decrease").click(decrease);
});