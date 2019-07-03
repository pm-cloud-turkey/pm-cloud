import {Component, OnInit} from '@angular/core';
import {SecTestService} from "./sec-test.service";
import {AuthService} from "../core/authentication/auth.service";

@Component({
    selector: 'app-sec-test',
    templateUrl: './sec-test.component.html',
    styleUrls: ['./sec-test.component.css']
})
export class SecTestComponent implements OnInit {

    values: any;

    constructor(private secTestService: SecTestService, private authService: AuthService) {
    }

    ngOnInit() {
        this.secTestService.fetchTopSecretData(this.authService.authorizationHeaderValue).subscribe(value => this.values = value);
    }


}
