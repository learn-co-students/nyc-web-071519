class CreatePizzas < ActiveRecord::Migration
  def change
    create_table :pizzas do |t|
      t.string :topping
      t.string :cheese
      t.timestamps null: false
    end
  end
end
