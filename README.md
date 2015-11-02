# CHANGE_TITLE_PLZ

[![Build
status](https://travis-ci.org/chcokr/name-game.svg)](https://travis-ci.org/chcokr/chcokr-webapp-starter)
[![Dependency
Status](https://david-dm.org/chcokr/name-game.svg)](https://david-dm.org/chcokr/chcokr-webapp-starter)

## Commands

### Starting Vagrant

In order to avoid "it works in my box!" situations as much as possible, this
project uses [Vagrant](https://docs.vagrantup.com/v2/getting-started/) and
assumes you know its basics.
If you're not familiar with Vagrant, check out that link and learn about it.

```bash
vagrant up # This might take a few minutes.
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

### Troubleshooting

Whenever `npm start` or `npm run build` doesn't work inside the Vagrant VM,
`vagrant destroy && vagrant up` is your best friend.
This resets the VM to the state where `npm start` and `npm run build` were known
to work.
A lot of work has gone into making sure these commands work out of the box.

If `npm start` or `npm run build` still breaks, then you've discovered a new
bug.
Please report it.

## How to deploy

Every time the `master` branch gets a new commit, [Travis
CI](https://travis-ci.org) deploys the release build onto Firebase Hosting.
Make sure the environment variable `FIREBASE_TOKEN` set on Travis CI to your
token (read
[this](https://github.com/firebase/firebase-tools#using-with-ci-systems) to
learn how to obtain this token).

## Background

This is a single-page web application built with the following choices:

-   Built with [React.js](https://facebook.github.io/react/).

-   [Babel](https://babeljs.io) allows JSX/ES6 syntax.

-   A customized use of [Bootstrap](https://getbootstrap.com) is made possible
via [LESS](http://lesscss.org) syntax.

-   Uses [Webpack](https://webpack.github.io) as the build system.

## chcokr-webapp-starter

This app used version **0.0.0** of
[chcokr-webapp-starter](https://github.com/chcokr/chcokr-webapp-starter) as a
template to start off of.

The Vagrant box used by this repo comes with:
- ubuntu 14.04.3
- node.js 0.12.7
- npm 3.3.10

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
