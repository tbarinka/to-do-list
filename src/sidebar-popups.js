import './style.css';

let userLists = [];

function addListCardDOMLoad(s1, s2) {
    const card = document.createElement('div');
    card.classList.add('newListCard');

    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));

    //event listener on card create button
    card.lastChild.lastChild.addEventListener('click', (event) => {
        //console.log(card.lastChild.lastChild) = create button
        //console.log(card.firstChild.firstChild) == textarea
        const name = card.firstChild.firstChild.value;
        createListObject(name);
        console.log(userLists);
        console.log(card.firstChild.firstChild.value);
        updateLists();
    });
    
    return card;
}
    function cardInput() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('textarea');
        inputText.classList.add('cardInputText');
        inputText.textContent = "sample"
    div.appendChild(inputText);

    return div;
    }
    function buttonIntegrator(s1, s2) {
    const div = document.createElement('div');
        div.classList.add('cardButtonIntegrator');
    div.appendChild(cardButton(s1));
    div.appendChild(cardButton(s2));

    return div;
    }

    function cardButton(s) {
    const button = document.createElement('button');
        button.classList.add('newListCardButton');
    const buttonText = document.createElement('div');
        buttonText.textContent = s;
    button.appendChild(buttonText);
    return button;
    }

class listObject {
    constructor(name) {
        this.name = name;
    }
}
function createListObject(name) {
    const list = new listObject(name);
    userLists.push(list);
}
function updateLists() {
    const lists = document.getElementById('listsContent');
    const listsContainer = document.getElementById('listsContainer');

    console.log(lists);
    console.log(listsContainer);
    console.log(userLists[0]);

    const listItem = document.createElement('p');
    listItem.textContent = userLists[0];
    listsContainer.appendChild(listItem);
}


export { addListCardDOMLoad }