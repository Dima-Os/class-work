const restaurants = [
  {
    brand: "KFS",
    menu: {
      chiken: 50,
      burger: 50,
    },
    deliveryTime: 60,
  },
  {
    brand: "Burger King",
    menu: {
      burgerXXL: 170,
      burger: 70,
    },
    deliveryTime: 20,
  },
  {
    brand: "mcDonalds",
    menu: {
      cola: 25,
      burger: 30,
    },
    deliveryTime: 30,
  },
];
const services = {
  showMenu() {},
  getMenu() {},
  addOrder() {},
  confirmOrder() {},
};
const torpedaDelivery = {
  order: [],
  chosenRestaurant: "",
  getAvailableRestaurants() {
    return restaurants.map((el) => el.brand).join(" , ");
  },
  chooseRestaurant() {
    const userRestaurant = prompt(
      ` Chose restaurant from available ${this.getAvailableRestaurants()} `
    );
    if (userRestaurant) {
      this.chooseRestaurant = userRestaurant;
    }
    return this.chooseRestaurant;
  },
  chooseDishes() {},
};

torpedaDelivery.chooseRestaurant();
