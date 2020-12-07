import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'cats', loadChildren: () => import('./pages/cats/cats.module').then(m => m.CatsModule) },
  { path: 'images', loadChildren: () => import('./pages/images/images.module').then(m => m.ImagesModule) },
  { path: 'cats/create', loadChildren: () => import('./pages/cats/create/create.module').then(m => m.CreateCatModule) },
  { path: 'cats/update/:id', loadChildren: () => import('./pages/cats/create/create.module').then(m => m.CreateCatModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
