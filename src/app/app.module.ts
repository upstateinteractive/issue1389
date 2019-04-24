import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FailingPageComponent } from './failing-page/failing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSelectModule, NbInputModule, NbDatepickerModule, NbSidebarModule, NbListModule, NbCardModule, NbTreeGridModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { SwitchPageComponent } from './switch-page/switch-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FailingPageComponent,
    SwitchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbSelectModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    ReactiveFormsModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbCardModule,
    NbTreeGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
