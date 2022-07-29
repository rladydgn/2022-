import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSelectModule, NbSidebarModule, NbThemeModule } from '@nebular/theme'
import { typeComponent } from './layout/type.component';
import { MainComponent } from './main/main.component';
import { WarQuizComponent } from './main/war-quiz/war-quiz.component';
import { WordQuizComponent } from './main/word-quiz/word-quiz.component';
import { MainRoutingModule } from './layout/main-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    typeComponent,
    MainComponent,
    WarQuizComponent,
    WordQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
