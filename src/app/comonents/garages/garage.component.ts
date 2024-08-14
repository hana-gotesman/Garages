import { ChangeDetectionStrategy, Component } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GarageService } from '../../services/garage.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Garage } from '../../models/garage.module';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [CommonModule,FormsModule,FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule,MatCardModule, HttpClientModule, MatProgressSpinnerModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss'
})
export class GarageComponent {
  constructor(private garageService: GarageService, private route: Router) { }
  garages: Garage[] = [];
  areas: string[] = [];
  area:string="";
  searchText:string ="";
  placeholder:string="הזן שם עיר"

  ngOnInit(): void {
    this.gatAllGarages();
    this.gatAllAreas();
  }

  gatAllGarages(city:string="",area:string="") {
    this.garageService.gatAllGarages2(city,area).subscribe(
      res=>{
        this.garages =res.Data.GaragesList;
        this.onSortByName();
       this.filterByArea();
      }
    )
    this.garages =this.garageService.gatAllGarages(city)
     this.onSortByName();
  }

  gatAllAreas() {
    this.garageService.gatAllAreas2().subscribe(
      res=>{
        this.areas =res.Data;
      }
    )
    this.areas=this.garageService.gatAllAreas();
  }

  filterByName(){

      this.gatAllGarages(this.searchText,this.area);
  }

  filterByArea(event:any=null){
    if(event){
      this.area=event.target.value;
    }
    this.gatAllGarages(this.searchText,this.area);
  }

  onSortByName(){
    this.garages=this.garages?.sort((b,a) => b.name.localeCompare(a.name))
  }

}
