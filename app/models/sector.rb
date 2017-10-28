class Sector < ApplicationRecord

  has_many :industries,
    class_name: 'Industry',
    foreign_key: :sector_id,
    primary_key: :id


  has_many :agency_servicings,
    class_name: 'AgencyServicing',
    foreign_key: :sector_id,
    primary_key: :id
    
end
