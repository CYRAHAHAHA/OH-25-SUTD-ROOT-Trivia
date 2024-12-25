import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: any;
  userAnswer: any = null;

  onCheckboxChange(event: any) {
    if (!this.userAnswer) this.userAnswer = [];
    if (event.target.checked) {
      this.userAnswer.push(event.target.value);
    } else {
      this.userAnswer = this.userAnswer.filter((ans: any) => ans !== event.target.value);
    }
  }
}
