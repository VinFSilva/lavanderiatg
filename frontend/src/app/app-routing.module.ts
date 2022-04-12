import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

const routes: Routes = [];

@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes), BrowserModule,
    BrowserAnimationsModule, MaterialModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
