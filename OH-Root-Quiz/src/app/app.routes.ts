import { Routes } from '@angular/router';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'results', component: ResultsPageComponent }
];