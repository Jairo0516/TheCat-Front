import { Injectable } from '@angular/core';
import { NgxIzitoastService } from 'ngx-izitoast';

@Injectable({
  providedIn: 'root'
})

export class NotificationsService {

  constructor(
    public iziToast: NgxIzitoastService
  ) {

    this.iziToast.settings({
      timeout: 6000,
      resetOnHover: false,
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      position: 'bottomRight'
    });

  }

  success(message: string){
    this.iziToast.success({
      message: message,
    });
  }

  warning(message: string){
    this.iziToast.warning({
      message: message
    })
  }

  info(message: string){
    this.iziToast.warning({
      message: message
    })
  }

  error(message: string){
    this.iziToast.warning({
      message: message
    })
  }

}
