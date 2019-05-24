// Business Logic (back-end)
function beepBoop(userNum, isReversed){
  if (userNum >= 1) {
    var returnArray = [];
    var regexOne = /1/g;
    var regexZero = /0/g;
    for (var i = 1; i <= userNum; i++) {
      var iString = String(i); // get string version of i for regex tests
      if (!(i % 3)) {
        returnArray.push("SORRY!")
      } else if (regexOne.test(iString)) {
        returnArray.push("Boop!");
      } else if (regexZero.test(iString)) {
        returnArray.push("Beep!");
      } else {
        returnArray.push(i);
      }
    } // end for loop
    if (isReversed) {
      returnArray.reverse();
    }
    return returnArray;
  } // end if number
  return false;
};

function colorPicker() {
  var color = 'rgb(';
  for (var i = 0; i < 3; i++) {
    color += Math.ceil(Math.random() * 255);
    if (i < 2) {
      color += ', '
    }
  }
  color += ')';
  return color;
}
// User interface Logic (front-end)
$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    $('#display-ul').empty();
    $('img.we-love').hide();
    $('#display-div').css("color", colorPicker());
    var userNum = $('#user-input').val();
    var isReversed = false;
    if ($('input[name="reverse-check"]:checked').length) {
      isReversed = true;
    }
    if (!(beepBoop(userNum))) {
      $('#display-ul').text("Upps! Please enter only natural numbers.");
    } else if (beepBoop(userNum).length > 48) {
      $('img.we-love').show();
    } else {
      beepBoop(userNum, isReversed).forEach(function(each) {
        $('#display-ul').append('<li>' + each + '</li>');
      });
    }
  });
});
