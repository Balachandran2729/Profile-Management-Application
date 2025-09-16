# Profile Management Application

This project is a Profile Management Application built with Next.js, Tailwind CSS, Node.js/Express, and MongoDB. It replicates a provided Figma design and allows users to view a list of profiles and detailed information for each profile.

## Seed the database 
    - Start your backend server (see below).
    - Make a `POST` request to `http://localhost:5000/api/profiles/seed`

## Features

- **Page 1: Profile Cards**
  - Displays a responsive grid of profile cards.
  - Each card shows the user's name, avatar, gender, age, and pronouns.
  - Clicking a card navigates to the detailed profile page.
- **Page 2: Profile Details**
  - Shows comprehensive details for a selected profile.
  - Includes sections for Bio, Personal/Professional Information, Skills, Visual Resume, Case Studies/Projects, and Contact options.
  - Provides a "Back to Home" navigation link.
- **Backend API**
  - Serves profile data to the frontend.
  - Provides endpoints to fetch all profiles and fetch a single profile by ID.
  - Stores profile data, including images, in MongoDB.

## Technologies Used

### Frontend
- **Next.js 14+**: React framework for building the user interface and handling routing (utilizing the App Router).
- **Tailwind CSS**: Utility-first CSS framework for styling the application according to the Figma design.
- **React Icons**: Library for including popular icons in the React components.

### Backend
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js, used to create the RESTful API.
- **MongoDB**: NoSQL database for storing profile information.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## The backend provides the following RESTful API endpoints:

- `GET /api/profiles`: Fetches a list of all profiles.
- `GET /api/profiles/:id`: Fetches the details of a specific profile by its ID.
- `POST /api/profiles/seed`: (Development only) Seeds the database with sample profile data from `data/sampleProfiles.js`.
