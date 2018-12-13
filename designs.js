// When size is submitted call makeGrid()
$('#sizePicker').submit(function(event) {
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  event.preventDefault();         // prevents default action - refreshing page
  makeGrid(height,width);
});

function makeGrid(gridHeight,gridWidth) {
  $('#pixel_canvas').empty();

  for (var table_row = 1; table_row <= gridHeight; table_row++) {
    $('#pixel_canvas').append('<tr></tr>')
    for (var table_column = 1; table_column <= gridWidth; table_column++) {
        $('#pixel_canvas').children().filter(':last').append('<td></td>')
    };
  };
};

// Select color input
$('#pixel_canvas').on('click','td', function(event){
  $(this).css('background-color', $('#colorPicker').val())
});
