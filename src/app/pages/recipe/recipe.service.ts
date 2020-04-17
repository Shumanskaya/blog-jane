import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  getRecipe = () => allRecipe;
  getTypeRecipe = (type) => allRecipe.filter(value => value.type === type);
  getLastRecipe = () => allRecipe.filter((value, i, arr) => {
    const lastIndex = arr.length - 1;
    return i > lastIndex - 3;
  })
}

const allRecipe: Array<Recipe> = [
  {
    type: 'salad',
    id: '1',
    title: 'Крабовый салат',
    description: 'Легкий, прекрасный, а главное - очень дешевый салат',
    image: 'https://kopilka-kulinara.ru/upload/information_system_17/1/2/5/item_1258/item_1258.jpg',
    structure: [
      {
        title: 'Китайская капуста',
        quantity: '300 гр'
      },
      {
        title: 'Крабовые палочки',
        quantity: '500 гр'
      },
      {
        title: 'Кукуруза',
        quantity: '1 банка'
      },
      {
        title: 'Майонез',
        quantity: '100 гр'
      }
    ],
    recipe: [
      {
        description: 'Все нарезать на средние по размеру кусочки и сложить в одну тару. Перемешать с майонезом',
        images: ['https://img09.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131090202/140916102601/p_O.jpg']
      },
      {
        description: 'Все нарезать на средние по размеру кусочки и сложить в одну тару. Перемешать с майонезом',
        images: ['https://img09.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131090202/140916102601/p_O.jpg']
      },
      {
        description: 'Все нарезать на средние по размеру кусочки и сложить в одну тару. Перемешать с майонезом',
        images: ['https://img09.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/120131090202/140916102601/p_O.jpg']
      }
    ]
  },
  {
    type: 'drink',
    id: '2',
    title: 'Облепиховый морс',
    description: 'Вкусный, теплый, а главное - безупречно оранжевый',
    image: 'https://kopilka-kulinara.ru/upload/information_system_58/3/5/7/item_3574/item_3574.jpg',
    structure: [
      {
        title: 'Облепиха',
        quantity: '300 гр'
      },
      {
        title: 'Гвоздика',
        quantity: '1 шт'
      },
      {
        title: 'Корица',
        quantity: '1-2 палочки'
      },
      {
        title: 'Имбирь',
        quantity: '10 гр'
      }
    ],
    recipe: [
      {
        description: 'Облепиху залить еипятком, положить туда все остальное и наслаждаться',
        images: ['https://picantecooking.com/upload/iblock/6fa/oblepikhovyy_mors.jpg']
      },
      {
        description: 'Облепиху залить еипятком, положить туда все остальное и наслаждаться',
        images: ['https://picantecooking.com/upload/iblock/6fa/oblepikhovyy_mors.jpg']
      },
      {
        description: 'Облепиху залить еипятком, положить туда все остальное и наслаждаться',
        images: ['https://picantecooking.com/upload/iblock/6fa/oblepikhovyy_mors.jpg']
      }
    ]
  },
  {
    type: 'dessert',
    id: '3',
    title: 'Маффин обыкновенный',
    description: 'Воздушный, с кусочками шоколада - так во рту',
    image: 'https://cheese-cake.ru/DesertImg/maffin-chernichnyj-2-0.jpg',
    structure: [
      {
        title: 'Мука',
        quantity: '300 гр'
      },
      {
        title: 'Сахар',
        quantity: '100 гр'
      },
      {
        title: 'Яйцо',
        quantity: '2 шт'
      },
      {
        title: 'Шоколад',
        quantity: '100 гр'
      }
    ],
    recipe: [
      {
        description: 'Все перемешать в одной миске, шоколад нарезать на кусочки и запекать в духовке 30 минут',
        images: ['https://img.povar.ru/main/d1/47/e6/f8/morkovnii_maffin-394516.jpg']
      },
      {
        description: 'Все перемешать в одной миске, шоколад нарезать на кусочки и запекать в духовке 30 минут',
        images: ['https://img.povar.ru/main/d1/47/e6/f8/morkovnii_maffin-394516.jpg']
      }
    ]
  },
  {
    type: 'dessert',
    id: '4',
    title: 'Оладушки',
    description: 'Сытные, жирные - все как надо',
    image: 'https://prokefir.ru/images/recepti/oladi-na-prostokvashe-pyshnye/oladi-na-prostokvashe-pyshnye.jpg',
    structure: [
      {
        title: 'Мука',
        quantity: '300 гр'
      },
      {
        title: 'Сахар',
        quantity: '100 гр'
      },
      {
        title: 'Яйцо',
        quantity: '2 шт'
      },
      {
        title: 'Шоколад',
        quantity: '100 гр'
      }
    ],
    recipe: [
      {
        description: 'Муку залить яйцами, потом кефиром или молоком, потом перемешать и жарить на масляной сквородке сколько захочешь',
        images: ['https://static.1000.menu/img/content/18842/oladi-na-kefire-v-multivarke_1486011649_13_max.jpg']
      }
    ]
  },
  {
    type: 'soup',
    id: '5',
    title: 'Огуречный суп',
    description: 'Легкий, подхожит для жаркого дня. Быстрее окрошки, если у вас есть мясорубка',
    image: 'https://www.gastronom.ru/binfiles/images/20141007/b80b9ca1.jpg',
    structure: [
      {
        title: 'Кефир',
        quantity: '1 л'
      },
      {
        title: 'Огурцы',
        quantity: '1 кг'
      },
      {
        title: 'Зелень',
        quantity: 'по вкусу'
      },
    ],
    recipe: [
      {
        description: 'Огурцы потереть на терке, либо порезать мелкой тонкой соломкой',
        images: ['https://img07.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/130829212936/130904195334/p_O.jpg']
      },
      {
        description: 'Залить по кефиром и добавить зелени по вкусу. А так же других специй по необходимости',
        images: ['https://img07.rl0.ru/eda/c620x415i/s1.eda.ru/StaticContent/Photos/130829212936/130904195334/p_O.jpg']
      }
    ]
  },
  {
    type: 'main-dishes',
    id: '6',
    title: 'Нагетсы из свинины',
    description: 'Сытные с быстрые в приготовлении. Главное - купить хорошие панировочные сухари',
    image: 'https://s12.stc.all.kpcdn.net/share/i/12/10625283/inx960x640.jpg',
    structure: [
      {
        title: 'свинина',
        quantity: '300 гр'
      },
      {
        title: 'Панировочные сухари',
        quantity: '100 гр'
      },
      {
        title: 'Яйцо',
        quantity: '2 шт'
      },
      {
        title: 'Специи',
        quantity: 'по вкусу'
      }
    ],
    recipe: [
      {
        description: 'Порезать свинину на ровные кусочки. Важно не резать очень большими, чтобы точно хорошо прожарилось мясо',
        images: ['https://www.povarenok.ru/data/cache/2020mar/09/23/2675027_53808-640x480.jpg']
      },
      {
        description: 'В отдельной миске смешать сухари и специи. В другой миске слегка взбить яйца',
        images: ['https://www.povarenok.ru/data/cache/2020mar/09/23/2675027_53808-640x480.jpg']
      },
      {
        description: 'Макаем кусок в миску с яйцом, затем обваливаем в миске с панировочными сухарями и кидаем на сковородку',
        images: ['https://www.povarenok.ru/data/cache/2020mar/09/23/2675027_53808-640x480.jpg']
      }
    ]
  },
];



