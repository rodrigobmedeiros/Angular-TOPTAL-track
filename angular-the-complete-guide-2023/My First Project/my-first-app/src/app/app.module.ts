import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './alerts/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
