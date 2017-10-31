class Removecfromp < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :service_needed_id
  end
end
