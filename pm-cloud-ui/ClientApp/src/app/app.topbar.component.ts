import { Component } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: 'app-topbar',
    template: `
        <div class="topbar clearfix">
            <div class="topbar-left">
               <a id="menu-button" href="#" (click)="app.onMenuButtonClick($event)">
                    <i class="fa ui-icon-menu"></i>
                </a>
                <div class="logo"></div>
            </div>

            <div class="topbar-right">
                

                <a id="rightpanel-menu-button" href="#" (click)="app.onRightPanelButtonClick($event)">
                    <i class="material-icons">more_vert</i>
                </a>

                <a id="topbar-menu-button" href="#" (click)="app.onTopbarMenuButtonClick($event)">
                    <i class="material-icons">menu</i>
                </a>

                <ul class="topbar-items animated fadeInDown" [ngClass]="{'topbar-items-visible': app.topbarMenuActive}">
                    <li #profile class="profile-item" *ngIf="app.profileMode==='top'||app.isHorizontal()"
                        [ngClass]="{'active-top-menu':app.activeTopbarItem === profile}">

                        <a href="#" (click)="app.onTopbarItemClick($event,profile)">
                            <img class="profile-image" src="assets/layout/images/avatar.png" />
                            <span class="topbar-item-name">Doruk Otomasyon</span>
                        </a>

                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">person</i>
                                    <span>Profile</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">security</i>
                                    <span>Privacy</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">settings_applications</i>
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">power_settings_new</i>
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #settings [ngClass]="{'active-top-menu':app.activeTopbarItem === settings}">
                        <a href="#" (click)="app.onTopbarItemClick($event,settings)">
                            <i class="topbar-icon material-icons">settings</i>
                            <span class="topbar-item-name">Settings</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                           <li role="menuitem">
                             <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                                        <i class="material-icons">person</i>
                                        <span>Profile</span>
                                    </a>
                                </li>
         
                                <li role="menuitem">
                                    <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                                        <i class="material-icons">settings_application</i>
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li role="menuitem">
                                    <a href="#" class="ripplelink" [attr.tabindex]="!active ? '-1' : null">
                                        <i class="material-icons">power_settings_new</i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                        </ul>
                    </li>
                   
                    <li #notifications [ngClass]="{'active-top-menu':app.activeTopbarItem === notifications}">
                        <a href="#" (click)="app.onTopbarItemClick($event,notifications)">
                            <i class="topbar-icon material-icons">message</i>
                            <span class="topbar-badge animated rubberBand">4</span>
                            <span class="topbar-item-name">Notifications</span>
                        </a>
                        <ul class="ultima-menu animated fadeInDown">
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">access_time</i>
                                    <span>Duruş Hedef Adımı</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">build</i>
                                    <span>Arıza İhtimali %85</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="#" (click)="app.onTopbarSubItemClick($event)">
                                    <i class="material-icons">file_download</i>
                                    <span>Ani OEE Düşüşü</span>
                                </a>
                            </li>
                            <li role="menuitem">
                                <a href="https://www.dorukotomasyon.com/Modul/AR.aspx" target="_blank">
                                    <i class="material-icons">record_voice_over</i>
                                    <span>Sanal Gerçekliği Tecrübe Edin </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li #search class="search-item" [ngClass]="{'active-top-menu':app.activeTopbarItem === search}"
                        (click)="app.onTopbarItemClick($event,search)">
                        <span class="md-inputfield">
                            <input type="text" pInputText>
                            <label>Search</label>
                            <i class="topbar-icon material-icons">search</i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    `
})
export class AppTopbarComponent {

    constructor(public app: AppComponent) { }
    active: boolean;
}
