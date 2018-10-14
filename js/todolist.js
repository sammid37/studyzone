$(document).ready(function() {
  $("#tdl-button").click(function() { 
      var toAdd = $("input[name=todolistitem]").val();
      $('.list').append('<div class="item">'+toAdd+'</div>');
  });
  $(document).on('click', '.item', function() {
      $(this).toggleClass("ok");
  });
});