import { Component, Input, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-review.component.html',
  styleUrl: './question-review.component.css'
})
export class QuestionReviewComponent {
  @Input() question: any;
  @Input() scoredQn: number[] = [];

  isCorrect(option: any): boolean {
    if (Array.isArray(this.question.correct)) {
      return this.question.correct.includes(option);
    } else {
      return this.question.correct === option;
    }
  }

  @HostBinding('class.correctQn') get isCorrectQn() {
    return this.isScored(this.question.id);
  }

  isScored(questionId: number): boolean {
    return this.scoredQn.includes(questionId);
  }
}
