import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScreenComponent } from './screen/screen.component';
import { GridComponent } from './grid/grid.component';
import { ComboComponent } from './combo/combo.component';

const routes: Routes = [
  { path: '', redirectTo: '/sidebar', pathMatch: 'full' },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'screen', pathMatch: 'full' },
      { path: 'screen', component: ScreenComponent },
      { path: 'grid', component: GridComponent },
      { path: 'combo', component: ComboComponent },
      // Add more routes for other sections
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
