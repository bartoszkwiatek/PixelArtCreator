const state = {
  color1: '',
  color2: '',
  color3: '',
  color4: '',
  color5: '',
  gridHeight: 0,
  gridWidth: 0,
}

// When size is submitted call makeGrid()
$('#sizePicker').submit(function(event) {
  var height = $('#input_height').val();
  var width = $('#input_width').val();
  event.preventDefault();         // prevents default action - refreshing page
  makeGrid(height,width);
});


//creating empty grid
function makeGrid(gridHeight,gridWidth) {
  $('#pixel_canvas').empty();



  for (var table_row = 1; table_row <= gridHeight; table_row++) {
    $('#pixel_canvas').append('<tr></tr>')
    for (var table_column = 1; table_column <= gridWidth; table_column++) {
        $('#pixel_canvas').children().filter(':last').append('<td></td>')
    };
  };
    // var cellWidth = parseInt($('td').css('width'));
  // console.log(cellWidth);
  var minWidth = table_column*25;
  console.log(minWidth);

  if (minWidth > 400) {$('#app').css('min-width',minWidth);}
};


// coloring pixel
$('#pixel_canvas').on('click','td', function(event){

    $(this).css('background-color', $('#colorPicker').val());
    saveRecent($('#colorPicker').val());
});

// pick color from recent
$('#recentColors').on('click','div', function(event){
    var recentColorNumber = $(this).attr('id');
    console.log(state[recentColorNumber]);
    $('#colorPicker').val(state[recentColorNumber]);
});

function saveRecent(color) {
  if (color !== state.color1) {
    state.color5 = state.color4;
    state.color4 = state.color3;
    state.color3 = state.color2;
    state.color2 = state.color1;
    state.color1 = color;
    prepareRecent();
  }
}

function prepareRecent() {
  $('#color1').css('background-color', state['color1']);
  $('#color2').css('background-color', state['color2']);
  $('#color3').css('background-color', state['color3']);
  $('#color4').css('background-color', state['color4']);
  $('#color5').css('background-color', state['color5']);
}



// // converting rgb to hex by wowmotty
// var hexDigits = new Array
//         ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

// //Function to convert rgb color to hex format
// function rgb2hex(rgb) {
//  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
//  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
// }

// function hex(x) {
//   return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
//  }