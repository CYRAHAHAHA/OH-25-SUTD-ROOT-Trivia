import { Routes } from '@angular/router';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'results', component: ResultsPageComponent }
];