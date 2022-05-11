import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../share/food';
import { ModalController } from '@ionic/angular';
import { ModalFoodComponent } from '../modal-food/modal-food.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  foodList:Promise<Array<Food>>;
  foods:Array<Food> = [];
  visible = false;
  modal = null;
  constructor(private router:Router,private foodService:FoodService ,private modalCtrl: ModalController) { }

  ngOnInit() {
    this.foodList = this.foodService.getFoodsByExpiration();
    this.foodList.then((food) => {
      food.forEach(element => {
        this.foods.push(element);
      })
     this.visible = true;
    })
  }
  async openModal(food:Food) {
    this.modal = await this.modalCtrl.create({
     component: ModalFoodComponent,
     breakpoints: [0, 0.3, 0.5, 0.8],
     initialBreakpoint: 0.5,
     componentProps: {
       food
     },
     
   });
   this.modal.onDidDismiss(data => {
    console.log('dismiss');
   });
   await this.modal.present();
 }

 dismissModal() {
   if (this.modal) {
     this.modal.dismiss().then(() => {
       this.modal = null;
     });
   }
 }


}
