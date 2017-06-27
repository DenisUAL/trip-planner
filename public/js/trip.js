 var hotelSelected; 
  var activitySelected;
  var restaurantSelected;
  var clearBtn = "<a onclick="+ '"Materialize.toast('+"'Day added!', 1000, 'rounded'"+ ')"'+ 'class="clear-btn btn-floating btn-small waves-effect waves-teal white"><i class="material-icons">clear</i></a>';

  var addedMarkers = {

  };
  
  for (var i = 0; i < hotels.length; i++) {
    $('.hotel-option').append('<option value="' + hotels[i]['id'] + '">' + hotels[i]['name'] + '</option>');

  }

  for (var i = 0; i < activities.length; i++) {
    $('.activity-option').append('<option value="' + activities[i]['id'] + '">' + activities[i]['name'] + '</option>');
  }

  for (var i = 0; i < restaurants.length; i++) {
    $('.restaurant-option').append('<option value="' + restaurants[i]['id'] + '">' + restaurants[i]['name'] + '</option>');
  }

  // select option listener
//   $('.activity-option').change(function () {
//      //var act = activities[$('.activity-option option:selected').val() - 1];
//      drawMarker('activity', activities[$('.activity-option option:selected').val() - 1].place.location);
//   });

//   $('.hotel-option').change(function () {
//     drawMarker('hotel',hotels[$('.hotel-option option:selected').val() - 1].place.location);
//   });

//   $('.restaurant-option').change(function () {
//    drawMarker('restaurant',restaurants[$('.restaurant-option option:selected').val() - 1].place.location);
//   });

  // buttton event listener
  $('.activity-btn').on('click', function () {
    $('.activity-chosen').append('<div class="row" data-place="'+ $('select.activity-option option:checked').text() +'">'+'<div class="col s10">' + 
    $('select.activity-option option:checked').text() + 
    '</div>'+ "<div class=`col s2`>"+clearBtn +'</div></div>');
    addedMarkers[$('select.activity-option option:checked').text()] = drawMarker('activity',activities[$('.activity-option option:selected').val() - 1].place.location);});
  
  $('.hotel-btn').on('click', function () {
     $('.hotel-chosen').append('<div class="row" data-place="'+ $('select.hotel-option option:checked').text() +'">'+'<div class="col s10">' + 
     $('select.hotel-option option:checked').text() + '</div>'+ "<div class=`col s2`>"+clearBtn +'</div></div>');
    addedMarkers[$('select.hotel-option option:checked').text()] = drawMarker('hotel',hotels[$('.hotel-option option:selected').val() - 1].place.location);});

  $('.restaurant-btn').on('click', function () {
    $('.restaurant-chosen').append('<div class="row" data-place="'+ $('select.restaurant-option option:checked').text() +'">'+'<div class="col s10">' + 
    $('select.restaurant-option option:checked').text() + '</div>'+ "<div class=`col s2`>"+clearBtn +'</div></div>');
    addedMarkers[$('select.restaurant-option option:checked').text()] = drawMarker('restaurant',restaurants[$('.restaurant-option option:selected').val() - 1].place.location);
  });

  $('.collapsible').on('click', '.clear-btn', function () {
    addedMarkers[$(this).parent().parent().data("place")].setMap(null)
    $(this).parent().parent().remove();
  });