import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  app_names = [
    'Asset Management',
    'Territory Designer',
    'Route Planner',
    'Disposal Strategy',
    'Route Execution']
}

