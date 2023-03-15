//zadanie nr 4
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

function createBoxes(amount) {
    let startsize = 30
    
    const main = document.querySelector("#boxes")
    
    for(let i = 0; i<amount; i++){
        const box =  document.createElement("div");
        box.style.width = startsize + "px";
        box.style.height = startsize + "px";
        box.style.backgroundColor = getRandomHexColor()
        main.appendChild(box)
        startsize = startsize + 10
        
    }

}

function destroyBoxes() {
    const main = document.querySelector("#boxes")
    main.innerHTML = " "


}

const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', () => {
const amount = parseInt(document.querySelector('input').value);
createBoxes(amount);

});

const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', destroyBoxes);