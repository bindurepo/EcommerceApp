import { Component, OnInit } from '@angular/core';
import { cardDetails } from '../shared/schema';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-women-dress-list',
  templateUrl: './women-dress-list.component.html',
  styleUrls: ['./women-dress-list.component.css']
})
export class WomenDressListComponent implements OnInit {

  WomenDressesList=[
    {
      imageUrl:'https://i.pinimg.com/originals/a2/87/1a/a2871a4228361fbee942b2b65aeb3620.jpg',
      title:'',
      Description:'$50.00'
    },
    {
      imageUrl:'data:image/jpeg;base64,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',
      title:'',
      Description:'$60.60'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2IZ9rXX829qlCGYXwK1KDSgH3OK87v3usHm12nUD1vL4FTQk3Q',
      title:'',
      Description:'$40.00'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G377E-XPUk-7ltA3jicA-9aalL2VxBGn3rl2ylgukPVhNCboyQ',
      title:'',
      Description:'$39.40'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_jcA_4pNwdE1-3NtfM3cbyTnLZaFnxBC77SypWl7UqIushhG',
      title:'',
      Description:'$69.30'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUregAR3HdVQ7x3B9NvMxJJS8nDCb1BE53uGF3oSwquUGcZBT6g',
      title:'',
      Description:''
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQci3eNss_l8T7rMLw7kG5yu5daZL7qpyTQ26t_kTaM3B4WDYvL',
      title:'',
      Description:'$45.99'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9aA-ds7xXwA7ea00PHEuftW4JrbjxT10oVoCZhsuNJobXypq',
      title:'',
      Description:'$56.32'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n6_qeVK-mxkKtOqXvA4pF1SJDeRt040uqwxlfDiH2YXo9tShCw',
      title:'',
      Description:'$33.99'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbpb9xc3PH42ES86GRIj9d7eYsAzbD70eeDMx--EowT4agPWDpQ',
      title:'',
      Description:'$42.88'
    },
    {
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-c9Zlsp3tfGaGTrlTswelYHwdaqYEvpiN_ulxH36B87xI1fB5Zw',
      title:'',
      Description:'$56.12'
    },
    {
      imageUrl:'https://eg.jumia.is/unsafe/fit-in/0x0/filters:fill(white)/product/98/23021/1.jpg?4056',
      title:'',
      Description:'$59.99'
    }
    

  ]
  constructor() { }

  ngOnInit() {
  }

}
