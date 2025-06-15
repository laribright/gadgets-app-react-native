

import { Project } from './types/project';

export const PROJECTS: Project[] = [
  // Example abandoned projects
  {
    id: 1,
    title: 'Obsolete Chat App (2021)',
    slug: 'obsolete-chat-app',
    heroImage: require('../assets/images/chat-app.jpg'),
    imagesUrl: [
      require('../assets/images/chat-app.jpg'),
      require('../assets/images/chat-app-2.jpg'),
    ],
    price: 49.99,
    category: {
      imageUrl: require('../assets/images/chat-app.jpg'),
      name: 'Mobile Apps',
      slug: 'mobile-apps',
    },
    maxQuantity: 100,
  },
  {
    id: 2,
    title: 'Discontinued To-Do List App (2019)',
    slug: 'discontinued-todo-app',
    heroImage: require('../assets/images/todo-app.jpg'),
    imagesUrl: [
      require('../assets/images/todo-app.jpg'),
      require('../assets/images/todo-app-2.jpg'),
    ],
    price: 29.99,
    category: {
      imageUrl: require('../assets/images/todo-app.jpg'),
      name: 'Projectivity',
      slug: 'projectivity',
    },
    maxQuantity: 150,
  },
  {
    id: 3,
    title: 'Abandoned Fitness Tracker (2018)',
    slug: 'abandoned-fitness-tracker',
    heroImage: require('../assets/images/fitness-tracker.jpg'),
    imagesUrl: [
      require('../assets/images/fitness-tracker.jpg'),
      require('../assets/images/fitness-tracker-2.jpg'),
    ],
    price: 39.99,
    category: {
      imageUrl: require('../assets/images/fitness-tracker.jpg'),
      name: 'Health & Fitness',
      slug: 'health-fitness',
    },
    maxQuantity: 120,
  },
  {
    id: 4,
    title: 'Unfinished eCommerce Platform (2020)',
    slug: 'unfinished-ecommerce',
    heroImage: require('../assets/images/ecommerce-platform.jpg'),
    imagesUrl: [
      require('../assets/images/ecommerce-platform.jpg'),
      require('../assets/images/ecommerce-platform-2.jpg'),
    ],
    price: 199.99,
    category: {
      imageUrl: require('../assets/images/ecommerce-platform.jpg'),
      name: 'Web Apps',
      slug: 'web-apps',
    },
    maxQuantity: 50,
  },
  {
    id: 5,
    title: 'Stalled VR Game (2022)',
    slug: 'stalled-vr-game',
    heroImage: require('../assets/images/vr-game.jpg'),
    imagesUrl: [
      require('../assets/images/vr-game.jpg'),
      require('../assets/images/vr-game-2.jpg'),
    ],
    price: 99.99,
    category: {
      imageUrl: require('../assets/images/vr-game.jpg'),
      name: 'Games',
      slug: 'games',
    },
    maxQuantity: 75,
  },
];

