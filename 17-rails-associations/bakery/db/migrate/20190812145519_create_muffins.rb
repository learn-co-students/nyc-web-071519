class CreateMuffins < ActiveRecord::Migration[5.2]
  def change
    create_table :muffins do |t|
      t.string :flavor
      t.references :baker, foreign_key: true

      t.timestamps
    end
  end
end
