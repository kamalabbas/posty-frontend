import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Authentication/login/login/login.component';
import { RegisterComponent } from './Authentication/register/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PostsComponent } from './posts/posts/posts.component';

const routes: Routes = [
  // defaul route if the route didn't match any it will redirect to the home page.
  { path: '', redirectTo: 'home', pathMatch: 'full' },


  // create a routing module for every module you create and append it there in order to make it lazy loaded
  {
    path: 'login',
    loadChildren: () => import('./Authentication/login/login.module').then( m => m.LoginModule)
  },

  // Since we are calling the component here on the router from appComponent this is not a lazy loaded component and we achived nothing by adding a module for each component
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


