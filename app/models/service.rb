class Service < ApplicationRecord
  validates :name, presence:true
  validates :name, uniqueness:true

  has_many :service_provider_listings,
    class_name: "ServiceProviderListing",
    foreign_key: :service_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :service

  has_many :agency_providers,
    through: :service_provider_listings,
    source: :agency

end
