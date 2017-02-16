$(document).ready(function () {

  /* Your code goes here */
  $('#step12 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(responseData){
      console.log('response' + responseData);
    });
  });
  $('#step3 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      console.log('Ajax request succeeded!');
      $('#step3456').append(responseData);
    }).fail(function() {
      $('#step3456').append('sorry i try harser!');
      console.log('hey the request is failed!');
    }).always(function() {
      console.log('Ajax request done!');
    });
  });

  $('#step7 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function(count){
        console.log('next step please');
        $('#step7').append(count);
    });
  });
  $('#step8 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone:'Europe/Sofia'},
      dataType: 'text'
    }).done(function(time) {
      console.log('is this the last step?');
      $('#step8').append(time);
    });
  });

  $('#step9 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function(a_car) {
      $('#list').append(a_car);
  });

 });
});
