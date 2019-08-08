class CreateTrains < ActiveRecord::Migration[5.2]
  def change
    create_table :trains do |t|
      t.string :name
      t.integer :speed
      t.integer :cars
      t.boolean :cool?
      t.string :color

      t.timestamps
    end
  end
end
