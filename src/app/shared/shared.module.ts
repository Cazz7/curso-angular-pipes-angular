import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    MenuComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    MenuBarComponent,
    ToolbarModule,
    ToolbarModule,
  ]
})
export class SharedModule { }
