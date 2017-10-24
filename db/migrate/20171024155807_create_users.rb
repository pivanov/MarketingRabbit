class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null:false
      t.string :name, null:false
      t.string :session_token, null:false
      t.string :password_digest, null:false
      t.boolean :is_agency?, default: false, null:false

      t.timestamps
    end

    add_index :users, :email, unique:true
  end
end
