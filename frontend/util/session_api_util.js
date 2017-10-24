export const signup = () => {
  return $.ajax({
    method: "POST",
    url: '/api/users'
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
