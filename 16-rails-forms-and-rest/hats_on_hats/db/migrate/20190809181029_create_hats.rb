class CreateHats < ActiveRecord::Migration[5.2]
  def change
    create_table :hats do |t|
      t.string :hat_type
      t.string :color
      t.integer :size
      t.boolean :cool

      t.timestamps
    end
  end
end
