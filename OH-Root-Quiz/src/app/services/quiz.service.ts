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
        footer: 'Ong Jung Yi graduated with the Class of 2024!'
      },
      {
        id: 2,
        question: 'Which of the following are student startups in SUTD?',
        type: 'massive-multi-select',
        options: ['TinyEqn', 'Uimagine', 'ObstaX', 'NexSwap', 'Zennah', 'Polymate', 'Glance.sg', 'Castomize', "Stick 'Em", 'Seaform', 'Noshinom', 'Acai Truck'],
        correct: ['TinyEqn', 'Uimagine', 'ObstaX', 'NexSwap', 'Zennah', 'Polymate', 'Glance.sg', 'Castomize', "Stick 'Em", 'Seaform', 'Noshinom', 'Acai Truck'],
        footer: 'There are many more startups than listed here, and some of them are present to share about their work today!'
      },
      {
        id: 3,
        question: 'What % of the population of Singapore university undergraduate students are SUTD students?',
        type: 'single-choice',
        options: ['1%-3%', '3%-5%', '5%-7%', '7%-10%'],
        correct: '1%-3%',
        footer: "SUTD's undergraduate population is around 1600-2000 students, out of a total of roughly 77000-90000 students in all Singapore universities."
      },
      {
        id: 4,
        question: 'Which vending machine in SUTD is started by an SUTD Alumni?',
        type: 'single-choice',
        options: ['Chicken', 'Coffee', 'Waffle', 'Tea'],
        correct: 'Chicken',
        footer: "That vending machine only joined us very recently!"
      },
      {
        id: 5,
        question: "What were the name of SUTD's cat(s)?",
        type: 'massive-multi-select',
        options: ['Socks', 'Jonas', 'Whiskers', 'Danae', 'Jerry', 'Yirong', 'Grumpy', 'Lulu', 'Amanda'],
        correct: ['Jerry','Grumpy'],
        footer: "Grumpy is a cat that our pioneer batches of alumnis had during their Dover Campus days, and Jerry was a recent addition who unfortunately passed in 2024.",
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
        footer: 'The 3D printers are a great resource for students to print literally anything!'
      },
      {
        id: 7,
        question: 'How many group submissions are there in the first year of studies alone?',
        type: 'single-choice',
        options: ['1-4', '5-8', '9-12', '13 and more'],
        correct: '13 and more',
        footer: "Group submissions are a common occurrence in SUTD's curriculum, and are a great way to learn from your peers!"
      },
      {
        id: 8,
        question: 'Select 5 different applications/websites used/useful for SUTD students in the first year.',
        type: 'massive-multi-select',
        options: ['Blender', 'Fusion360', 'Thingiverse', 'VS Code', 'Rhino 3D', 'Canva', 'Figma', 'Twinmotion', 'Arduino IDE', 'Jupyter Notebook', 'Adobe Photoshop', 'Adobe Illustrator'],
        correct: ['Blender', 'Fusion360', 'Thingiverse', 'VS Code', 'Rhino 3D', 'Canva', 'Figma', 'Twinmotion', 'Arduino IDE', 'Jupyter Notebook', 'Adobe Photoshop', 'Adobe Illustrator'],
        footer: 'These applications are used in various modules and projects, and are great tools to learn and use! Choose 5 for the question.'
      },
      {
        id: 9,
        question: 'What is ROOT/makes up ROOT!',
        type: 'multi-select',
        options: ['Student Government', 'Servant Leadership', 'Community Empowerment', 'Fellow UG Students'],
        correct: ['Student Government', 'Servant Leadership', 'Community Empowerment', 'Fellow UG Students'],
        footer: "That's us!",
      },
    ];
  }
}
