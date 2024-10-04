import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fils',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fils.component.html',
  styleUrl: './fils.component.scss'
})
export class FilsComponent {
  @Input()
  message!: string;
  @Output() inputChange  = new EventEmitter<number>()

  changeCounter : number = 0
  counter : number = 0
  lastCounter : number = 0
  onChangeInput() : void{
    this.changeCounter++;
    this.inputChange.emit(this.counter - this.lastCounter);  
    this.lastCounter = this.counter

  }
}
