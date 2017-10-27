class Agency < User

  has_many :contracts,
    class_name: 'Contract',
    foreign_key: :agency_id,
    primary_key: :id

  has_many :clients, through: :contracts, source: :business
end
