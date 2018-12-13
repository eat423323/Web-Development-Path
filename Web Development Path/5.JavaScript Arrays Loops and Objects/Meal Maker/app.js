const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get appetizers(){

    },
    set appetizers(appetizerIn){

    },
    get mains(){

    },
    set mains(mainsIn){

    },
    get desserts(){

    },
    set desserts(mainsIn){

    },
  },
  get courses() {
    return {
      appetizers: this._course.appetizers,
      mains: this._course.mains,
      desserts: this._course.desserts,
    }
  },
  addDishToCourse (courseName, dishName , dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
      this._courses[courseName].push(dish);
    },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()* dishes.length);
  },
  generateRandomMeal() {
    appetizer = this.getRandomDishFromCourse('apetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
  },
};

menu.addDishToCourse('appetizers', 'salad', 1);
  menu.addDishToCourse('appetizers', 'fruit', 2);
  menu.addDishToCourse('appetizers', 'apple', 3);
  menu.addDishToCourse('mains', 'steak', 4);
  menu.addDishToCourse('mains', 'fish', 5);
  menu.addDishToCourse('mains', 'lamb', 6);
  menu.addDishToCourse('desserts', 'cake', 7);
  menu.addDishToCourse('desserts', 'tea', 8);
  menu.addDishToCourse('desserts', 'cookie', 9);

meal = menu.generateRandomMeal();
console.log(meal);
