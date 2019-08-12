class CreateBakers < ActiveRecord::Migration[5.2]
  def change
    create_table :bakers do |t|
      t.string :name
      t.boolean :hairy_arms

      t.timestamps
    end
  end
end
