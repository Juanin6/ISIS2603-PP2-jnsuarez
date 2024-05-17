import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesComponent } from './naves.component';
import { NavesListComponent } from './naves-list/naves-list.component';
import { NaveDetailComponent } from './naveDetail/naveDetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[NavesListComponent],
  declarations: [NavesComponent,NavesListComponent,NaveDetailComponent]
})
export class NavesModule { }
