import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['main']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'nevera',
    loadChildren: () => import('./nevera/nevera.module').then( m => m.NeveraPageModule)
  },
  {
    path: 'congelador',
    loadChildren: () => import('./congelador/congelador.module').then( m => m.CongeladorPageModule)
  },
  {
    path: 'otros',
    loadChildren: () => import('./otros/otros.module').then( m => m.OtrosPageModule)
  },
  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then( m => m.TodosPageModule)
  },
  {
    path: 'despensa',
    loadChildren: () => import('./despensa/despensa.module').then( m => m.DespensaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
