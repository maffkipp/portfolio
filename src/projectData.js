import petesPedals from './images/petes-pedals.png';
import bogbody from './images/bogbody.png';
import myTravels from './images/my-travels.png';
import ticTacToe from './images/tic-tac-toe.png';
import weathervue from './images/weathervue.png';


const projectData = [
  {
    title: "Pete's Pedals",
    id: "01",
    image: petesPedals,
    url: "https://www.petespedals.net/",
    github: "https://github.com/maffkipp/petes_pedals",
    about: "This is a website I built for a client's guitar pedal business. I was focused on making a site that could be easily modified and expanded by the client without them needing to edit any code.",
    details: "This project was built using primarily React and Contentful CMS. This combination allowed me full control over the layout while still affording the client all the benefits of a modern CMS. I looked to Material Design for inspiration for the layout, colors, and fonts; I also used react-images for the photo lightbox and moment.js for date parsing."
  },
  {
    title: "Bogbody",
    id: "02",
    image: bogbody,
    url: "https://www.bogbody.band/",
    github: "https://github.com/maffkipp/bogbody_v2",
    about: "This is a website built for one of the bands I play with in Austin. I wanted to make a simple, elegant site that served as a hub for information and media related to the band.",
    details: "I used this project as an opportunity to dive into using webpack as a build tool, as I previously had not had the opportunity to use it outside the React ecosystem. I used babel for ES6 support, and I used Sass to write my stylesheets. I also used animate.css for simple animations along with smooth-scroll."
  },
  {
    title: "WeatherVue",
    id: "03",
    image: weathervue,
    url: "https://weathervue.wesmk.com/",
    github: "https://github.com/maffkipp/vue-weather-app",
    about: "This is a weather app I built using the OpenWeatherMap API. It was built with the intention of learning more about VueJS and the HTML5 Canvas API.",
    details: "This project was built using vue-cli. It utilizes Vue to update the page based on the data pulled in from an external API. The background of the page is an HTML5 canvas element set to randomly create circles of different sizes, directions, and velocities; collisions with the outer edges of the browser window are also accounted for."
  },
  {
    title: "My Travels",
    id: "04",
    image: myTravels,
    url: "http://my-travels-log.herokuapp.com/",
    github: "https://github.com/maffkipp/my_travels_log",
    about: "This app is a way to track your global travels. As part of a three person group, I primarily wrote the front-end code for this project; however, I also spent time writing CRUD routes on the server.",
    details: "We built this app using HTML, CSS, and Javascript (including Jquery) on the front end, and for our backend we used NodeJS, Express, and MongoDB. The app has Oauth through passport-facebook, and stores user data for persistence between sessions. We are also using the google maps API on the front end as a way to represent our data visually."
  },
  {
    title: "Tic Tac Toe",
    id: "05",
    image: ticTacToe,
    url: "https://tic-tac-toe-maffkipp.herokuapp.com/",
    github: "https://github.com/maffkipp/tic-tac-toe/tree/wes_lab",
    about: "A game of tic-tac-toe built using HTML, CSS, and vanilla Javascript. This is an older project, but I really like the way it turned out visually. ",
    details: "Besides the basic front-end tools, I built a simple server for this app with NodeJS and Express. I also am using Sass on this project as a way to keep my CSS better organized. The primary goal of this project was to become comfortable with DOM manipulation without using Jquery, and I would say I was fairly successful in that regard."
  }
]

export default projectData;


