import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistdataService {

  constructor() { }

  projectIndex = signal<number | null>(null);
  projectOpen = signal<boolean>(false);

  setProjectIndex(index: number | null) {
    this.projectIndex.set(index);
    this.projectOpen.set(index !== null);
  }

  projectList = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      image: 'join.png',
      imageBig: 'join_big.png',
      imgPosition: { top: '0' },
      githubLink: 'https://github.com/RobertPap57/Join',
      testLink: 'https://robert-pap.de/projects/Join/'
    },
    {
      title: 'Pokedex',
      description: 'Explore Pokémon with a sleek interface. View stats, types, and abilities fetched from PokeAPI for every Pokémon.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Rest-Api'],
      image: 'pokedex.png',
      imageBig: 'pokedex_big.png',
      imgPosition: { top: '73px' },
      githubLink: 'https://github.com/RobertPap57/Pokedex',
      testLink: 'https://robert-pap.de/projects/pokedex/'
    },
    {
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'el_pollo_loco.png',
      imageBig: 'el_pollo_loco_big.png',
      imgPosition: { bottom: '73px' },
      githubLink: 'https://github.com/RobertPap57/ElPolloLoco',
      testLink: 'https://robert-pap.de/projects/ElPolloLoco/'
    },
    {
      title: 'DA Bubble',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      image: 'da_bubble.png',
      imageBig: 'da_bubble_big.png',
      imgPosition: { bottom: '0' },
      githubLink: 'https://github.com/RobertPap57/DABubble',
      testLink: 'https://dabubble.robert-pap.de/'

    }
  ]
}
