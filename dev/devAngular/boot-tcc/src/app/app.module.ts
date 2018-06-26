import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './service/login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {CustomMaterialModule} from "./material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app.routing.module';
import { ChatComponent } from './chat/chat.component';

import { MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatGridListModule, MatInputModule, MatListModule, MatIconModule, MatSidenavModule, MatTooltipModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    LoginModule,
    AppRoutingModule,
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule
  ],
  
exports: [
    CommonModule, 
    MatToolbarModule, 
    MatButtonModule
],
  providers: [
    LoginService,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
