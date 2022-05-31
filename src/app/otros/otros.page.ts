import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../share/food';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {

  foodList:Promise<Array<Food>>;
  foods:Array<Food> = [];
  visible = false;
  constructor(private foodService:FoodService) { }

  ngOnInit() {
    this.foodList = this.foodService.getFoodsByCongelador("otros");
    this.foodList.then((food) => {
      food.forEach(element => {
        this.foods.push(element);
      })
     this.visible = true;
    })
  }

}
