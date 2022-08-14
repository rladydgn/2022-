import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbInfiniteListDirective, NbInputModule, NbLayoutModule, NbListModule, NbRadioModule, NbSelectModule, NbTabsetModule, NbThemeModule } from '@nebular/theme'
import { MainRoutingModule } from './main-routing.module';
import { LayoutModule } from '../layout/layout.module';

import { MainComponent } from './main.component';
import { typeComponent } from '../layout/type.component';
import { WarDetailComponent } from './detail/war-detail/war-detail.component';
import { WordDetailComponent } from './detail/word-detail/word-detail.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { WarQuizComponent } from './war-quiz/war-quiz.component';
import { WordQuizComponent } from './word-quiz/word-quiz.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    MainScreenComponent,
    WarQuizComponent,
    WordQuizComponent,
    typeComponent,
    WarDetailComponent,
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
    NbTabsetModule,
    NbInputModule,
    NbListModule,
    InfiniteScrollModule,
    NbRadioModule,
    FormsModule
    // LayoutModule
  ],
  
})
export class MainModule { }
