const mainNode = document.querySelector('main#main');
mainNode.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute('id', 'victory');

newHeader.textContent = "CARINA is the champion";