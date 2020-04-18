function getUsers() {
    fetch('http://localhost:3001/users')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = ``;
            data.forEach((users) => {
                const { id, name, username, email } = users
                result +=
                    `
                         <tr>
                             <td>${id}</td>
                             <td>${name}</td>
                             <td>${username} </td>
                             <td>${email}</td>
                         </tr>
                      `;
                document.getElementById('result').innerHTML = result;
                console.log(users)
            });
        })
}

function postUsers() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    console.log("Input Data: " + id + " " + name + " " + username + " " + email);

    fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify({
            id:id,
            name: name,
            username: username,
            email: email,
            mode : 'cors',
            credentials : 'include'
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => {
            console.log('response: ' + json);
        })
}

function btnSearch() {
    var input = document.getElementById("input").value;
    try {
      document.getElementById("search").innerHTML
      const url = "http://localhost:3001/users";
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          var tampung;
          for (i = 0; i < data.length; i++) {
            if (data[i].username == input) {
              tampung = data[i];
              break;
            }
          } if (tampung) {
            document.getElementById("searchResult").innerHTML = `
            <p>Name : ${tampung.name}</p>
            <p>Username : ${tampung.username}</p>`
          }
        })
  
    }
    catch (e) {
      console.log(e)
    }
  }