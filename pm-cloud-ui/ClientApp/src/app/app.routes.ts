import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuard} from "./core/authentication/auth.guard";
import {PageNotFoundComponent} from "./error/page_not_found.component";
import {PagesRoutes} from "./page.routes";
import {AccountRoutes} from "./account/account.routing-module";
import {AuthCallbackComponent} from "./auth-callback/auth-callback.component";
import {SilentRefreshComponent} from "./silent-refresh/silent-refresh.component";

export const routes: Routes = [
    {
        path: 'pages',
        children: PagesRoutes,
        canActivate: [AuthGuard]
    },
    {
        path: 'account',
        children: AccountRoutes
    },
    { path: 'auth-callback', component: AuthCallbackComponent  },
    { path: 'silent-refresh', component: SilentRefreshComponent  },
    {
        path:'**',
        component: PageNotFoundComponent
    }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
