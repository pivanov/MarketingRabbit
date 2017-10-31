# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


sectors_array = []
File.foreach(File.join(Rails.root, 'db', 'sectors.txt')) do |line|
  sectors_array << line.chomp
end

sectors_array.each do |sector|
  Sector.create({name: sector})
end


sector_id = nil
File.foreach(File.join(Rails.root, 'db', 'industries.txt')) do |line|
  industry = line.chomp
  if sectors_array.include?(industry)
    sector_id = Sector.find_by(name: industry).id
    next
  end
  Industry.create({name: industry, sector_id: sector_id})
end


File.forEach(File.join(Rails.root, 'db', 'services.txt')) do |line|
  service = line.chomp
  Service.create({name: service})
end
