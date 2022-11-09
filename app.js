/* Imports */
import { renderBug } from './render-utils.js';

/* Get DOM Elements */
const bugListEl = document.querySelector('.bugs');
const formEl = document.querySelector('form');
const kenniHPEl = document.querySelector('#kenni-hp');
const defeatedNumberEl = document.querySelector('#defeated-number');
const kenniImgEl = document.querySelector('#kenni-img');

/* State */
const bugs = [
    { id: 1, name: 'javascript', hp: 3 },
    { id: 2, name: 'html', hp: 1 },
];

let currentId = 3;
let kenniHP = 10;
let defeatedCount = 0;

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

function bugClickHandler(bug) {
    if (bug.hp <= 0) return;

    if (Math.random() < 0.33) {
        bug.hp--;
        alert('Kenni wrote a line of code to fix ' + bug.name);
    } else {
        alert('Kenni wrote some code, but had typos...' + bug.name + ' is still buggy');
    }

    if (Math.random() < 0.4) {
        kenniHP--;
        alert(bug.name + ' gave kenni a headache.');
    } else {
        alert(
            bug.name +
                ' gave kenni a headache, but she has coffee so everything is going to be fine!'
        );
    }

    if (bug.hp === 0) {
        defeatedCount++;
    }

    if (kenniHP === 0) {
        kenniImgEl.classList.add('game-over');
        alert('Game Over! Kenni is shutting her laptop and taking a nap.');
    }

    kenniHPEl.textContent = kenniHP;
    defeatedNumberEl.textContent = defeatedCount;

    const hpEl = document.getElementById(`bug-hp-${bug.id}`);
    hpEl.textContent = bug.hp < 0 ? 0 : bug.hp;

    const emojiEl = document.getElementById(`bug-${bug.id}`);
    emojiEl.textContent = bug.hp > 0 ? '👾' : '✅';
}

/* Display Functions */

function displayBugs() {
    bugListEl.textContent = '';

    for (let bug of bugs) {
        const bugEl = renderBug(bug);
        bugEl.addEventListener('click', () => {
            bugClickHandler(bug);
        });
        bugListEl.append(bugEl);
    }
}

displayBugs();

// (don't forget to call any display functions you want to run on page load!)
