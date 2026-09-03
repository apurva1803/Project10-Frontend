import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.TIMETABLE, locator, route);
  }

  compareCourseIds(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }

  compareSubjectIds(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }

  compareSemesters(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }

}
