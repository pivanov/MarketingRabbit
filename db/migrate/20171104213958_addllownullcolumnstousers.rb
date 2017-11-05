class Addllownullcolumnstousers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :business_type_served, :string
    add_column :users, :minimum_project_size, :string
  end
end
