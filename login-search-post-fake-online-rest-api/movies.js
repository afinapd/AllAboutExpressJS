var btn = document.getElementById("btnMovies").addEventListener("click", getMovies)
function getMovies() {
  fetch('http://159.89.192.105:3000/movies')
    .then((res) => { return res.json() })
    .then((data) => {
      let result;
      data.forEach((movie) => {
        const { movie_title, genre, year } = movie
        result +=
          `
                         <tr>
                             <td>${movie_title}</td>
                             <td>${genre} </td>
                             <td>${year}</td>
                         </tr>
                      `;
        document.getElementById('result').innerHTML = result;
      });
    })
}

function New() {
  var movie_title = document.getElementById("movie_title").value;
  var genre = document.getElementById("genre").value;
  var year = document.getElementById("year").value;
  console.log("Input Data: " + movie_title + " " + genre + " " + year);

  fetch('http://159.89.192.105:3000/movies', {
    method: 'POST',
    body: JSON.stringify({
      movie_title: movie_title,
      genre: genre,
      year: year
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log('response: ' + JSON.stringify(json));
    })
}

function btnSearch() {
  var input = document.getElementById("input").value;
  try {
    document.getElementById("search").innerHTML
    const url = "http://159.89.192.105:3000/movies";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        var tampung;
        for (i = 0; i < data.length; i++) {
          if (data[i].movie_title == input) {
            tampung = data[i];
            break;
          }
        } if (tampung) {
          document.getElementById("searchResult").innerHTML = `
          <p>Genre : ${data[i].genre}</p>
          <p>Year : ${data[i].year}</p>`
  
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