import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { QuestionReviewComponent } from '../components/question-review/question-review.component';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-results-page',
  standalone: true,
  imports: [CommonModule, QuestionReviewComponent],
  templateUrl: './results-page.component.html',
  styleUrl: './results-page.component.css'
})
export class ResultsPageComponent {
  userAnswers: any[] = [];
  score: number = 0;
  scoredQn: any[] = [];
  questions: any[] = [];

  constructor(private quizService: QuizService, private router: Router, private location: Location) {
    const state = this.location.getState() as {
      report: any[];
    };
    this.userAnswers = state.report;
    //change all null values to 0 in userAnswers
    this.userAnswers = this.userAnswers.map((answer) => {
      if (answer.userAnswer == null) {
        answer.userAnswer = 0;
      }
      return answer;
    });
    console.log("received:", this.userAnswers);
  }

  ngOnInit(): void {
    this.calculateScore();
    this.questions = this.quizService.getQuestions();
    window.scrollTo(0, 0);
  }

  calculateScore() {
    console.log("calculating with: ", this.userAnswers);
    this.score = this.userAnswers.reduce((acc, answer) => {
      if (answer.id == 2) {
        if (answer.userAnswer.length == 12) {
          this.scoredQn.push(answer.id);
          return acc + 1;
        }
      }
      if (answer.id == 8) {
        if (answer.userAnswer.length == 5 ? 1:0){
          this.scoredQn.push(answer.id);
          return acc + 1;
        }
      }
      if (answer.correctAnswer instanceof Array) {
        if (!(answer.userAnswer instanceof Array)){
          return acc;
        }
        let user = answer.userAnswer.sort();
        let correct = answer.correctAnswer.sort();
        if(user.every((value: any, index: number) => value === correct[index])){
          this.scoredQn.push(answer.id);
          return acc + 1;
        }
      }
      if(answer.userAnswer == answer.correctAnswer){
        this.scoredQn.push(answer.id);
        return acc + 1;
      }
      return acc;
    }, 0);
    console.log(this.score);
  }

  BackToHome() {
    const audio = new Audio('assets/btncut.mp3');
    audio.play()
      .catch(error => console.error('Error playing audio:', error));

    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 220); 
  }
}
