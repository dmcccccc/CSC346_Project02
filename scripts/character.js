window.onload = function() {
  query();
};

function query() {

    const url = "http://" + window.location.hostname + ":" + window.location.port + "/";

    var temp = window.location.href;

    var args = temp.split("?")[1];
    var id = args.split("&")[1];

    const query = "?command=getCharacter&" + id;

    console.log("id = " + id);

    fetch(url + query)
      .then(checkStatus)
      .then(function(responseText) {
        let q = JSON.parse(responseText);
        setTable(q);
    })
    .catch(function(error) {
      console.log(error);
    });
}

    // TODO: get result from SQL
    function setTable(q) {
        var result = q[0];
        document.getElementById("playerName").innerHTML=result.username;
        document.getElementById("characterName").innerHTML=result.characterName;
        document.getElementById("level").innerHTML=result.lvl;
        document.getElementById("role").innerHTML=result.role;
        document.getElementById("strength").innerHTML=result.strength;
        document.getElementById("constitution").innerHTML=result.constitution;
        document.getElementById("dexterity").innerHTML=result.dexterity;
        document.getElementById("intelligence").innerHTML=result.intelligence;
        document.getElementById("wisdom").innerHTML=result.wisdom;
        document.getElementById("charisma").innerHTML=result.charisma;
    }

  // ----------------------------------------------------------
  // when called
  // 1. check for status send back from http
  // 2. if status is between 200 and 300,
  //    then status is okay return the response
  // 3. if status is 404 or other status,
  //    then reject and sent back an error message.
  // ----------------------------------------------------------
  function checkStatus(response) {
    if(response.status >= 200 && response.status < 300) {
      return response.text();
    } else if (response.status == 404) {
      // error
      return Promise.reject(new Error("cannot find page!"));
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }
