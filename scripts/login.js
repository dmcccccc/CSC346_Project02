window.onload = function(){
  document.getElementById("login").onclick = login;
};

function login(){
  const user = document.getElementById("username").value;
  const pw = document.getElementById("password").value;

  const url = "http://ec2-54-162-249-97.compute-1.amazonaws.com:3000/?";
  const query = "command=query&username=" + user + "&password=" + pw;

  console.log("client query = " + query);

  fetch(url + query)
    .then(checkStatus)
    .then(function(responseText) {
      console.log("responseText = " + responseText);
      if (responseText == "success"){
        window.location.href = '/loginSuccess.html';
      } else {
        window.location.href = '/loginFailure.html';
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.text();
  } else if (response.status == 404) {
    return Promise.reject(new Error("cannot find page!"));
  } else {
    return Promise.reject(new Error(response.status + ": " + response.statusText));
  }
}
