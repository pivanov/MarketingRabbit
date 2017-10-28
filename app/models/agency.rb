class Agency < User

  has_many :contracts,
    class_name: 'Contract',
    foreign_key: :agency_id,
    primary_key: :id

  has_many :agency_servicings,
    class_name: 'AgencyServicing',
    foreign_key: :agency_id,
    primary_key: :id

    # performs caching, so use object.reload to perform query again
  has_many :verticals, through: :agency_servicings, source: :sector
  has_many :clients, through: :contracts, source: :business

end
