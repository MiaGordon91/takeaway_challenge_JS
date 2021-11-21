describe('Restaurant', function() {

  'use strict';

  let restaurant;
  let menu;

  beforeEach(() => {
    restaurant = new Restaurant();
    menu = jasmine.createSpyObj('menu', ['menuItems']);
  });

  it('restaurant can access menu' , () => {
      expect(restaurant.showMenu()).toEqual(['Chips - £1.50', 'Fish - £3.20', 'Pukka Pie - £2.00']);
    });


});