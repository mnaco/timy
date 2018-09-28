import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { DataTodosService } from "./services/data-todos.service";
import { DataCatsService } from "./services/data-cats.service";
import { ShareDataService } from "./services/share-data.service";

import { PageTodayComponent } from "./views/page-today/page-today.component";
import { PageTodosComponent } from "./views/page-todos/page-todos.component";
import { PageCatsComponent } from "./views/page-cats/page-cats.component";

import { PendingTodosComponent } from './views/page-today/pending-todos/pending-todos.component';
import { PendingCatsComponent } from './views/page-today/pending-cats/pending-cats.component';

import { TimeSpanComponent } from "./views/widgets/time-span/time-span.component";
import { TodayOverviewComponent } from "./views/widgets/today-overview/today-overview.component";
import { TodayTimeSpansComponent } from "./views/widgets/today-time-spans/today-time-spans.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageTodayComponent,
        PageTodosComponent,
        PageCatsComponent,
        PendingTodosComponent,
        PendingCatsComponent,
        TimeSpanComponent,
        TodayOverviewComponent,
        TodayTimeSpansComponent
    ],
    providers: [
        DataTodosService,
        DataCatsService,
        ShareDataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }