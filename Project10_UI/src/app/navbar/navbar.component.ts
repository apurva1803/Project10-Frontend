import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  endpoint = "http://localhost:8080/Auth/";

  form: any = {
    data: {},
    message : ''
  }

  constructor(private httpService: HttpServiceService, private router: Router, private servicelocator: ServiceLocatorService) {

  }

  isLogin() {
    let check = localStorage.getItem('fname');
    if (check != "null" && check != null) {
      this.form.data.fname = localStorage.getItem("fname");
      this.form.data.role = localStorage.getItem("role");
      this.form.data.userId = localStorage.getItem("userId");
      return true;
    } else {
      return false;
    }
  }

  getRole(): string {
    return (localStorage.getItem('role') || '').trim().toLowerCase();
  }

  isStudentRole(): boolean {
    return this.getRole() === 'student';
  }

  canAccess(moduleName: string): boolean {
    const role = this.getRole();

    if (role === 'admin') {
      return true;
    }

    if (role === 'college') {
      return ['college', 'student', 'marksheet', 'course', 'subject', 'timetable', 'faculty']
        .includes(moduleName);
    }

    if (role === 'faculty') {
      return ['student', 'subject', 'marksheet', 'timetable']
        .includes(moduleName);
    }

    if (role === 'student') {
      return ['subject', 'marksheet', 'timetable']
        .includes(moduleName);
    }

    return false;
  }

  logout() {
    var _self = this;
    this.httpService.get(this.endpoint + 'logout', function (res: any) {
      
      localStorage.clear();
      _self.router.navigateByUrl('login?message=user logout successfully')
      
    });
    
  }

  forward() {
    this.form.data.userId = localStorage.getItem("userId");
    this.servicelocator.forward("/myprofile/" + this.form.data.userId);
  }
}