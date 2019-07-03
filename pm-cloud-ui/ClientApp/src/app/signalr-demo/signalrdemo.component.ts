import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SignalRService} from "../common/service/signal-r.service";
import {AuthService} from "../core/authentication/auth.service";

@Component({
    selector: 'app-signalrdemo',
    templateUrl: './signalrdemo.component.html',
    styleUrls: ['./signalrdemo.component.css']
})
export class SignalRDemoComponent implements OnInit {

    public chartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    public chartLabels: string[] = ['Real time data for the chart'];
    public chartType: string = 'bar';
    public chartLegend: boolean = true;
    public colors: any[] = [{backgroundColor: '#5491DA'}, {backgroundColor: '#E74C3C'}, {backgroundColor: '#82E0AA'}, {backgroundColor: '#E5E7E9'}];

    constructor(public signalRService: SignalRService, private http: HttpClient, private authService: AuthService) {
    }

    ngOnInit() {
        this.signalRService.startConnection(environment.url.monitoringServicesRealTime + 'chart',
            this.authService.authorizationHeaderValue);
        this.signalRService.addTransferChartDataListener("transferchartdata");
        this.startHttpRequest();
    }

    private startHttpRequest = () => {
        this.http.get('https://localhost:5001/api/chart')
            .subscribe(res => {
                //console.log(res);
            })
    }

}
