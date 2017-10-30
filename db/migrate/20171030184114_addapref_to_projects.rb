class AddaprefToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :agency_preference, :boolean
  end
end
