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
  SkyDatepickerModule
} from '@skyux/datetime';

import {
  SkyIdModule
} from '@skyux/core';

import {
  SkyEmailValidationModule
} from '@skyux/validation';

import {
  SkyStatusIndicatorModule,
  SkyIconModule
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
    SkyDatepickerModule,
    SkyIdModule,
    SkyEmailValidationModule,
    SkyStatusIndicatorModule,
    SkyIconModule
  ],
  bootstrap:[HomeComponent]
})
export class AppSkyModule { }
