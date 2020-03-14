import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  Courses = [1, 2];
  viewMode = 'map';

  coursesfor = [{ id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
  { id: 4, name: 'course4' },
  { id: 5, name: 'course5' },
  { id: 6, name: 'course6' }]

  onAdd() {
    this.coursesfor.push({ id: 7, name: 'course7' })
  }
  constructor() { }

  ngOnInit() {
  }

}
