class CreateRangers < ActiveRecord::Migration
  def change
    create_table :rangers do |t|
      t.string :name
      t.string :color
    end
  end
end
