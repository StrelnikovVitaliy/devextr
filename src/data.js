const products = [{
  id: '1_1',
  text: 'Super Mart of the West',
  expanded: true,
  icon: 'refresh',

  items: [{
    id: '1_1_1',
    text: 'Video Players',
    icon: 'refresh',

    items: [{
      id: '1_1_1_1',
      text: 'HD Video Player',
      price: 220,
      icon: 'refresh',
    }, {
      id: '1_1_1_2',
      text: 'SuperHD Video Player',
      icon: 'refresh',
      price: 270
    }]
  }, {
    id: '1_1_2',
    text: 'Televisions',
    expanded: true,
    icon: 'refresh',

    items: [{
      id: '1_1_2_1',
      text: 'SuperLCD 42',
      icon: 'refresh',
      price: 1200
    }, {
      id: '1_1_2_2',
      text: 'SuperLED 42',
      icon: 'refresh',
      price: 1450
    }, {
      id: '1_1_2_3',
      text: 'SuperLED 50',
      icon: 'refresh',
      price: 1600
    }, {
      id: '1_1_2_4',
      text: 'SuperLCD 55',
      icon: 'refresh',
      price: 1350
    }, {
      id: '1_1_2_5',
      text: 'SuperLCD 70',
      icon: 'refresh',
      price: 4000
    }]
  }, {
    id: '1_1_3',
    text: 'Monitors',
    expanded: true,
    icon: 'refresh',

    items: [{
      id: '1_1_3_1',
      text: '19"',
      expanded: true,
      icon: 'refresh',

      items: [{
        id: '1_1_3_1_1',
        text: 'DesktopLCD 19',
        icon: 'refresh',
        price: 160
      }]
    }, {
      id: '1_1_3_2',
      text: '21"',
      icon: 'refresh',

      items: [{
        id: '1_1_3_2_1',
        text: 'DesktopLCD 21',
        icon: 'refresh',
        price: 170
      }, {
        id: '1_1_3_2_2',
        text: 'DesktopLED 21',
        icon: 'refresh',
        price: 175
      }]
    }]
  }, {
    id: '1_1_4',
    text: 'Projectors',
    icon: 'refresh',

    items: [{
      id: '1_1_4_1',
      text: 'Projector Plus',
      icon: 'refresh',
      price: 550
    }, {
      id: '1_1_4_2',
      text: 'Projector PlusHD',
      icon: 'refresh',
      price: 750
    }]
  }]

}, {
  id: '1_2',
  text: 'Braeburn',
  icon: 'refresh',

  items: [{
    id: '1_2_1',
    text: 'Video Players',
    icon: 'refresh',

    items: [{
      id: '1_2_1_1',
      text: 'HD Video Player',
      icon: 'refresh',
      price: 240
    }, {
      id: '1_2_1_2',
      text: 'SuperHD Video Player',
      icon: 'refresh',
      price: 300
    }]
  }, {
    id: '1_2_2',
    text: 'Televisions',
    icon: 'refresh',

    items: [{
      id: '1_2_2_1',
      text: 'SuperPlasma 50',
      icon: 'refresh',
      price: 1800
    }, {
      id: '1_2_2_2',
      text: 'SuperPlasma 65',
      icon: 'refresh',
      price: 3500
    }]
  }, {
    id: '1_2_3',
    text: 'Monitors',
    icon: 'refresh',

    items: [{
      id: '1_2_3_1',
      text: '19"',
      items: [{
        id: '1_2_3_1_1',
        text: 'DesktopLCD 19',
        icon: 'refresh',
        price: 170
      }]
    }, {
      id: '1_2_3_2',
      text: '21"',
      items: [{
        id: '1_2_3_2_1',
        text: 'DesktopLCD 21',
        icon: 'refresh',
        price: 180
      }, {
        id: '1_2_3_2_2',
        text: 'DesktopLED 21',
        icon: 'refresh',
        price: 190
      }]
    }]
  }]

}, {
  id: '1_3',
  text: 'E-Mart',
  icon: 'error',

  items: [{
    id: '1_3_1',
    text: 'Video Players',
    icon: 'refresh',

    items: [{
      id: '1_3_1_1',
      text: 'HD Video Player',
      icon: 'refresh',
      price: 220
    }, {
      id: '1_3_1_2',
      text: 'SuperHD Video Player',
      icon: 'refresh',
      price: 275
    }]
  }, {
    id: '1_3_3',
    text: 'Monitors',
    icon: 'refresh',

    items: [{
      id: '1_3_3_1',
      text: '19"',
      icon: 'refresh',

      items: [{
        id: '1_3_3_1_1',
        text: 'DesktopLCD 19',
        icon: 'refresh',
        price: 165
      }]
    }, {
      id: '1_3_3_2',
      text: '21"',
      icon: 'refresh',

      items: [{
        id: '1_3_3_2_1',
        text: 'DesktopLCD 21',
        icon: 'refresh',
        price: 175
      }]
    }]
  }]
}, {
  id: '1_4',
  text: 'Walters',
  icon: 'mail',

  items: [{
    id: '1_4_1',
    text: 'Video Players',
    icon: 'refresh',

    items: [{
      id: '1_4_1_1',
      text: 'HD Video Player',
      icon: 'refresh',
      price: 210
    }, {
      id: '1_4_1_2',
      text: 'SuperHD Video Player',
      icon: 'refresh',
      price: 250
    }]
  }, {
    id: '1_4_2',
    text: 'Televisions',
    icon: 'refresh',

    items: [{
      id: '1_4_2_1',
      text: 'SuperLCD 42',
      icon: 'refresh',
      price: 1100
    }, {
      id: '1_4_2_2',
      text: 'SuperLED 42',
      icon: 'refresh',
      price: 1400
    }, {
      id: '1_4_2_3',
      text: 'SuperLED 50',
      icon: 'refresh',
      price: 1500
    }, {
      id: '1_4_2_4',
      text: 'SuperLCD 55',
      icon: 'refresh',
      price: 1300
    }, {
      id: '1_4_2_5',
      text: 'SuperLCD 70',
      icon: 'refresh',
      price: 4000
    }, {
      id: '1_4_2_6',
      text: 'SuperPlasma 50',
      icon: 'refresh',
      price: 1700
    }]
  }, {
    id: '1_4_3',
    text: 'Monitors',
    icon: 'refresh',

    items: [{
      id: '1_4_3_1',
      text: '19"',
      items: [{
        id: '1_4_3_1_1',
        text: 'DesktopLCD 19',
        icon: 'refresh',
        price: 160
      }]
    }, {
      id: '1_4_3_2',
      text: '21"',
      items: [{
        id: '1_4_3_2_1',
        text: 'DesktopLCD 21',
        icon: 'refresh',
        price: 170
      }, {
        id: '1_4_3_2_2',
        text: 'DesktopLED 21',
        icon: 'refresh',
        price: 180
      }]
    }]
  }, {
    id: '1_4_4',
    text: 'Projectors',
    items: [{
      id: '1_4_4_1',
      text: 'Projector Plus',
      icon: 'refresh',
      price: 550
    }, {
      id: '1_4_4_2',
      text: 'Projector PlusHD',
      icon: 'refresh',
      price: 750
    }]
  }]


},
  {
    id: '1_5',
    text: 'Walters',
    icon: 'info',

    items: [{
      id: '1_5_1',
      text: 'Video Players',
      icon: 'refresh',

      items: [{
        id: '1_5_1_1',
        text: 'HD Video Player',
        icon: 'refresh',
        price: 210
      }, {
        id: '1_5_1_2',
        text: 'SuperHD Video Player',
        icon: 'refresh',
        price: 250
      }]
    }]
  },
  {
    id: '1_6',
    text: 'Walters',
    icon: 'refresh',

    items: [{
      id: '1_6_1',
      text: 'Video Players',
      icon: 'refresh',

      items: [{
        id: '1_6_1_1',
        text: 'HD Video Player',
        icon: 'refresh',
        price: 210
      }, {
        id: '1_6_1_2',
        text: 'SuperHD Video Player',
        icon: 'refresh',
        price: 250
      }]
    }]
  },
  {
    id: '1_7',
    text: 'Walters',
    icon: 'refresh',

    items: [{
      id: '1_7_1',
      text: 'Video Players',
      icon: 'refresh',

      items: [{
        id: '1_7_1_1',
        text: 'HD Video Player',
        icon: 'info',
        price: 210
      }, {
        id: '1_7_1_2',
        text: 'SuperHD Video Player',
        icon: 'refresh',
        price: 250
      }]
    }]
  }]

export default {
  getProducts() {
    return products
  }
}
