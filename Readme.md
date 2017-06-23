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

Open the solution in Visual Studio.

# Building the App

Since we have opted for Angular Typescript, the building of application is two staged. We need to compile the Typescript into js and then build the App using visual studio. In order to compile the ts, be in the AngularUWP directory in the powershell and run 

    ng build

Note: This app will also run out of box without running build.

Then in visual studio just click build and run. The app should compile fine and open.

--------

Note that this command compiles the typescript and the output is directed to the `dist` directory in a bundled format. On top of that, angular also adds references to these js files in the `index.html`. Notice that the `index.html` is outside the `src` directory. This is to make sure the windows relative paths and angular relative paths remain correlated.

Please add images and other assets only to the assets directory only, this helps in refering to assests as always "./assets" from root. Of course nothings stopping you from going else where but be safe when refering them with relative paths.

The app related images are present in assets/img/app directory

----

The `src` directory contains the main app code. A directory structure has already been prescribed to help you with the onboarding. 

Head on to angular docs at [Angular.io](https://angular.io) to read about building angular apps and the [UWP refernce](https://docs.microsoft.com/en-us/uwp/) for integrating universal windows apis into your apps.


# Tips

While using `ng generate` be sure to include the directory for the element you are creating, when required. `ng generate` also adds references in the app module

    #for components: ng g component components/test   #It creates a directory by default
    #for modules   : ng g module modules/test   #It creates a directory by default
    #for services  : ng g service services/test/test  #It doesn't
    
