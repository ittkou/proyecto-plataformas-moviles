import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ibiblioteca',
  templateUrl: './ibiblioteca.page.html',
  styleUrls: ['./ibiblioteca.page.scss'],
})
export class IbibliotecaPage implements OnInit {


  public arrayMangas = [
    {
      imagen:'https://cdn.myanimelist.net/images/manga/3/80661.jpg',
      titulo:'One punch man',
      descripcion: 'After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero.'
    },
    {
      imagen:'https://cdn.myanimelist.net/images/manga/5/265185.jpg',
      titulo:'Banana Fish',
      descripcion:'Ash Lynx is a beauty, a genius—and a murderer. Since childhood, he had been in the care of Dino "Papa" Golzine, the mafia boss who turned him into the ruthless killer he is now.'
    },
    {
      imagen:'https://cdn.myanimelist.net/images/manga/2/210355.jpg',
      titulo:'Bakemonogatari',
      descripcion:'Koyomi Araragi is no stranger to the abnormal. During the spring break of his third year in high school, a fateful encounter with vampire Kiss-Shot Acerola-Orion Heart-Under-Blade turns him into a vampire himself.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
