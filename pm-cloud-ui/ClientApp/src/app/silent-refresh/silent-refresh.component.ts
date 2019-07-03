import {Component, OnInit} from '@angular/core';
import {AuthService} from "../core/authentication/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-silent-refresh',
    templateUrl: './silent-refresh.component.html',
    styleUrls: ['./silent-refresh.component.css']
})
export class SilentRefreshComponent implements OnInit {
    error: boolean;

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        if (this.route.snapshot.fragment.indexOf('error') >= 0) {
            this.error = true;
            return;
        }

        this.authService.silentRefresh();
        console.log("Silent refresh requested"+Date.now())
    }

}
