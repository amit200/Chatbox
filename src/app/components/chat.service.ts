import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  mySunjct = new Subject();
  // public p = '78';
  public arry = [
    {
      image: '../../../assets/p1.jpg',
      name: 'test',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'whatsup?',
          status: 1,
        },
        {
          message: 'ok',
          status: 0,
        },
      ],
    },
    {
      name: 'people',
      image: '../../../assets/p2.jpg',
      chat: [
        {
          message: 'your name please!',
          status: 0,
          Image: '',
        },
        {
          message: 'what are you doing?',
          status: 0,
        },
        {
          message: 'nice',
          status: 1,
        },
        {
          message: 'your name please!',
          status: 1,
          Image: '',
        },
        {
          message: 'what are you doing?',
          status: 0,
        },
        {
          message: 'nice',
          status: 0,
        },
      ],
    },
    {
      name: 'xyz',
      image: '../../../assets/p3.jpeg',
      chat: [
        {
          message: 'hello student!',
          status: 0,
        },
        {
          message: 'tomorrow is your holiday',
          status: 1,
        },
        {
          message: 'do your pending work',
          status: 0,
        },
      ],
    },
    {
      name: '123',
      image: '../../../assets/p4.jpg',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'Hello',
          status: 1,
        },
        {
          message: 'what happen?',
          status: 0,
        },
      ],
    },
    {
      name: 'pqr',
      image: '../../../assets/p5.jpg',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'hii',
          status: 1,
        },
        {
          message: 'hii',
          status: 0,
        },
      ],
    },
    {
      name: 'pqr',
      image: '../../../assets/p6.jpeg',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'hii',
          status: 1,
        },
        {
          message: 'hii',
          status: 0,
        },
      ],
    },
    {
      name: 'pqr',
      image: '../../../assets/p7.jpeg',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'hii',
          status: 1,
        },
        {
          message: 'hii',
          status: 0,
        },
      ],
    },
    {
      name: 'pqr',
      image: '../../../assets/p7.jpeg',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'hiiiiiiiiii',
          status: 1,
        },
        {
          message: 'hii',
          status: 0,
        },
      ],
    },
    {
      name: 'pqr',
      image: '../../../assets/p7.jpeg',
      chat: [
        {
          message: 'hii',
          status: 0,
        },
        {
          message: 'yes',
          status: 0,
        },
        {
          message: 'hii',
          status: 0,
        },
      ],
    },
  ];
  constructor() {
    this.mySunjct.next(this.arry);
  }
  gtusr() {
    return this.arry;
  }

  gUsr(name: any) {
    return this.arry.filter((item) => item.name === name);
  }

  uploadImage(name: any, image: any) {
    console.log(image);
    const index = this.arry.findIndex((item) => item.name === name);
    if (index > -1) {
      const obj = {
        message: '',
        status: 0,
        image: image,
      };
      this.arry[index].chat.push(obj);
      console.log(this.arry);
    }
  }
}
