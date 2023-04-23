import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './alerts/warning-alert.component';
import { SuccessAlertComponent } from './alerts/success-alert.component';
import { FormsModule } from '@angular/forms';
import { SecondExerciseComponent } from './second-exercise/second-exercise.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    SecondExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
