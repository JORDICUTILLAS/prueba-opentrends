import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cars } from '../cars';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent implements OnInit {
  
  pageTitle: string = 'LISTADO DE COCHES';
  errorMessage = '';
  cars: Cars[] =[];  
  
  constructor(private dataService: DataService){
  }
  
  onHttpError(errorResponse: any){
    console.log('error:', errorResponse);   
  }
  
  ngOnInit(): void {
    this.dataService.getCars().subscribe({
      next: cars => {
        this.cars = cars;       
      },
      error: err => this.errorMessage = err
    });
  }
  
  addCarToArray(newCar: object){
    let lastCar:any = this.cars[this.cars.length-1];  
     //console.log('antes if', lastCar)
    if(lastCar === undefined){
      //console.log('despues if', lastCar)      
      let newCarId = Object.defineProperty( newCar, 'carId', {value: 1,}) 
      this.cars.push(newCarId);
    }else{
      //console.log('despues else', lastCar.carId)
      let newCarId = Object.defineProperty( newCar, 'carId', {value: lastCar.carId + 1,}) 
      this.cars.push(newCarId); 
    } 
  }
  
  deleteCar = (carId:number): void => {
    this.cars = this.cars.filter(cars => cars.carId !== carId);
  } 
  
}
