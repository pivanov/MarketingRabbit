class ChangeUsercolumndatatype < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :minimum_project_size
    add_column :users, :minimum_project_size, :integer
  end
end
