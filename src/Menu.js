class Menu{

  constructor() {
  //   // this.items = ('Chips - £1.50, Fish - £3.20, Pukka Pie - £2.00');

    this.items = { dishes: [
        ['Chips - £1.50'],
        ['Fish - £3.20'],
        ['Pukka Pie - £2.00']
      ]
    }
  }

    menuItems() {
    return (this.items['dishes'].flat());
    }

};
