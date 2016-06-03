import { Component, Directive } from 'angular2/core';
import {Component, FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({ 
  selector: 'FormPage2', 
  templateUrl: 'app/form3/form3.html',
  directives: [FORM_DIRECTIVES],
  viewBindings: [FORM_BINDINGS]
})

export class FormComponent3 { 

  registerForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
    this.registerForm = builder.group({
     ime: ["", Validators.none],
     TV: ["", Validators.none],
     kreveti: ["", Validators.none],
   });
  }
  
  onAddRoom(): void {
	var data = "&ime="+this.registerForm.value.ime+"&TV="+this.registerForm.value.TV+"&kreveti="+this.registerForm.value.kreveti;
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/addroomservice.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => alert(JSON.stringify(err)),
	() => { 
	 if(this.postResponse._body == "ok"){
	 alert("Uspesno dodavanje sobe");
	    this.router.parent.navigate(['./MainPage']);
	 }else{
		alert("Neuspesno dodavanje sobe");
	 }
	 }
	);
	
  }
}
