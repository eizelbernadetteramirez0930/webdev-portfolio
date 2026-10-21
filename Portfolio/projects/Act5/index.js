$(document).ready(function() {

    $('#loadBtn').on('click', function() {
        // Step 1: Set initial loading states
        $('#message').text('Loading Dashboard...');

        $('#profile').text('Profile: Waiting...').removeClass('active');
        $('#grades').text('Grades: Waiting...').removeClass('active');
        $('#schedule').text('Schedule: Waiting...').removeClass('active');

        // Step 2: Profile loads after 1 second
        const profilePromise = new Promise(function(resolve) {
            setTimeout(function() {
                $('#profile').text('Profile: Loaded');
                resolve();
            }, 1000);
        });

        // Step 3: Grades load after 2 seconds
        const gradesPromise = new Promise(function(resolve) {
            setTimeout(function() {
                $('#grades').text('Grades: Loaded');
                resolve();
            }, 2000);
        });

        // Step 4: Schedule loads after 3 seconds
        const schedulePromise = new Promise(function(resolve) {
            setTimeout(function() {
                $('#schedule').text('Schedule: Loaded');
                resolve();
            }, 3000);
        });

        // Step 5: When all promises complete, dashboard is ready
        Promise.all([profilePromise, gradesPromise, schedulePromise])
            .then(function() {
                $('#message').text('Dashboard Ready!');
            });
    });

});