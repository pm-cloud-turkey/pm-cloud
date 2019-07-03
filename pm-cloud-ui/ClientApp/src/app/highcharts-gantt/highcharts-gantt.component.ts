import {Component, OnInit} from '@angular/core';
import * as Highcharts from "highcharts/highcharts-gantt";

@Component({
    selector: 'app-highcharts-gantt',
    templateUrl: './highcharts-gantt.component.html',
    styleUrls: ['./highcharts-gantt.component.css']
})
export class HighchartsGanttComponent implements OnInit {

    chartOptions: any;
    Highcharts = Highcharts;
    constructorType: string = "ganttChart";

    constructor() {
    }

    ngOnInit() {
        var today = new Date(),
            day = 1000 * 60 * 60 * 24;

// Set to 00:00:00:000 today
        today.setUTCHours(0);
        today.setUTCMinutes(0);
        today.setUTCSeconds(0);
        today.setUTCMilliseconds(0);



        this.chartOptions = {
            series: [{
                name: 'Offices',
                data: [{
                    name: 'New offices',
                    id: 'new_offices',
                    owner: 'Peter'
                }, {
                    name: 'Prepare office building',
                    id: 'prepare_building',
                    parent: 'new_offices',
                    start: today.getTime() - (2 * day),
                    end: today.getTime() + (6 * day),
                    completed: {
                        amount: 0.2
                    },
                    owner: 'Linda'
                }, {
                    name: 'Inspect building',
                    id: 'inspect_building',
                    dependency: 'prepare_building',
                    parent: 'new_offices',
                    start: today.getTime() + 6 * day,
                    end: today.getTime() + 8 * day,
                    owner: 'Ivy'
                }, {
                    name: 'Passed inspection',
                    id: 'passed_inspection',
                    dependency: 'inspect_building',
                    parent: 'new_offices',
                    start: today.getTime() + 9.5 * day,
                    milestone: true,
                    owner: 'Peter'
                }, {
                    name: 'Relocate',
                    id: 'relocate',
                    dependency: 'passed_inspection',
                    parent: 'new_offices',
                    owner: 'Josh'
                }, {
                    name: 'Relocate staff',
                    id: 'relocate_staff',
                    parent: 'relocate',
                    start: today.getTime() + 10 * day,
                    end: today.getTime() + 11 * day,
                    owner: 'Mark'
                }, {
                    name: 'Relocate test facility',
                    dependency: 'relocate_staff',
                    parent: 'relocate',
                    start: today.getTime() + 11 * day,
                    end: today.getTime() + 13 * day,
                    owner: 'Anne'
                }, {
                    name: 'Relocate cantina',
                    dependency: 'relocate_staff',
                    parent: 'relocate',
                    start: today.getTime() + 11 * day,
                    end: today.getTime() + 14 * day
                }]
            }, {
                name: 'Product',
                data: [{
                    name: 'New product launch',
                    id: 'new_product',
                    owner: 'Peter'
                }, {
                    name: 'Development',
                    id: 'development',
                    parent: 'new_product',
                    start: today.getTime() - day,
                    end: today.getTime() + (11 * day),
                    completed: {
                        amount: 0.6,
                        fill: '#e80'
                    },
                    owner: 'Susan'
                }, {
                    name: 'Beta',
                    id: 'beta',
                    dependency: 'development',
                    parent: 'new_product',
                    start: today.getTime() + 12.5 * day,
                    milestone: true,
                    owner: 'Peter'
                }, {
                    name: 'Final development',
                    id: 'finalize',
                    dependency: 'beta',
                    parent: 'new_product',
                    start: today.getTime() + 13 * day,
                    end: today.getTime() + 17 * day
                }, {
                    name: 'Launch',
                    dependency: 'finalize',
                    parent: 'new_product',
                    start: today.getTime() + 17.5 * day,
                    milestone: true,
                    owner: 'Peter'
                }]
            }],

            title: {
                text: 'Gantt Project Management'
            },
            xAxis: {
                currentDateIndicator: true,
                min: today.getTime() - 3 * day,
                max: today.getTime() + 18 * day
            }
        };
    }

}
