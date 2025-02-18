import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.userAnswers = navigation.extras.state['userAnswers'];
      this.calculateScore();
    }
  }

  calculateScore() {
    this.score = this.userAnswers.reduce((acc, answer) => {
      return acc + (answer.userAnswer === answer.correctAnswer ? 1 : 0);
    }, 0);
  }
}
