import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './core/app-routing.module';

/* COMPONENTS */
import { AppComponent } from './root/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DistributorsComponent } from './distributors/distributors.component';
import { SocketService } from './services/socket.service';

@NgModule({
	declarations: [AppComponent, NavbarComponent, DistributorsComponent],
	imports: [AppRoutingModule, HttpClientModule, BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule],
	providers: [SocketService],
	bootstrap: [AppComponent]
})
export class AppModule {}
