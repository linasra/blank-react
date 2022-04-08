# Blank - React

Empty React template, created from scratch without create-react-app, set up to follow best practices and ready for development.<br>
Template is configured with <b>React 18</b>, <b>wepack</b>, <b>babel</b>, <b>typescript</b>, <b>styled-components</b>, <b>eslint</b>, <b>prettier</b>, <b>husky</b>, <b>react-testing-library</b> and <b>jest</b> (ready for <b>TDD</b>).

## Local setup
Clone and install required dependencies:<br/>
`git clone git@github.com:linasra/blank-react.git`<br/>
`cd blank-react && yarn install`

To start the development server run:<br/>
`yarn start`

To compile a production version run:<br/>
`yarn build`

To run linting use:<br/>
`yarn lint`<br/>
`yarn lint:fix`<br/>

To run all tests use:<br/>
`yarn test`<br/>
`yarn test:dev`<br/>
`yarn test:coverage`<br/>

Template is set up to run git hooks which perform eslint on every commit and unit tests on push via husky.

## Docker
Tempalte comes with a Dockerfile configured with nginx, to build and run docker container use the following:
`docker build -t myapp .`
`docker run -dp 80:80 myapp`

Your app will be accessable on http://localhost/

## Author
Linas Ramanauskas - <a href="mailto:linas.ramanauskas.lt@gmail.com">linas.ramanauskas.lt@gmail.com</a>