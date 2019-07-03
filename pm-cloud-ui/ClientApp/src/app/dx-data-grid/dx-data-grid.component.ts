import { Component, OnInit } from '@angular/core';
import {Customer, DxDataGridService} from "./dx-data-grid.service";

@Component({
  selector: 'app-dx-data-grid',
  templateUrl: './dx-data-grid.component.html',
  styleUrls: ['./dx-data-grid.component.css']
})
export class DxDataGridComponent  {

    customers: Customer[];

    constructor(service: DxDataGridService) {
        this.customers = service.getCustomers();
    }
}
