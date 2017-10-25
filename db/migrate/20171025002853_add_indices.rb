class AddIndices < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :location
    add_index :users, :organization
  end
end
