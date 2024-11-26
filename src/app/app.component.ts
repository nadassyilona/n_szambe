import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-num',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './num.component.html',
  styleUrl: './num.component.css'
})
export class NumComponent {
num !: number;
triple !: number;
displayTriplaNum: boolean = false;
resultList: number[] = [];

getNum() {
  console.log("Triplázás...");
  const result = this.num * 3;
  this.resultList.push(result)
  this.displayTriplaNum = true;
  console.log(this.resultList);
 
}
}