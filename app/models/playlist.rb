class Playlist < ActiveRecord::Base
  belongs_to :mood
  belongs_to :user
  has_many :likes
  has_many :comments
end
