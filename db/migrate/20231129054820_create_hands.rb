class CreateHands < ActiveRecord::Migration[7.1]
  def change
    create_table :hands do |t|
      t.references :game
      t.integer :number
      t.integer :color
      t.integer :x
      t.integer :y
      t.boolean :is_skipped

      t.timestamps

      t.index [:game_id, :number], unique: true
    end
  end
end
