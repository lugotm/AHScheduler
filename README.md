# What is AH Scheduler?

AH Scehduler is a distributed web application built with [JHipster](http://jhipster.github.io/) and designed to schedule weekly in-house speaking events. This example has been deployed to a PaaS (Platform-as-a-Service) Heroku at: [https://a-hscheduler.herokuapp.com/](https://a-hscheduler.herokuapp.com/)

# Setting up your environment

Before you can build this project, you must install and configure the following dependencies on your machine:

*Note:* If you are on a Windows system, you will need to install Git *BEFORE* you install Node.js and run ALL commands in Git Bash shell.

1. Java 8 from [the Oracle website](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. Maven 3 from [the Apache website](http://maven.apache.org/)
3. Git from [git-scm.com](http://git-scm.com/) (highly recommend using a GUI like [SourceTree](http://www.sourcetreeapp.com/) or [some other GUIs](https://git-scm.com/downloads/guis) if you're not comfortable yet with cmd line)
4. Node.js from [the Node.js website](http://nodejs.org/). It will allow you to install packages with `npm` in Git Bash shell.
5. Open Git Bash shell and type `npm install -g yo` which will install [Yeoman](http://yeoman.io/), a scaffolding tool for web apps.
6. Install [Bower](http://bower.io), a package manager similar to NPM: `npm install -g bower`
7. Install [Grunt](http://gruntjs.com/), a JS task runner: `npm install -g grunt-cli`
8. Download and Install [PostgreSQL](http://www.postgresql.org/download/)
9. (Optional) Install [Heroku](http://heroku.com), if you'd like to deploy your app to a server. You can also deploy to 
[Cloud Foundry](http://cloudfoundry.org/), [OpenShift](https://www.openshift.com/), [AWS](https://aws.amazon.com/), or
any number of PaaS or hosted services.
8. (Optional) Install JHipster generator (check out more generators at [Yeoman Generators](http://yeoman.io/generators/): `npm install -g generator-jhipster`

# Installing Dependencies

After setting up your local environment and cloning this repo, you'll need to download all the client dependencies 
(using NPM and Bower), as well as all the server dependencies (using Maven).

    npm install
    bower install

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    mvn
    grunt

Bower is used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in `bower.json`. You can also run `bower update` and `bower install` to manage dependencies.
Add the `-h` flag on any command to see how you can use it. For example, `bower update -h`.

# Building for production

To optimize the AHscheduler client for production, run:

    mvn -Pprod clean package

This will concatenate and minify CSS and JavaScript files. It will also modify `index.html` so it references
these new files.

To ensure everything worked, run:

    java -jar target/*.war --spring.profiles.active=prod

Then navigate to [http://localhost:8080](http://localhost:8080) in your browser.

# Testing

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in `src/test/javascript` and can be run with:

    grunt test

# Continuous Integration

To setup this project in Jenkins, use the following configuration:

* Project name: `AHscheduler`
* Source Code Management
    * Git Repository: `git@github.com:xxxx/AHscheduler.git`
    * Branches to build: `*/master`
    * Additional Behaviours: `Wipe out repository & force clone`
* Build Triggers
    * Poll SCM / Schedule: `H/5 * * * *`
* Build
    * Invoke Maven / Tasks: `-Pprod clean package`
* Post-build Actions
    * Publish JUnit test result report / Test Report XMLs: `build/test-results/*.xml`

[JHipster]: https://jhipster.github.io/
[Node.js]: https://nodejs.org/
[Bower]: http://bower.io/
[Grunt]: http://gruntjs.com/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
