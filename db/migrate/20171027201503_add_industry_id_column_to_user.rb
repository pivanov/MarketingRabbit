class AddIndustryIdColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :industry_id, :integer
  end
end
