document.addEventListener("DOMContentLoaded", function() {
    fetch('./assets/timetable.json')
    .then(response => response.json())
    .then(releaseDates => {
        // Determine the current exercise sheet based on the filename
        const currentPage = window.location.pathname.split("/").pop().replace(".html", "");

        // Get the current time
        const currentTime = new Date();

        // Compare release time with current time for the current exercise sheet
        if (releaseDates[currentPage]) {
            const releaseTime = new Date(releaseDates[currentPage]);
            if (currentTime > releaseTime) {
                // Display all solutions for this exercise sheet
                const solutions = document.querySelectorAll(".solution");
                solutions.forEach(function(solution) {
                    solution.style.display = "block";
                });
            }
        }
    })
    .catch(error => {
        console.error("Error fetching the timetable:", error);
    });
});
