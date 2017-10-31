class RemoveDesFromservice < ActiveRecord::Migration[5.1]
  def change
    remove_column :services, :description
  end
end
