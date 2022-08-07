import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbSelectModule, NbSidebarModule, NbThemeModule } from '@nebular/theme'
import { typeComponent } from './layout/type.component';
import { MainRoutingModule } from './main/main-routing.module';
import { LayoutModule } from './layout/layout.module';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
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
    MainRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
