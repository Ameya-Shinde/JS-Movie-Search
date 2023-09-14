const urlString = window.location.href;
let paramString = urlString.split('?')[1];

let pair = paramString.split('=');
let imdbID = pair[1];

console.log(imdbID);


const poster = document.getElementById("mainImg");
const title = document.getElementById("title");
const plot = document.getElementById("plot");
const rYear = document.getElementById("rYear");
const runtime = document.getElementById("runtime");
const genre = document.getElementById("genre");
const director = document.getElementById("director");
const writer = document.getElementById("writer");
const actors = document.getElementById("actors");
const language = document.getElementById("language");
const country = document.getElementById("country");
const awards = document.getElementById("awards");
const rating = document.getElementById("rating");
const boxOffice = document.getElementById("boxOffice");

window.addEventListener('load', async () => {
    const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=967ecf24`;
    const res = await fetch(url);
    const mDetails = await res.json();

    const img = document.createElement("img");
    img.src = mDetails.Poster;
    poster.appendChild(img);

    title.innerHTML = mDetails.Title;
    plot.innerHTML = mDetails.Plot;
    rYear.innerHTML = mDetails.Released;
    runtime.innerHTML = mDetails.Runtime;
    genre.innerHTML = mDetails.Genre;
    director.innerHTML = mDetails.Director;
    writer.innerHTML = mDetails.Writer;
    actors.innerHTML = mDetails.Actors;
    language.innerHTML = mDetails.Language;
    country.innerHTML = mDetails.Country;
    awards.innerHTML = mDetails.Awards;
    rating.innerHTML = mDetails.imdbRating + "/10";
    boxOffice.innerHTML = mDetails.BoxOffice;
});