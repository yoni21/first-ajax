$(document).ready(function () {

  /* Your code goes here */
  $('#step12 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    }).done(function(data){
      console.log('response' + data);
    });
  });
  $('#step3456 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      console.log('Ajax request succeeded!');
      $('#step3456').append(responseData);
    }).fail(function() {
      $('#step3456').append('Error: try again!');
      console.log('Ajax request failed!');
    }).always(function() {
      console.log('Ajax request done!');
    });
  });

  $('#step7 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData){
        console.log(responseData);
        $('#step7').append(responseData);
    });
  });
  $('#step8 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: { timezone:'Europe/Sofia'},
      dataType: 'text'
    }).done(function(responseData) {
      console.log(responseData);
      $('#step8').append(responseData);
    });
  });

  $('#step9 button').on('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      dataType: 'html'
    }).done(function(responseData) {
      console.log(responseData);
      $('#step9').append(responseData);
  });

 });
});
