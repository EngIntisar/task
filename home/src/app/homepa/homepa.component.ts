import { Component } from '@angular/core';

@Component({
  selector: 'app-homepa',
  templateUrl: './homepa.component.html',
  styleUrls: ['./homepa.component.css']
})
export class HomepaComponent
 {
  details:string = 'Details';
  studentName:string = '';


onStudentNameChange(event:Event): void{
 this.studentName = (event.target as HTMLInputElement).value;
}




}
