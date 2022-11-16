export function renderBug(bug) {
    const bugEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    bugEl.classList.add('bug');

    nameEl.textContent = bug.name;
    hpEl.textContent = bug.hp < 0 ? 0 : bug.hp;
    hpEl.id = `bug-hp-${bug.id}`;

    emojiEl.id = `bug-${bug.id}`;
    emojiEl.textContent = bug.hp > 0 ? '👾' : '✅';

    if (bug.hp < 0) {
        bugEl.classList.add('defeated');
    }

    bugEl.append(nameEl, emojiEl, hpEl);

    return bugEl;
}
