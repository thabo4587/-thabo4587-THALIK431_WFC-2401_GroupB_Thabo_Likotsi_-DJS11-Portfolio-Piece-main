**AudioPod Documentation**

Installing AudioPod React Tailwind Project

To install and set up the AudioPod React Tailwind project, follow these step-by-step instructions:

Prerequisites
Before starting, ensure you have the following installed on your system:

Node.js: Make sure Node.js is installed on your machine. You can download it from nodejs.org and follow the installation instructions.

Steps to Install

Clone the AudioPod repository from GitHub using Git:

bash
Copy code
Download the repository as a ZIP file and extract it to your desired location.

Navigate to Project Directory

Open your terminal or command prompt and navigate into the project directory:

bash
Copy code
cd audiopod
Install Dependencies

Use npm (Node Package Manager) or yarn to install project dependencies:

bash
Copy code
npm install
# or
yarn install
This command installs all required packages and dependencies specified in the package.json file.

Configure Tailwind CSS (if necessary)

If Tailwind CSS is not already configured in the project, follow these additional steps:

Install Tailwind CSS and its dependencies:

bash
Copy code
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# or
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
Initialize Tailwind CSS configuration:

bash
Copy code
npx tailwindcss init -p
This creates a tailwind.config.js file and a postcss.config.js file in your project's root directory.

Start the Development Server

After installing dependencies and configuring Tailwind CSS (if needed), start the development server:

``bash
Copy code
npm start
# or
yarn start
This command runs the development server and opens the AudioPod application in your default web browser.

Access the Application on deployed netlify URL

Netlify URL:https://whimsical-sprinkles-e8a717.netlify.app/

Once the development server has started successfully, you can access AudioPod by navigating to http://localhost:3000 in your web browser.

### Overview
AudioPod is a podcast application designed to provide users with an immersive experience in discovering, exploring, and enjoying podcasts across various genres. It offers features for both listeners and content creators, aiming to enhance user engagement and accessibility to a wide range of audio content.

### Key Features

1. **User Authentication and Authorization**
   - **Sign Up and Login**: Users can create accounts securely with email and password, facilitating personalized experiences and access to premium features.
   - **Authentication**: I did not use supabase for authentication.

2. **Podcast Discovery and Navigation**
   - **Browse and Search**: Enables users to explore podcasts by genre, title, or keyword search, enhancing discoverability.
   - **Genre Categorization**: Podcasts are categorized into genres such as Personal Growth, Comedy, Business, etc., simplifying navigation based on user interests.
   - **Detailed Podcast Information**: Provides comprehensive details for each podcast, including descriptions, episodes, and seasons, enhancing user understanding and engagement.

3. **Episode Streaming and Interaction**
   - **Audio Playback**: Supports streaming of podcast episodes with built-in audio controls (play, pause, seek) for seamless listening experiences.
   - **Episode Progress Tracking**: Displays current playback progress, allowing users to resume episodes from where they left off.
   - **Favorite Episodes**: Users can mark favorite episodes for quick access and personalized content curation.

4. **User Interaction and Engagement**
   - **Add to Favorites**: Allows users to add episodes to their favorites list for quick access and future listening.

5. **Accessibility and Performance**
   - **Responsive Design**: Ensures compatibility across various devices and screen sizes, providing a consistent user experience.
   - **Performance Optimization**: Optimizes loading times and resource usage for smooth navigation and playback.

 ### **User Stories
Project is deployed to a custom Netlify URL

All views in the app display correctly on the smallest mobile device available, “iPhone SE”. This can be emulated in Chrome Dev tools.

All favicon information has been created an added correctly via https://realfavicongenerator.net/

All metatag information has been created and added via https://metatags.io/

All show data loaded via a fetch call from the https://podcast-api.netlify.app/shows

When viewing a specific show data is loaded via fetch from individual show endpoint

There is a loading state while initial data is being loaded

There is a loading state while new data is being loaded

User can view the details of a show broken down into seasons, sorted by number

User can listen to any episode in a season of a show

User can see a view where only episodes for a specifically selected season are shown

User can toggle between different seasons for the same show

User can see the name of all available shows on the platform

User sees preview image of shows when browsing

User sees the amount of seasons per show as a number when browsing

User sees a human-readable date as to when a show was last updated

User sees what genres (as genre titles) a show is associated with when browsing

User sees a preview image of seasons for a specific show

User sees the amount of episodes in a season as a number

User can go back to a show view from a season-specific view

User can mark specific episodes as favourites to find them again

User can visit a view where they see all their favourites

User can see the show and season of any episode in their favourites list


User is able to remove episodes from their favourites

User can arrange the list of shows by title from A-Z

User can arrange the list of shows by title from Z-A

User can arrange the list of shows by date updated in ascending order

User can arrange the list of shows by date updated in descending order

User can filter shows by title through a text input

User can find shows based on fuzzy matching of strings

Automatically filter shows by genre if the genre option  is clicked on

User sees the date and time that an episode was added to their favourites list

User can arrange favourites by show title from A-Z

User can arrange favourites by show title from Z-A

User can arrange favourites by date updated in ascending order

User can arrange favourites by date updated in descending order

Audio player shows current progress and episode length as timestamps

Audio player is always visible on homepage, so the user can listen to episodes while they browse

User is prompted to confirm they want to close the page when audio is playing 


App remembers and shows the timestamp progress of any episode the user has started listening to

User can "reset" all their progress, effectively removing their listening history

User is presented with a sliding carousel of possible shows they might be interested in on the landing page
 
 User favourites are stored in localstorage

 Since authentication was not neccessary I implemented basic React Routing to allow user to login when they submit the login/sign up form.




### Conclusion
AudioPod aims to provide a comprehensive podcast listening experience with a focus on user engagement, content diversity, and technological innovation. By combining intuitive design, robust functionality, and continuous improvement, AudioPod seeks to become a preferred platform for podcast enthusiasts worldwide.