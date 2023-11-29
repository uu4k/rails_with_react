class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games, id: :uuid do |t|
      t.integer :status, default: 0, null: false

      t.timestamps
    end
  end
end
