class AddIndexToType < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :type
  end
end
