$(document).ready(function() {

  // --- TOP CARD INTERACTIONS ---

  // Single Click on Change Title: Changes header title
  $('#btn-change-title').on('click', function() {
    $('#main-title').text('Red Bull gives you wings!');
    $('#status-text-1').text('You changed the title!');
  });

  // Double Click on Change Title: Special double-click title
  $('#btn-change-title').on('dblclick', function() {
    $('#main-title').text('You double click!');
    $('#status-text-1').text('You double clicked the button!');
  });

  // Hide Profile Info Box
  $('#btn-hide-profile').on('click', function() {
    $('.info-box').slideUp();
    $('#status-text-1').text('Profile hidden.');
  });

  // Show Profile Info Box
  $('#btn-show-profile').on('click', function() {
    $('.info-box').slideDown();
    $('#status-text-1').text('Profile shown.');
  });

  // Course Select Dropdown Change
  $('#course-select').on('change', function() {
    const selectedCourse = $(this).val();
    $('#status-text-2').text('Course selected: ' + selectedCourse);
  });


  // --- STUDENT TABLE INTERACTIONS ---

  // Color Odd Rows -> Pink
  $('#btn-color-odd').on('click', function() {
    $('#student-table tbody tr:nth-child(odd)').removeClass('bg-blue').toggleClass('bg-pink');
    $('#status-text-3').text('Odd rows set to pink.');
  });

  // Color Even Rows -> Blue
  $('#btn-color-even').on('click', function() {
    $('#student-table tbody tr:nth-child(even)').removeClass('bg-pink').toggleClass('bg-blue');
    $('#status-text-3').text('Even rows set to blue.');
  });

  // Hide Table
  $('#btn-hide-table').on('click', function() {
    $('#student-table').fadeOut();
    $('#status-text-3').text('Table hidden.');
  });

  // Show Table
  $('#btn-show-table').on('click', function() {
    $('#student-table').fadeIn();
    $('#status-text-3').text('Table shown.');
  });

});