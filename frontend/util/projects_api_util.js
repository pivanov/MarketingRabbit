export const fetchProjects = (business_id)=>{
  return $.ajax({
    method: "GET",
    url: `api/businesses/${business_id}/projects`
  })
}

export const createProject = (project) => {
  return $.ajax({
    method: "POST",
    url: `api/businesses/${project.business_id}/projects`,
    data: {project: project}
  })
}

export const fetchProject = (project_id) => {
  return $.ajax({
    method: "GET",
    url: `api/projects/${project_id}`
  })
}

export const updateProject = (project) => {
  return $.ajax({
    method: "PATCH",
    url: `api/projects/${project.id}`,
    data: {project: project}
  })
}
