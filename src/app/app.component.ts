import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,FilsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'deuxinfod';
  disabledButton = true
  counter = 0
  childCounter = 0 
  sumChildren =0
  ngOnInit(): void {
    setTimeout(() => {
      this.title = "2ID"
      this.disabledButton = false
    }, 5000);
   
  }
  IncrementCounter(): void{
    this.counter++;
  }
  ResetCounter(): void{
    this.counter = 0;
  }
  onInputCounterChange(param : number): void{
    this.childCounter = param
  }
  receiveNumber($event: number){
    this.sumChildren += $event
  }
}
