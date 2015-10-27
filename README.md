# CHANGE_TITLE_PLZ

## Commands

### Starting Vagrant

In order to avoid "it works in my box!" situations as much as possible, this
project uses [Vagrant](https://docs.vagrantup.com/v2/getting-started/) and
assumes you know its basics.
If you're not familiar with Vagrant, check out that link and learn about it.

```bash
vagrant up # Wait ~5 min if this is the first time you run this command.
vagrant ssh
cd /app # This directory is where you will find all the project files on the VM.
```

### Development mode (live-reloaded)

Inside the `/app` directory in the Vagrant box, run `npm start`.
Wait ~1 min.
When you get a success message, go to `http://localhost:23791/` on a browser on
your host machine.
You should see the app load!

Now make a change to any part of the code base.
You will see the changes reflect on the browser on the go.
This is called hot-loading/live-reloading.

### Production mode

Inside the `/app` directory in the Vagrant box, run `npm run build`.
Wait ~2 min.
Then, inside the `./dist/` directory, you will find an optimized static web app
whose starting point is `index.html`.

## How to deploy

Every time the `master` branch gets a new commit, [Travis
CI](https://travis-ci.org) deploys the release build onto Firebase Hosting.
Make sure the environment variables `FIREBASE_EMAIL` and `FIREBASE_PASSWORD` are
properly set on Travis CI.

## Background

This is a single-page web application built with the following choices:

-   Built with [React.js](https://facebook.github.io/react/).

-   [Babel](https://babeljs.io) allows JSX/ES6 syntax.

-   A customized use of [Bootstrap](https://getbootstrap.com) is made possible
via [LESS](http://lesscss.org) syntax.

-   Uses [Webpack](https://webpack.github.io) as the build system.

## chcokr-webapp-starter

This app used
[chcokr-webapp-starter](https://github.com/chcokr/chcokr-webapp-starter) as a
template to start off of.
You can always fetch and merge the recent changes from `chcokr-webapp-starter`
into this project:

```bash
git remote add starter https://github.com/chcokr/chcokr-webapp-starter.git
git fetch starter
git merge starter/master
npm install
```

Also, always feel free to share your new discoveries about webapp writing by
reporting them to upstream!
