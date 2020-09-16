# Girlfriend Getaways Cottage Rental Website 
A full-stack web application for the real life business "Girlfriend Cottage Getaways". Website built to reduce business owners involvement via automating common tasks like user booking and payment.

# Backend
Java, Spring-Boot and Apache H2 in-memory database were used for the backend.  The following Spring-Boot dependencies were used: JPA, WEB-MVS, Security, and Hateaos.  The backend consists of a secured and well designed Hateaos REST API providing business data and authentication for the frontend. 
-	Authentication is configured via Spring-Boot Security and a custom requests filter providing logic for Json web tokens.
-	JPA models were planned, mapped and configured using Spring-Boot JPA.  Pre-planning of database models were visualized via Visual Paradigm software.  
-	The RESTful API was configured using customized controller classes and endpoints.

# Frontend
ReactJS, HTML5, and SASS were used for the frontend.  Advanced ReactJS concepts, patterns and tools were used to abstract reusable code and provide a modern project structure.  Important features include:
-	The use of ReactJS context to structure a “Global State” for the application.  This eliminates the use for common third-party libraries like Redux and reduces the required backend API calls to improve the application performance.
-	Incorporation of function classes and hooks which greatly reduces required and redundant code.
-	The use of React Router for front end routing and customized authorization control. “Admin”, “Anonymous”, and “Authenticated” custom functional component routes created to secure application.
-	Abstracted reusable functionality in components such as buttons, forms and tables which greatly reduces the code.
- The use of SASS provides reusable variables and structures to reduce code and create a cleaner structure for styling.

# Improvements
-	At the time of writing, refactoring code to be more professional took precedence over completing some website features.  The booking service needs to be complete.
- A production ready database could be used instead of Apache H2.  If this website goes to production this change will be made.
