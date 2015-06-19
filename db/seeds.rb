# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

moods = Mood.create([{ mood: "hyper"}, {mood: "happy"}, {mood: "angry"}, { mood: "chill"}, { mood: "turnt"}, {mood: "anxious"}, {mood: "sensual"}, {mood: "silly"}, {mood: "tired "}])
#password?!!

playlists = Playlist.create([{ user: "John", title: "Turned up", url: "https://soundcloud.com/brainfeeder/thundercat-them-changes", mood_id: 1}])



password = Faker::Internet.password


comment = Comment.create(user_id: user.id, link_id: link.id,
                            text: Faker::Lorem.paragraph(2))
