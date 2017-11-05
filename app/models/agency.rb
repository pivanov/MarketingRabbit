class Agency < User
  validates :service_ids, :website, :sector_ids, :industry_ids, presence:true
  validates :city_ids, :minimum_project_size, :business_type_served, :agency_type, :phone_number, presence:true
  # has_many :contracts,
  #   class_name: 'Contract',
  #   foreign_key: :agency_id,
  #   primary_key: :id

  # sectors an agency serves
  has_many :agency_sector_servicings,
    class_name: 'AgencySectorServicing',
    foreign_key: :agency_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :agency

  # industries an agency serves
  has_many :agency_industry_servicings,
    class_name: "AgencyIndustryServicing",
    foreign_key: :agency_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :agency

  has_many :service_provider_listings,
    class_name: "ServiceProviderListing",
    foreign_key: :agency_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :agency

  has_many :agency_locations,
    class_name: 'AgencyLocation',
    foreign_key: :agency_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :agency

  # we now have a method called city_ids
  has_many :cities, through: :agency_locations, source: :city
  # we now have a method called sector_ids
  has_many :sectors, through: :agency_sector_servicings, source: :sector

  # we now have a method called industry_ids
  has_many :industries, through: :agency_industry_servicings, source: :industry
  # we now have a method called service_ids
  has_many :services, through: :service_provider_listings, source: :service

    # performs caching, so use object.reload to perform query again
  # has_many :verticals, through: :agency_servicings, source: :sector
  # has_many :clients, through: :contracts, source: :business

end
