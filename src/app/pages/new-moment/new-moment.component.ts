import { Moment } from './../../Moment';
import { Component } from '@angular/core';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
btnText = 'Compartilhar!'

crateHandler(moment:Moment){
  const formData = new FormData

  formData.append('title', moment.title)
  formData.append('description', moment.desciption)

  if(moment.image){
    formData.append('image',moment.image)
  }
}
}
