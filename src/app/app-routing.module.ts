import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}