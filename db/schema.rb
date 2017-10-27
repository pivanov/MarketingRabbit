# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171027203431) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "business_servicings", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "industry_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contracts", force: :cascade do |t|
    t.integer "agency_id", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "industries", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_industries_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "type"
    t.string "website"
    t.string "organization", null: false
    t.string "logo_file_name"
    t.string "state"
    t.string "city"
    t.string "country"
    t.integer "zipcode"
    t.integer "industry_id"
    t.index ["city"], name: "index_users_on_city"
    t.index ["country"], name: "index_users_on_country"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["organization"], name: "index_users_on_organization"
    t.index ["state"], name: "index_users_on_state"
    t.index ["type"], name: "index_users_on_type"
    t.index ["zipcode"], name: "index_users_on_zipcode"
  end

end
