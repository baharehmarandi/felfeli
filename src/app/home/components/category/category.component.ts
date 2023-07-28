import {Component, OnInit} from '@angular/core';
import {ICategory} from "./category.inteface";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  hover: boolean[] = [false, false, false, false, false, false, false, false];

  categoryLists: ICategory[] = [
    {id: 1, name: "عرقیجات و نوشیدنی ها", image: "assets/images/food-and-restaurant (1).png", color: "#E5F9FF"},
    {id: 2, name: "فرنگیجات", image: "assets/images/food-and-restaurant.png", color: "#FFF1F2"},
    {id: 3, name: "سبزیجات", image: "assets/images/sabzijat.png", color: "#F3FFE1"},
    {id: 4, name: "روغن ها و تزئینات غذا", image: "assets/images/water.png", color: "#FCF6F2"},
    {id: 5, name: "ادویه، چاشنی، ترشیجات", image: "assets/images/adviye.png", color: "#FFF2EE"},
    {id: 6, name: "خشکبار، حبوبات، خرما", image: "assets/images/food-and-restaurant (3).png", color: "#E5EAFF"},
    {id: 7, name: "خوراکی های خانگی و دیگر محصولات", image: "assets/images/dinner.png", color: "#E2F1FC"},
    {id: 8, name: "عسل، شیره، مربا", image: "assets/images/food-and-restaurant (2).png", color: "#FEF8DA"},
    ]

  showHover(index: number): void {
    this.hover[index] = true
  }

  unsetHover(index: number): void {
    this.hover[index] = false
  }
}
