import { SignupFormComponent } from './signup-form/signup-form.component';
import { CourseComponent } from './course/course.component';
import { SummeryPipe } from './summery.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    SummeryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    CourseComponent,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
