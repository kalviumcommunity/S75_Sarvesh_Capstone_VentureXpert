Project Overview
VentureXpert is a web application built with the MERN stack (MongoDB, Express, React, Node.js). The platform is designed to connect startups with the right investors, helping startups find investors and vice versa. The application allows users to sign up, log in, explore available startup slots,investors slot and book meetings with investors as well as with startup founders. After booking a slot, users will receive a confirmation email powered by EmailJS.


https://github.com/SR01032006/Capstone-Daily-Progress.git ( Daily planner )
https://venturexpert.netlify.app/ (Netlify link)


Core Features:
User Authentication (Login & Signup)

Users can sign up and log in securely using email and password.
User authentication is handled through JWT (JSON Web Tokens) for secure sessions.


Explore Page

Displays available startup slots where investors and startups can meet.
Users can browse startup opportunities based on different categories or filters.
Users can book a slot for a startup by providing their email address.
A confirmation email is sent to the user using EmailJS upon successful booking.


Confirmation Emails

EmailJS is integrated to send a confirmation email to users who book a slot.
This email includes details of the booked slot and any relevant instructions.


Investor and Startup Matching


The platform matches startups with investors, ensuring a smoother connection.
Investors can discover startups and vice versa, based on preferences and categories.









Tech Stack
Frontend

React: A JavaScript library for building user interfaces, used for rendering the UI.
React Router: For managing navigation between pages.
Axios: For making HTTP requests to the backend.
Tailwind CSS: For utility-first CSS styling.
EmailJS: For sending confirmation emails when users book a slot.


Backend

Node.js: A JavaScript runtime built on Chrome’s V8 engine, used to run the server.
Express.js: A lightweight framework for building web applications on Node.js.
MongoDB: NoSQL database used to store user data, startup slots, and bookings.
JWT (JSON Web Token): For secure user authentication and session management.


Additional Tools

EmailJS: Used for sending automated emails to users for confirmation upon booking.
bcryptjs: For securely hashing passwords.



 28-Day Planner for VentureXpert Development

Week 1 – Project Setup & Authentication
Day 1:
 Initialize the frontend and backend of the MERN project. Set up folder structures, install dependencies (express, mongoose, react, react-router-dom, axios, tailwindcss). Create .env files and set up environment variables.


Day 2:
 Connect Node.js backend to MongoDB using Mongoose. Create the User schema and model. Set up the Express server and create basic test routes.


Day 3:
 Create the user signup API. Hash passwords with bcryptjs before saving them. Store user data in MongoDB.


Day 4:
 Create the login API using JWT. Generate and send a token on successful login. Return basic user data with the token.


Day 5:
 Build signup and login forms using React and Tailwind CSS. Connect them to the backend using Axios.


Day 6:
 Implement JWT-based authentication in the frontend. Save tokens in localStorage, build PrivateRoute logic, and add logout functionality.


Day 7:
 Test the entire authentication flow: register, log in, access protected routes, and log out.



Week 2 – Explore Page & EmailJS Booking
Day 8:
 Design the Explore page UI. Create and display dummy startup slot data including title, description, category, and time.


Day 9:
 Display slots using cards. Ensure responsiveness and mobile-first layout. Add loading state while fetching slot data (or simulate with setTimeout if using static data).


Day 10:
 Add category-based filtering (e.g., FinTech, HealthTech, EdTech) using state toggles or filter buttons.


Day 11:
 Integrate EmailJS into the frontend. Set up your EmailJS account, service, template, and user key. Install the EmailJS client in your project.


Day 12:
 Add a “Book Now” button on each slot card. Clicking it opens a modal/form where users can enter their name and email.


Day 13:
 On form submission, use EmailJS to send a confirmation email with booking details to the user’s email address.


Day 14:
 Improve the confirmation flow by showing a success message or toast. Optionally, hide or mark slots as "Booked" in the frontend state.



Week 3 – Polish Explore Page & Add Profiles
Day 15:
 Add a "My Bookings" page or section where the user can see slots they’ve booked (saved locally or simulate with session state).


Day 16:
 Build a user profile page where users can update their name and email. Store the updates in MongoDB and keep it in sync with frontend state.


Day 17:
 Add a persistent navbar that includes links to Home, Explore, My Bookings, and Profile. Use React Router for navigation.


Day 18:
 Enhance the Explore page to show booking status directly on slot cards. Use conditional UI to show "Booked" or "Available".


Day 19:
 Improve responsiveness and spacing. Use Tailwind’s grid and flex utilities to build mobile-first, scalable layouts.


Day 20:
 Replace any placeholder slot data with data from a simple JSON or MongoDB collection. Add loading and empty state UIs.


Day 21:
 Finalize all working flows — registration, login, viewing slots, and booking with EmailJS. Do a round of testing.






Week 4 – UX, Final Testing, & Deployment
Day 22:
 Polish the entire UI using Tailwind CSS. Add subtle hover effects, transitions, and responsive tweaks for better UX.


Day 23:
 Add toast notifications using react-toastify for login, booking success, form errors, etc.


Day 24:
 Add basic form validation to signup, login, and booking forms (e.g., required fields, email format).


Day 25:
 Add accessibility enhancements (aria-labels, focus states), and make sure tab navigation works correctly.


Day 26:
 Test the full flow on multiple screen sizes. Perform browser compatibility checks.


Day 27:
 Prepare for production: clean up unused files, remove console logs, optimize images/assets.


Day 28:
 Deploy the frontend to Vercel or Netlify. Deploy the backend to Render or Railway. Use MongoDB Atlas for the database and test everything in production


Future Scaling and Potential Features
1. Profile and Dashboard for Users
Allow users to create and update their profiles with additional information like interests, experience, and past startup projects.
Implement a personalized dashboard for investors and startups to track booked slots, meetings, and messages.


2. Messaging System
Build a private messaging system where investors and startups can communicate directly through the platform.
Notifications can be integrated for unread messages and new opportunities.


3. Admin Panel
Develop an admin panel for managing users, startup slots, bookings, and confirmations.
Admins can moderate the platform and approve/reject certain startups or investors based on predefined criteria.



4. Analytics and Reports
Include analytics for both startups and investors to view trends, meetings booked, and overall activity.
Investors could receive reports on the types of startups they are most interested in, and startups could track how many investors have shown interest.
