import {RouterModule, Routes} from "@angular/router";
import {DashboardDemoComponent} from "./demo/view/dashboarddemo.component";
import {SampleDemoComponent} from "./demo/view/sampledemo.component";
import {FormsDemoComponent} from "./demo/view/formsdemo.component";
import {DataDemoComponent} from "./demo/view/datademo.component";
import {PanelsDemoComponent} from "./demo/view/panelsdemo.component";
import {OverlaysDemoComponent} from "./demo/view/overlaysdemo.component";
import {MenusDemoComponent} from "./demo/view/menusdemo.component";
import {MessagesDemoComponent} from "./demo/view/messagesdemo.component";
import {MiscDemoComponent} from "./demo/view/miscdemo.component";
import {EmptyDemoComponent} from "./demo/view/emptydemo.component";
import {ChartsDemoComponent} from "./demo/view/chartsdemo.component";
import {FileDemoComponent} from "./demo/view/filedemo.component";
import {UtilsDemoComponent} from "./demo/view/utilsdemo.component";
import {DocumentationComponent} from "./demo/view/documentation.component";
import {LayoutTestComponent} from "./demo/view/layout_test.component";
import {DxDataGridComponent} from "./dx-data-grid/dx-data-grid.component";
import {TeechartDemoComponent} from "./teechart-demo/teechart-demo.component";
import {HighchartsDemoComponent} from "./highcharts-demo/highcharts-demo.component";
import {HighchartsGanttComponent} from "./highcharts-gantt/highcharts-gantt.component";
import {DhtmlxDemoComponent} from "./dhtmlx-demo/dhtmlx-demo.component";
import {PflexDemoComponent} from "./pflex-demo/pflex-demo.component";
import {MachineHistoryComponent} from "./machine-history/machine-history.component";
import {SignalRDemoComponent} from "./signalr-demo/signalrdemo.component";
import {OmiComponent} from "./omi/omi.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "./core/authentication/auth.guard";
import {SecTestComponent} from "./sec-test/sec-test.component";
import {DxDemoComponent} from "./dx-demo/dx-demo.component";

export const PagesRoutes: Routes = [
    {path: '', component: DashboardDemoComponent, canActivate:[AuthGuard],  children: [
            {
                path: 'dashboard',
                component: DashboardDemoComponent
            }]},
    {path: 'sample', component: SampleDemoComponent, canActivate:[AuthGuard]},
    {path: 'forms', component: FormsDemoComponent, canActivate:[AuthGuard]},
    {path: 'data', component: DataDemoComponent, canActivate:[AuthGuard]},
    {path: 'panels', component: PanelsDemoComponent, canActivate:[AuthGuard]},
    {path: 'overlays', component: OverlaysDemoComponent, canActivate:[AuthGuard]},
    {path: 'menus', component: MenusDemoComponent, canActivate:[AuthGuard]},
    {path: 'messages', component: MessagesDemoComponent, canActivate:[AuthGuard]},
    {path: 'misc', component: MiscDemoComponent, canActivate:[AuthGuard]},
    {path: 'empty', component: EmptyDemoComponent, canActivate:[AuthGuard]},
    {path: 'charts', component: ChartsDemoComponent, canActivate:[AuthGuard]},
    {path: 'file', component: FileDemoComponent, canActivate:[AuthGuard]},
    {path: 'utils', component: UtilsDemoComponent, canActivate:[AuthGuard]},
    {path: 'documentation', component: DocumentationComponent, canActivate:[AuthGuard]},
    {path: 'layoutTest', component: LayoutTestComponent, canActivate:[AuthGuard]},
    {path: 'dxDataGrid', component: DxDataGridComponent, canActivate:[AuthGuard]},
    {path: 'teechart', component: TeechartDemoComponent, canActivate:[AuthGuard]},
    {path: 'highChartsDemo', component: HighchartsDemoComponent, canActivate:[AuthGuard]},
    {path: 'highChartsGanttDemo', component: HighchartsGanttComponent, canActivate:[AuthGuard]},
    {path: 'dhtmlxDemo', component: DhtmlxDemoComponent, canActivate:[AuthGuard]},
    {path: 'pflexdemo', component: PflexDemoComponent, canActivate:[AuthGuard]},
    {path: 'machineHistory', component: MachineHistoryComponent, canActivate:[AuthGuard]},
    {path: 'signalRDemo', component: SignalRDemoComponent, canActivate:[AuthGuard]},
    {path: 'omi', component: OmiComponent, canActivate:[AuthGuard]},
    {path: 'secTest', component: SecTestComponent, canActivate:[AuthGuard]},
    { path: 'devextremeDemo', component: DxDemoComponent },
];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(PagesRoutes);
