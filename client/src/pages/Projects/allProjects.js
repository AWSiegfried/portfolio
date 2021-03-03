import { Emergence, NoGym, StoreFront, Harmony} from "../../assets/projects/allProjects"

//Emergence, Store Front, HARMony, NoGym, 

const projects = [
  {
    id: 1,
    name: "Store Front",
    live: "https://storefrontreact.herokuapp.com/",
    github: "https://github.com/DJ620/store-front-react",
    img: StoreFront,
    desc: "A content management system that allows users to dynamically create a fully functional customized eCommerce website with checkout in less than 5 minutes.",
    built: "HTML, CSS, JS, React, Redux, Redux-persist, Node, MySQL, Express, Cloudinary, Multer, Bootstrap"
  },
  {
    id: 2,
    name: "HARMøny",
    live: "http://harmonythegame.herokuapp.com",
    github: "http://harmonythegame.herokuapp.com",
    img: Harmony,
    desc: "A web application combat-based video game with protected routes and full user-authentication. Written in HTML Canvas utilizing React components.",
    built: "HTML, CSS, Javascript, MERN, Canvas, JSONwebtoken, Robo 3T, Tiled, Bootstrap"
  },
  {
    id: 3,
    name: "EMERGENCE",
    live: "https://awsiegfried.github.io/Emergence_v1/",
    github: "https://github.com/AWSiegfried/Emergence_v1",
    img: Emergence,
    desc: "A web application that finds new local emerging artists by city.  User searches for a genre and is returned a dynamically created artist overview that gives the user a complete perspective of a band in under 30 seconds using pulled data and visible metrics.",
    built: "HTML, CSS, JavaScript, Bootstrap, Heroku, Spotify API, Youtube API, JSCharting"
  },  
  {
    id: 4,
    name: "NoGym",
    live: "https://nogym.herokuapp.com/",
    github: "https://github.com/TChristensenDrumz/NoGym",
    img: NoGym,
    desc: "A web application that dynamically creates both a list of exercises as well as a guided 30-minute workout routine based on the workout gear currently available to the user in their household.",
    built: "HTML, CSS, JavaScript, MySQL, JawsDB, Node, Express, HTML, CSS, JavaScript, Bootstrap, Heroku"
  }
];

export default projects;
