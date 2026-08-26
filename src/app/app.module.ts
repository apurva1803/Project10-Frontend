import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FooterComponent } from './footer/footer.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { RoleComponent } from './role/role.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { UserComponent } from './user/user.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { RoleListComponent } from './role/role-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { UserListComponent } from './user/user-list.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { ForgotpasswordComponent } from './login/forgotpassword.component';
import { SignupComponent } from './login/signup.component';
import { ServiceLocatorService } from './service-locator.service';
import { EndpointServiceService } from './endpoint-service.service';
import { HttpServiceService } from './http-service.service';
import { AuthService } from './auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CollegeComponent,
    CourseComponent,
    DashboardComponent,
    FacultyComponent,
    FooterComponent,
    MarksheetComponent,
    RoleComponent,
    StudentComponent,
    SubjectComponent,
    TimetableComponent,
    UserComponent,
    CollegeListComponent,
    CourseListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    RoleListComponent,
    StudentListComponent,
    SubjectListComponent,
    TimetableListComponent,
    UserListComponent,
    MyprofileComponent,
    ChangepasswordComponent,
    ForgotpasswordComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true,
    },

    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
