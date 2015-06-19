json.array!(@playlists) do |playlist|
  json.extract! playlist, :id, :user, :title, :mood_id
  json.url playlist_url(playlist, format: :json)
end
