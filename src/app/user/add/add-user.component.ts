import {
  Component, OnInit
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'

import { SkyValidators } 
from '@skyux/validation';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
   public contactPhone: FormControl;
   public addUserForm: FormGroup;
   public ngOnInit(): void {
    this.contactPhone = new FormControl();
    this.addUserForm = new FormGroup({
      'contactPhone': this.contactPhone,
      'email': new FormControl(undefined, 
        [Validators.required, 
          SkyValidators.email])
    });
  }
}
