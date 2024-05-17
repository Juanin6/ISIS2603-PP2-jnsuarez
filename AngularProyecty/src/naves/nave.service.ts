import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaveDetail } from './naveDetail/NaveDetail';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NaveService {
private  baseUrl:string = environment.baseUrl
private navesRebelion:number=0
private navesImperio:number=0
private navesNeutral:number=0
constructor(private http:HttpClient) { }

getNaves():Observable<NaveDetail[]>{
  return this.http.get<NaveDetail[]>(this.baseUrl)
}
totalNavesRebelion(naves:NaveDetail[]){
  naves.forEach(element => {
    if(element.bando.match("Rebelión")){
      this.navesRebelion+=1
    }
  });
  return this.navesRebelion;
}
totalNavesImperio(naves:NaveDetail[]){
  naves.forEach(element => {
    if(element.bando.match("Imperio")){
      this.navesImperio+=1
    }
  });
  return this.navesImperio
}
totalNavesNeutral(naves:NaveDetail[]){
  naves.forEach(element => {
    if(element.bando.match("Neutral")){
      this.navesNeutral+=1
    }
  });
  return this.navesNeutral
}

}
