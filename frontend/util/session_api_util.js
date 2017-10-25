export const registerBusiness = (user) => {
  return $.ajax({
    method: "POST",
    url: '/api/businesses',
    data: {user}
  })
}

export const registerAgency = (user) => {
  return $.ajax({
    method: "POST",
    url: '/api/agencies',
    data: {user}
  })
}

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: {user}
  })
}

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  })
}
