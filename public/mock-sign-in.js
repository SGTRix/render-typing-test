const username = document.getElementById('username');
const password = document.getElementById('password');
const result = document.getElementById('result');

document.getElementById('mock-sign-in').addEventListener('submit', event => {
  event.preventDefault();
  const matches = username.value === 'demo' && password.value === 'render-test-123';
  password.value = '';
  result.textContent = matches ? 'Mock sign-in passed.' : 'Try the sample values shown above.';
});
