import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryDetailComponent } from './detail/history-detail/history-detail.component';
import { WarDetailComponent } from './detail/war-detail/war-detail.component';
import { WordDetailComponent } from './detail/word-detail/word-detail.component';
import { HistoryQuizComponent } from './history-quiz/history-quiz.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { MainComponent } from './main.component';
import { WarQuizComponent } from './war-quiz/war-quiz.component';
import { WordQuizComponent } from './word-quiz/word-quiz.component';

const routes: Routes = [
    {
        path:'',
        component: MainComponent,
        children:[
          {
            path:'',
            component: MainScreenComponent
          },
          {
            path:'WarQuiz',
            component: WarQuizComponent
          },
          {
            path:'WordQuiz',
            component: WordQuizComponent
          },
          {
            path:'HistoryQuiz',
            component: HistoryQuizComponent
          },
          {
            path:'WarDetail',
            component: WarDetailComponent
          },
          {
            path:'HistoryDetail',
            component: HistoryDetailComponent
          },
          {
            path:'WordDetail',
            component: WordDetailComponent
          }
        ]
    },
    // {
    //   path:'',
    //   redirectTo:'',
    //   component: MainScreenComponent
    // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
