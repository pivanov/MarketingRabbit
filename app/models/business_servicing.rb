class BusinessServicing < ApplicationRecord
  validates :business, :industry, presence:true

  belongs_to :business,
    class_name: 'Business',
    foreign_key: :business_id,
    primary_key: :id

  belongs_to :industry,
    class_name: 'Industry',
    foreign_key: :industry_id,
    primary_key: :id

end
