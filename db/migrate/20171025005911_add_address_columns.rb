class AddAddressColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :state, :string
    add_column :users, :city, :string
    add_column :users, :country, :string
    add_column :users, :zipcode, :integer

    add_index :users, :state
    add_index :users, :city
    add_index :users, :country
    add_index :users, :zipcode
  end
end
