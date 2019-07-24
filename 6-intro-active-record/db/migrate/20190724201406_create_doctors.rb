class CreateDoctors < ActiveRecord::Migration[5.2]
  def change
    create_table :doctors do |table|
      table.string :name 
      table.string :speciality 
      table.integer :age 
    end
  end
end
