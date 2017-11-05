class Changeuserstablebts < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :business_type_served
    remove_column :users, :minimum_project_size
  end
end
