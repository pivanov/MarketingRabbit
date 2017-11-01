json.array! @cities do |city|
  json.id  city.id
  json.name city.name
  json.country city.country
end
