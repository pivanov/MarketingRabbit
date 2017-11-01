class Renamecolumnsprojects < ActiveRecord::Migration[5.1]
  def change
    rename_column :projects, :agency_type, :agency_type_preference
    rename_column :projects, :location, :agency_location_preference


  end
end
