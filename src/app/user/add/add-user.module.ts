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

  import {
    SkyInputBoxModule
  } from '@skyux/forms';
  
  import {
    SkyIdModule
  } from '@skyux/core';
  
  import {
    SkyEmailValidationModule
  } from '@skyux/validation';
  
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
      SkyInputBoxModule,
      ReactiveFormsModule,
      SkyEmailValidationModule,
      SkyIdModule
    ]
    ,
    exports: [
      AddUserComponent
    ]
  })
  export class AddUserModule { }