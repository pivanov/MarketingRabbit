class Renameagencyservicings < ActiveRecord::Migration[5.1]
  def change
    rename_table :agency_servicings, :agency_sector_servicings
  end
end
