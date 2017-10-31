class AgencyServicing < ApplicationRecord
  validates :sector, :agency, presence: true

  belongs_to :sector,
    class_name: 'Sector',
    foreign_key: :sector_id,
    primary_key: :id

  belongs_to :agency,
    class_name: 'Agency',
    foreign_key: :agency_id,
    primary_key: :id

end
