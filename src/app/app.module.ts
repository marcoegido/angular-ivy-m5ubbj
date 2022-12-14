import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TituloComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
