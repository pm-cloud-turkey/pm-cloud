import {Component, OnInit} from "@angular/core";
import {BreadcrumbService} from "../../breadcrumb.service";

@Component({
    templateUrl: './layout_test.component.html'
})
export class LayoutTestComponent implements OnInit {

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Layout test', routerLink: ['/chart'] }
        ]);
    }

    ngOnInit(): void {

    }

}
