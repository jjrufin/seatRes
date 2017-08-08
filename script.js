$(document).ready(function(){

  $('.seat').hover(function() {
    $(this).toggleClass('seatHover');
  });


  var reservations = [];
  var person = {};

  // Open Modal
  $('.available').on('click', function (e){
    $('.modal').modal();
  });
  // Clears Form When Closed
    $('#modal').on('hidden.bs.modal', function () {
        $(this).find('form').trigger('reset');
  });
  // Reserve Seat
    $('.reserveButton').on('click', function (){
      person.name = $('#name').val();
      person.phone = $('#phone').val();
      person.email = $('#email').val();
      reservations.push(person);
      console.log(reservations);
    });
});
