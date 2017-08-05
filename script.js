$(document).ready(function(){

  $('.seat').hover(function() {
    $(this).toggleClass('seatHover');
  });


  var reservations = [];

  function makeRes () {
    console.log('hi');
  }

  // Beg. of Click
  $('.available').on('click', function (e){


    $('.modal').modal();


      var person = {};

    $('.reserveButton').on('click', function (){
      person.name = $('#name').val();
      person.phone = $('#phone').val();
      person.email = $('#email').val();
      reservations.push(person);
      console.log(reservations);
      return false;
    });
  });
});
