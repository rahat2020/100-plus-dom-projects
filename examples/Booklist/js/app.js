
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const description = document.querySelector('#description');
const year = document.querySelector('#year');
const booklist = document.querySelector('#book-list');
const btn = document.querySelector('#submit');

btn.addEventListener('click', function  (e){
    e.preventDefault();
    console.log("hello")

    // implementing basic validation
    if(title.value == '' && description.value == '' && author.value == ''){
        alert('Please enter a title and description and others');
    }else{
            const newRow = document.createElement('tr');

            // creating table header and append it to parent element
            const titleRow = document.createElement('th')
            titleRow.innerHTML = title.value;
            newRow.appendChild(titleRow)

            const authRow = document.createElement('th')
            authRow.innerHTML = author.value;
            newRow.appendChild(authRow)

            const descRow = document.createElement('th')
            descRow.innerHTML = description.value;
            newRow.appendChild(descRow)

            const yearRow = document.createElement('th')
            yearRow.innerHTML = year.value;
            newRow.appendChild(yearRow)

            booklist.appendChild(newRow);
    }
})