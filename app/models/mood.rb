class Mood < ActiveRecord::Base
  has_many :playlists
end
