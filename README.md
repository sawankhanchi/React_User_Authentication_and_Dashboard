# React User Authentication and Dashboard

This project is a user authentication and dashboard system built using React. It includes registration and login pages with validation, a dashboard with a user dropdown and sidebar navigation, and state management support.

## Features

- User registration page with validation
- User login page with show/hide password feature and API integration for random user profiles
- Dashboard with user dropdown and sidebar navigation
- Responsive design using Tailwind CSS
- State management using Redux
- Tailwind-CSS for styling and responsive design

## Getting Started

To get started with this project, clone the repository and install the required dependencies.

git clone https://github.com/sawankhanchi/React-User-Authentication-and-Dashboard.git

cd React-User-Authentication-and-Dashboard

npm install

## Usage

To run the application, use the following command:

npm start

This will start the application on port 3000. You can access the application by visiting http://localhost:3000/ in your browser.

## Pages

### Registration

The registration page includes a form where users can enter their username, first name, last name, password and confirm password. The form is validated to ensure that all fields are filled in and that the email address is valid. Once the user has filled in the form, they can submit it, and if the information is valid, they will be redirected to the login page.

### Login

The login page includes a form where users can enter their username and password. The form is validated to ensure that all fields are filled in. Once the user has filled in the form, they can submit it, and if the username and password match a valid user account, they will be redirected to the dashboard page. Users can also click on the "Show" button to reveal their password, and the "Hide" button to conceal it again.

### Dashboard

The dashboard page includes a header with a logo on the left side and a user avatar on the far right. Users can click on the avatar to open a dropdown menu with their name and a "Logout" button. Clicking on the "Logout" button will log the user out of the system and redirect them to the login page. The dashboard also includes a sidebar with various routes, and clicking on each route will take the user to the respective page.

## Validation

The registration and login forms are validated to ensure that all required fields are filled in and that the username and password meet certain criteria. For example, the password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one special character. If the user enters invalid information, an error message will be displayed.

## API

The login page uses the https://randomuser.me/api/?randomapi API to fetch a random user's profile. If the user refreshes the page, another random user's profile will be fetched.

## Authentication

Users cannot access the login page if they are already logged in, and they cannot access the dashboard or other internal routes without logging in first. If the user is not logged in, they will be redirected to the login page.

## Styling & Responsive Design

This project uses the Tailwind-CSS library for styling and responsive design. The src/index.css file includes the Tailwind CSS styles and the src/App.tsx file contains the main component structure for the application. The application is designed using a mobile-first approach, with styles for larger screen sizes defined using Tailwind CSS utilities.

## State Management

This project uses the Redux for state management.

