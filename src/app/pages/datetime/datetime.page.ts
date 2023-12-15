import { Component, OnInit } from '@angular/core';
import {format, parseISO} from 'date-fns';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  modes = ['date','date-time','month','month-year','time','time-date','year'];
  selectedMode = 'date';
  dateValue = format(new Date(), 'yyyy-MM-dd')+ 'T11:00:00.000Z';
  formattedString = '';

  constructor() {
    this.setToday();
  }

  ngOnInit() {
  }

  private setToday() {
    this.formattedString = (format(parseISO(
      format(new Date(),
        'yyyy-MM-dd') + 'T09:00:00.000Z'
    ), 'HH:mm, MMM d, yyyy'));
  }

  dateChanged(value: any){
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'HH:mm, MMM d, yyyy');
  }
}
