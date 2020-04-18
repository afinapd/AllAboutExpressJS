function processLogin(lamanbaru) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    try {
        document.getElementById("login").innerHTML
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                var tampung;
                for (i = 0; i < data.length; i++) {
                    console.log(data[i])
                    if (data[i].username == username && password == "123") {
                        tampung=data[i];
                        break;
                    } 
                }if(tampung){
                    window.location=lamanbaru
                    document.getElementById("result").innerHTML=data[i].users;
                }
                // for (i = 0; i < data.length; i++) {
                //     console.log(data[i])
                //     if (data[i].username == username && password == "123") {
                //         // window.location=lamanbaru;
                //         document.getElementById("result").innerHTML = `
                //         <p>Name : ${data[i].name}</p>
                //         <p>Email : ${data[i].email}</p>`
                        
                //     } else {
                //         return("error")
                //     }
                // }
            })

    }
    catch (e) {
        console.log(e)
    }
}