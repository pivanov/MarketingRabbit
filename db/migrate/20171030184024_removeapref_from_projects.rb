class RemoveaprefFromProjects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :agency_preference
  end
end
