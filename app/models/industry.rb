class Industry < ApplicationRecord

  has_many :business_servicings,
    class_name: 'BusinessServicing',
    foreign_key:  :industry_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :industry

  has_many :businesses, through: :business_servicings, source: :business
end
