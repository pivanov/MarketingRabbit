class ServiceProviderListing < ApplicationRecord
  validates :service, :agency, presence: true


  belongs_to :agency,
    class_name: 'Agency',
    foreign_key: :agency_id,
    primary_key: :id

  belongs_to :service,
    class_name: 'Service',
    foreign_key: :service_id,
    primary_key: :id

end
