import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() answerChange = new EventEmitter<any>();
  userAnswer: any = null;

  playSound() {
    const audio = new Audio('assets/btncut.mp3');
    audio.play()
      .catch(error => console.error('Error playing audio:', error));
  }


  onCheckboxChange(event: any) {
    if (!this.userAnswer) this.userAnswer = [];
    if (event.target.checked) {
      this.userAnswer.push(event.target.value);
    } else {
      this.userAnswer = this.userAnswer.filter((ans: any) => ans !== event.target.value);
    }
    this.answerChange.emit(this.userAnswer);
  }

  onRadioChange() {
    this.answerChange.emit(this.userAnswer);
  }

  onTextChange() {
    this.answerChange.emit(this.userAnswer);
  }
}
