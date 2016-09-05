import { Component } from 'angular2/core'

@Component(
    {
        selector : 'pm-app',
        template : '<div><h1>{{pageTitle}}</h1><div>My first Component</div></div>'
    }
)

export class AppComponent
{
    pageTitle : string = 'Acme1 Product Management';
}