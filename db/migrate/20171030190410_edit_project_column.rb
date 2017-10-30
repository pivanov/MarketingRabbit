class EditProjectColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :projects, :agency_preference, :boolean, :null=>false
  end
end
