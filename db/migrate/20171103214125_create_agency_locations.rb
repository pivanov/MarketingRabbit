class CreateAgencyLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :agency_locations do |t|
      t.integer :city_id, null:false
      t.integer :agency_id, null:false
    end
  end
end
