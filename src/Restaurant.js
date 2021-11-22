class Restaurant{ 

  constructor() {
    // order = []
  }

  showMenu() {
    let menu = new Menu();
    return menu.menuItems();
  }

// partial solution, need to debug

  // placeOrder(order) {
  //  let customerOrder = order.toLowerCase();
    
  //   menu.menuItems.forEach(function(item) {
  //    if(item.include(customerOrder)); {
  //     order.push(item);
  //     }
  //     return order();
  //   }  
  // }

};