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
