import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
    selector:'courses',
    template:'<h1> {{ getTitle() }} </h1>'
})

export class CoursesComponent {
    title = "List Of courses";
    getTitle(){
        return this.title;
    }
}
=======
import { CoursesService } from './courses.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'courses',
    template: `<h1>{{ title }}</h1>
    <ul>
    <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <button class="btn btn-primary" [class.active]="isActive" >Save</button>
    <div (click)="onDivClick()">
    <button  (click)="onSave($event)" >Save</button>
    </div>
    <input type="text" (keyup.enter)="onKeyUp()"/>
    <input [(ngModel)]="emailid" (keyup.enter)="onKeyUpGetEmail()"/>`

})


export class CoursesComponent {
    title = 'List of courses';
    isActive = true;
    courses: string[];
    emailid = 'example@gmail.com';
    onSave($event) {
        console.log('button was clicked ', $event);
        $event.stopPropagation();
    }
    onDivClick() {
        console.log('Div was clicked');
    }
    onKeyUp() {
        console.log('Enter was pressed');
    }

    onKeyUpGetEmail() {
        console.log(this.emailid);
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
>>>>>>> 600bafe2c934c6ea9519940b51ed8b2b7c31990b
