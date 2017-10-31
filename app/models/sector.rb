class Sector < ApplicationRecord

  has_many :industries,
    class_name: 'Industry',
    foreign_key: :sector_id,
    primary_key: :id


  has_many :agency_servicings,
    class_name: 'AgencyServicing',
    foreign_key: :sector_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :sector

  has_many :service_providers, through: :agency_servicings, source: :agency
end
