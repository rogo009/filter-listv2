const filterInput = document.getElementById('filterInput');
const form = document.getElementById('names');

filterInput.addEventListener('keyup', filterNames);

function filterNames() {

    // get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    console.log(filterValue);

    // get names ul
    let names = document.getElementById('names');
    // get lis from ul
    let li = ul.querySelectAll();
}


//I tried grabbing filterInput and it's value and converting it to upper case, but for some reason that doesn't work. You need to use a brand new variable assigned to the new value that it becomes. in this case it becomes all uppercase, you can't over write filterInput, so you have to assign it to a new variable name
