# Girlfriend Getaways Cottage Rental Website 
A full-stack web application for the real life business "Girlfriend Cottage Getaways". Website built to reduce business owners involvement via automating common tasks like user booking and payment.

# Backend
Java, Spring-Boot and Apache H2 in-memory database were used for the backend.  The following Spring-Boot dependencies were used: JPA, WEB-MVS, Security, and Hateaos.  The backend consists of a secured and well designed Hateaos REST API providing business data and authentication for the frontend. 
-	Authentication is configured via Spring-Boot Security and a custom requests filter providing logic for Json web tokens.
-	JPA models were planned, mapped and configured using Spring-Boot JPA.  Pre-planning of database models were visualized via Visual Paradigm software.  
-	The RESTful API was configured using customized controller classes and endpoints.

# Frontend
ReactJS, HTML5, and CSS were used for the frontend.  Advanced ReactJS concepts, patterns and tools were used to abstract reusable code and provide a modern project structure.  Important features include:
-	The use of ReactJS context to structure a “Global State” for the application.  This eliminates the use for common third-party libraries like Redux and reduces the required backend API calls to improve the application performance.
-	Mixed use of ReactJS class and function classes which reduces required and redundant code.
-	The use of React Router for frontend routing and customized authorization control. “Admin”, “Anonymous”, and “Authenticated” custom routes created to secure application.
-	Abstracted functional components such as buttons which are designed for reuse using provided props. 

# Improvements
-	At the time of writing, frontend design via CSS code is not included.  SASS is looking to be used to build frontend design with advanced CSS features like animations.
-	The frontend code does not make use of ReactJS Hooks. These could be sued to reduce code and further abstract reusable components.
- A production ready database could be used instead of Apache H2.  If this website goes to production this change will be made.
