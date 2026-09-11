const form = document.querySelector('#chat-form');
const input = document.querySelector('#question');
const messages = document.querySelector('#messages');
const sendButton = document.querySelector('.send-button');
const suggestions = document.querySelectorAll('.suggestion');

function addMessage(text, role) {
  const row = document.createElement('div');
  row.className = `message-row ${role === 'user' ? 'user-row' : 'assistant-row'}`;
  if (role === 'assistant') {
    const avatar = document.createElement('span');
    avatar.className = 'message-avatar';
    avatar.textContent = 'N';
    row.appendChild(avatar);
  }
  const bubble = document.createElement('div');
  bubble.className = `message ${role === 'user' ? 'user-message' : 'assistant-message'}`;
  bubble.textContent = text;
  row.appendChild(bubble);
  messages.appendChild(row);
  messages.scrollTop = messages.scrollHeight;
}

function setBusy(busy) {
  input.disabled = busy;
  sendButton.disabled = busy;
  sendButton.innerHTML = busy ? '<span aria-hidden="true">...</span>' : '<span aria-hidden="true">&#8593;</span>';
}

async function askQuestion(question) {
  addMessage(question, 'user');
  setBusy(true);
  try {
    const response = await fetch('/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'The portfolio could not answer right now.');
    addMessage(data.answer, 'assistant');
  } catch (error) {
    addMessage(error.message || 'Something went wrong. Please try again.', 'assistant');
  } finally {
    setBusy(false);
    input.focus();
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question || sendButton.disabled) return;
  input.value = '';
  askQuestion(question);
});

suggestions.forEach((suggestion) => {
  suggestion.addEventListener('click', () => {
    if (sendButton.disabled) return;
    const question = suggestion.textContent.trim();
    input.value = '';
    askQuestion(question);
  });
});
