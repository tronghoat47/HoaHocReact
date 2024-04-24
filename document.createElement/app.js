const h1 = document.querySelector('#heading');
console.log(h1); 


const root = document.querySelector('#root');
const first = document.createElement('h1');
first.id = 'heading1';
first.className = 'test heading';
first.textContent = 'Hello World!';
first.style = 'color: red; font-size: 24px;';
root.appendChild(first);