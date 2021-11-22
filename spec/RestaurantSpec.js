describe('Restaurant', function() {

  'use strict';

  let restaurant;
  let menu;

  beforeEach(() => {
    restaurant = new Restaurant();
    menu = jasmine.createSpyObj('menu', ['menuItems']);
  });

  it('restaurant can access menu' , () => {
      expect(restaurant.showMenu()).toEqual(['chips - £1.50', 'fish - £3.20', 'pukka pie - £2.00']);
    });

  it('customer can select items from menu' , () => {
    expect(restaurant.placeOrder('chips')).toEqual('chips - £1.50');
   });

});