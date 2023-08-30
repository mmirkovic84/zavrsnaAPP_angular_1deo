import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  imgs = [
    "<img src='assets/img/flower1.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Fiesta Bouqet</p><p class='text-center fs-4'>$12</p>",
    "<img src='assets/img/flower2.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Ellegance Bouqet</p><p class='text-center fs-4'>$34</p>",
    "<img src='assets/img/flower3.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Beyond Blue Bouqet</p><p class='text-center fs-4'>$23</p>",
    "<img src='assets/img/flower4.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Mixed Roses</p><p class='text-center fs-4'>$65</p>",
    "<img src='assets/img/flower5.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Belle of the Ball Bouqet</p><p class='text-center fs-4'>$12</p>",
    "<img src='assets/img/flower6.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Rainbow Garden</p><p class='text-center fs-4'>$23</p>",
    "<img src='assets/img/flower7.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Best Day Bouqet</p><p class='text-center fs-4'>$56</p>",
    "<img src='assets/img/flower8.jpeg' class='img-fluid'><br><p class='text-center fs-4 mt-1'>Smiles & Ssunshines</p><p class='text-center fs-4'>$88</p>",
  ];

}
