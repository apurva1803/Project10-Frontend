import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent extends BaseCtl {

  constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.SUBJECT, locator, route);
  }

  override display(): void {
    this.serviceLocator.httpService.get(this.api.get + "/" + this.form.data.id, (res: any) => {
      if (res.success) {
        this.form.data = res.result.data;
        const courseId = Number.parseInt(String(this.form.data.courseId), 10);
        if (!Number.isNaN(courseId)) {
          this.form.data.courseId = courseId;
        }
      } else {
        this.form.error = true;
        this.form.message = res.result.message;
      }
    });
  }

  compareCourseIds(first: any, second: any): boolean {
    return first != null && second != null && String(first) === String(second);
  }
}
