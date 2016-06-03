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
var FormComponent4 = (function () {
    function FormComponent4(builder, http, router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            imeHotela: ["", common_1.Validators.none],
            lokacija: ["", common_1.Validators.none],
            sobe: ["", common_1.Validators.none],
            kapacitet: ["", common_1.Validators.none],
        });
    }
    FormComponent4.prototype.onAddHotel = function () {
        var _this = this;
        var data = "&imeHotela=" + this.registerForm.value.imeHotela + "&lokacija=" + this.registerForm.value.lokacija + "&sobe=" + this.registerForm.value.sobe + "&kapacitet=" + this.registerForm.value.kapacitet;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/addhotelservice.php', data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
            if (_this.postResponse._body == "ok") {
                alert("Uspesno dodavanje hotela");
                _this.router.parent.navigate(['./MainPage']);
            }
            else {
                alert("Neuspesno dodavanje hotela");
            }
        });
    };
    FormComponent4 = __decorate([
        core_1.Component({
            selector: 'FormPage4',
            templateUrl: 'app/form4/form4.html',
            directives: [common_1.FORM_DIRECTIVES],
            viewBindings: [common_1.FORM_BINDINGS]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof common_1.FormBuilder !== 'undefined' && common_1.FormBuilder) === 'function' && _a) || Object, (typeof (_b = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
    ], FormComponent4);
    return FormComponent4;
    var _a, _b, _c;
}());
exports.FormComponent4 = FormComponent4;
//# sourceMappingURL=form4.component.js.map