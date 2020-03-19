import {Injectable} from '@angular/core';
import {Menu} from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getThatMenu(style) {
    const m = [recipe, olfactory];
    let thatMenu = [];
    m.forEach(value => {
      if (value.name === style) {
        thatMenu = value.properties;
      }
    });
    return thatMenu;
  }
}

const recipe: Menu = {
  name: 'recipe',
  properties: ['Салатики', 'Супчики', 'Вторые блюда', 'Закусончики', 'Десерты', 'Напитки']
};

const olfactory: Menu = {
  name: 'olfactory',
  properties: ['Эфирные масла', 'Гидролаты', 'Рецепты', 'Ольфакторная карта']
};
