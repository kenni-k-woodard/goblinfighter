/* Imports */
import { renderBug } from './render-utils.js';

/* Get DOM Elements */
const bugListEl = document.querySelector('.bugs');
const formEl = document.querySelector('form');
const kenniHPEl = document.querySelector('#kenni-hp');
const defeatedNumberEl = document.querySelector('#defeated-number');

/* State */
const bugs = [
    { id: 1, name: 'javascript', hp: 3 },
    { id: 2, name: 'html', hp: 1 },
];

let currentId = 3;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const newBug = {
        id: currentId,
        name: data.get('bug-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    bugs.push(newBug);

    displayBugs();
});

/* Display Functions */

function displayBugs() {
    bugListEl.textContent = '';

    for (let bug of bugs) {
        const bugEl = renderBug(bug);
        bugListEl.append(bugEl);
    }
}

displayBugs();

// (don't forget to call any display functions you want to run on page load!)
