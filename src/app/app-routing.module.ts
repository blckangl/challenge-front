import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {RegisterPageComponent} from "./pages/register-page/register-page.component";
import {LayoutPageComponent} from "./pages/layout-page/layout-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: 'register', component: RegisterPageComponent},
  {path: 'login', component: LoginPageComponent},
  {
    path: '', component: LayoutPageComponent, canActivate: [AuthGuard],
    children: [
      {path: '', component: HomePageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
