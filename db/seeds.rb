# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

moods = Mood.create([{ mood: "In The Zone"}, {mood: "happy"}, {mood: "angry"}, { mood: "Relaxed"}, { mood: "Turnt"}, {mood: "Anxious"}, {mood: "Sensual"}, {mood: "Playful"}, {mood: "Tired"}])
#password?!!

playlists = Playlist.create([{ user: "John", title: "Turned up", url: "https://soundcloud.com/brainfeeder/thundercat-them-changes", mood_id: 1},
  { user: "John", title: "the house that funk built" , url: "https://soundcloud.com/amon-tobin/bedtime-stories-austin-peralta" , mood_id: 2},
  { user: "Romona" , title: "Sometimes I eat bees", url: "https://soundcloud.com/ekalimusic/longtime" , mood_id: 3}, { user: "Tito" , title: "June good times playlist", url:"https://soundcloud.com/lil_jon/turn-down-for-what-dj-snake" , mood_id:5}])

users = User.create([{ name: "John", email: "John@John.com", password_digest: "hello"}, {name: "Romona", email: "Ramona@rramona.com", password_digest: "hello"}, {name: "Tito", email: "Tito@ilikebigbutts.org", password_digest: "hello"}, {name: "Summer", email: "summer@google.com", password_digest: "hello"}, {name: "David", email: "David@hotmail.org", password_digest: "hello"}])
