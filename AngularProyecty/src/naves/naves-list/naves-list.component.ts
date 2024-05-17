import { Component, OnInit } from '@angular/core';
import { NaveService } from '../nave.service';
import { NaveDetail } from '../naveDetail/NaveDetail';


@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {

  naves :Array<NaveDetail>=[]
  select : boolean = false;
  nave! :NaveDetail
  naveNeutral:number=0;
  naveImperio:number=0;
  naveRebelion:number=0;
  getNaves(){
    this.service.getNaves().subscribe((allNaves)=>{
      this.naves = allNaves;
      this.naveNeutral = this.service.totalNavesNeutral(this.naves);
      this.naveImperio = this.service.totalNavesImperio(this.naves);
      this.naveRebelion = this.service.totalNavesRebelion(this.naves);
    })
  }
  selected(nave:NaveDetail){
    this.select = true;
    this.nave = nave;
  }

  constructor(private service:NaveService) { }

  ngOnInit() {
    this.getNaves()
  }

}
