## Commands

Don't forget to `npm install` the first thing after you clone this repo.

`npm start` - Starts a
[hot-reloaded](https://gaearon.github.io/react-hot-loader/) server for
development (go to `http://localhost:3000/` on your browser).

`npm run build` - Builds a static web app inside `dist/` for production
deployment.

## How to deploy

Every time the `master` branch gets a new commit, [Travis
CI](https://travis-ci.org) deploys the release build onto Firebase Hosting.
Make sure the environment variables `FIREBASE_EMAIL` and `FIREBASE_PASSWORD` are
properly set on Travis CI.

## Implicit entry point

`src/App.jsx` is the starting point of the entire web app.
Make sure `App.jsx` **exports a React Component** via `export default` or
`module.exports`.
Our build tool [chcokr-webpack](https://github.com/chcokr/chcokr-webpack)
imports this component to create builds.

## Background

This is a single-page web application built with the following choices:

- Built with [React.js](https://facebook.github.io/react/).
- [Babel](https://babeljs.io) allows JSX/ES6 syntax.
- A customized use of [Bootstrap](https://getbootstrap.com) is made possible via
[LESS](http://lesscss.org) syntax.
- Uses [Webpack](https://webpack.github.io) as the build system.

## Stilr

Our build tool `chcokr-webpack` relies heavily on
[Stilr](https://github.com/kodyl/stilr) to process CSS styles defined inline in
React components, in both dev and release builds.
Check out the repo
[stilr-classnames](https://github.com/chcokr/stilr-classnames) for more
information.

## chcokr-webapp-starter


This app used
[chcokr-webapp-starter](https://github.com/chcokr/chcokr-webapp-starter) as a
template to start off of.
You can always fetch and merge the recent changes from `chcokr-webapp-starter`
into this project:

```
git remote add upstream https://github.com/chcokr/chcokr-webapp-starter.git
git fetch upstream
git merge upstream/master
npm install
```

Also, always feel free to share your new discoveries about webapp writing by
reporting them to upstream!
