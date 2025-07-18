import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule} from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars = [
    {
      image:'/car1.jpg',
      brand:'Toyota',
      model:'Camry',
      year:2022,
      pricePerDay: 3500,
      fuelType:'Petrol',
      seatingCapacity: 5,
      mileage: '15 km/l',
      color: 'White',
      ac: true
    },
    {
      image:'/car2.jpg',
      brand:'Hyundai',
      model:'Creta',
      year:2023,
      pricePerDay: 4000,
      fuelType:'Diesel',
      seatingCapacity: 5,
      mileage: '18 km/l',
      color: 'Black',
      ac: true
    },
    {
      image:'/car3.jpg',
      brand:'Maruti',
      model:'Swift',
      year:2021,
      pricePerDay: 2500,
      fuelType:'Petrol',
      seatingCapacity: 5,
      mileage: '20 km/l',
      color: 'Red',
      ac: false
    },
    {
      image:'/car4.jpg',
      brand:'Honda',
      model:'City',
      year:2022,
      pricePerDay: 3200,
      fuelType:'Petrol',
      seatingCapacity: 5,
      mileage: '17 km/l',
      color: 'Silver',
      ac: true
    },
    {
      image: '/car5.jpg',
      brand: 'Kia',
      model: 'Seltos',
      year: 2023,
      pricePerDay: 4200,
      fuelType: 'Diesel',
      seatingCapacity: 5,
      mileage: '19 km/l',
      color: 'Blue',
      ac: true
    },
    {
      image: '/car6.jpg',
      brand: 'Ford',
      model: 'Ecosport',
      year: 2021,
      pricePerDay: 3000,
      fuelType: 'Petrol',
      seatingCapacity: 5,
      mileage: '16 km/l',
      color: 'Grey',
      ac: true
    }
  ];
}
