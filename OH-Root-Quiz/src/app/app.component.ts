import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizPageComponent } from "./quiz-page/quiz-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OH-Root-Quiz';
}
