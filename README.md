# Discovery Game (GeoGame)

## Project Overview
GeoGame is an interactive web-based game developed for users who want to learn about the cities of Turkey and improve their geography knowledge. The game is built using HTML, CSS, and JavaScript, and it uses the OpenLayers library for visualizing geographical data. Players try to guess the license plate numbers of cities while exploring different regions on the map of Turkey. GeoGame provides an educational and entertaining approach, making it suitable for geography enthusiasts, students, and anyone interested in learning more about Turkey.

## Project Purpose
The purpose of this project is to help users learn about the geography of Turkey and reinforce their knowledge in a fun and interactive way. GeoGame aims to increase geography knowledge by providing a gamified learning environment while also helping users develop quick thinking and decision-making skills. The game allows users to get more familiar with Turkish cities through interactive map exploration.

GeoGame serves as a gamified learning platform where players receive real-time feedback. This enables players to learn and have fun simultaneously. Designed with the user experience in mind, the game features different types of tasks and time-limited questions to keep players motivated throughout.

## Requirements
- Modern web browser (e.g., Chrome, Firefox, Edge)
- Git (to clone the repository)
- Code editor (e.g., VSCode, Sublime Text) if you want to make modifications

## Features
- **Interactive Map**: Users can navigate through an interactive map of Turkey. They can explore cities on the map and complete the tasks given to them. The map is developed using OpenLayers, allowing zoom and pan features for seamless navigation.
- **Tasks and Questions**: Users are asked to guess the license plate numbers of various cities in Turkey. Correct answers earn points, while incorrect answers result in point deductions. The task system is randomized, with each round featuring a different city, making the game dynamic and replayable.
- **Time-Limited Questions**: Players are given a specific amount of time to complete each task. This countdown adds excitement to the game and helps users improve their quick-thinking and decision-making skills. Providing the correct answer before the timer runs out prevents point loss.
- **Dynamic Feedback**: Users immediately learn whether their answers are correct or incorrect. When the correct answer is given, the corresponding city is marked on the map, and the user gains points. Incorrect answers are immediately indicated, resulting in point loss.
- **Scoring System**: Each correct answer increases the player's score, while incorrect answers result in point deductions. This scoring system encourages users to improve throughout the game and aim for the highest score possible. Users can track their scores in real time in the top-right corner of the game.
- **User-Friendly Interface**: The game features a modern, dark-themed aesthetic, providing users with an enjoyable visual experience. Animated buttons and smooth transitions make the game flow more engaging. The interface is optimized for both desktop and mobile devices.
- **Localized Content**: All in-game content is in Turkish, making the game more relatable and understandable for local users.


## Technologies and Libraries
The technologies and libraries used in this project were selected to enhance user interaction and effectively manage geographic data. This project is developed using the following technologies and libraries:

- **HTML**: Used for the structure and content of the pages.
- **CSS**: Used for styling and design, including animations.
- **JavaScript**: Used to provide dynamic functionality.
- **OpenLayers**: A powerful library used for map visualization and interacting with geographic data. This library provides functionalities such as marking cities on the map, zooming, and navigation.

## Project Structure
- **index.html**: The main entry page where users enter their username before starting the game.
- **game.html**: The main game page where users interact with the map and complete missions.
- **login.js**: Handles username validation, ensuring that users enter a valid username before starting the game, thus providing a personalized experience.
- **game.js**: Manages the main functionality of the game. It includes map creation, mission generation, score management, and timer functions. It also allows users to interact with the map and controls the game flow.
- **style.css**: Defines the styles for both the game and login pages, including animations, color themes, and responsive design features.

## How to Play
1. **Start the Game**: Open the `index.html` file and enter your username.
2. **Complete Missions**: You will be asked questions about the license plate numbers of different cities in Turkey. Enter your answer in the input box and click the submit button.
3. **Get a New Mission**: Click the "Yeni Görev Al" (Get New Mission) button to move on to the next city. Each mission will be about a different city, helping the player improve their geography knowledge.
4. **Scoring**: Correct answers earn points, while incorrect answers result in point deductions. Try to achieve the highest score possible for each mission.
5. **Timer**: Each mission includes a countdown timer. This timer encourages the player to answer the question within a limited time and helps improve time management.


## Installation and Running the Game
To install and run the game locally, follow these steps:

1. **Clone the project to your computer**:
   ```
   git clone [<repo-url>](https://github.com/GMT-458-Web-GIS/geogame-lihkab)
   ```
2. **Navigate to the project directory**:
   ```
   cd geogame
   ```
3. **Open the game**:
Simply open the `index.html` file in your preferred web browser to start playing the game.

## Drawings and Front-End Layout
GeoGame is designed to provide a modern and aesthetic user interface. The various styles defined in the `style.css` file ensure that the game is optimized for both desktop and mobile devices. The main elements of the design are as follows:
**Dark Theme and Modern Colors**: A dark color theme has been chosen to provide a user-friendly experience.
**Animated Buttons and Transitions**: The animated feedback when clicking on buttons makes the game experience more interactive and enjoyable.
**Responsive Design**: The game interface is adjusted to fit all device sizes. The map and mission sections provide a consistent and accessible user experience across different screen sizes.

