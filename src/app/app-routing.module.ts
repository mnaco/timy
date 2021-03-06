import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PageTodayComponent } from "./views/page-today/page-today.component";
import { PageTodosComponent } from "./views/page-todos/page-todos.component";
import { PageCatsComponent } from "./views/page-cats/page-cats.component";
import { CatTodosComponent } from "./views/cat-todos/cat-todos.component";
import { TodoDetailComponent } from "./views/todo-detail/todo-detail.component";
import { CatDetailsComponent } from "./views/cat-details/cat-details.component";
import { NewCatComponent } from "./views/new-cat/new-cat.component";

const routes: Routes = [
    
    { path: '', redirectTo: '/(todosTab:todos//todayTab:today//catsTab:cats)', pathMatch: 'full' },
    { path: 'today', component: PageTodayComponent, outlet: 'todayTab'},
    { path: 'todos', component: PageTodosComponent, outlet: 'todosTab' },
    { path: 'cats', component: PageCatsComponent, outlet: 'catsTab'},
    
    { path: "item/:id", component: TodoDetailComponent, outlet: "todosTab" },
    { path: "cat/:id", component: CatTodosComponent, outlet: "catsTab" },
    
    { path: "cat/todo/:id", component: TodoDetailComponent, outlet: "catsTab" },
    
    { path: 'newcat', component: NewCatComponent, outlet: 'catsTab' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
