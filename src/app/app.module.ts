import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AssignTasksAdminComponent } from './assign-tasks-admin/assign-tasks-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ViewTasksAdminComponent } from './view-tasks-admin/view-tasks-admin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ButtonsLogComponent } from './buttons-log/buttons-log.component';
import { HomepageadminComponent } from './homepageadmin/homepageadmin.component';
import { HomepageuserComponent } from './homepageuser/homepageuser.component';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { AuthGuard } from './_auth/auth.guard';
import { UserService } from './_services/user.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AssignTasksAdminComponent,
    NavComponent,
    ButtonsComponent,
    MyFormComponent,
    ViewTasksAdminComponent,
    TaskFormComponent,
    HomepageComponent,
    ButtonsLogComponent,
    HomepageadminComponent,
    HomepageuserComponent,
    ForbiddenComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
 },
  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
