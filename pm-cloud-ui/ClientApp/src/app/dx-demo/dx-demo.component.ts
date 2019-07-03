import { Component, OnInit, NgModule } from '@angular/core';
import { DxDemoService, Population } from './dx-demo.service';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-demo',
  templateUrl: './dx-demo.component.html',
  styleUrls: ['./dx-demo.component.css'],
  providers: [DxDemoService]
})
export class DxDemoComponent {
  populationData: Population[];
  display: boolean;
  constructor(service: DxDemoService) {
    this.populationData = service.getPopulationData();
}
showDialog() {
  this.display = true;
}
 }