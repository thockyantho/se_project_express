# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12

# Project 12: WTWR (What to Wear?): Back End

### Overview

- Intro
- Figma
- Images

**Intro**

This application will read weather data from a Weather API and then recommend suitable clothing to the user based on that data. In this project, the objective is to create a front end for the application using the fundamental principles of React.

## Project Pitch Video

Check out [https://drive.google.com/file/d/1m8M4VpVsrq3fJagjxiqye-IXnGwG9-Y7/view?usp=sharing], Where I describe my project and some challenges I faced while building it.

## Project features

The functionalities we used:

- Weather API
- Temperature will be used to filter the cards that are shown to the user
- Opening the picture modal
- Smooth modal opening and closing

The functionalities we added:

- A temperature unit toggle switch using React context
- A profile page route React Router
- Form submission using contolled components or refs
- **GitHub Pages**

https://github.com/thockyantho/se_project_react

**Figma**

https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR?node-id=311-433&p=f&t=HJ0NqH1o5fZ4ysea-0

**Reference Images**

Web:
![Web Layout](images/Web.png)

Mobile:

![Mobile Lyout](images/Mobile.png)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
