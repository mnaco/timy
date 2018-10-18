import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PageTodayComponent } from "./views/page-today/page-today.component";
import { PageTodosComponent } from "./views/page-todos/page-todos.component";
import { PageCatsComponent } from "./views/page-cats/page-cats.component";
import { TodoDetailComponent } from "./views/todo-detail/todo-detail.component";
import { PageCatTodosComponent } from "./views/page-cat-todos/page-cat-todos.component";

const routes: Routes = [
    
    { path: '', redirectTo: '/(todosTab:todos//todayTab:today//catsTab:cats)', pathMatch: 'full' },
    { path: 'todos', component: PageTodosComponent, outlet: 'todosTab' },
    { path: 'today', component: PageTodayComponent, outlet: 'todayTab'},
    { path: 'cats', component: PageCatsComponent, outlet: 'catsTab'},

    { path: "item/:id", component: TodoDetailComponent, outlet: "todosTab" },
    { path: "cat/:id", component: PageCatTodosComponent, outlet: "catsTab" },
    { path: "cat-todo/:id", component: TodoDetailComponent, outlet: "catsTab" }
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
