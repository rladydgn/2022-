import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WarQuizComponent } from './main/war-quiz/war-quiz.component';

const routes: Routes = [
  {
      path:'',
      loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
