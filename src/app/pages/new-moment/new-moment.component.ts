import { MomentService } from './../../services/moment.service';
import { Moment } from './../../Moment';
import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent  implements  OnInit{
btnText = 'Compartilhar!'

  constructor( private momentService: MomentService , private messageService: MessagesService, private  router: Router){}

  ngOnInit():void{}

  async crateHandler(moment:Moment){
  const formData = new FormData

    formData.append('title', moment.title)
    formData.append('description', moment.description)

    if(moment.image){
      formData.append('image',moment.image)
    }



    await this.momentService.createMoment(formData).subscribe()


    this.messageService.add('Momento adicionado com  sucesso!')


    this.router.navigate([''])
  }
}
