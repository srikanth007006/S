import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDataService } from './service/employee-data.service';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { FormsModule } from '@angular/forms';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmployeeTableComponent,
    DialogBoxComponent,
    
    
  ],
  entryComponents:[

    DialogBoxComponent
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
