class City < ApplicationRecord
  validates :name, :country, presence:true

end
