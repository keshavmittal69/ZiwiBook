# "MERN Stack (ZiwiBook)"

---

## Demo
https://ziwibook.netlify.app

---

### Author Links

👋 Hello, I'm Keshav Mittal



### Description

- 🔗 This is a simple Social App called ZiwiBook wich is a clone to the popular social media platform Facebook , built using the MERN stack.
- 🔗 For those who may not be familiar with the MERN stack, it refers to a combination of technologies used in web development, including React (a JavaScript framework for building single-page applications), Node (used as a backend for websites), Express (a framework for Node), and MongoDB (a popular database).

---

###  📚 MERN Stack References 
- 🔗 [Official Site for MongoDB](https://mongodb.com)
- 🔗 [Official Site for Express.js](https://expressjs.com)
- 🔗 [Official Site for React.js](https://reactjs.org)
- 🔗 [Official Site for Node.js](https://nodejs.org/)
- 🔗 [Redux Toolkit](https://redux-toolkit.js.org/)
- 🔗 [MongooseJS](https://mongoosejs.com/)
- 🔗 React Router v6 for routing
- 🔗 [Official Sitefor Cloudinary ](https://cloudinary.com/)
- 🔗 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- 🔗 [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- 🔗 [cors](https://www.npmjs.com/package/cors)
- 🔗 [express-rate-limiter](https://www.npmjs.com/package/express-rate-limiter)

### ⚙ Tools:
- 🔗 [React Dev Tools Extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- 🔗 [Redux Devtools](https://github.com/reduxjs/redux-devtools)
---

### 💻 Info and Functionalities

- 🔗 Light/dark mode toggle.
- 🔗 Redux-Toolkit/RTK Query as an advanced data-fetching and client-side caching tool
- 🔗 Skeleton loaders while pages are loading.
- 🔗 Using validator (server side) & yup (client side) to validate the User inputs
- 🔗 Strong authentication system, Register, login..
- 🔗 there is a implimentation for the routes protection in the front-end by the jwt and of course force redirect when the User logged in
- 🔗 there is a implimentation for routes protection in the backend attaching the user token to the cookies that will be attached to
  every request (and response) made between the client and server.
- 🔗 Using multer and sharp and cloudinary as middlewares to handle uploading files
- 🔗 the User has the ability to Creat/Update/Delete his own post .
- 🔗 the User has the ability to like any of his posts or friends posts .
- 🔗 the User has the ability to Creat/Update/Delete his own Comments/Replies.
- 🔗 the User has the ability to like any of his own Comments/Replies or any other User Comments/replies.
- 🔗 Friendship system with send, cancel ,accept friend requests.
- 🔗 Friends page.
- 🔗 Real time notifications.
- 🔗 Search functionality by email and Name.
- 🔗 Photo Gallery with old photos to change profile photo and cover.
- 🔗 Profile details and bio.
- 🔗 Fully responsive design with all devices using HTML/CSS mediaQuery/react-responsive

---

## Screenshots
<img src="https://github.com/mohamedzhioua/ZIWIBook/blob/main/screenshots/ziwibook12.png" >
<img src="https://github.com/mohamedzhioua/ZIWIBook/blob/main/screenshots/ziwibook11.png" >
<img src="https://github.com/mohamedzhioua/ZIWIBook/blob/main/screenshots/ziwibook13.png" >
<img src="https://github.com/mohamedzhioua/ZIWIBook/blob/main/screenshots/ziwibook7.png" >


---

### ⚙ Installation

- Fork & Clone the repository

```bash
git clone https://github.com/mohamedzhioua/ZIWIBook.git
```

- Cd into the directories & Install the dependencies (server /client)

```bash
npm install
```

- Create a `.env` file in the server side and store the following:

  - cloudinary :
   -   CLOUD_NAME= ${CLOUD_NAME}
   -   API_KEY = ${API_KEY}
   -   API_SECRET =${API_SECRET}

  - app name :
   -   APP_NAME =${APP_NAME}

  - mongodb cluster :
   -   DATABASE = ${MongoDB_cluster_url}
   -   DATABASE_PASSWORD =${DATABASE_PASSWORD}

  - auth :
   -   ACCESS_TOKEN_SECRET =${ACCESS_TOKEN_SECRET}

- Start the (server /client)

```bash
npm run dev
```

```

```
