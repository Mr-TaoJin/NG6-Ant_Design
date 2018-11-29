import { Component, OnInit } from '@angular/core';
// import { Hero } from '../heroes';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  data:object = {
    'hero':'HeroComponent组件'
  };
  // hero:Hero = {
  //   id:1,
  //   name:"taojin"
  // };;
  heroes = HEROES;

  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  constructor() { }

  ngOnInit() {
  }

}
