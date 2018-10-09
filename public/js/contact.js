(() => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");
  const sendMessageButton = document.getElementById("sendMessageButton");

  let data = {};
  const xhr = new XMLHttpRequest();

  sendMessageButton.addEventListener("click", e => {
    e.preventDefault();

    data.name = name.value;
    data.phone = phone.value;
    data.message = message.value;
    data.email = email.value;

    json = JSON.stringify(data);

    xhr.open("POST", "contact");
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (xhr.statusText == "OK") {
          window.location.pathname = "/";
        } else {
          alert(xhr.responseText);
        }
      }
    };

    xhr.send(json);
  });
})();
