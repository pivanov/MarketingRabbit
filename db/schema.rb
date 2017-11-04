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

ActiveRecord::Schema.define(version: 20171103214125) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agency_locations", force: :cascade do |t|
    t.integer "city_id", null: false
    t.integer "agency_id", null: false
  end

  create_table "agency_servicings", force: :cascade do |t|
    t.integer "agency_id", null: false
    t.integer "sector_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "business_servicings", force: :cascade do |t|
    t.integer "business_id", null: false
    t.integer "industry_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cities", force: :cascade do |t|
    t.string "name", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_cities_on_name", unique: true
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
    t.integer "sector_id"
    t.index ["name"], name: "index_industries_on_name", unique: true
  end

  create_table "projects", force: :cascade do |t|
    t.string "project_name", null: false
    t.text "service_needed_details", null: false
    t.date "project_start_date", null: false
    t.integer "monthly_budget", null: false
    t.string "agency_type_preference"
    t.integer "provider_id"
    t.integer "business_id", null: false
    t.boolean "location_preference", null: false
    t.boolean "agency_preference", null: false
    t.string "agency_location_preference"
    t.integer "service_needed_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "stage", null: false
  end

  create_table "sectors", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "service_provider_listings", force: :cascade do |t|
    t.integer "service_id", null: false
    t.integer "agency_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_services_on_name", unique: true
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
    t.integer "industry_id"
    t.string "business_type"
    t.string "business_type_served", null: false
    t.integer "minimum_project_size", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["organization"], name: "index_users_on_organization"
    t.index ["type"], name: "index_users_on_type"
  end

end
