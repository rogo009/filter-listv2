const filterInput = document.getElementById('filterInput');
const form = document.getElementById('names');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);
}



