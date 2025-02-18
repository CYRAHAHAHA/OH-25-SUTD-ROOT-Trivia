import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  startQuiz() {
    const audio = new Audio('assets/btncut.mp3');
    audio.play()
      .catch(error => console.error('Error playing audio:', error));

    setTimeout(() => {
      this.router.navigateByUrl('/quiz')
    },220);
  }
}
