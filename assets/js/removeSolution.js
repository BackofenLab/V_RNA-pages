window.onload = function() {
    fetch('./assets/timetable.json')
    .then(response => response.json())
    .then(releaseDates => {
        const currentPage = window.location.pathname.split("/").pop().replace(".html", "");
        const currentTime = new Date();

        if (releaseDates[currentPage]) {
            const releaseTime = new Date(releaseDates[currentPage]);

            // Grab all potential solution tab anchors by selecting 'a' elements with 'aria-controls' attributes that start with 'solution'.
            const solutionTabs = document.querySelectorAll("a[aria-controls^='solution']");

            solutionTabs.forEach(tab => {
                // By default, deactivate all the solution tabs.
                tab.classList.add('deactivated-tab');

                if (currentTime > releaseTime) {
                    // If the current time has passed the release time, activate the solution tab.
                    tab.classList.remove('deactivated-tab');
                }
            });
        }
    })
    .catch(error => {
        console.error("Error fetching the timetable:", error);
    });
};