const submit = () => {
  let nam = document.getElementById("names").value;

  // name
  if (nam === null || nam === "") {
    document.getElementById("na").innerHTML = "enter your name";
    document.getElementById("na").style.color = "red";
    document.getElementById("names").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("na").innerHTML = "";
    document.getElementById("names").style.border = "2px solid green";
  }
  //   email

  let email = document.getElementById("email").value;
  let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === null || email === "") {
    document.getElementById("mail").innerHTML = "enter your email";
    document.getElementById("mail").style.color = "red";
    document.getElementById("email").style.border = "2px solid red";
    return false;
  } else if (email.match(emailformat)) {
    document.getElementById("email").style.border = "2px solid green";
    document.getElementById("mail").innerHTML = " ";
  } else {
    document.getElementById("email").style.border = "2px solid red";
    document.getElementById("mail").innerHTML =
      "entered an invalid email address!";
    document.getElementById("mail").style.color = " red";
    return false;
  }

  //   1pas
  let pword = document.getElementById("pass").value;
  if (pword === null || pword === "") {
    document.getElementById("pa").innerHTML = "enter your password";
    document.getElementById("pa").style.color = "red";
    document.getElementById("pass").style.border = "2px solid red";
    return false;
  } else if (pword.length < 8) {
    document.getElementById("pa").innerHTML =
      "Password must be at least 8 to 12 characters long";
    document.getElementById("pa").style.color = "red";
    document.getElementById("pass").style.border = "2px solid red";
    return false;
  } else {
    document.getElementById("pa").innerHTML = "";
    document.getElementById("pass").style.border = "2px solid green";
  }
  //   2pas
  let passwords = document.getElementById("passs").value;
  if (passwords == null || passwords == "") {
    document.getElementById("paa").innerHTML = "enter your password";
    document.getElementById("paa").style.color = "red";
    document.getElementById("passs").style.border = "2px solid red";
    return false;
  } else if (pword === passwords) {
    document.getElementById("paa").innerHTML = " ";
    document.getElementById("passs").style.border = "2px solid green";
  } else {
    document.getElementById("paa").innerHTML = "password must be same!";
    document.getElementById("paa").style.color = "red";
    document.getElementById("passs").style.border = "2px solid red";
    return false;
  }

  // message

  if (passwords && pword && email && nam) {
    document.getElementById("validationMessage").innerHTML =
      "you have successfully registered !";
    document.getElementById("divv").style.display = "none";
  }
};

//
