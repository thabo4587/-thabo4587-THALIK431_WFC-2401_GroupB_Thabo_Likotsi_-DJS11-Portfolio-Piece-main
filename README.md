# AudioPod DJS11

AudioPod is a React-based web application designed for discovering and listening to podcasts. Built with Tailwind CSS for styling, AudioPod offers a user-friendly interface for managing and exploring various podcast shows. This documentation will guide you through the installation process, provide an overview of the implemented features, and highlight areas that need further development.

I've succesfully deployed my site to netlify:https://whimsical-sprinkles-e8a717.netlify.app/ I just need to design a logo and favicon.

## Table of Contents
- [Installation](#installation)
- [What I've done so far](#features)
  - [Login and Sign Up Pages](#login-and-sign-up-pages)
  - [Fetching Podcast Shows Data](#fetching-podcast-shows-data)
  - [Filtering Shows](#filtering-shows)
  - [What needs to ve done](#upcoming-features)
    - [Fetching Episode and Sound Data](#fetching-episode-and-sound-data)
    - [Search Functionality](#search-functionality)
    - [Login and Sign Up Button Toggles](#login-and-sign-up-button-toggles)
    - [Favorites Page Fixes](#favorites-page-fixes)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository**: Clone the project repository from GitHub to your local machine.
2. **Install dependencies**: Navigate to the project directory and install the necessary dependencies using npm.
3. **Start the development server**: Run the development server and open the application in your browser.

## Features

### Login and Sign Up Pages

The login and sign-up pages are implemented using React components and styled with Tailwind CSS. These pages enable users to create an account and log in to access personalized features. The login page includes form fields for email and password with client-side validation. The sign-up page includes fields for username, email, and password, also with client-side validation.I also implemented routing to this project allowing sign up to go straight to homepage.

### Fetching Podcast Shows Data

Podcast shows data is fetched from an external API using the useEffect hook in React. The data is stored in the component state and displayed in a user-friendly format. The fetching process includes handling potential errors and ensuring data is displayed only after a successful retrieval allowing me to display data on homepage.

### Filtering Shows

The filtering functionality allows users to filter podcasts based on categories or search terms. A filter input component captures user input, which is then used to filter the list of podcasts in real-time. This enhances the user experience by making it easier to find specific shows.

## Upcoming Features
## Build a logo and create a favicon


### Fetching Episode and Sound Data

Currently, I am struggling with implementing the functionality to fetch episode and sound data. This feature will retrieve detailed information about each podcast episode, including the audio files, and display them in the application.I tried using use context since djs08 van life project also used context along with useparams.

### Login and Sign Up Button Toggles

Ensure that the login and sign-up buttons correctly toggle between the respective forms. This involves implementing a mechanism to switch the view from the login form to the sign-up form and vice versa, based on user interaction I will implement react router in order to achieve this.

### Favorites Page Fixes

I also need to fix the favorites page to ensure it correctly displays the user's favorite podcasts. This will involve debugging and enhancing the functionality that manages the user's favorite list, ensuring accurate retrieval and display of data.
I manged to complete these two:
User can filter shows by genre.
User sees what genres a show is associated with when browsing.
finshed with these
## Favourites Functionality:
User can mark/unmark specific episodes as favourites:
User can see the associated show and season for a favorited episode:
Favourite episodes are grouped by season/show:
User can arrange favourites by title (A-Z, Z-A):
User can arrange favourites by most recently updated:
User can remove episodes from favorites:
User sees the date/time an episode was added to favorites:
Favorites are persisted in localStorage:
User can reset listening history:
User sees the number of episodes in a season on the details page:
Still struggling with favorites page....


## Updated To-List


## Core Functionality:
User can listen to any episode in a season for a show: (placeholder audio track)


I need to fix my file structure and seperate components nad pages

User can go back from a season-specific view to a show view:

Need to fix loading states: (Ensure loading spinners or indicators are in place)

## Audio Player
Audio player is always visible:
Audio player shows listening progress:
App remembers episodes listened to all the way through

## Add UI Enhancements Extras
A Spring hover animations (e.g., to buttons and navbars)

build preview info modal. 

Use Material UI for styled buttons:

Add play  icon shadow hover effect using react icons

Design a favicon and logo using canvas:
Fix navigation bar

Need to add a hamburger responsive menu for page navigation.


