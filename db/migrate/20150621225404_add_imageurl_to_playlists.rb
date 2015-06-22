class AddImageurlToPlaylists < ActiveRecord::Migration
  def change
    add_column :playlists, :imageurl, :string
  end
end
