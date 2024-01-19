import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  // accordian options
  showIcons = true;
  autoSwitch = true;
  isAnimated = true;
  allowCollapseAll = true;
  allowExpandMany = true;
}
