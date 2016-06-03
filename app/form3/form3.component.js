"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var http_1 = require('angular2/http');
require('rxjs/Rx');
var router_1 = require('angular2/router');
var FormComponent3 = (function () {
    function FormComponent3(builder, http, router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            ime: ["", common_1.Validators.none],
            TV: ["", common_1.Validators.none],
            kreveti: ["", common_1.Validators.none],
        });
    }
    FormComponent3.prototype.onAddRoom = function () {
        var _this = this;
        var data = "&ime=" + this.registerForm.value.ime + "&TV=" + this.registerForm.value.TV + "&kreveti=" + this.registerForm.value.kreveti;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/addroomservice.php', data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
            if (_this.postResponse._body == "ok") {
                alert("Uspesno dodavanje sobe");
                _this.router.parent.navigate(['./MainPage']);
            }
            else {
                alert("Neuspesno dodavanje sobe");
            }
        });
    };
    FormComponent3 = __decorate([
        core_1.Component({
            selector: 'FormPage2',
            templateUrl: 'app/form3/form3.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], FormComponent3);
    return FormComponent3;
    var _a, _b, _c;
}());
exports.FormComponent3 = FormComponent3;
//# sourceMappingURL=form3.component.js.map