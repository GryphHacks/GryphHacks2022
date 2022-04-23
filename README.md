# Official hackathon website for GryphHacks

This project is made with React, react-redux and firebase.

## Getting Started

The first time you run the project, you will need to perform a `yarn install`.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Installing Dependencies 
This project uses yarn so please always use `yarn` when starting, building, or installing dependencies to the project.  Do not use npm.  Using npm will introduce unwanted files and build issues. If you don't have yarn installed on your machine, follow instructions here to initially install yarn via npm: https://classic.yarnpkg.com/en/docs/install/#debian-stable

If the `yarn` command is giving you an error like "yarn : file cannot be loaded because running scripts is disabled on this system." then open your PowerShell (Windows) as an administrator or terminal, enter the following command, and say yes to the prompts: `Set-ExecutionPolicy RemoteSigned`


## Redux Devtools
This project uses Redux, if you wish to use the Redux Devtools Chrome Extension, add `+ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()` to the applyMiddleware() parameter where it creates the store.  It should look like the following:

```
ReactDOM.render(
  <Provider store = {createStore(reducers, applyMiddleware(reduxThunk)  + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Pull Requests
Please make pull requests to submit your changes. Also do specify clearly about exactly what changes you have made with your pull requests. Team lead will look over the changes and will approve/disapprove the pull requests.
