test('Clicking the button updates the DOM', () => {
  document.body.innerHTML = `
    <button id="myButton">Click me</button>
    <p id="message"></p>
  `;

  const button = document.getElementById('myButton');
  const message = document.getElementById('message');

  button.addEventListener('click', () => {
    message.textContent = 'Button clicked!';
  });

  // Simulate click
  button.click();

  expect(message.textContent).toBe('Button clicked!');
});
test('Form elements are present and update correctly', () => {
  document.body.innerHTML = `
    <form id="myForm">
      <input type="text" id="username" />
      <button type="submit">Submit</button>
    </form>
    <p id="output"></p>
  `;

  const form = document.getElementById('myForm');
  const input = document.getElementById('username');
  const output = document.getElementById('output');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    output.textContent = `Hello, ${input.value}!`;
  });

  input.value = 'Alice';

  // Simulate form submission
  form.dispatchEvent(new Event('submit'));

  expect(output.textContent).toBe('Hello, Alice!');
});
function addItem(text) {
  const list = document.getElementById('list');
  const item = document.createElement('li');
  item.textContent = text;
  list.appendChild(item);
}

test('addItem adds a new list item', () => {
  document.body.innerHTML = '<ul id="list"></ul>';

  addItem('New Item');

  const items = document.querySelectorAll('#list li');
  expect(items.length).toBe(1);
  expect(items[0].textContent).toBe('New Item');
});

