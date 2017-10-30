class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :project_name, null:false
      t.string :service_needed, null:false
      t.string :service_needed_details, null:false
      t.date :project_start_date, null:false
      t.integer :monthly_budget, null:false
      t.boolean :location_preference, nul:false, default: false
      t.boolean :agency_preference, null:false, default: false
      t.string :agency_type
      t.string :agency_size
      t.integer :provider_id
      t.integer :business_id, null:false
    end
  end
end
