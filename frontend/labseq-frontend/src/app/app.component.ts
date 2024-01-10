import { Component } from '@angular/core';
import { LabseqService } from './labseq.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputValue: number = 0;
  result: string | null = null;
  duration: string | null = null;
  error: string | null = null;

  constructor(private labseqService: LabseqService) {}

  calculateLabseq() {
    this.result = null;
    this.duration = null;
    this.error = null;

    // Check if input value is a valid integer number
    if (this.inputValue < 0) {
      this.error = 'Index may be any non-negative integer number';
      return;
    }

    // Call the service to calculate the labseq
    this.labseqService.calculateLabseq(this.inputValue).subscribe({
      next : (data) => {
        // Check if 'result' and 'duration' properties exist in the response
        if (data && data.hasOwnProperty('result') && data.hasOwnProperty('duration')) {
          this.result = data.result;
          this.duration = data.duration;
          console.log(this.result);
        } 
      },
      error :(error) => {
        console.error('Error calculating labseq:', error);
        this.error = 'Error calculating labseq';
      }
  });
  }
}
