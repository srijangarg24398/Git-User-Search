import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule, FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { GithubService } from './services/github.service';
import { GithubInterceptor } from './services/github.interceptor';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GithubService,
    {provide:HTTP_INTERCEPTORS,useClass: GithubInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
