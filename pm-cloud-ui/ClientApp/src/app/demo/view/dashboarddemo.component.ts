import { Component, NgZone, OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { EventService } from '../service/eventservice';
import { Car } from '../domain/car';
import { SelectItem } from 'primeng/primeng';
import { BreadcrumbService } from '../../breadcrumb.service';
import * as Highcharts from 'highcharts/highcharts-gantt';

@Component({
    templateUrl: './dashboard.component.html'
})

export class DashboardDemoComponent implements OnInit {
    chartOptions: any;
    Highcharts = Highcharts;
    constructorType: string = 'ganttChart';

    cities: SelectItem[];

    cars: Car[];

    cols: any[];

    chartData: any;

    barData1: any;

    barData2: any;

    barData3: any;

    barData4: any;

    events: any[];

    dtMachineOptions: any;

    dtShiftOptions: any;
    constructor(private carService: CarService, private eventService: EventService, private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            { label: '' },
        ]);
    }

    ngOnInit() {

        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.eventService.getEvents().then(events => {
            this.events = events;
        });

        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

        // OEE + Components by Day
        this.chartData = {
            labels: ['Jan 30 2018', 'Jan 31', 'Fab 1', 'Fab 2', 'Fab 3', 'Fab 4', 'Fab 5'],
            datasets: [
                {
                    label: 'OEE',
                    data: [61, 60, 59, 64, 67, 59, 62],
                    fill: false,
                    borderColor: '#de36dc'
                },
                {
                    label: 'Availability',
                    data: [74, 71, 73, 76, 69, 72, 70],
                    fill: false,
                    borderColor: '#008446'
                }

                ,
                {
                    label: 'Quality',
                    data: [88, 91, 90, 87, 85, 90, 93],
                    fill: false,
                    borderColor: '#ff9802'
                }

                ,
                {
                    label: 'Performance',
                    data: [80, 78, 82, 81, 75, 80, 84],
                    fill: false,
                    borderColor: '#1a8cf7'
                }
            ]
        };

        // Unplanned Downtime by Shift
        this.barData1 = {

            labels: ['1', '2', '3'],

            datasets: [
                {
                    label: 'Unplanned Downtime',
                    backgroundColor: '#182672',
                    borderColor: '#182672',
                    data: [600, 580, 580, 400]
                }
            ],


        };
        this.dtShiftOptions = {
            legend: { display: false },
        };

        // Downtime by Machine//
        this.barData2 = {
            labels: ['E50', 'E51', 'E52', 'E53', 'E54', 'E55', 'E56', 'E57'],
            datasets: [
                {
                    label: 'Downtime',
                    backgroundColor: '#182672',
                    borderColor: '#182672',
                    data: [65, 59, 80, 81, 69, 55, 90, 65]
                }

            ]
        };
        this.dtMachineOptions = {
            legend: { display: false },
        };


        // Scheduled activities- Sensör verisi
        this.barData4 = {
            labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz'],
            datasets: [
                {
                    label: 'Temperature',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#84d7c7',
                    borderColor: '#84d7c7'
                },
                {
                    label: 'Vibration',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#7e4e9b',
                    borderColor: '#7e4e9b'
                }
            ]
        };

        // Production Plan

        var today = new Date(),
            day = 1000 * 60 * 60 * 24;

        today.setUTCHours(0);
        today.setUTCMinutes(0);
        today.setUTCSeconds(0);
        today.setUTCMilliseconds(0);

        var Plans = [{
            model: 'E50',
            current: 0,
            deals: [{
                rentedTo: 'Lisa Star',
                from: today.getTime() - 1 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Shane Long',
                from: today.getTime() + 1 * day,
                to: today.getTime() + 2 * day
            }, {
                rentedTo: 'Jack Coleman',
                from: today.getTime() + 2 * day,
                to: today.getTime() + 3 * day
            }]
        }, {
            model: 'E51',
            current: 0,
            deals: [{
                rentedTo: 'Martin Hammond',
                from: today.getTime() - 2 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Linda Jackson',
                from: today.getTime() - 2 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Robert Sailor',
                from: today.getTime() + 2 * day,
                to: today.getTime() + 6 * day
            }]
        }, {
            model: 'E52',
            current: 0,
            deals: [{
                rentedTo: 'Mona Ricci',
                from: today.getTime() + 0 * day,
                to: today.getTime() + 3 * day
            }, {
                rentedTo: 'Jane Dockerman',
                from: today.getTime() + 3 * day,
                to: today.getTime() + 4 * day
            }, {
                rentedTo: 'Bob Shurro',
                from: today.getTime() + 6 * day,
                to: today.getTime() + 8 * day
            }]
        }, {
            model: 'E53',
            current: 0,
            deals: [{
                rentedTo: 'Hailie Marshall',
                from: today.getTime() - 1 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Morgan Nicholson',
                from: today.getTime() - 3 * day,
                to: today.getTime() - 2 * day
            }, {
                rentedTo: 'William Harriet',
                from: today.getTime() + 2 * day,
                to: today.getTime() + 3 * day
            }]
        }, {
            model: 'E54',
            current: 0,
            deals: [{
                rentedTo: 'Harry Peterson',
                from: today.getTime() - 1 * day,
                to: today.getTime() + 2 * day
            }, {
                rentedTo: 'Emma Wilson',
                from: today.getTime() + 3 * day,
                to: today.getTime() + 4 * day
            }, {
                rentedTo: 'Ron Donald',
                from: today.getTime() + 5 * day,
                to: today.getTime() + 6 * day
            }]
        }, {
            model: 'E55',
            current: 0,
            deals: [{
                rentedTo: 'Mona Ricci',
                from: today.getTime() + 0 * day,
                to: today.getTime() + 3 * day
            }, {
                rentedTo: 'Jane Dockerman',
                from: today.getTime() + 3 * day,
                to: today.getTime() + 4 * day
            }, {
                rentedTo: 'Bob Shurro',
                from: today.getTime() + 6 * day,
                to: today.getTime() + 8 * day
            }]
        }, {
            model: 'E56',
            current: 0,
            deals: [{
                rentedTo: 'Hailie Marshall',
                from: today.getTime() - 1 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Morgan Nicholson',
                from: today.getTime() - 3 * day,
                to: today.getTime() - 2 * day
            }, {
                rentedTo: 'William Harriet',
                from: today.getTime() + 2 * day,
                to: today.getTime() + 3 * day
            }]
        }, {
            model: 'E57',
            current: 0,
            deals: [{
                rentedTo: 'Martin Hammond',
                from: today.getTime() - 2 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Linda Jackson',
                from: today.getTime() - 2 * day,
                to: today.getTime() + 1 * day
            }, {
                rentedTo: 'Robert Sailor',
                from: today.getTime() + 2 * day,
                to: today.getTime() + 6 * day
            }]
        }];
        var series = Plans.map(function (car, i) {
            var data = car.deals.map(function (deal) {
                return {
                    id: 'deal-' + i,
                    colors: '#55ce51',
                    rentedTo: deal.rentedTo,
                    start: deal.from,
                    end: deal.to,
                    y: i,
                };
            });
            return {
                name: car.model,
                data: data,
                current: car.deals[car.current]
            };
        });
        this.chartOptions = {
            chart: {
                spacingLeft: 1,
               zoomType: 'x',
            zoomKey: 'ctrl'
            },

            title: {
                text: 'Production Plan'
            },

            subtitle: {
                text: ''
            },

            plotOptions: {
                series: {
                    animation: false, // Do not animate dependency connectors
                    dragDrop: {
                        draggableX: true,
                        draggableY: false,
                    },
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}',
                        style: {
                            cursor: 'default',
                            pointerEvents: 'none'
                        }
                    },
                    allowPointSelect: true,
                }
            },

            yAxis: {
                type: 'category',
                categories: ['E50', 'E51', 'E52', 'E53', 'E54', 'E55', 'E56', 'E57'],
                min: 0,
                max: 7
            },

            xAxis: {
                currentDateIndicator: true,
                plotBands: [{
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, '#dfdddd'],
                            [1, '#f2f0f0']
                        ]
                    },
                    from: today.getTime() + day * 5, // Start of the plot band
                    to: today.getTime() + day * 6, // End of the plot band

                  }],
                  plotLines: [{
                    color: 'red', // Color value
                    dashStyle: 'solid', // Style of the plot line. Default to solid
                    value: today.getTime() + 2.5 * day, // Value of where the line will appear
                    width: 2 // Width of the line    
                  }],
            },
            tooltip: {
                xDateFormat: '%a %b %d, %H:%M'
            },
            credits: {
                enabled: false
            },
            series: [{
                name: '',
                data: [{
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'Difizyon Çekmece - Adet 50.000',
                    id: 'prototype',
                    y: 0,
                    completed: {
                        amount: 0.7
                    }
                }, {
                    start: today.getTime() + day * 6,
                    name: 'KAPAK- Adet 20.000',
                    id: 'proto_done',
                    y: 0
                }, {
                    start: today.getTime() + day * 7,
                    end: today.getTime() + day * 11,
                    name: 'Metal 1.002',
                    y: 0
                }, {
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'KLİMA TUTAMAK - Adet 6.000',
                    y: 1,
                    completed: {
                        amount: 0.3
                    }
                }, {
                    start: today.getTime() + day * 5,
                    end: today.getTime() + day * 8,
                    name: 'PL1A FN7S TUTAMAK- Adet 2.000',
                    y: 1
                }, {
                    start: today.getTime() + day * 9,
                    end: today.getTime() + day * 10,
                    name: 'Cam 44',
                    y: 1
                }, {
                    start: today.getTime() + day * 9,
                    end: today.getTime() + day * 11,
                    name: 'PL 1 N7S ÇEKMECE PANOSU - Adet 20',
                    id: 'testing',
                    y: 2
                }, {
                    start: today.getTime() + day * 11.5,
                    end: today.getTime() + day * 12.5,
                    name: 'CAM 32',
                    y: 2
                }, {
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'İÇ KAPI CONTASI - Adet 768',
                    y: 3,
                    completed: {
                        amount: 0.4
                    }
                }, {
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'KLİMA TUTAMAK - Adet 6.000',
                    y: 4
                },
                {
                    start: today.getTime() + day * 5,
                    end: today.getTime() + day * 8,
                    name: 'DF TUTAMAK- Adet 6.000',
                    y: 4
                }, {
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'KLİMA TUTAMAK - Adet 6.000',
                    y: 5
                }, {
                    start: today.getTime() + 5 * day,
                    end: today.getTime() + day * 6,
                    name: 'KLİMA TUTAMAK - Adet 6.000',
                    y: 5
                }, {
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'ÇEKMECE PANO KAPAĞI - Adet 1.500',
                    y: 6
                }, {
                    start: today.getTime() + 2 * day,
                    end: today.getTime() + day * 5,
                    name: 'COMPAQ ÇEKMECE - Adet 5.400',
                    y: 7
                }]
            }]
        };
    }
}
