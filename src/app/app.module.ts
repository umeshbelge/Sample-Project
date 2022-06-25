import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent, RootRoutingModule } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RootRoutingModule,
    DataTablesModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, EmployeeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
