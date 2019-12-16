import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cars } from '../cars';
import { DataService } from '../data.service';
import { ListCarsComponent } from '../list-cars/list-cars.component';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.scss']
})
export class RegisterCarComponent implements OnInit {

  pageTitle: string = 'AÑADIR COCHE';
  cars: Cars [] =[]

  profileForm = new FormGroup({
    marca: new FormControl(''),
    modelo: new FormControl(''),    
    matricula: new FormControl(''),
    color: new FormControl(''),
    precio: new FormControl(''),
  });


  constructor(private dataService: DataService, private ListCarsComponent: ListCarsComponent){
  }

 // constructor(private dataService: DataService){
  //  this.addedCar = new EventEmitter();
 // }
 // @Output() addedCar: EventEmitter<Cars>;
  
  ngOnInit() {
  }
  
  onSubmit() {    
    console.warn(this.profileForm.value);   
    this.ListCarsComponent.addCarToArray(this.profileForm.value);
    this.profileForm.reset();
    //code for even emitter
    //this.addedCar.emit(this.profileForm.value);
    }

  }


