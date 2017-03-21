# LoanJSV2
Second version of Loan JS using ui-router and Angular Material.

This application is used for the AngularJS formation.
There are three directories : 

* back : the server side of the application. There is no DB, to reset the test dataset, just restart the server.
* solution : the application at the end of the formation
* start : the starting state for the formation.

## How to run
You need to install : 

* nodeJS
* protractor
* bower
* grunt-cli

To run the different parts : 

### back
`npm install
npm start`

### solution and start

`npm install

bower install

grunt serve`

### end-to-end tests
* start the back in a terminal
* start the front in another terminal
* in another terminal `webdriver-manager start`
* in a last terminal : `protractor protractor.conf.js`
