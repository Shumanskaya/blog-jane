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
        path: 'salad'
      },
      {
        name: 'Супчики',
        path: 'soup'
      },
      {
        name: 'Вторые блюда',
        path: 'main-dishes'
      },
      {
        name: 'Закусончики',
        path: 'snacks'
      },
      {
        name: 'Десерты',
        path: 'dessert'
      },
      {
        name: 'Напитки',
        path: 'drink'
      },
    ]
  },
  {
    name: 'olfactory',
    category: [
      {
        name: 'Эфирные масла',
        path: 'ethereal-oil'
      },
      {
        name: 'Гидролаты',
        path: 'hidrolat'
      },
      {
        name: 'Рецепты',
        path: 'ethereal-recipe'
      },
      {
        name: 'Ольфакторная карта',
        path: 'olfactory-map'
      },
    ]
  }
];
