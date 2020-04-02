import {Injectable} from '@angular/core';
import {Navigation} from './navigation';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  getCategories = () => categories;
}


const categories: Array<Navigation> = [
  {
    name: 'recipe',
    category: [
      {
        name: 'Салатики',
        id: 'salad'
      },
      {
        name: 'Супчики',
        id: 'soup'
      },
      {
        name: 'Вторые блюда',
        id: 'main-dishes'
      },
      {
        name: 'Закусончики',
        id: 'snacks'
      },
      {
        name: 'Десерты',
        id: 'dessert'
      },
      {
        name: 'Напитки',
        id: 'drink'
      },
    ]
  },
  {
    name: 'olfactory',
    category: [
      {
        name: 'Эфирные масла',
        id: 'ethereal-oil'
      },
      {
        name: 'Гидролаты',
        id: 'hidrolat'
      },
      {
        name: 'Рецепты',
        id: 'ethereal-recipe'
      },
      {
        name: 'Ольфакторная карта',
        id: 'olfactory-map'
      },
    ]
  }
];
