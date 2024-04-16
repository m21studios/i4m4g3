import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'recover',
    loadComponent: () => import('./recover/recover.page').then( m => m.RecoverPage)
  },
  {
    path: 'validateemail',
    loadComponent: () => import('./validateemail/validateemail.page').then( m => m.ValidateemailPage)
  },
  {
    path: 'viewimage/:imageUrl',
    loadComponent: () => import('./viewimage/viewimage.page').then( m => m.ViewimagePage)
  },
  {
    path: 'generateart',
    loadComponent: () => import('./generateart/generateart.page').then( m => m.GenerateartPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'createimage',
    loadComponent: () => import('./createimage/createimage.page').then( m => m.CreateimagePage)
  },
];
