class AddStageCalumnToProjects < ActiveRecord::Migration[5.1]
  def change
    add_column :projects, :stage, :integer, null:false 
  end
end
