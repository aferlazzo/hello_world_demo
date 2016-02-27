/*
	We don't load all the angular2 framework code into every application.
	Instead we load just the portion we need. The first bit of code we call
	in every case we want to run an app is called "bootstrap". Before we can
	call the code, we have to load it (import it) into memory. We use the 
	"import" command to accomplish this. 
	
	2 C. Load the Angular2 library symbol called "bootstrap" into memory
*/
import {bootstrap}  from 'angular2/platform/browser';

/*
	In addition to the Angular code that we need to run the app, the code we
	have written needs to be loaded into memory.
	We import the class HellWorld here from the file hello_world.ts
	
	2 D. Load the HelloWorld class (the component) by reading the hello_word.ts file.
*/
import {HelloWorld} from './hello_world';

// Here is where we kick-off the app by running the class (the component).
bootstrap(HelloWorld);
