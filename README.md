# NgxWordpress

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Repository branch model

The project use [Gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) as branching model.

## Commit convention

The project use Angular commit convention:

- https://www.conventionalcommits.org/en/v1.0.0-beta.2/
- https://gist.github.com/stephenparish/9941e89d80e2bc58a153

This convention is enforce by some git pre-hook.

You could make a traditional commit following the syntax rules or use `npm run commit` that help you to construct the commit message in the right way.

## Reminder

In order to run the **playground** you need to build the library before run it: `ng build ng-wordpress-api --prod`.

## Commands

- `ng build ng-wordpress-api --prod`: build library
- `npm run serve-playground`: trigger playground example starts on localhost
- `publish-wp-api`: trigger library build and publish it to NPM
