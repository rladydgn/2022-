import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarQuizComponent } from './main/war-quiz/war-quiz.component';

const routes: Routes = [
  {
      path:'WarQuiz',
      component: WarQuizComponent,
      // children: [
      //     {
      //         path: '/WarQuiz',
      //         component: WarQuizComponent
      //     },
      //     {
      //         path: '/WordQuiz',
      //         component: WordQuizComponent
      //     }
      // ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
