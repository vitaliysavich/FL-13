let hourLimit = 20;
let lengthOfLogin = 4;

function login() {
  let login = prompt(`Input your login:`, ``);
  if (login && /\w/.test(login)) {
    if (login.length < lengthOfLogin) {
      alert(`I don't know any users having name length less than 4 symbols`);
    } else if (login === `Admin` || login === `User`) {
      password(login);
    } else {
      alert(`I don’t know you.`);
    }
  } else {
    alert(`Canceled`);
  }
}
function password(log) {
  let pass = prompt(`Input your password`, ``);
  if (pass && /\w/.test(pass)) {
    if (
      log === `User` && pass === `UserPass` ||
      log === `Admin` && pass === `RootPass`
    ) {
      greets(log);
    } else {
      alert(`Wrong password`);
    }
  } else {
    alert(`Canceled`);
  }
}
function greets(log) {
  let hours = new Date().getHours();
  if (log === `User`) {
    if (hours >= hourLimit) {
      alert(`Good evening, dear User!`);
    } else {
      alert(`Good day, dear User!`);
    }
  } else {
    if (hours >= hourLimit) {
      alert(`Good evening, dear Admin!`);
    } else {
      alert(`Good day, dear Admin!`);
    }
  }
}

login();
