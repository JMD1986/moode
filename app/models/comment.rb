class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :playlist
  has_many :likes
end
