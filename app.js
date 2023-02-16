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

const addBook = () => {

}

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = parseInt(document.querySelector('#pages'));
const radioForm = document.querySelectorAll('input[name="haveRead"]');
for (let i = 0; i < radioForm.length; i++) {
    if (radioForm[i].checked) {
        const haveRead = radioForm[i].value;
        break;
    }
}

const bookSection = document.querySelector('.bookSection');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
});
