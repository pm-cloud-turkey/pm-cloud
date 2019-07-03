import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TooltipModule} from 'primeng/tooltip';
import {environment} from "../../environments/environment";
import {SignalRService} from "../common/service/signal-r.service";
import {AuthService} from "../core/authentication/auth.service";

@Component({
    selector: 'app-omi',
    templateUrl: './omi.component.html',
    styleUrls: ['./omi.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [SignalRService]
})
export class OmiComponent implements OnInit {


    omiInfo: any;

    omiParametersToShow: string[] = ["OperatorName", "OprTotalTime", "OprTotalStopTime", "OprWorkedTime", "OprProduction", "OprNetPerfor", "OprGrossPerf"];


    constructor(public signalRService: SignalRService, private http: HttpClient, private authService: AuthService) {
    }

    ngOnInit() {
        this.signalRService.startConnection(environment.url.monitoringServicesRealTime + 'omi',
            this.authService.signalRHeaderValue);
        this.omiInfo = this.signalRService.addTransferChartDataListener("transferomidata");
        this.startHttpRequest();
    }

    btnClicked() {
        //console.log(this.signalRService.data);
    }

    getOmiParameters(data) {
        return data.parameters.filter(p => this.omiParametersToShow.includes(p.name));
    }


    private startHttpRequest = () => {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': this.authService.authorizationHeaderValue
            })
        };
        this.http.get(environment.url.monitoringServicesApi + "omi", httpOptions)
            .subscribe(res => {
                //console.log(res);
            })
    }

}
