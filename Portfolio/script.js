$(document).ready(function() {

  // --- SLEEPING CARD DARK MODE TOGGLE ---
  let clickCount = 0;
  let clickTimer = null;

  $(document).on('click', '#sleeping-card', function(e) {
    clickCount++;

    if (clickCount === 1) {
      clickTimer = setTimeout(function() {
        $('body').addClass('dark-mode');
        clickCount = 0;
      }, 150);
    } else if (clickCount === 2) {
      clearTimeout(clickTimer);
      $('body').removeClass('dark-mode');
      clickCount = 0;
    }
  });


  // --- COPY EMAIL TO CLIPBOARD ---
  const myEmail = "eizelbernadetteramirez.pdm@gmail.com";

  $(document).on('click', '#copy-email-btn', function(e) {
    e.preventDefault(); // Prevent page jump to top

    // Copy email to user's clipboard
    navigator.clipboard.writeText(myEmail).then(function() {
      const $btn = $('#copy-email-btn');
      
      // Visual feedback: change button text temporarily
      $btn.text('Copied!');

      // Reset button text back after 2 seconds
      setTimeout(function() {
        $btn.text('Email');
      }, 2000);
    }).catch(function(err) {
      console.error('Could not copy email: ', err);
    });
  });

});