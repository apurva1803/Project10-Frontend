import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent extends BaseCtl{

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.FACULTY, locator, route);
  }

  compareCollegeIds(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }

  compareCourseIds(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }

  compareSubjectIds(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }
}
