function checkLoggedInOrNot() {
  const authToken = localStorage.getItem('authToken');
  console.log(authToken);
  if (authToken) {
    window.location.href = 'profile.html';
  } else {
    console.log('I am here');
  }
}

async function doLogin() {
  const usernameEl = document.getElementById('username');
  const passwordEl = document.getElementById('password');
  const username = usernameEl.value;
  const password = passwordEl.value;
  console.log(username, password);
  if (!username || !password) {
    alert('Please provide the Username and Password');
  }
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      alert('Invalid credentials');
    }
    localStorage.setItem('authToken', data.accessToken);
    document.location.href = 'profile.html';
  } catch (error) {
    alert(error);
  }
}
