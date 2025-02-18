import { Component } from '@angular/core';
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

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
  }

  playSound() {
    const audio = new Audio('assets/btncut.mp3');
    audio.play()
      .then(() => console.log('Audio playing...'))
      .catch(error => console.error('Error playing audio:', error));
  }
}
