import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoachComponent } from './coach/coach.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Local template variable used to get form value
  @ViewChild('f', { static: false }) seatsForm: NgForm;

  //Local variable used to call method of Coach Component(Child Component)

  @ViewChild('child') child:CoachComponent;

  title = 'trainBookingApp';
  seats:number;

// Get the number of seatsto be booked and pass it to Coach Component(Child of this Component)
  onSubmit(f){
     this.seats=f.noSeats;
    // console.log(f.noSeats);
    this.child.bookSeats(this.seats);
    this.seatsForm.reset();
  }

}
