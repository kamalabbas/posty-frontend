import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login/login.component';
import { RegisterComponent } from './Authentication/register/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PostsComponent } from './posts/posts/posts.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./Authentication/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'register',
    component: RegisterComponent,
    loadChildren: () => import('./Authentication/register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule),
    // canActivate: gu
  },
  {
    path: '',
    component: PostsComponent,
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


