import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuDemoComponent } from './menu-demo/menu-demo.component';
import { MenuButtonDirective, MenuDirective, MenuItemDirective, MenuItemsPanelDirective } from './lib/menu';

@NgModule({
  declarations: [
    AppComponent,
    MenuDemoComponent,
    MenuDirective,
    MenuButtonDirective,
    MenuItemsPanelDirective,
    MenuItemDirective,
  ],
  exports :  [   MenuDemoComponent,
    MenuDirective,
    MenuButtonDirective,
    MenuItemsPanelDirective,
    MenuItemDirective,],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
