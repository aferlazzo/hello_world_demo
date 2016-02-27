/*
 We don't load all the angular2 framework code into every application.
 Instead we load just the portion we need. The next bit of code we call
 in every case we want to run an app is called "Component". Before we can
 call the code, we have to load the Angular2 library Component symbol into memory. 
 We use the "import" command to accomplish this. As you can see Component symbol
 is found in the angular2/core file.
 
 Other symbols worth mentioning:
 
 ex. import {Directive, ElementRef, Input} from 'angular2/core';

 In this case we are not defining any directives, but if we did We'd need
 the Directive symbol for the @Directive decorator. We need the ElementRef
 to inject into the directive's constructor so we can access the DOM element.
 We'd need the Input symbol in order to use the @Import decorator.
*/

import {Component} from 'angular2/core';

/*
	@Component decorator is Now Component is available for our use.
  	Initially index.html has <hello-world>Loading...</hello-world> in the body.
  	The @Component decorator will replace the contents ("Loading...") of the 
  	selector (the html tag) <hello-world> with the contents of the templateURL.
*/	
@Component({
	// Declare the tag name in index.html to where the component attaches
	selector: 'hello-world',
	// Location of the template for this component to be injected into our 
	// custom tag, 'hello-world'.1
	templateUrl: 'app/hello_world.html'
})

/*
	By exporting a class we make it available to be imported and used by other 
	parts of our application.
*/ 
export class HelloWorld {
	// Declaring the variable for binding with initial value so that the template 
	// will be able to use it
	yourName: string = '';
}
