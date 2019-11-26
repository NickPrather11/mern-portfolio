const projectsArray = [
  {
    name: "NC Breweries Project",
    image: "Brewery_Project.PNG",
    deployedLink: "https://adishthapa.com/carolina-brew-review",
    githubLink: "github.com/adishthapa/carolina-brew-review",
    description:
      "A brewery tracking application that shows breweries located throughout North Carolina and their most popular beers. Sign up or log in to add a brewery to your Favorites by clicking the star next to the brewery name."
  },
  {
    name: "Gluttony Game",
    image: "Gluttony_Game.PNG",
    deployedLink: "https://nickprather11.github.io/unit-4-game/",
    githubLink: "https://github.com/NickPrather11/unit-4-game",
    description:
      "The goal of this game is for the user to reach the exact 'goal' number by clicking on the various images, which have associated number values between 1 and 12. However, each image's number value is randomly generated each round."
  },
  {
    name: "Lebowski Trivia",
    image: "Lebowski_Trivia.PNG",
    deployedLink: "https://nickprather11.github.io/TriviaGame/",
    githubLink: "https://github.com/NickPrather11/TriviaGame",
    description:
      "Timed trivia game about the film 'The Big Lebowski'. You've got 120 seconds to answer all 15 questions."
  },
  {
    name: "LIRI Node App",
    image: "LIRI-movie-this.PNG",
    deployedLink: "https://nickprather11.github.io/liri-node-app",
    githubLink: "https://github.com/NickPrather11/liri-node-app",
    description:
      "The LIRI node app is used to search for info on movies, songs, and concerts. It makes use of the Online Movie Database (OMDB), Spotify, and Bandsintown API's to acheive this. To run this app, you must clone the repo from https://github.com/NickPrather11/liri-node-app.git and run it in your CLI. Checkout the readme file on the GitHub page linked below for more detailed instructions."
  },
  {
    name: "Eat Da Burger!",
    image: "burger_devourer.PNG",
    deployedLink: "https://stark-eyrie-85216.herokuapp.com/",
    githubLink: "https://github.com/NickPrather11/burger",
    description:
      "Node application using Express, Handlebars, and MySQL demonstrating use of MVC design pattern and an ORM. User can add their 'burger' and make use of buttons to 'devour' it (moving it to the 'devoured' div), 'eat it again' (moving it back to the 'ready to eat' div), or delete it all together."
  },
  {
    name: "Dream Journal",
    image: "dream_journal.PNG",
    deployedLink: "https://cryptic-badlands-56041.herokuapp.com/",
    githubLink: "https://github.com/NickPrather11/Project2",
    description:
      "'Dream Journal' node application utilizing Express, MySQL, Sequelize, Handlebars, and Materialize demonstrating MVC design pattern and Many-to-Many sequelize associations. Users can create an entry with associated 'tags' or categories and browse entries in reverse chronological order (newest first) or by 'tag'. User can also toggle skins for day/night mode. When adding a tag, be sure to use the '+' button to add the tag. Hitting the 'Enter' key will trigger a submission without the added tag. NOTE: The sequelize associations used in linking journal entries to their respective tags works locally, but do not currently work on the heroku deployment. I'm in the process of debugging to figure out why the middle table used in linking the entries and tags does not work on heroku."
  },
  {
    name: "The Hard Times Scraper",
    image: "hardTimesScraper.PNG",
    deployedLink: "https://stark-tor-89874.herokuapp.com/",
    githubLink: "https://github.com/NickPrather11/mongo-scraper",
    description:
      "This node application scrapes The Hard Times website for articles listed in the main section of their homepage and stores them in a Mongo database. Click 'Scrape Articles' to load articles in the All Articles section. This process takes a few seconds (and should probably be updated with a loading progress icon/animation). Click on the headline to create a note for the article. Notes can be deleted. Click 'Save' under the headline to save the article. This removes the article from 'All Articles' and places it in the 'Saved Articles' section. Once articles are in the 'Saved Articles' section, you can click 'Unsave', removing the article from that section. The article will now show again in the 'All Articles' section. Click 'Clear All' to empty the 'All Articles' section. This does not delete your saved articles."
  },
  {
    name: "Cloud Clicker Game",
    image: "cloud_clicker.PNG",
    deployedLink: "https://evening-crag-14153.herokuapp.com/",
    githubLink: "https://github.com/NickPrather11/clicky-game",
    description:
      "This is a game that requires the user to click all the images only once to win. The images shuffle each time an image is clicked. The app keeps track of your wins, but only for each session."
  },
  {
    name: "Google Books Search",
    image: "book_search.PNG",
    deployedLink: "https://serene-beyond-02883.herokuapp.com/",
    githubLink: "https://github.com/NickPrather11/book-search",
    description:
      "MERN stack app that allows a user to create a reading list of books by querying Google books. 'Search Books' takes the user to a search page the queries Google books. Submit button is disabled until user enters either a title or author. Ten results are returned, each one with a 'Save' button allowing the user to add that book to their personlized reading list. 'My Books' takes the user to their personalized reading list, which is stored in MongoDB. Each stored item displays (where applicable) title, author, description, and a thumbnail of the book cover."
  },
  {
    name: "Texas Hold 'Em Poker",
    image: "poker.PNG",
    deployedLink: "https://warm-garden-85112.herokuapp.com/",
    githubLink: "https://github.com/adishthapa/UNCBootcamp-Project03",
    description:
      "Web based multiplayer Texas Hold 'Em rules poker game app built with a MERN stack and utilizing socket.io at the core of user interaction during gameplay. Sign up or log in and you will be directed to the lobby where you can follow current game play in the chat window and click 'Join Table' to be added to queue while you wait for a seat at the table. Once you're at the table, you are able to participate in the chat in addition to playing the game! Check out the readme file on the GitHub repo linked below for more detailed instructions."
  }
];

module.exports = projectsArray;
