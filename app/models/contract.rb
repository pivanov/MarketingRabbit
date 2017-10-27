class Contract < ApplicationRecord
  validates :business_id, :agency_id, presence:true

  belongs_to :business,
    class_name: "Business",
    foreign_key: :business_id,
    primary_key: :id

  belongs_to :agency,
    class_name: "Agency",
    foreign_key: :agency_id,
    primary_key: :id

end
