Angular Heroes Sample for Universal Windows
---------------------------------------------

This is a universal windows app sample built on Angular Framework (4). 

# Dependencies
node-js 6.9.5
npm 3.10.10

#Setting Up
This repository has a Visual studio solution (AngularUWP.sln) and the code directory. Open powershell and move to the repo.

    cd AngularUWP

Make sure that you have nodejs installed. Install all the necessary dependencies.

    npm install

#Building the App

Since we have opted for Angular Typescript, the building of application is two staged. We need to compile the Typescript into js and then build the App using visual studio. In order to compile the ts, be in the AngularUWP directory and run 

    ng build

Note that this command compiles the typescript and the output is directed to the `dist` directory in a bundled format. On top of that, angular also adds references to these js files in the `index.html`. Notice that the `index.html` is outside the `src` directory. This is to make sure the windows relative paths and angular relative paths remain correlated.

Please add images and other assets only to the assets directory only, this helps in refering to assests as always "./assets" from root. Of course nothings stopping you from going else where but be safe when refering them with relative paths.

The app related images are present in assets/img/app directory




