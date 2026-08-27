import { AfterViewInit, Directive, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from './service-locator.service';
import { BaseCtl } from './base.component';

@Directive()
export class BaseListCtl extends BaseCtl implements AfterViewInit {
    @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef<HTMLInputElement>>;

    public isMasterSel = false;
    private selectedIds: number[] = [];

    constructor(endpoint: String, serviceLocator: ServiceLocatorService, route: ActivatedRoute) {
        super(endpoint, serviceLocator, route);
    }

    ngAfterViewInit(): void {
        this.checkboxes.changes.subscribe(() => this.updateMasterSelection());
    }

    override ngOnInit(): void {
        super.ngOnInit();
        this.search();
    }

    checkUncheckAll(event: Event): void {
        const checked = (event.target as HTMLInputElement).checked;
        this.checkboxes.forEach((checkbox) => checkbox.nativeElement.checked = checked);
        this.updateSelectedIds();
    }

    checklistUpdate(): void {
        this.updateSelectedIds();
        this.updateMasterSelection();
    }

    next(): void {
        this.form.pageNo++;
        this.search();
    }

    previous(): void {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            this.search();
        }
    }

    override deleteMany(): void {
        this.updateSelectedIds();
        if (this.selectedIds.length === 0) {
            return;
        }

        const selectedIds = this.selectedIds.join(',');
        super.deleteMany(selectedIds);
    }

    private updateSelectedIds(): void {
        this.selectedIds = this.checkboxes
            ? this.checkboxes
                .filter((checkbox) => checkbox.nativeElement.checked)
                .map((checkbox) => Number(checkbox.nativeElement.id))
            : [];
    }

    private updateMasterSelection(): void {
        const checkboxes = this.checkboxes?.toArray() ?? [];
        this.isMasterSel = checkboxes.length > 0 && checkboxes.every((checkbox) => checkbox.nativeElement.checked);
    }
}
