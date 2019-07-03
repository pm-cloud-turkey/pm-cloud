import {Component, OnInit} from '@angular/core';
import {SelectItem} from "primeng/api";



@Component({
    selector: 'app-machine-history',
    templateUrl: './machine-history.component.html',
    styleUrls: ['./machine-history.component.css']
})
export class MachineHistoryComponent implements OnInit {

    machines: any[];

    selectedMachine: any;

    constructor() {
        this.machines = [
            {name: 'Tüm Makinalar', code: 'TM'},
            {name: 'Grup 1', code: 'G1'},
            {name: 'Grup 2', code: 'G2'},
        ];
    }

    ngOnInit() {
    }


}
