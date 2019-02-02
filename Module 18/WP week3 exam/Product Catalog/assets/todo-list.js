$(document).ready(function(){

  $('form').on('submit', function(){
      var title = $('#title');
      var display = $('#display');
      var quantity = $('#quantity');
      var todo = {title: title.val(), display: display.val(), quantity: quantity.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('button').on('click', function(){
      var item = $(this).attr("name").trim().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/delete/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
