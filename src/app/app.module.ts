import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  }
];

@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule],
  declarations: [AppComponent, CardComponent, NavigationComponent, ThemePickerComponent, FooterComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
