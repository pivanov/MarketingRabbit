class AgencyIndustryServicing < ApplicationRecord
  validates :agency, :industry, presence:true

  belongs_to :agency,
    class_name: 'Agency',
    foreign_key: :agency_id,
    primary_key: :id

  belongs_to :industry,
    class_name: 'Industry',
    foreign_key: :industry_id,
    primary_key: :id

end
