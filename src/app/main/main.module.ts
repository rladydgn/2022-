import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { WarQuizComponent } from './war-quiz/war-quiz.component';
import { WordQuizComponent } from './word-quiz/word-quiz.component';


import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSelectModule, NbSidebarModule, NbThemeModule } from '@nebular/theme'
import { MainRoutingModule } from './main-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { typeComponent } from '../layout/type.component';
import { HistoryQuizComponent } from './history-quiz/history-quiz.component';
import { WarDetailComponent } from './detail/war-detail/war-detail.component';
import { HistoryDetailComponent } from './detail/history-detail/history-detail.component';
import { WordDetailComponent } from './detail/word-detail/word-detail.component';


@NgModule({
  declarations: [
    MainComponent,
    MainScreenComponent,
    WarQuizComponent,
    WordQuizComponent,
    typeComponent,
    HistoryQuizComponent,
    WarDetailComponent,
    HistoryDetailComponent,
    WordDetailComponent
  ],
  imports: [
    NbThemeModule.forRoot(),
    CommonModule,
    RouterModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    MainRoutingModule,
    // LayoutModule
  ]
  
})
export class MainModule { }
