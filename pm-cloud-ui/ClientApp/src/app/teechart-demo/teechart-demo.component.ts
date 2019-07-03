

import {Component, OnInit, ViewChild} from '@angular/core';
import {WeatherService} from './weather.service';

import { Tee } from 'node_modules/TeeChart/lib/teechart';


@Component({
  selector: 'app-teechart-demo',
  templateUrl: './teechart-demo.component.html',
  styleUrls: ['./teechart-demo.component.css']
})
export class TeechartDemoComponent  {
    display: boolean;
    @ViewChild('canvas1') canvas1;

    tChart1: Tee.Chart;

    constructor(private _weather: WeatherService) {}

// tslint:disable-next-line: use-life-cycle-interface
    ngAfterViewInit() {

        this.tChart1 = new Tee.Chart('canvas1');
        const aBar = new Tee.Bar();
        this.tChart1.addSeries(aBar);
        this.tChart1.applyTheme('minimal');
        this.tChart1.legend.visible = false;
        this.tChart1.axes.bottom.labels.rotation = 90;
        this.tChart1.series.items[0].format.stroke.size = 3;
        this.tChart1.title.text = 'TeeChart for Angular';

        var aGantt=this.tChart1.addSeries(new Tee.Gantt());
        aGantt.add(0, 'Production', new Date(2019, 5, 21).getTime(), new Date(2019, 5, 29).getTime() );
        aGantt.add(1, 'Marketing', new Date(2019, 9, 3).getTime(), new Date(2019, 11, 10).getTime() );
        aGantt.add(2, 'Approve', new Date(2019, 3, 13).getTime(), new Date(2019, 3, 31).getTime() );
        aGantt.add(3, 'Prototype', new Date(2019, 6, 7).getTime(), new Date(2019, 7, 5).getTime() );
        aGantt.add(4, 'Evaluation', new Date(2019, 10, 11).getTime(), new Date(2019, 11, 5).getTime() );
        aGantt.add(5, 'Design', new Date(2019, 4, 2).getTime(), new Date(2019, 4, 29).getTime() );
        aGantt.add(2, 'Testing', new Date(2019, 8, 1).getTime(), new Date(2019, 11, 7).getTime());

        var aLine = this.tChart1.addSeries(new Tee.Line());
        aLine.data.values = [5, 2, 1, 2, 4];
        aLine.data.x = [];
        aLine.data.x.push(new Date(2019, 3, 13).getTime());
        aLine.data.x.push(new Date(2019, 4, 2).getTime());
        aLine.data.x.push(new Date(2019, 5, 21).getTime());
        aLine.data.x.push(new Date(2019, 6, 7).getTime());
        aLine.data.x.push(new Date(2019, 9, 3).getTime());
        aGantt.dateFormat = 'mediumDate';
        this.tChart1.axes.bottom.labels.dateFormat = 'mediumDate';
        this.tChart1.axes.bottom.oldHasAnySeries = this.tChart1.axes.bottom.hasAnySeries;
        this.tChart1.axes.bottom.hasAnySeries = function () {
        var result = this.oldHasAnySeries();
        this.dateTime = true;
         return result;
         };
     this.tChart1.zoom.wheel.enabled = true;
     aGantt.onclick = onClickMethod;
     function onClickMethod() {
        showDialog();
     }
     function showDialog() {
        this.display = true;
      }
        this.tChart1.draw();
    }
}
