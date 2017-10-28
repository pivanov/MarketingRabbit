json.array! @sectors do |sector|
  json.id sector.id
  json.name sector.name
  json.set! :industries do
    json.array! sector.industries do |industry|
      json.id industry.id
      json.name industry.name
    end
  end
end
