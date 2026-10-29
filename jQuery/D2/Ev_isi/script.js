$(document).ready(function(){

  // Buttons go down when clicked and back up when released
  $('.btn').mousedown(function () {
    $(this).addClass('pressed');
  });
  $('.btn').mouseup(function () {
    $(this).removeClass('pressed');
  });
  $('.btn').mouseleave(function () {
    $(this).removeClass('pressed');
  });

  // 1. TOGGLE
  $('#btn-toggle').click(function () {
    $('#box-toggle h2').toggle();
    if ($('#box-toggle h2').is(':visible')) {
      $(this).text('Hide');
    } else {
      $(this).text('Show');
    }
  });

  // 2. FADE
  $('#btn-fade').click(function () {
    if ($('#box-fade h2').is(':visible')) {
      $('#box-fade h2').fadeOut(400);
      $(this).text('Fade in');
    } else {
      $('#box-fade h2').fadeIn(400);
      $(this).text('Fade out');
    }
  });

  // 3. FADE TO
  $('#btn-fadeto').click(function () {
    if ($('#box-fadeto h2').css('opacity') > 0.5) {
      $('#box-fadeto h2').fadeTo(400, 0.25);
      $(this).text('Fade in');
    } else {
      $('#box-fadeto h2').fadeTo(400, 1);
      $(this).text('Fade to 25%');
    }
  });

  // 4. SLIDE
  $('#btn-slide').click(function () {
    if ($('#box-slide h2').is(':visible')) {
      $('#box-slide h2').slideUp(400);
      $(this).text('Slide up');
    } else {
      $('#box-slide h2').slideDown(400);
      $(this).text('Slide down');
    }
  });

});