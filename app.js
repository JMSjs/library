let library = [];

function Book(title, author, pages, didIRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.didIRead = didIRead;
    this.info = function () {
        return `The book ${this.title} by ${this.author} has ${this.pages} pages. Did you read this already: ${this.didIRead}.`;
    }
}

const addBook = (obj) => {
    library.push(obj);
}

let form = document.querySelector('form');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
const bookSection = document.querySelector('#bookSection');
let haveRead = "";
const radioForm = document.querySelectorAll('input[name="haveRead"]');


form.addEventListener('submit', e => {
    e.preventDefault();
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const displayTitle = document.createElement('h4');
    displayTitle.innerText = title.value;
    const displayAuthor = document.createElement('h4');
    displayAuthor.innerText = author.value;
    const displayPages = document.createElement('h4');
    displayPages.innerHTML = `${parseInt(pages.value)}  pages`;

    for (let i = 0; i < radioForm.length; i++) {
        if (radioForm[i].checked) {
            haveRead = radioForm[i].value;
            console.log(haveRead);
            break;
        }
    }
    const displayRead = document.createElement('h4');
    displayRead.innerHTML = `Already Read? ${haveRead}`;

    const book = new Book(title.value, author.value, parseInt(pages.value), haveRead);
    addBook(book);
    const closeBtn = document.createElement('button'); 
    closeBtn.classList.add('closeBtn');
    closeBtn.innerText = 'X';
    divCard.appendChild(closeBtn);
    divCard.appendChild(displayTitle);
    divCard.appendChild(displayAuthor);
    divCard.appendChild(displayPages);
    divCard.appendChild(displayRead);

    bookSection.appendChild(divCard);
});

