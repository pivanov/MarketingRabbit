class AddColumntoProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :location_preference, :boolean, null:false
  end
end
