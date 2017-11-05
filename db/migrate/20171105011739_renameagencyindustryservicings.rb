class Renameagencyindustryservicings < ActiveRecord::Migration[5.1]
  def change
    rename_table :agency_industry_sevicings, :agency_industry_servicings
  end
end
