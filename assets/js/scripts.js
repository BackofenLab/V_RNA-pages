document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/timetable.json')
    .then(response => response.json())
    .then(releaseDates => {
        const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
        const currentTime = new Date();

        if (releaseDates[currentPage]) {
            const releaseTime = new Date(releaseDates[currentPage]);

            // Grab all potential solution tab headers by selecting h5 elements within divs that start with 'solution' in their ID.
            const solutionTabHeaders = document.querySelectorAll("div[id^='solution'] > h5");

            solutionTabHeaders.forEach(header => {
                // By default, deactivate all the solution tabs.
                header.classList.add('deactivated-tab-header');

                if (currentTime > releaseTime) {
                    // If the current time has passed the release time, activate the solution tab.
                    header.classList.remove('deactivated-tab-header');
                }
            });
        }
    })
    .catch(error => {
        console.error("Error fetching the timetable:", error);
    });
});