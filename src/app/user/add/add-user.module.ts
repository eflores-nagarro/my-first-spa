import {
    CommonModule
  } from '@angular/common';
  
  import {
    NgModule
  } from '@angular/core';
  
  import {
    FormsModule,
    ReactiveFormsModule
  } from '@angular/forms';
  
  import { AppSkyModule } 
  from '../../app-sky.module';
  
  import {
    AddUserComponent
  } from './add-user.component';
  
  @NgModule({
    declarations: [
      AddUserComponent
    ],
    imports: [
      CommonModule,
      AppSkyModule,
      FormsModule,
      ReactiveFormsModule
    ]
    ,
    exports: [
      AddUserComponent
    ]
  })
  export class AddUserModule { }