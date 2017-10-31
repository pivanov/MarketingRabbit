class ChangeProjectsColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :projects, :service_needed, :service_needed_id
  end
end
