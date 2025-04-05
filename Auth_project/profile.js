async function checkIfLoggedInOrNot() {
  const authToken = localStorage.getItem('authToken');
  console.log(authToken);
  if (authToken === undefined) {
    window.location.href = 'login.html';
  }
  if (authToken === null) {
    window.location.href = 'login.html';
  }
  if (authToken) {
    try {
      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`, 
      });
      const data = await response.json();
      console.log(data);
      const email_value = document.getElementById('email-value');
      const username_value = document.getElementById('username-value');
      const gender_value = document.getElementById('gender-value');
      const age_value = document.getElementById('age-value');
      const profile_image = document.getElementById('profile_image');
      const full_name = document.getElementById('full_name');

      email_value.innerText = data.email;
      username_value.innerText = data.username;
      gender_value.innerText = data.gender;
      age_value.innerText = data.age;
      profile_image.src = data.image;
      full_name.innerText = data.firstName + ' ' + data.lastName;
    } catch (error) {
      alert(error);
    }
  }
}
function doLogout() {
  localStorage.clear();
  document.location.href = 'login.html';
}
