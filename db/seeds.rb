# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

moods = Mood.create([{mood: "Happy", url: "http://straightfromthea.com/wp-content/uploads/2009/03/image_8515360.jpg"},
  {mood: "confused", url: "http://replygif.net/thumbnail/1322.gif"},
  {mood: "angry", url: "http://myspiltmilk.com/sites/default/files/main-image/lewisblack_0.jpg"},
  {mood: "Relaxed", url: "http://www.greatamericanthings.net/wp-content/uploads/2012/03/Buffett-by-sweetslyricsdotcom.jpg"},
  {mood: "Turnt", url: "http://exytmusic.com/wp-content/uploads/2014/04/LilJon-1016x1024.jpg"},
  {mood: "Anxious", url: "http://replygif.net/thumbnail/1322.gif"},
  {mood: "Sensual", url: "http://thatgrapejuice.net/wp-content/uploads/HLIC/6229c55fb7ed72fef88d35caacf46d2c.jpg"},
  {mood: "Humorous", url: "http://www.comedymoontower.com/wp-content/uploads/2012/02/Audience-Laughing.jpg"},
  {mood: "Tired", url: "http://www.godhungry.org/wp-content/uploads/2015/05/tired-lady.jpg"}])
#password?!!

playlists = Playlist.create(
  [{ user: "John", title: "Turned up", url: "https://soundcloud.com/maddecent/sets/jeffrees-vol-6", mood_id: 1},
  { user: "John", title: "the house that funk built" , url: "https://soundcloud.com/joshua-kong/sets/chillstep" , mood_id: 2},
  { user: "John", title: "Ayy Lmao", url: "https://soundcloud.com/sarbs/sets/comedy-bang-bang" },
  { user: "Ramona", title: "Coding mix", url: "https://soundcloud.com/victoria-feere/sets/coding-mix", mood_id: 6},
  { user: "Romona" , title: "May 2015 Austin Spring relaxation", url: "https://soundcloud.com/celestial_vibes/sets/summer-vibes-v2", mood_id: 3},
  { user: "Tito" , title: "June good times playlist", url: "https://soundcloud.com/ngryullet/sets/reggae", mood_id:5},
  { user: "Tito", title: "I need a laugh", url: "https://soundcloud.com/mazemerizer/sets/standup", mood_id: 6},
  { user: "Ramona", title: "Night time tunes", url: "https://soundcloud.com/reecerance/sets/ambient-music"}])

users = User.create([{ name: "John", email: "John@John.com", password_digest: "hello"}, {name: "Romona", email: "Ramona@rramona.com", password_digest: "hello"}, {name: "Tito", email: "Tito@ilikebigbutts.org", password_digest: "hello"}, {name: "Summer", email: "summer@google.com", password_digest: "hello"}, {name: "David", email: "David@hotmail.org", password_digest: "hello"}])
