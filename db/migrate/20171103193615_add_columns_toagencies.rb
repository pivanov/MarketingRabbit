class AddColumnsToagencies < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :business_type_served, :string, null:false
    add_column :users, :minimum_project_size, :integer, null:false
    remove_column :users, :city_id
  end
end
