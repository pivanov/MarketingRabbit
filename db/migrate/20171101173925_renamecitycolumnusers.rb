class Renamecitycolumnusers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :city
    add_column :users, :city_id, :integer
  end
end
