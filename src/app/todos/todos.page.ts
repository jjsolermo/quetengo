import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Food } from '../share/food';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  foodList:Promise<Array<Food>>;
  foods:Array<Food> = [];
  visible = false;
  constructor(private foodService:FoodService) { }


  ngOnInit() {
    this.foodList = this.foodService.getFoods();
    this.foodList.then((food) => {
      food.forEach(element => {
        this.foods.push(element);
      })
     this.visible = true;
    })
  }

}
