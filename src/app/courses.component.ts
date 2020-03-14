import { Component } from '@angular/core';
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
    <input [(ngModel)]="emailid" (keyup.enter)="onKeyUpGetEmail()"/>
    <p>{{ text | summery }}</p>
    `
})


export class CoursesComponent {
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    title = 'List of courses';
    isActive = true;
    // tslint:disable-next-line:max-line-length
    text = 'Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages has become an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues, including in contexts where a call would be impolite or inappropriate (e.g., calling very late at night or when one knows the other person is busy with family or work activities). Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient), texting does not require the caller and recipient to both be free at the same moment; this permits communication even between busy individuals. Text';
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
}
