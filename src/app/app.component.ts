import { Component, NgModule, VERSION } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

const routes: Routes = [
  { path: 'employeedetails', component: EmployeeComponent },
  // { path: 'B', component: BComponent },
  // { path: 'C', component: CComponent, outlet: 'secondRouter' },
  // { path: 'D', component: DComponent, outlet: 'secondRouter' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
