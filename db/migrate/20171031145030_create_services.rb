class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :name, null:false
      t.text :description, null:false
    end

    add_index :services, :name, unique: true
  end
end
