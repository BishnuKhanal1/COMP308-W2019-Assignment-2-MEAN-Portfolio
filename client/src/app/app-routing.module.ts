//modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//components
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { TodoListComponent } from "./todos/todo-list/todo-list.component";
import { TodoDetailsComponent } from "./todos/todo-details/todo-details.component";
import { TodoDeleteComponent } from "./todos/todo-delete/todo-delete.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: "home", component: HomeComponent, data: { title: "Home" } },
  { path: "about", component: AboutComponent, data: { title: "About Me" } },
  {
    path: "projects",
    component: ProjectsComponent,
    data: { title: "Projects" }
  },
  {
    path: "services",
    component: ServicesComponent,
    data: { title: "Services" }
  },
  { path: "contact", component: ContactComponent, data: { title: "Contact" } },

  {
    path: "contact/todo-list",
    component: TodoListComponent,
    data: { title: "To-Do List" }
  },
  {
    path: "contact/todo-list/add",
    component: TodoDetailsComponent,
    data: { title: "Add To Do Item" }
  },
  {
    path: "contact/todo-list/edit/:id",
    component: TodoDetailsComponent,
    data: { title: "Edit To Do Item" }
  },
  {
    path: "contact/todo-list/delete/:id",
    component: TodoDeleteComponent,
    data: { title: "Delete To Do Item" }
  },

  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  { path: "login", component: LoginComponent, data: { title: "Login" } },
  { path: "logout", redirectTo: "/login", pathMatch: "full" },

  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
