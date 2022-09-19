import './style.css';

function addListCardDOMLoad(s1, s2) {
    const card = document.createElement('div');
    card.classList.add('newListCard');

    card.appendChild(cardInput());
    card.appendChild(buttonIntegrator(s1, s2));

    return card;
}
function cardInput() {
    const div = document.createElement('div');
        div.classList.add('cardTextBorder');
    const inputText = document.createElement('textarea');
        inputText.classList.add('cardInputText');
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

export { addListCardDOMLoad }