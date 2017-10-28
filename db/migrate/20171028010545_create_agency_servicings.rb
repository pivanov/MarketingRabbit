class CreateAgencyServicings < ActiveRecord::Migration[5.1]
  def change
    create_table :agency_servicings do |t|
      t.integer :agency_id, null:false
      t.integer :sector_id, null:false

      t.timestamps
    end
  end
end
