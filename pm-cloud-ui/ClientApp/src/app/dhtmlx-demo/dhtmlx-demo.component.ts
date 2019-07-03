import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import "dhtmlx-scheduler";

//import {} from "@types/dhtmlxscheduler";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-dhtmlx-demo',
    templateUrl: './dhtmlx-demo.component.html',
    styleUrls: ['./dhtmlx-demo.component.css']
})
export class DhtmlxDemoComponent implements OnInit {

    @ViewChild("scheduler_here") schedulerContainer: ElementRef;


    ngOnInit() {

//        scheduler.init(this.schedulerContainer.nativeElement, new Date());
    }

}
