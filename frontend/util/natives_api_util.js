export const fetchIndustries = ()=>{
  return $.ajax({
    method: "GET",
    url: 'api/industries'
  })
}

export const fetchSectors = ()=>{
  return $.ajax({
    method: "GET",
    url: 'api/sectors'
  })
}

export const fetchServices = ()=>{
  return $.ajax({
    method: "GET",
    url: 'api/services'
  })
}

export const fetchCities = ()=>{
  return $.ajax({
    method: "GET",
    url: 'api/cities'
  })
}
