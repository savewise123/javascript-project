
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjA2OTZjY2ViN2Q2MjQ5M2Y0YWEzYzNmNzc0ZDFiZCIsIm5iZiI6MTcyOTE0NzM3Mi4wMjQyNCwic3ViIjoiNjcwZGQ3MmRkNWY5M2EzZGEwYmMwZDdjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.egUeMHQF5QGPlb21fhOKEEpeEZ5qpDh8VD3Ux544dPc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    

<div class="movie-card">

<div class="movie-info">
    <h4 class="movie-title">${response.result[0].title}
    <span class="movie-rating">${response.result[0].vote_average}</span>

</div>
    </div>
    document.querySelector("movie-container").innerHTML
    document.querySelector("movie-container").innerHTML + temphtml;
    )
    .catch(err =>console.error(err));

