class AddTimeStampsToService < ActiveRecord::Migration[5.1]
  def change
    add_column :services, :created_at, :datetime, null:false
    add_column :services, :updated_at, :datetime, null:false

    add_column :projects, :created_at, :datetime, null:false
    add_column :projects, :updated_at, :datetime, null:false

    add_column :service_provider_listings, :created_at, :datetime, null:false
    add_column :service_provider_listings, :updated_at, :datetime, null:false
  end
end
