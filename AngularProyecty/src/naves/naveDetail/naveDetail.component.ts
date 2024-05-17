import { Component, Input, OnInit } from '@angular/core';
import { NaveDetail } from './NaveDetail';

@Component({
  selector: 'app-naveDetail',
  templateUrl: './naveDetail.component.html',
  styleUrls: ['./naveDetail.component.css']
})
export class NaveDetailComponent implements OnInit {

  @Input() naveDetail!:NaveDetail
  constructor() { }

  ngOnInit() {
  }

}
