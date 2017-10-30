class ChangeColumnTypeProjects < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :service_needed_details, :text, :null=>false 
  end
end
