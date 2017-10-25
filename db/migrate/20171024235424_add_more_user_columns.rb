class AddMoreUserColumns < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :location, :string
    add_column :users, :website, :string
    add_column :users, :organization, :string, null:false
    add_column :users, :logo_file_name, :string
    


  end
end
