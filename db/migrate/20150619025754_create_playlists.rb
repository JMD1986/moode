class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :user
      t.string :title
      t.belongs_to :mood, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
