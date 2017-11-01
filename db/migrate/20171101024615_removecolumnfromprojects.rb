class Removecolumnfromprojects < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :agency_size
  end
end
