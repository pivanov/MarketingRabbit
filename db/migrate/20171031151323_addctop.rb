class Addctop < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :service_needed_id, :integer, null:false 
  end
end
