import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule],
  providers: []


})
export class AppRoutingModule { }
