class Industry < ApplicationRecord

  has_many :business_servicings,
    class_name: 'BusinessServicing',
    foreign_key:  :industry_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :industry

  has_many :agency_industry_servicings,
    class_name: 'AgencyIndustryServicing',
    foreign_key: :industry_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :industry

  has_many :agencies, through: :agency_industry_servicings, source: :agency
  has_many :businesses, through: :business_servicings, source: :business
end
