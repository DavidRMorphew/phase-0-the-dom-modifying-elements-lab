// Write your code here!
const main = document.querySelector('main#main');

main.remove();

const newHeader = document.createElement('h1')

document.body.appendChild(newHeader);

newHeader.id = 'victory'
newHeader.innerHTML = 'David Morphew is the champion'