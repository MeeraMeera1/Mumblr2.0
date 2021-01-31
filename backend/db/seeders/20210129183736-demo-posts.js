'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",
      [
        {
          userId: 1,
          title: "Launching my first React project!",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          urlContent: null,
          type: "text",
        },
        {
          userId: 2,
          title: "Clone of Tumblr",
          body:
            "Amet massa vitae tortor condimentum lacinia quis vel. Adipiscing enim eu turpis egestas pretium aenean. Pellentesque massa placerat duis ultricies. Maecenas pharetra convallis posuere morbi leo urna molestie at. Nisi scelerisque eu ultrices vitae auctor eu augue. Pharetra sit amet aliquam id. Aenean sed adipiscing diam donec adipiscing. Aliquet risus feugiat in ante metus dictum at. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Turpis tincidunt id aliquet risus feugiat in ante metus. Neque sodales ut etiam sit amet nisl purus in. Habitant morbi tristique senectus et. Sed viverra ipsum nunc aliquet bibendum. Quam id leo in vitae turpis massa sed. Egestas diam in arcu cursus euismod quis viverra nibh cras. In nisl nisi scelerisque eu ultrices. Maecenas ultricies mi eget mauris pharetra et ultrices neque.",
          urlContent: "demo_post.png",
          type: "image",
        },
        {
          userId: 3,
          title: "Good morning!",
          body: "Amet massa vitae tortor condimentum lacinia quis vel. Adipiscing enim eu turpis egestas pretium aenean. Pellentesque massa placerat duis ultricies. Maecenas pharetra convallis posuere morbi leo urna molestie at. Nisi scelerisque eu ultrices vitae auctor eu augue. Pharetra sit amet aliquam id. Aenean sed adipiscing diam donec adipiscing. Aliquet risus feugiat in ante metus dictum at. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Turpis tincidunt id aliquet risus feugiat in ante metus. Neque sodales ut etiam sit amet nisl purus in. Habitant morbi tristique senectus et. Sed viverra ipsum nunc aliquet bibendum. Quam id leo in vitae turpis massa sed. Egestas diam in arcu cursus euismod quis viverra nibh cras. In nisl nisi scelerisque eu ultrices. Maecenas ultricies mi eget mauris pharetra et ultrices neque.",
          urlContent: "demo_audio.mp3",
          type: "audio",
        },
      ],
      {}
    );
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Posts",null,{});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
