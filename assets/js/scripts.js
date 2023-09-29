document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/timetable.json')
    .then(response => response.json())
    .then(releaseDates => {
        const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
        const currentTime = new Date();

        if (releaseDates[currentPage]) {
            const releaseTime = new Date(releaseDates[currentPage]);

            // Grab all potential solution divs by selecting divs that start with 'solution' in their ID.
            const solutionDivs = document.querySelectorAll("div[id^='solution']");

            solutionDivs.forEach(div => {
                // By default, deactivate all the solution tabs.
                div.classList.add('deactivated-tab');

                if (currentTime > releaseTime) {
                    // If the current time has passed the release time, activate the solution tab.
                    div.classList.remove('deactivated-tab');
                }
            });
        }
    })
    .catch(error => {
        console.error("Error fetching the timetable:", error);
    });
});