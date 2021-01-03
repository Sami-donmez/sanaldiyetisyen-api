function kontrol() {
  const form = document.getElementById('form-signin');
  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const email = document.getElementById('email').value;

  var tel = document.getElementById('tel').value;
  var university = document.getElementById('university').value;
  var country = document.getElementById('country').value;
  var region = document.getElementById('region').value;
  var department = document.getElementById('department').value;
  var passport = document.getElementById('passport').value;
  var passportcountry = document.getElementById('passportcountry').value;
  var graddoc = document.getElementById('graddoc').value;
  var trans = document.getElementById('trans').value;
  var gno = document.getElementById('gno').value;
  var langdoc = document.getElementById('langdoc').value;
  var whydoapply = document.getElementById('whydoapply').value;

  var num= /^[0-9]+$/;
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var gn = /^[0-9]*\,?[0-9]*$/;


  if (name == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    alert("Please enter name !");
      return false;
  }
    
  if (surname == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    alert("Please enter surname !");
      return false;
  }
    
  if (email == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");
    alert("Please enter e-mail !");
      return false;
  }
    
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  }
    
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    alert("Please check your e-mail !");
      return false;
  }
    
    
    
    if (tel == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter phone number !");
      return false;
  }
    
    if(tel != "") {
        
      if (tel.match(num)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
      }
      else {
        form.classList.add("valid");
        form.classList.remove("invalid");

        alert("Wrong Phone Number !");
      return false;

      }
    } 

  if (university == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter university !");
      return false;
  }
    
  if (country == "Select your Country") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter country !");
      return false;
  }
    
  if (region == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter region !");
      return false;
  }
    
  if (department == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter Department !");
      return false;
  }
    
  if (passport == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter passport !");
      return false;
  }
    
  if (passportcountry == "Select your Country") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter passport country !");
      return false;
  }
    
  if (graddoc == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter Graduation document !");
      return false;
  }
    
  else if (trans == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter Transcript !");
      return false;
  }
    
    if (gno != "") {
        
  if (gno.match(gn)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  }
        
  else {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Wrong GNO !");
      return false;

  }
}
    
  if (gno == "") {
    form.classList.add("valid");
    form.classList.remove("invalid");

    alert("Please enter GNO !");
      return false;
  }  
    
    if (langdoc == "") {
      form.classList.add("valid");
      form.classList.remove("invalid");

      alert("Please enter Language Document !");
      return false;
    }
    
    if (whydoapply == "") {
      form.classList.add("valid");
      form.classList.remove("invalid");

      alert("Please enter a few words !");
      return false;
    }
    
    else {
        window.location="thx.html";
    }

return true;

}
