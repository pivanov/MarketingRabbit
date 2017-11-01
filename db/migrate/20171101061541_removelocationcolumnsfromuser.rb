class Removelocationcolumnsfromuser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :state
    remove_column :users, :country
    remove_column :users, :zipcode
  end
end
