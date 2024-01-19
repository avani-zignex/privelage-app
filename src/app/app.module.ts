import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjNavModule } from '@grapecity/wijmo.angular2.nav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScreenComponent } from './screen/screen.component';
import { ComboComponent } from './combo/combo.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ScreenComponent,
    ComboComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjInputModule,
    WjNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
