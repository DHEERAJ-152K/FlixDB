
let submitButton=$("#searchButton");
let result=$("#result");

const apiKey="f08c9a90";


function fetchResults(){
  let movieName=$("#movie-name").val(); //if input is invalid.
    if(movieName.trim()===''){
    alert("Please enter the movie name ");
  }
  else
  //if input is valid.
  var url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieName)}`;
      $.ajax({
        url:url,
        method: 'GET',
        dataType: 'json',
        success: function(movieData){

          // Initializing variables with actual datafrom API.
          const title = movieData.Title;
          const director=movieData.Director;
          const actors=movieData.Actors;
          const genre=movieData.Genre;
          const plot=movieData.Plot;
          const poster=movieData.Poster;
          const ratings=movieData.imdbRating;
          const awards=movieData.Awards;
          const rated=movieData.Rated;
          const year=movieData.Year;
          const runtime=movieData.Runtime;

          // movie details fetched from API.
          const htmlContent=`
          <div id="info">
            <img src="${poster}" alt="Movie Poster.">
            <div>
              <h2>${title}</h2>
              <div class='rating'>
                <img src="497-4974277_golden-star-transparent-clipart-clip-art-golden-star.png">
                <h4> ${ratings}</h4>
              </div>
              <div class='details'>
                <span>${rated} (rated)</span>
                <span>${runtime}</span>
                <span>${year}</span>

                <span>${genre}</span>

                <span>DIRECTOR: ${director}</span>
              </div>
            </div>
          </div>
          <div id="details">
            <p>CAST: ${actors}</p>
            <p>PLOT: ${plot}</p>
            <p>AWARDS: ${awards}</p>
          </div>

        
          `;

          $("#result").html(htmlContent);
        },

        error: function(error){
          console.error('error',error);
        }
      });
}

submitButton.click(function(){
   
    fetchResults();
})