// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  var mus, ins
  for (var i = 0; i < musicians.length; i++) {
    mus = musicians[i]
    ins = instruments[i]
    newArray[i] = "${mus} plays ${ins}"
  }
  return newArray
}