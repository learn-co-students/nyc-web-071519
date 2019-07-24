class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
      create_table :appointments do |table|
      table.integer :doctor_id 
      table.integer :patient_id 
    end
  end
end
