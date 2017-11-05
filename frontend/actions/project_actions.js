import * as APIProjectsUtil from '../util/projects_api_util';

export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS'
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';
export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';


export const receiveSingleProject = (project) => ({
  type: RECEIVE_SINGLE_PROJECT,
  project: project
})

export const receiveProjectErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors: errors
})

export const receiveProjects = (projects) => ({
  type: RECEIVE_ALL_PROJECTS,
  projects: projects
})

export const fetchProject = (id) => (dispatch) =>(
  APIProjectsUtil.fetchProject(id)
    .then((project)=>dispatch(receiveSingleProject(project)),
          (errors)=>dispatch(receiveProjectErrors(errors.responseJSON)))
)

export const fetchProjects = (business_id) => (dispatch) =>(
  APIProjectsUtil.fetchProjects(business_id)
    .then((projects)=>dispatch(receiveProjects(projects)),
          (errors)=>dispatch(receiveProjectErrors(errors.responseJSON)))
)

export const createProject = (project) => (dispatch) =>(
  APIProjectsUtil.createProject(project)
    .then((project)=>dispatch(receiveSingleProject(project)),
          (errors)=>dispatch(receiveProjectErrors(errors.responseJSON)))
)

export const updateProject = (project) => (dispatch) =>(
  APIProjectsUtil.updateProject(project)
    .then((project)=>dispatch(receiveSingleProject(project)),
          (errors)=>dispatch(receiveProjectErrors(errors.responseJSON)))
)


export const fetchRelevantProjects = (agency_id) => (dispatch) =>(
  APIProjectsUtil.fetchRelevantProjects(agency_id)
    .then((projects)=>dispatch(receiveProjects(projects)),
          (errors)=>dispatch(receiveProjectErrors(errors.responseJSON)))
)
