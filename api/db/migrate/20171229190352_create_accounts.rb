class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.string :email, uniqueness: true
      t.string :password_digest
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
