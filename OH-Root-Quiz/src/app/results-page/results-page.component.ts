import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-page.component.html',
  styleUrl: './results-page.component.css'
})
export class ResultsPageComponent {
  userAnswers: any[] = [];
  score: number = 0;
  scoredQn: any[] = [];

  constructor(private router: Router, private location: Location) {
    const state = this.location.getState() as {
      report: any[];
    };
    this.userAnswers = state.report;
    console.log("received:", this.userAnswers);
  }

  ngOnInit(): void {
    this.calculateScore();
  }

  calculateScore() {
    console.log("calculating with: ", this.userAnswers);
    this.score = this.userAnswers.reduce((acc, answer) => {
      if (answer.id == 8) {
        console.log(answer.userAnswer, answer.userAnswer.length);
        return acc + (answer.userAnswer.length == 5 ? 1:0);
      }
      if (answer.correctAnswer instanceof Array) {
        let user = answer.userAnswer.sort();
        let correct = answer.correctAnswer.sort();
        return acc + (user.every((value: any, index: number) => value === correct[index])?1:0);
      }
      else{
        return acc + (answer.userAnswer == answer.correctAnswer?1:0);
      }
      return acc;
    }, 0);
    console.log(this.score);
  }
}
