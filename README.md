# NgHackatonGuessTheSeries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# How to change database
In the /db-helper folder you will find an index.html and a script.js file. You can add any series you like to the seriesIds array. In addition you will need to manually edit the seriesData object. The index.html will load all episodes in an array that you can simply copy over to the episodedb.service.ts and it will also give out the seriesData object to copy over to the episodedb.service.ts.

Please note: The script will cause a lot of requests to the OMDB API (https://www.omdbapi.com/). You need to make sure that you are on an appropiate API plan. If you remove the comment for the example data in the script it will cause 472 requests. The free plan has only 1000 requests included. So make sure to load your database on a separate day in example. Consider becoming a patreon to have an higher amount of daily requests and to support the project (https://www.patreon.com/join/omdb)