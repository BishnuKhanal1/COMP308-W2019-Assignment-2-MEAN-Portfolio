import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

//components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { BasePageComponent } from "./partials/base-page/base-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

//services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { TodoDetailsComponent } from './todos/todo-details/todo-details.component';
import { TodoDeleteComponent } from './todos/todo-delete/todo-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    TodoListComponent,
    RegisterComponent,
    LoginComponent,
    TodoDetailsComponent,
    TodoDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
