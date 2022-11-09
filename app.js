/* Imports */
import { renderBug } from './render-utils.js';

/* Get DOM Elements */
const bugListEl = document.querySelector('.bugs');

/* State */
const bugs = [
    { id: 1, name: 'javascript', hp: 3 },
    { id: 2, name: 'html', hp: 1 },
];

/* Events */

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
