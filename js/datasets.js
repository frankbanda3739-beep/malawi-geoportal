// ========================================
// MALAWI GEOPORTAL
// DATASET EXPLORER
// ========================================


// Get the search and filter elements
const searchInput = document.getElementById("dataset-search");
const departmentFilter = document.getElementById("department-filter");
const accessFilter = document.getElementById("access-filter");


// Get all dataset cards
const datasetCards = document.querySelectorAll(".dataset-card");


// Get the dataset count display
const datasetCount = document.getElementById("dataset-count");


// Function to filter datasets
function filterDatasets() {

    // Get the user's search text
    const searchText = searchInput.value.toLowerCase();

    // Get selected filters
    const selectedDepartment = departmentFilter.value.toLowerCase();
    const selectedAccess = accessFilter.value.toLowerCase();

    // Keep track of visible datasets
    let visibleCount = 0;


    // Check every dataset card
    datasetCards.forEach(function(card) {

        // Get all text inside the card
        const cardText = card.textContent.toLowerCase();


        // Check search
        const matchesSearch =
            cardText.includes(searchText);


        // Check department
        const matchesDepartment =
            selectedDepartment === "all" ||
            cardText.includes(selectedDepartment);


        // Check access level
        const matchesAccess =
            selectedAccess === "all" ||
            cardText.includes(selectedAccess);


        // Decide whether to show the card
        if (
            matchesSearch &&
            matchesDepartment &&
            matchesAccess
        ) {

            card.style.display = "block";

            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    // Update the dataset count
    datasetCount.textContent =
        visibleCount + " dataset" +
        (visibleCount === 1 ? "" : "s");
}


// Run filtering when the user types
searchInput.addEventListener(
    "input",
    filterDatasets
);


// Run filtering when department changes
departmentFilter.addEventListener(
    "change",
    filterDatasets
);


// Run filtering when access level changes
accessFilter.addEventListener(
    "change",
    filterDatasets
);