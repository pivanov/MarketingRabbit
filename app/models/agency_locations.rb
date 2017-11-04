class AgencyLocations < ApplicationRecord
  validates :agency, :city, presence: true

  belongs_to :agency,
    class_name: "Agency",
    foreign_key: :agency_id,
    primary_key: :id

  belongs_to :city,
    class_name: "City",
    foreign_key: :city_id,
    primary_key: :id

  

end
