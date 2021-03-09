const projects = [
  {
    title: "Recipe Pal",
    subtitle: "Written in JavaScript, HTML, CSS",
    githubRepo: "https://github.com/kaylamuraoka/Food_Application",
    deployedLink: "https://kaylamuraoka.github.io/Food_Application/",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/Food_Application/main/readme_images/recipe_pal_responsive_design.png",
    date: "Nov 14, 2020",
    desc:
      "Recipe Pal is a place where you can search for recipes, filter by preference, easily view ingredients required and add to your own customized grocery list. Our website makes it easy to locate open grocery stores and supermarkets nearby. So you can plan your perfect night cooking at home for family and friends, or for oneself, within a few clicks!",
    tools:
      "HTML, CSS, JavaScript, jQuery, Materialize, GoogleFonts, Edamam Recipe Search API, Google Maps JavaScript & Places API",
  },
  {
    title: "Employee Directory",
    subtitle: "A React front-end application",
    githubRepo: "https://github.com/kaylamuraoka/React-Employee-Directory",
    deployedLink: "https://randomized-employee-directory.herokuapp.com/",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/React-Employee-Directory/main/images/employee-directory-page-screenshot.png",
    date: "Mar 1, 2021",
    desc:
      "This React-based app gives business professionals the ability to access non-sensitive data about their employees, and easily search, filter, and sort through their entire directory. For example, employers may search for specific employees via the search field, sort a field (Name, Email, DOB) in ascending or descending order. The employee directory is populated with randomly generated users via an API call to the Random User API.",
    tools: "React, HTML, CSS, Bootstrap, Random User API",
  },
  {
    title: "Weather Dashboard",
    subtitle: "Written in JavaScript, HTML, CSS",
    githubRepo:
      "https://github.com/kaylamuraoka/Weather_Dashboard_With_OpenWeather_API#weather-dashboard-using-the-openweather-api",
    deployedLink:
      "https://kaylamuraoka.github.io/Weather_Dashboard_With_OpenWeather_API/",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/Weather_Dashboard_With_OpenWeather_API/main/assets/images/ResponsiveViews.png",
    date: "Nov 4, 2020",
    desc:
      "This weather dashboard is here to help you check the weather outlook for multiple cities so that they can plan a trip accordingly. Weather conditions of particular city are fetched from OpenWeatherMaps by sending requests for location, current temperature, humidity, wind speed, UV index and weather icon to the third-party OpenWeather API.",
    tools: "HTML, CSS, Bootstrap CSS, JavaScript, OpenWeather API",
  },
  {
    title: "Coding Interview Practice Quiz",
    subtitle: "Written in JavaScript, HTML, CSS",
    githubRepo:
      "https://github.com/kaylamuraoka/Coding_Interview_Practice_Assessment",
    deployedLink:
      "https://kaylamuraoka.github.io/Coding_Interview_Practice_Assessment/",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/Coding_Interview_Practice_Assessment/main/assets/images/codeQuizResponsiveViews.png",
    date: "Oct 22, 2020",
    desc:
      "This is a simulation of a typical timed coding quiz containg 10 multiple-choice questions on JavaScript, HTML, CSS, and Bootstrap fundamentals. I used JavaScript to deal with events, manipulate and traverse the DOM, handle user input, and give feedback to the user, parse data to and from local storage",
    tools: "HTML, CSS, JavaScript",
  },
  {
    title: "Work Day Planner",
    subtitle: "Powered by jQuery and written in JavaScript, HTML, CSS",
    githubRepo:
      "https://github.com/kaylamuraoka/Work_Day_Scheduler_Using_jQuery",
    deployedLink:
      "https://kaylamuraoka.github.io/Work_Day_Scheduler_Using_jQuery/",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/Work_Day_Scheduler_Using_jQuery/main/assets/images/WorkDaySchedulerResponsiveViewsImg.png",
    date: "Oct 26, 2020",
    desc:
      "This is a simple daily planner application that allows a user to save events for each hour of the day. This helps employees with busy schdules manage their time effectively. This application uses the Moment.js 2.29.1 library to parse, validate, manipulate, and display dates and times in JavaScript.",
    tools: "jQuery, Moment.js, HTML, CSS, JavaScript",
  },
  {
    title: "Eat-Da-Burger! Restaurant App",
    subtitle:
      "Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM",
    githubRepo: "https://github.com/kaylamuraoka/burger",
    deployedLink: "https://secure-ravine-36989.herokuapp.com/",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/burger/main/public/assets/images/screenshot_of_app.png",
    date: "Jan 12, 2021",
    desc:
      "Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat and stores every burger in a database, whether devoured or not. Following the MVC design pattern; this application uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.",
    tools: "MySQL, Node, Express, Handlebars",
  },
  {
    title: "Restaurant Recommender & Ethnic Food Diversity Index",
    subtitle: "Written in python",
    githubRepo:
      "https://github.com/kaylamuraoka/Using-Yelp-to-Study-Ethnic-Food-Scene-by-U.S.-Capital",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/Using-Yelp-to-Study-Ethnic-Food-Scene-by-U.S.-Capital/master/Pie-Chart.png",
    date: "Jan 2, 2018",
    desc:
      "In this project, I scraped Yelp restaurant data to investigate the food scene across different U.S capitals. This project helps us gain insight on geographic taste preferences through analyzing how different types of food are consumed across different places. This project compares the frequency of mexican, american, korean, japanese, italian, chinese, thai, mediterranean, indian, vietnamese, latin, french, filipino, greek, and hawaiian restaurants in the users home state. I created this code that ultimately prints a bar chart and pie chart to easily visualize this data. This code also recommends highly rated restaurant located in the user's home state. Uses Python libraries for data processing, modeling, and visualization.",
    tools: "Pandas, Matplotlib, Seaborn, Yelp API",
  },
  {
    title: "Twitter Word Frequency Analysis",
    subtitle: "Written in python",
    githubRepo:
      "https://github.com/kaylamuraoka/Twitter_Scraper_Data_Analytics",
    image:
      "https://raw.githubusercontent.com/kaylamuraoka/Twitter_Scraper_Data_Analytics/main/images/sample_bargraph.png",
    date: "Oct 15, 2020",
    desc:
      "Calculating Word Frequencies in Twitter Tweets. In this project we learned how to tackle writing code in python, in addition to putting our shell scripting abilities to the test. We chose to do this project because we noticed the recent escalation of tweets mentioning the COVID-19/CoronaVirus. Therefore, we wrote several independent programs/scripts that ultimately, facilitates the analysis of tweets pulled from twitter using an API.",
    tools: "Tweepy, Twitter API",
  },
];

export default projects;
