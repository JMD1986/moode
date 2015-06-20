class AddUrlToMoods < ActiveRecord::Migration
  def change
    add_column :moods, :url, :string
  end
end
