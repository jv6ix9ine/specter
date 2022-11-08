import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('200ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})

export class ContactComponent implements OnInit {
  public contactForm!: FormGroup;
  public invalid: boolean = false
  public invalidFlag: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private contactService: ContactService
  ) { 
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,6}$")]],
      comments: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  formValidation(){
    if( this.contactForm.controls['name'].errors ){
      this.invalidFlag = 'invalid-name';
      this.invalid = true
    };
    if( this.contactForm.controls['email'].errors ){
      this.invalidFlag = 'invalid-email';
      this.invalid = true
    };
    if( this.contactForm.controls['comments'].errors ){
      this.invalidFlag = 'invalid-comments';
      this.invalid = true
    };
    if(this.contactForm.invalid){
      this.invalidFlag = 'invalid-all'
      return
    }

    this.submit()
    
  }

  resetValidations(flag?: string){
    this.invalid = false
    this.invalidFlag = ''
  }

  async submit(){
    try {
      await this.contactService.sendContactMail(this.contactForm.value)
      this._snackBar.open('¡En breve nos pondremos en contacto!', 'Aceptar', {
        verticalPosition: 'bottom',
        panelClass: 'blue-snackbar'
      })
      this.contactForm.reset()
      
    } catch (error) {
      console.log(error);
      this._snackBar.open('Ha ocurrido en error en el servidor', 'Aceptar', {
        verticalPosition: 'bottom',
        panelClass: 'red-snackbar'
      }) 
      throw error
    }
    
  }



}
