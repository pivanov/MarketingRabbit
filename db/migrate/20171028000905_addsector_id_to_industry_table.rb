class AddsectorIdToIndustryTable < ActiveRecord::Migration[5.1]
  def change
    add_column :industries, :sector_id, :integer
  end
end
