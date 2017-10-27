class CreateContracts < ActiveRecord::Migration[5.1]
  def change
    create_table :contracts do |t|
      t.integer :agency_id, null:false
      t.integer :business_id, null:false

      t.timestamps
    end
  end
end
