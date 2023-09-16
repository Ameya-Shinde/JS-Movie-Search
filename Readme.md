# Movie Search Web App
This web application allows users to search for movies using the OMDB API and view detailed information about a selected movie.

## Features 
* Users can search for movies by entering a movie name.
* The application displays a list of movies matching the search query.
* Clicking on a movie displays detailed information about that movie.
* Provides information like title, plot, release year, runtime, genre, director, actors, language, country, awards, rating, and box office.
* In case of any error, it is displayed to the user in a friendly manner, so that the user knows exactly whats going on.
* A loading animation to make the application more interactive.
* Home button returns the user back to the main page.

## Usage 
1. Open the web app in your browser.
2. Enter the name of the movie you want to search for in the input field.
3. Click the "Search" button or press "Enter".
4. The app will display a list of movies matching the search query.
5. Click on a movie to view detailed information.

## Dependencies
* This project uses the OMDB API for fetching movie data.
* The application uses HTML, CSS, and JavaScript for the frontend.

## Hosted Link
https://ameya-shinde.github.io/JS-Movie-Search/

## JS Functionality Used

1. Fetching Movie Data

  The application uses the `fetch` API to send a request to the OMDB API, which returns a promise. The data is then converted to JSON using `await data.json()`.

2. Dynamic DOM Manipulation

  The app dynamically updates the DOM based on user actions. For example, when a user searches for a movie, the loading spinner is displayed (`root.innerHTML = <i class="fa fa-spinner fa-spin"></i>`) and when the data is fetched, the search results are displayed or an error message is shown.

3. Event Handling
   
   The application handles various events like button clicks and input changes.

4. Debouncing
   
   The input field uses a debouncing mechanism to delay the API request until the user has finished typing. This prevents unnecessary API calls for each keystroke.
 
5. Dynamic URL Generation
    
   When a user clicks on a movie card, the application dynamically generates a new URL and redirects the user to a details page for that movie.

6. Rendering Movie Details
    
   On the details page, the application fetches additional data for the selected movie and dynamically updates the DOM with the received information.

   These functionalities collectively provide a seamless user experience for searching and viewing movie details in the web application.

## Screenshots
![Screenshot 2023-09-16 132425](https://github.com/Ameya-Shinde/JS-Movie-Search/assets/93002372/845556d5-11ec-4c4c-9772-b76c389a5681)

![Screenshot 2023-09-16 132445](https://github.com/Ameya-Shinde/JS-Movie-Search/assets/93002372/630e940b-c91d-40c5-bd68-193fb22ad02f)

![Screenshot 2023-09-16 132528](https://github.com/Ameya-Shinde/JS-Movie-Search/assets/93002372/7c609944-fa5d-44b0-946e-2295d55f167c)

![Screenshot 2023-09-16 132609](https://github.com/Ameya-Shinde/JS-Movie-Search/assets/93002372/5cbe77a3-cae4-48df-85c6-5725feecdc4a)

![Screenshot 2023-09-16 132636](https://github.com/Ameya-Shinde/JS-Movie-Search/assets/93002372/c538f901-c2c6-4000-982e-738f753291bb)

