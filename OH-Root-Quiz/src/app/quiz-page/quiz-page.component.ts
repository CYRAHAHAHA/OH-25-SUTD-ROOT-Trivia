import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { QuestionComponent } from '../components/question/question.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [QuestionComponent,CommonModule],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent {
  questions: any[] = [];
  userAnswers: any[] = Array(9).fill(null);

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }

  updateAnswer(questionId: number, userAnswer: any) {
    this.userAnswers[questionId] = userAnswer;
    console.log(this.userAnswers);
  }

  Submit() {
    const audio = new Audio('assets/btncut.mp3');
    audio.play()
      .catch(error => console.error('Error playing audio:', error));

    // Collect user answers
    this.userAnswers = this.questions.map(question => ({
      id: question.id,
      userAnswer: this.userAnswers[question.id],
      correctAnswer: question.correct
    }));
    console.log("Sending over, user answers: ", this.userAnswers);
    // Navigate to the results page and pass the user answers
    this.router.navigateByUrl('/results', {
      state: { report: this.userAnswers },
    });  }
}
