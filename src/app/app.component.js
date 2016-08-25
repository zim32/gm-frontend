"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(http, $host) {
        this.http = http;
        this.$host = $host;
        this.availableSports = [];
        this.sportEvents = [];
        this.currentEventIndex = 0;
        this.currentEvent = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchSports()
            .then(function (sportTypes) {
            var sport = sportTypes[Math.floor(Math.random() * sportTypes.length)];
            return _this.http.get("//localhost:8080/sports?_filter=sport|" + sport['_id']).map(function (res) { return res.json(); }).toPromise();
        })
            .then(function (sportEvents) {
            _this.sportEvents = sportEvents;
            _this.currentEvent = _this.sportEvents[0];
        })
            .catch(function (err) { return alert("Error while receiving data: " + err); });
    };
    AppComponent.prototype.fetchSports = function () {
        return this.http.get('//localhost:8080/sports/types').map(function (res) { return res.json(); }).toPromise();
    };
    AppComponent.prototype.makeVote = function (type, el) {
        var _this = this;
        jQuery(this.$host.nativeElement).find('button').prop('disabled', true);
        this.http.post("//localhost:8080/sports/" + this.currentEvent.id + "/vote/" + type, {}).toPromise().then(function (response) {
            if (response.text() === 'ok') {
                if (_this.nexEvent()) {
                    jQuery(_this.$host.nativeElement).find('button').prop('disabled', false);
                }
                else {
                    _this.currentEvent = null;
                }
            }
        }, function (err) {
            alert('Can not update event: ' + err);
        });
    };
    AppComponent.prototype.nexEvent = function () {
        this.currentEventIndex++;
        if (this.currentEventIndex === this.sportEvents.length) {
            return false;
        }
        this.currentEvent = this.sportEvents[this.currentEventIndex];
        return true;
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [],
            providers: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map