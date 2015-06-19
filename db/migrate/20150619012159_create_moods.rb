class CreateMoods < ActiveRecord::Migration
  def change
    create_table :moods do |t|
      t.string :mood

      t.timestamps null: false
    end
  end
end
