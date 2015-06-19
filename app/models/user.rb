class User < ActiveRecord::Base
  has_many :playlists
  has_many :comments
  has_many :likes
  has_secure_password
end
