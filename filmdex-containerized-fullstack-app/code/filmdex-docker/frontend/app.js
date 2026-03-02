const moviesDiv = document.getElementById('movies');

fetch('http://localhost:5000/movies') // backend endpoint
  .then(res => res.json())
  .then(data => {
    data.forEach(movie => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${movie.title}</h3><p>${movie.review}</p>`;
      moviesDiv.appendChild(div);
    });
  })
  .catch(err => console.error(err));
