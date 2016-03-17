module.exports = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 1,
      firstName: 'Elana',
      lastName: 'Kopelevich',
      email: 'ekopelevich@gmail.com',
      location: 'Denver, CO',
      tagLine: 'yeah',
      bio: 'super duper cool',
      genderId: 1,
      memberSince: '2015-02-01',
      avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
      banned: 0
    }),
    knex('users').insert({
      id: 2,
      firstName: 'Shad',
      lastName: 'Self',
      email: 'shadself@gmail.com',
      location: 'Denver, CO',
      tagLine: 'nope',
      bio: 'super duper extremely awesome and cool',
      genderId: 2,
      memberSince: '2015-03-01',
      avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
      banned: 0
    })
  ]);
};
