json.array!(@moods) do |mood|
  json.extract! mood, :id, :mood
  json.url mood_url(mood, format: :json)
end
