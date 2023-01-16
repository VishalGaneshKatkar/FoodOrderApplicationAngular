import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }


  getAllFoodByTag(tag: string): Foods[] {

    if (tag == 'All')
      return this.getAll();

    else
      return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag(): Tag[] {

    return [

      { name: 'All', count: 12 },
      { name: 'FastFood', count: 10 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 7 },
      { name: 'BreakFast', count: 5 },
      { name: 'Fry', count: 2 },
      { name: 'Burger', count: 2 },
      { name: 'Indian', count: 5 }

    ];

  }

  getAll(): Foods[] {

    return [


      {
        id: 1,
        price: 60,
        name: 'Burger',
        favourite: false,
        stars: 4,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/food1.jpg',
        cookTime: '10-20',
        origins: ['Italy']
      },

      {
        id: 2,
        price: 90,
        name: 'HamBurger',
        favourite: true,
        stars: 4.3,
        tags: ['FastFood', 'Burger', 'Lunch'],
        imageUrl: '/assets/food2.jpg',
        cookTime: '10-20',
        origins: ['Italy']
      },

      {
        id: 3,
        price: 55,
        name: 'Potato Fries',
        favourite: true,
        stars: 3.8,
        tags: ['FastFood', 'French Fries', 'BreakFast', 'Fry'],
        imageUrl: '/assets/food3.jpg',
        cookTime: '15-20',
        origins: ['France']
      },

      {
        id: 4,
        price: 50,
        name: 'Dhokala',
        favourite: true,
        stars: 5,
        tags: ['Dhokala', 'BreakFast', 'Indian'],
        imageUrl: '/assets/food12.jpg',
        cookTime: '20-25',
        origins: ['India']
      },

      {
        id: 5,
        price: 65,
        name: 'Chinese Noodles',
        favourite: false,
        stars: 2.5,
        tags: ['FastFood', 'Chinese Noodles', 'BreakFast'],
        imageUrl: '/assets/food4.jpg',
        cookTime: '15-20',
        origins: ['China']
      },

      {
        id: 6,
        price: 20,
        name: 'Samosa',
        favourite: true,
        stars: 4.3,
        tags: ['FastFood', 'Samosa', 'BreakFast', 'Indian', 'Fry'],
        imageUrl: '/assets/food9.jpg',
        cookTime: '15-20',
        origins: ['India']
      },

      {
        id: 7,
        price: 15,
        name: 'Poha',
        favourite: true,
        stars: 4,
        tags: ['Poha', 'BreakFast', 'Indian'],
        imageUrl: '/assets/food10.jpg',
        cookTime: '10-15',
        origins: ['India']
      },

      {
        id: 8,
        price: 40,
        name: 'Paav Bhaji',
        favourite: false,
        stars: 5,
        tags: ['FastFood', 'Paav Bhaji', 'Lunch', 'Indian'],
        imageUrl: '/assets/food11.jpg',
        cookTime: '15-20',
        origins: ['India']
      },
      {
        id: 9,
        price: 150,
        name: 'Cheese Pizza',
        favourite: true,
        stars: 4.7,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food5.jpg',
        cookTime: '20-30',
        origins: ['America', 'Italy']
      },

      {
        id: 10,
        price: 210,
        name: 'Pizza Pepperoni',
        favourite: true,
        stars: 4.5,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food6.jpg',
        cookTime: '10-20',
        origins: ['Italy']
      },

      {
        id: 11,
        price: 150,
        name: 'Veg Pizza',
        favourite: true,
        stars: 4,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        imageUrl: '/assets/food7.jpg',
        cookTime: '15-20',
        origins: ['Italy', 'India']
      },

      {
        id: 12,
        price: 40,
        name: 'Rice Bowl',
        favourite: false,
        stars: 4.1,
        tags: ['FastFood', 'Rice', 'Lunch', 'Indian'],
        imageUrl: '/assets/food8.jpg',
        cookTime: '10-20',
        origins: ['India', 'China']
      }



    ]
  }

}
