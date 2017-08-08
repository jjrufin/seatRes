$(document).ready(function(){

  $('.seat').hover(function() {
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
    console.log(mySeat);
    $('.modal').modal();
    $('.reserveButton').on('click', function (){
      person.name = $('#name').val();
      person.phone = $('#phone').val();
      person.email = $('#email').val();
      person.seat = seatNum;
      reservations.push(person);
      console.log(reservations);
    });
    $('.seat.available').each(function(x, num){
      console.log(x);
      console.log(num);
    });
  });
});
