class CreateServiceProviderListings < ActiveRecord::Migration[5.1]
  def change
    create_table :service_provider_listings do |t|
      t.integer :service_id, null:false
      t.integer :agency_id, null:false
    end
  end
end
