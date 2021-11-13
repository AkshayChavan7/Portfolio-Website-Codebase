# akshaychavan7.github.io-Angular

This project is the angular version of [portfolio site](https://akshaychavan7.github.io/).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `npm install` to install package.json.
Run `ng serve` for a dev server. 
Navigate to `http://localhost:4200/`. 

Add the portfolio data to `src/app/shared/details.ts` file.


## Host on gh-pages

Run `sudo npm install -g angular-cli-ghpages` to install angular-cli-ghpages.

Run ` ng build --prod --base-href "https://<username>.github.io/<projectname>/"` to build the project. The build artifacts will be stored in the `dist/` directory.

Run `ngh --dir dist/angular` to push the dist/angular package to git branch.

## Live

The project is live on `https://<username>.github.io/<projectname>/`.

