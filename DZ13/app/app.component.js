System.register(['angular2/core', 'angular2/router', './mainpage/mainpage.component', './aboutus/aboutus.component', './form/form.component', './form2/form2.component', 'app/form3/form3.component', './sobe/sobe.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, mainpage_component_1, aboutus_component_1, form_component_1, form2_component_1, form3_component_1, sobe_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (mainpage_component_1_1) {
                mainpage_component_1 = mainpage_component_1_1;
            },
            function (aboutus_component_1_1) {
                aboutus_component_1 = aboutus_component_1_1;
            },
            function (form_component_1_1) {
                form_component_1 = form_component_1_1;
            },
            function (form2_component_1_1) {
                form2_component_1 = form2_component_1_1;
            },
            function (form3_component_1_1) {
                form3_component_1 = form3_component_1_1;
            },
            function (sobe_component_1_1) {
                sobe_component_1 = sobe_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'moja-aplikacija',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
                        { path: '/aboutus', name: 'AboutUs', component: aboutus_component_1.AboutUsComponent },
                        { path: '/form', name: 'FormPage', component: form_component_1.FormComponent },
                        { path: '/form2', name: 'FormPage2', component: form2_component_1.FormComponent2 },
                        { path: '/sobe', name: 'Sobe', component: sobe_component_1.Sobe },
                        { path: '/form3', name: 'FormPage3', component: form3_component_1.FormComponent3 },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map