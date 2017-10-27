class CreateBusinessServicings < ActiveRecord::Migration[5.1]
  def change
    create_table :business_servicings do |t|
      t.integer :business_id, null:false
      t.integer :industry_id, null:false
      t.timestamps
    end
  end
end
