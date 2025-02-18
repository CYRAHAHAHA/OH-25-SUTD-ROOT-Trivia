import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  getQuestions() {
    return [
      {
        id: 1,
        question: "Who was the gold medalist for the men's 200m butterfly at the 2023 SEA Games?",
        type: 'single-choice',
        options: ['Ong Jung Yi', 'Quah Zheng Wen', 'Joseph Schooling', 'Teong Tzen Wei'],
        correct: 'Ong Jung Yi',
      },
      {
        id: 2,
        question: 'Which of the following are student startups in SUTD?',
        type: 'massive-multi-select',
        options: ['TinyEqn', 'Uimagine', 'ObstaX', 'NexSwap', 'Zennah', 'Polymate', 'Glance.sg', 'Castomize', "Stick 'Em", 'Seaform', 'Noshinom', 'Acai Truck'],
        correct: ['TinyEqn', 'Uimagine', 'ObstaX', 'NexSwap', 'Zennah', 'Polymate', 'Glance.sg', 'Castomize', "Stick 'Em", 'Seaform', 'Noshinom', 'Acai Truck'],
      },
      {
        id: 3,
        question: 'What % of the Singapore Uni students population are SUTD students?',
        type: 'single-choice',
        options: ['1%-2%', '2%-5%', '5%-7%', '7%-10%'],
        correct: '2%-5%',
      },
      {
        id: 4,
        question: 'Which vending machine in SUTD is started by an SUTD Alumni?',
        type: 'single-choice',
        options: ['Chicken', 'Coffee', 'Waffle', 'Tea'],
        correct: 'Chicken',
      },
      {
        id: 5,
        question: "What were the name of SUTD's cat(s)?",
        type: 'massive-multi-select',
        options: ['Socks', 'Jonas', 'Whiskers', 'Danae', 'Jerry', 'Yirong', 'Grumpy', 'Lulu', 'Amanda'],
        correct: ['Jerry','Grumpy'],
      },
      {
        id: 6,
        question: 'Which of the following is true about the 3D printers in SUTD?',
        type: 'multi-select',
        options: [
          'Usage is limited, and requires students to have justified project/module requirements',
          'Any student can independently use it after they clear the training lesson as a freshie',
          'The only cost involved is filament, which goes on a pay-as-you-use basis',
          'Over the weekend/over the night prints are not allowed due to unsupervised environment',
          'The latest BAMBU printers are made available to all students regardless of module requirements.',
        ],
        correct: [
          'Any student can independently use it after they clear the training lesson as a freshie',
          'The latest BAMBU printers are made available to all students regardless of module requirements.',
        ],
      },
      {
        id: 7,
        question: 'How many group submissions are there in the first year of studies alone?',
        type: 'single-choice',
        options: ['1-4', '5-8', '9-12', '13 and more'],
        correct: '13 and more',
      },
      {
        id: 8,
        question: 'Select 5 different applications/websites used/useful for SUTD students in the first year.',
        type: 'massive-multi-select',
        options: ['Blender', 'Fusion360', 'Thingiverse', 'VS Code', 'Rhino 3D', 'Canva', 'Figma', 'Twinmotion', 'Arduino IDE', 'Jupyter Notebook', 'Adobe Photoshop', 'Adobe Illustrator'],
        correct: ['Blender', 'Fusion360', 'Thingiverse', 'VS Code', 'Rhino 3D', 'Canva', 'Figma', 'Twinmotion', 'Arduino IDE', 'Jupyter Notebook', 'Adobe Photoshop', 'Adobe Illustrator'],
      },
      {
        id: 9,
        question: 'What is ROOT/makes up ROOT!',
        type: 'multi-select',
        options: ['Student Government', 'Servant Leadership', 'Community Empowerment', 'Fellow UG Students'],
        correct: ['Student Government', 'Servant Leadership', 'Community Empowerment', 'Fellow UG Students'],
      },
    ];
  }
}
