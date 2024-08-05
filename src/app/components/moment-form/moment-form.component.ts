import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { title } from 'process';
import { Moment } from '../../Moment';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!:  string


    momentForm!:  FormGroup




    submit(){
      if(this.momentForm.invalid){
        return
      }
      console.log(this.momentForm.value)
      this.onSubmit.emit(this.momentForm.value)
    }
    onFileSlector(event:any){
      const file: File = event.target.files[0]
      this.momentForm.patchValue({image:file})
    }

    ngOnInit():void{
      this.momentForm =  new  FormGroup({
        id: new FormControl(''),
        title: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      })
    }

    get title(){
      return  this.momentForm.get('title')!
    }
    get description(){
      return  this.momentForm.get('description')!
    }
}
