import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';

import {
  SkyInputBoxModule
} from '@skyux/forms';

import {
  SkyPhoneFieldModule
} from '@skyux/phone-field';

import {
  SkyStatusIndicatorModule
} from '@skyux/indicators';

import {
  HomeComponent
}from './home.component'

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyInputBoxModule,
    SkyPhoneFieldModule,
    SkyStatusIndicatorModule
  ],
  bootstrap:[HomeComponent]
})
export class AppSkyModule { }
