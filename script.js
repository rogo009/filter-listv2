// target input field
const filterInput = document.getElementById('filterInput');

// event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // get *value* of the input field use .value and convert toUpperCase()
    const filterValue = document.getElementById('filterInput').value.toUpperCase();

    // target ul and id names
    const ul = document.getElementById('names');

    // target li items from the ul the actual person's names not the letters. this puts items into an array
    const li = ul.querySelectorAll('li.collection-item');

    // loop through collection-item lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if matched innerHTML grabs what's inside the a tag. if it's greater than -1 that means there's a match to one of the lettesr in the names
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';

        }
    }
}


//I tried grabbing filterInput and it's value and converting it to upper case, but for some reason that doesn't work. You need to use a brand new variable assigned to the new value that it becomes. in this case it becomes all uppercase, you can't over write filterInput, so you have to assign it to a new variable name
