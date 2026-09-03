import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.COURSE, locator, route);
  }

  override display(): void {
    this.serviceLocator.httpService.get(this.api.get + "/" + this.form.data.id, (res: any) => {
      if (res.success) {
        this.form.data = res.result.data;
        const duration = Number.parseInt(String(this.form.data.duration), 10);
        if (!Number.isNaN(duration)) {
          this.form.data.duration = duration;
        }
      } else {
        this.form.error = true;
        this.form.message = res.result.message;
      }
    });
  }

  compareDurations(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }
}
