$(document).ready(function() {
  var textbook = $('.textbook textarea');

  textbook.on('keyup', function(e) {
    localStorage.setItem('textbook', $(this).val());
  });

  textbook.val(localStorage.getItem('textbook'));
});
