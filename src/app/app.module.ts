import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ItemsModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
