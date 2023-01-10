import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { appRoutingModule } from '../app-roating.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],

  imports: [
    CommonModule,
    appRoutingModule
  ]
})
export class SharedModule { }
