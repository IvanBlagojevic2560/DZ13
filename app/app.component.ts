import { Component, Inject, Pipe} from '@angular/core';
import { RouteSegment,Routes,Router, RouterUrlSerializer, ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from '@angular/router';
import { MainPageComponent } from './mainpage/mainpage.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { FormComponent } from './form/form.component';
import { FormComponent2 } from './form2/form2.component';
import { FormComponent3 } from './form3/form3.component';
import { FormComponent4 } from './form4/form4.component';
import { Sobe }  from './sobe/sobe.component';


@Component({
  selector: 'moja-aplikacija',
  templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES],
	  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path:'/',    name: 'MainPage',   component: MainPageComponent, useAsDefault: true},
  {path:'/aboutus', name:'AboutUs', component: AboutUsComponent},
{path:'/form', name:'FormPage', component: FormComponent},
{path:'/form2', name:'FormPage2', component: FormComponent2},
  {path:'/form3', name:'FormPage3', component: FormComponent3},
  {path:'/form4', name:'FormPage4', component: FormComponent4},
  {path:'/sobe', name:'Sobe', component: Sobe},

])

export class AppComponent { 
	router: Router;
	isAuth: String;
	currentUrl : String;
	location: Location;
	routeSerializer: RouterUrlSerializer;
	constructor( private router: Router, private routeSerializer: RouterUrlSerializer) {
		this.router = router;
		this.currentUrl = '';
		this.routeSerializer = routeSerializer;
	
		
	}
	
	ngOnInit() {
		this.router.changes.subscribe(
			next => {
				this.currentUrl = JSON.stringify(this.router.urlTree);
				if(localStorage.getItem('token') !== null){
					this.isAuth = "yes";
				}else{
					this.isAuth = "no";
				}
			}
		)    
	}
	isCurrentRoute(route : string) : boolean {
		return this.currentUrl === route;
	} 
	
 onLogout(): void {
	localStorage.removeItem("token");
	 this.router.navigate(['./']);
	if(localStorage.getItem('token') !== null){
		this.isAuth = "yes";
	}else{
		this.isAuth = "no";
	}
 }
}
