import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PageTodayComponent } from "./views/page-today/page-today.component";
import { PageTodosComponent } from "./views/page-todos/page-todos.component";
import { PageCatsComponent } from "./views/page-cats/page-cats.component";

const routes: Routes = [
    
    { path: '', redirectTo: '/(todosTab:todos//todayTab:today//catsTab:cats)', pathMatch: 'full' },
    { path: 'todos', component: PageTodosComponent, outlet: 'todosTab' },
    { path: 'today', component: PageTodayComponent, outlet: 'todayTab'},
    { path: 'cats', component: PageCatsComponent, outlet: 'catsTab'},
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }