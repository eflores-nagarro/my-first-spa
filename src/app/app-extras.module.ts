import {
  NgModule
} from '@angular/core';

import { 
  AgGridModule 
} from 'ag-grid-angular';

import {
  AppSkyModule
} from './app-sky.module';

import { SkyDataManagerModule } 
from '@skyux/data-manager';

import {
  SkyDocsToolsModule,
  SkyDocsToolsOptions
} from '@skyux/docs-tools';

import {
  SkyCheckboxModule
} from '@skyux/forms';

@NgModule({
  imports:[
    AgGridModule.withComponents([])
  ],
  exports: [
    AppSkyModule,
    AgGridModule,
    SkyDataManagerModule,
    SkyDocsToolsModule,
    SkyCheckboxModule
  ],
  providers: [
    {
      provide: SkyDocsToolsOptions
    }
  ]
})
export class AppExtrasModule { }
