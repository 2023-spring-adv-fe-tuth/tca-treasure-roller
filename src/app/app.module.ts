import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HoardScreenComponent } from './hoard-screen/hoard-screen.component';
import { ParametersScreenComponent } from './parameters-screen/parameters-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    HoardScreenComponent,
    ParametersScreenComponent,
    ResultScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
