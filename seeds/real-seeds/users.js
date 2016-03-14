module.exports = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({
      id: 1,
      first_name: 'Elana',
      last_name: 'Kopelevich',
      email: 'ekopelevich@gmail.com',
      location: 'Denver, CO',
      tag_line: 'yeah',
      bio: 'super duper cool',
      gender_id: 1,
      member_since: '2015-02-01',
      avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
      banned: 0
    }),
    knex('users').insert({
      id: 2,
      first_name: 'Shad',
      last_name: 'Self',
      email: 'shadself@gmail.com',
      location: 'Denver, CO',
      tag_line: 'nope',
      bio: 'super duper extremely awesome and cool',
      gender_id: 2,
      member_since: '2015-03-01',
      avatar: 'https://pbs.twimg.com/profile_images/640659562349989888/AjokLNHY.jpg',
      banned: 0
    })
  ]);
};
