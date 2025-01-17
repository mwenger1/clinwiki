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

ActiveRecord::Schema.define(version: 2019_07_18_071212) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotation_labels", force: :cascade do |t|
    t.string "label"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "annotations", force: :cascade do |t|
    t.string "nct_id"
    t.string "label"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "nct_id"
    t.integer "overall_rating"
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index ["nct_id"], name: "reviews_nct_id"
    t.index ["user_id"], name: "reviews_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.bigint "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource_type_and_resource_id"
  end

  create_table "short_links", force: :cascade do |t|
    t.string "short", null: false
    t.string "long", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["long"], name: "index_short_links_on_long", unique: true
    t.index ["short"], name: "index_short_links_on_short", unique: true
  end

  create_table "site_views", force: :cascade do |t|
    t.jsonb "updates", default: [], null: false
    t.bigint "site_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["site_id"], name: "index_site_views_on_site_id"
  end

  create_table "sites", force: :cascade do |t|
    t.string "name"
    t.string "subdomain"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subdomain"], name: "index_sites_on_subdomain", unique: true
  end

  create_table "tags", force: :cascade do |t|
    t.string "nct_id"
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "user_session_studies", force: :cascade do |t|
    t.string "nct_id"
    t.text "serialized_study"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["nct_id"], name: "user_session_studies_nct_id"
    t.index ["user_id"], name: "user_session_studies_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "first_name"
    t.string "last_name"
    t.string "default_query_string"
    t.json "search_result_columns"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "users_roles", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  create_table "wiki_page_edits", force: :cascade do |t|
    t.bigint "wiki_page_id"
    t.bigint "user_id"
    t.text "diff"
    t.text "diff_html"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_wiki_page_edits_on_user_id"
    t.index ["wiki_page_id"], name: "index_wiki_page_edits_on_wiki_page_id"
  end

  create_table "wiki_pages", force: :cascade do |t|
    t.string "nct_id"
    t.text "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["nct_id"], name: "index_wiki_pages_on_nct_id", unique: true
  end

  create_table "workflows_views", force: :cascade do |t|
    t.jsonb "updates", default: [], null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "site_views", "sites"
  add_foreign_key "wiki_page_edits", "users"
  add_foreign_key "wiki_page_edits", "wiki_pages"
end
