function handleGetFormData() {
  return {
    name: document.getElementById("name").value,
    city: document.getElementById("city").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };
}

function isNumber(input) {
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      return false;
    }
  }
  return true;
}

function checkboxIsChecked() {
  var checkbox = document.getElementById("status");
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData({ name, city, email, zipCode } = {}) {
  return name && city && email && isNumber(zipCode) && checkboxIsChecked();
}

function submit() {
  const formData = handleGetFormData();

  if (validateFormData(formData)) {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    });
    document.getElementById("warning").textContent = "Data berhasil dikirim";
    // Code to handle successful form submission
  } else {
    document.getElementById("warning").textContent =
      "Periksa form anda sekali lagi";
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});
