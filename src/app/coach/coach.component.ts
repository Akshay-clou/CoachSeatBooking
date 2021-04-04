import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
})
export class CoachComponent {
  constructor() {}
  //Take Number of seats to be booked from Parent App Component
  @Input('seats') seats: number;

  /*Initializing array for Intial Coach seat  status
which contain 12 objects  for each row with each object containing an
 array of objects with seat number
 and availabilty status*/

  seatData: any[] = [
    {
      row: [
        {
          id: 1,

          status: 'NA',
        },
        {
          id: 2,

          status: 'NA',
        },
        {
          id: 3,

          status: 'NA',
        },
        {
          id: 4,

          status: 'NA',
        },

        {
          id: 5,

          status: 'NA',
        },
        {
          id: 6,

          status: 'NA',
        },
        {
          id: 7,

          status: 'NA',
        },
      ],
    },
    {
      row: [
        {
          id: 8,

          status: 'NA',
        },
        {
          id: 9,

          status: 'NA',
        },
        {
          id: 10,

          status: 'NA',
        },
        {
          id: 11,

          status: 'A',
        },
        {
          id: 12,

          status: 'A',
        },
        {
          id: 13,

          status: 'A',
        },
        {
          id: 14,

          status: 'NA',
        },
      ],
    },
    {
      row: [
        {
          id: 15,

          status: 'NA',
        },
        {
          id: 16,

          status: 'A',
        },
        {
          id: 17,

          status: 'A',
        },
        {
          id: 18,

          status: 'A',
        },
        {
          id: 19,

          status: 'A',
        },
        {
          id: 20,

          status: 'A',
        },
        {
          id: 21,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 22,

          status: 'A',
        },
        {
          id: 23,

          status: 'A',
        },
        {
          id: 24,

          status: 'A',
        },
        {
          id: 25,

          status: 'A',
        },
        {
          id: 26,

          status: 'A',
        },
        {
          id: 27,

          status: 'A',
        },
        {
          id: 28,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 29,

          status: 'A',
        },
        {
          id: 30,

          status: 'A',
        },
        {
          id: 31,

          status: 'A',
        },
        {
          id: 32,

          status: 'A',
        },
        {
          id: 33,

          status: 'A',
        },
        {
          id: 34,

          status: 'A',
        },
        {
          id: 35,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 36,

          status: 'A',
        },
        {
          id: 37,

          status: 'A',
        },
        {
          id: 38,

          status: 'A',
        },
        {
          id: 39,

          status: 'A',
        },
        {
          id: 40,

          status: 'A',
        },
        {
          id: 41,

          status: 'A',
        },
        {
          id: 42,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 43,

          status: 'A',
        },
        {
          id: 44,

          status: 'A',
        },
        {
          id: 45,

          status: 'A',
        },
        {
          id: 46,

          status: 'A',
        },
        {
          id: 47,

          status: 'A',
        },
        {
          id: 48,

          status: 'A',
        },
        {
          id: 49,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 50,

          status: 'A',
        },
        {
          id: 51,

          status: 'A',
        },
        {
          id: 52,

          status: 'A',
        },
        {
          id: 53,

          status: 'A',
        },
        {
          id: 54,

          status: 'A',
        },
        {
          id: 55,

          status: 'A',
        },
        {
          id: 56,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 57,

          status: 'A',
        },
        {
          id: 58,

          status: 'A',
        },
        {
          id: 59,

          status: 'A',
        },
        {
          id: 60,

          status: 'A',
        },
        {
          id: 61,

          status: 'A',
        },
        {
          id: 62,

          status: 'A',
        },
        {
          id: 63,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 64,

          status: 'A',
        },
        {
          id: 65,

          status: 'A',
        },
        {
          id: 66,

          status: 'A',
        },
        {
          id: 67,

          status: 'A',
        },
        {
          id: 68,

          status: 'A',
        },
        {
          id: 69,

          status: 'A',
        },
        {
          id: 70,

          status: 'A',
        },
      ],
    },

    {
      row: [
        {
          id: 71,

          status: 'A',
        },
        {
          id: 72,

          status: 'A',
        },
        {
          id: 73,

          status: 'A',
        },
        {
          id: 74,

          status: 'A',
        },
        {
          id: 75,

          status: 'A',
        },
        {
          id: 76,

          status: 'A',
        },
        {
          id: 77,

          status: 'A',
        },
      ],
    },
    {
      row: [
        {
          id: 78,

          status: 'A',
        },
        {
          id: 79,

          status: 'A',
        },
        {
          id: 80,

          status: 'A',
        },
      ],
    },
  ];

  isFull: boolean = false;

  //Class for Available and Not available Seats added dynamically using attribute binding

  statusAClass = 'btn btn-success btn-sm';
  statusNAClass = 'btn btn-danger btn-sm';


  //Initializing  Array containing booked seat numbers
  bookedSeat1: any[] = [];

  //Variable to show Booked Seat number using structural directive *NgIf

  showSeat: boolean = false;

  /*Will be called from app component each time user submit the Number of  Seats to be booked
and will check the seats available and change their status at view template*/

  bookSeats(no) {
    let count = 0;
    let isFullcount = 0;
    let bookdedSeat2 = [];

      for (let item of this.seatData) {
        for (let item1 of item.row) {
          if (item1.status == 'A' && count < no) {
            bookdedSeat2.push(item1.id);
            item1.status = 'NA';
            count++;
          } else if (item1.status == 'NA') {
            isFullcount++;
          }

          if (count > no) break;
        }
        this.bookedSeat1 = bookdedSeat2;
      }
      if (this.bookedSeat1.length != 0) {
        this.showSeat = true;
      } else {
        this.showSeat = false;
      }

    if (isFullcount === 80) {
      this.isFull = true;
    }
    // console.log('Seatdata', this.bookedSeat1);
  }
}
