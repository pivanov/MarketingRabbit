@projects.each do |project|
  json.set! project.id do
    json.extract! project,
          :id,
          :business_id,
          :project_name,
          :service_needed_id,
          :service_needed_details,
          :project_start_date,
          :monthly_budget,
          :location_preference,
          :agency_preference,
          :agency_location_preference,
          :agency_type_preference,
          :provider_id
  end
end
