# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

moods = Mood.create([{mood: "Happy", url: "http://streetdose.com/wp-content/uploads/2012/10/drake-smiling-after-graduating-high-school.jpg"},
  {mood: "Confused", url: "http://i.imgur.com/ESpXo1h.png"},
  {mood: "Angry", url: "http://blog.afflictionclothing.com/wp-content/uploads/2014/11/james-hetfield.jpg"},
  {mood: "Relaxed", url: "http://www.greatamericanthings.net/wp-content/uploads/2012/03/Buffett-by-sweetslyricsdotcom.jpg"},
  {mood: "Turnt", url: "http://exytmusic.com/wp-content/uploads/2014/04/LilJon-1016x1024.jpg"},
  {mood: "Anxious", url: "http://cdn.ustatik.com/_img/columns/Jonathan-Davis.jpg"},
  {mood: "Sensual", url: "http://thatgrapejuice.net/wp-content/uploads/HLIC/6229c55fb7ed72fef88d35caacf46d2c.jpg"},
  {mood: "Humorous", url: "http://www.cheekycomedy.co.uk/images-2007-july17th/comedy-audience1.jpg"},
  {mood: "Tired", url: "https://c2.staticflickr.com/8/7310/8729154647_731ffd7576_b.jpg"}])
#password?!!

playlists = Playlist.create(
  [{ user: "John", title: "Burning down the house", url: "https://soundcloud.com/maddecent/sets/jeffrees-vol-6", mood_id: 5},
  { user: "John", title: "the house that funk built" , url: "https://soundcloud.com/joshua-kong/sets/chillstep", mood_id: 1},
  { user: "John", title: "Ayy Lmao", url: "https://soundcloud.com/sarbs/sets/comedy-bang-bang", mood_id: 8},
  { user: "Ramona", title: "Coding mix", url: "https://soundcloud.com/victoria-feere/sets/coding-mix", mood_id: 4},
  { user: "Ramona" , title: "May 2015 Austin Spring relaxation", url: "https://soundcloud.com/celestial_vibes/sets/summer-vibes-v2", mood_id: 1},
  { user: "Tito" , title: "June good times playlist", url: "https://soundcloud.com/ngryullet/sets/reggae", mood_id: 4},
  { user: "Tito", title: "I need a laugh", url: "https://soundcloud.com/mazemerizer/sets/standup", mood_id: 8},
  { user: "Ramona", title: "Night time tunes", url: "https://soundcloud.com/reecerance/sets/ambient-music", mood_id: 9}])

users = User.create([{ name: "John", email: "Johndaugherty1986@gmail.com", imageurl: "http://i.imgur.com/tciLfzQ.jpg"},
  {name: "Ramona", email: "bellamy2727@yahoo.com",  imageurl: "http://i.imgur.com/5A95Faw.jpg"},
  {name: "Tito", email: "Tito@ilikebigbutts.org", imageurl: "http://i.imgur.com/4PgOxLr.jpg"},
  {name: "Nikola Tesla", email: "Ilovescience@electricityisdope.com", imageurl:"http://www.teslasociety.com/pictures/pic1.jpg"}])

100.times do

playlists = Playlist.create([{user: Faker::Name.name, mood_id: rand(1..9),
                    url: "https://soundcloud.com/jordan-myers-22/sets/js-playlist",
                    title: Faker::Lorem.sentence(1),
                    imageurl: "http://i.imgur.com/5063SUw.png"
          }])

users = User.create([{
  name: Faker::Name.name,
  email: Faker::Internet.email,
  password_digest: "hello",
  bio: Faker::Lorem.paragraph(9),
  imageurl: "http://i.imgur.com/J9fQX9e.jpg"}])

end
