class Createagencyindustryservicings < ActiveRecord::Migration[5.1]
  def change
    create_table :agency_industry_sevicings do |t|
      t.integer :agency_id, null:false
      t.integer :industry_id, null:false

      t.timestamps
    end
  end
end
