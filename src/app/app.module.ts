import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

@NgModule({
  imports: [BrowserModule, AppRoutingModule, AppComponent], // Include AppComponent here
  providers: [],
})
export class AppModule {}
