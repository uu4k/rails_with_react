# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2023_11_29_054820) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "games", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.integer "status", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hands", force: :cascade do |t|
    t.bigint "game_id"
    t.integer "number"
    t.integer "color"
    t.integer "x"
    t.integer "y"
    t.boolean "is_skipped"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id", "number"], name: "index_hands_on_game_id_and_number", unique: true
    t.index ["game_id"], name: "index_hands_on_game_id"
  end

end
