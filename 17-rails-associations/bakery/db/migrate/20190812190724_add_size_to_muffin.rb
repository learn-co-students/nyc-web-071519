class AddSizeToMuffin < ActiveRecord::Migration[5.2]
  def change
    add_column :muffins, :size, :integer
  end
end
