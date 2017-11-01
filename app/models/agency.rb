class Agency < User
  validates :service_ids, :website, :city_id, :vertical_ids, presence:true
  # has_many :contracts,
  #   class_name: 'Contract',
  #   foreign_key: :agency_id,
  #   primary_key: :id

  # industries an agency serves
  has_many :agency_servicings,
    class_name: 'AgencyServicing',
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

  belongs_to :city,
    class_name: "City",
    foreign_key: :city_id,
    primary_key: :id


  # we now have a method called vertical_ids
  has_many :verticals, through: :agency_servicings, source: :sector

  # we now have a method called service_ids
  has_many :services, through: :service_provider_listings, source: :service

    # performs caching, so use object.reload to perform query again
  # has_many :verticals, through: :agency_servicings, source: :sector
  # has_many :clients, through: :contracts, source: :business

end
