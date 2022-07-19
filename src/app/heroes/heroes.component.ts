import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {
      this.heroes = heroes;
      this.heroesUpdate();
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    const hero = { name } as Hero;
    if (this.heroes.length === 0) {
      hero.id = 1;
    }

    this.heroService.addHero(hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.heroesUpdate();
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    console.log(this.heroes,"===")
    this.heroesUpdate();
  }

  private heroesUpdate(){
    this.heroService.heroesChange$.next(this.heroes);
  }

}
