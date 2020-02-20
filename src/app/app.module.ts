import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CourseComponent } from './course/course.component';
=======
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';


import { FormsModule } from '@angular/forms';

>>>>>>> 600bafe2c934c6ea9519940b51ed8b2b7c31990b

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
<<<<<<< HEAD
    CourseComponent,
=======
>>>>>>> 600bafe2c934c6ea9519940b51ed8b2b7c31990b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
