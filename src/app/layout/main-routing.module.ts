import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { WarQuizComponent } from '../main/war-quiz/war-quiz.component';
import { WordQuizComponent } from '../main/word-quiz/word-quiz.component';

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
export class MainRoutingModule { }
