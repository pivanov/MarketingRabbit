# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


industries_array = []
File.foreach(File.join(Rails.root, 'db', 'industries.txt')) do |line|
  industries_array << line.chomp
end

industries_array.each do |industry|
  Industry.create({name: industry})
end
