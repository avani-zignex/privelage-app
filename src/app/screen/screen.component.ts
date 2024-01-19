import { Component} from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl : './screen.component.html',
  styleUrls: ['./screen.component.scss']

})
export class ScreenComponent{
  comboString: string[] = ["Sidebar", "Grid View", "Vertical bar", "Horizontal bar"];

}
