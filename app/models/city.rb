class City < ApplicationRecord
  validates :name, :country, presence:true

  has_many :agency_locations,
    class_name: "AgencyLocation",
    foreign_key: :city_id,
    primary_key: :id

  has_many :agencies, through: :agency_locations, source: :agency

end
