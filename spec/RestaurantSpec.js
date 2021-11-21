describe('Restaurant', function() {

  'use strict';

  let restaurant;

  beforeEach(() => {
    restaurant = new Restaurant();
  });

  it('customer selects items from menu' , () => {
    expect(restaurant.order()).toEqual('Chips - £1.50, Fish - £3.20');
  });

});