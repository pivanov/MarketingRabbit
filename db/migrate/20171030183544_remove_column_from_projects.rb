class RemoveColumnFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :location_preference
  end
end
