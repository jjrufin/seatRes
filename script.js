$(document).ready(function(){

  $('.seat.available').hover(function() {
    $(this).toggleClass('seatHover');
  });


  var reservations = [];
  var person = {};

  // Clears Form When Closed
    $('#modal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
  });

  // Beginning of Click
  $('.available').on('click', function (e){
    var seatNum = e.target.innerText;
    var mySeat = e.target;
    $('.modal').modal();
    $('.reserveButton').on('click', function (){
      person.name = $('#name').val();
      person.phone = $('#phone').val();
      person.email = $('#email').val();
      person.seat = seatNum;
      reservations.unshift(person);
      console.log(reservations);
      $('.seat.available').each(function(x, num){
        reservations.forEach(function(thisSeat){
          if (num.innerText === thisSeat.seat){
            console.log('hi');
            $(num).removeClass('available').addClass('taken');
          }
        });
      });
    });
  });
  // End of Click




});
