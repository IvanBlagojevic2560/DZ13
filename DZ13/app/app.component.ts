import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { MainPageComponent } from './mainpage/mainpage.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { FormComponent } from './form/form.component';
import { FormComponent2 } from './form2/form2.component';
import { FormComponent3 } from 'app/form3/form3.component';
import {Sobe} from './sobe/sobe.component';

@Component({
  selector: 'moja-aplikacija',
	templateUrl: 'app/router.html',
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path:'/',    name: 'MainPage', component: MainPageComponent, useAsDefault: true},
  {path:'/aboutus', name:'AboutUs', component: AboutUsComponent},
  {path:'/form', name:'FormPage', component: FormComponent},
  {path:'/form2', name:'FormPage2', component: FormComponent2},
    
  {path:'/sobe', name: 'Sobe', component: Sobe},
  {path:'/form3', name:'FormPage3', component: FormComponent3},
])

export class AppComponent {
}
