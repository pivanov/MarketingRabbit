class AddcolumntoUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :business_type, :string 
  end
end
