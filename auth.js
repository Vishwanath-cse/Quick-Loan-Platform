// Fake login/register simulation (no backend)

function register(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  localStorage.setItem("quickcash_user", JSON.stringify({ name, email, password }));
  document.getElementById("registerMsg").style.color = "lightgreen";
  document.getElementById("registerMsg").textContent = "Registration successful! Redirecting to login...";
  
  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
}

function login(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = JSON.parse(localStorage.getItem("quickcash_user"));

  if (user && user.email === email && user.password === password) {
    document.getElementById("loginMsg").style.color = "lightgreen";
    document.getElementById("loginMsg").textContent = `Welcome back, ${user.name}! Redirecting...`;
    
    setTimeout(() => {
      window.location.href = "kyc.html";
    }, 2000);
  } else {
    document.getElementById("loginMsg").style.color = "red";
    document.getElementById("loginMsg").textContent = "Invalid email or password.";
  }
}
