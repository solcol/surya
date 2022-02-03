let showOnly = "all";

function updateFilter(filter) {
    showOnly = filter;

    switch(filter) {
        case "flats": {
            document.getElementById('filter-flats').classList.add("is-active");
            document.getElementById('filter-houses').classList.remove("is-active")
            document.getElementById('filter-all').classList.remove("is-active");
            break;
        }
        case "houses": {
            document.getElementById('filter-flats').classList.remove("is-active");
            document.getElementById('filter-houses').classList.add("is-active")
            document.getElementById('filter-all').classList.remove("is-active");
            break;
        }
        case "all": {
            document.getElementById('filter-flats').classList.remove("is-active");
            document.getElementById('filter-houses').classList.remove("is-active")
            document.getElementById('filter-all').classList.add("is-active");
            break;
        }
    }

    showProperties(document.getElementById('sorter').value, filter);
}