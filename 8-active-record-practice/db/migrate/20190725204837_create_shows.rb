class CreateShows < ActiveRecord::Migration[5.2]
  def change
    create_table :shows do |t|
      t.string :name 
      t.integer :artist_id
      t.integer :fan_id
    end
  end
end
