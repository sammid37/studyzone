function addListItem(item) {
  $('.list').append('<div class="item">'+item+'</div>');
}

function addListItemFromInput() {
  var input = $("input[name=todolistitem]");

  addListItem(input.val());

  input.val('');
}

$(document).ready(function() {
  $("input[name=todolistitem]").on('keypress', function (e) {
      if (e.which === 13) {
          addListItemFromInput();
      }
  });
  $("#tdl-button").click(addListItemFromInput);

  $(document).on('click', '.item', function() {
      $(this).toggleClass("ok");
  });
});
