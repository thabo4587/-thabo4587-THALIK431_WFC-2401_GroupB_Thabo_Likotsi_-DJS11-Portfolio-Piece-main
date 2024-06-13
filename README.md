![image](https://github.com/thabo4587/THALIK431_WFC-2401_GroupB_Thabo_Likotsi_-DJS11-Portfolio-Piece/assets/142932054/98178dc5-02e2-4c26-ab23-6048f4222427)# AudioPod

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

Currently, I am struggling with implementing the functionality to fetch episode and sound data. This feature will retrieve detailed information about each podcast episode, including the audio files, and display them in the application.

### Search Functionality

A search bar will be implemented to allow users to search for specific podcasts or episodes. This feature will include capturing user input, applying the search term to filter the podcast data, and displaying the search results for the home page.

### Login and Sign Up Button Toggles

Ensure that the login and sign-up buttons correctly toggle between the respective forms. This involves implementing a mechanism to switch the view from the login form to the sign-up form and vice versa, based on user interaction I will implement react router in order to achieve this.

### Favorites Page Fixes

I also need to fix the favorites page to ensure it correctly displays the user's favorite podcasts. This will involve debugging and enhancing the functionality that manages the user's favorite list, ensuring accurate retrieval and display of data.

