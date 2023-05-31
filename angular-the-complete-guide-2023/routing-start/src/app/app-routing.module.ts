import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorMessageComponent } from "./error-message/error-message.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CanDeactivateGuardService } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]},
    { path: 'servers', component: ServersComponent, canActivateChild: [AuthGuardService], children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] }
    ]},
    { path: 'not-found', component: NotFoundComponent },
    { path: 'error-message', component: ErrorMessageComponent, data: {errorMessage: 'PAGE NOT FOUND - STATIC DATA WAY'}},
    // { path: '**', redirectTo: '/not-found'}
    { path: '**', redirectTo: '/error-message'}
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRputingModule {
}