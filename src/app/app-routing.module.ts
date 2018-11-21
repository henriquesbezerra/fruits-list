import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitComponent } from './fruit/fruit.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';

const routes: Routes = [  
  { path: '', component: FruitComponent, pathMatch: 'full'  },
  { path: 'fruit/:name', component: FruitDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
