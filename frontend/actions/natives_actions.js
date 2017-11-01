import * as APINativesUtil from '../util/natives_api_util';

export const RECEIVE_INDUSTRIES = 'RECEIVE_INDUSTRIES';
export const RECEIVE_SECTORS = 'RECEIVE_SECTORS';
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';
export const RECEIVE_CITIES = 'RECEIVE_CITIES';

export const receiveIndustries = (industries) => ({
  type: RECEIVE_INDUSTRIES,
  industries: industries
})

export const receiveSectors = (sectors) => ({
  type:RECEIVE_SECTORS,
  sectors: sectors
})

export const receiveServices = (services) => ({
  type: RECEIVE_SERVICES,
  services: services
})

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities: cities
})

export const fetchSectors = () => (dispatch) => (
  APINativesUtil.fetchSectors()
    .then((sectors)=>dispatch(receiveSectors(sectors)))
)

export const fetchIndustries = () => (dispatch) => (
  APINativesUtil.fetchIndustries()
    .then((industries)=>dispatch(receiveIndustries(industries)))
)

export const fetchServices = () => (dispatch) => (
  APINativesUtil.fetchServices()
    .then((services)=>dispatch(receiveServices(services)))
)

export const fetchCities = () => (dispatch) => (
  APINativesUtil.fetchCities()
    .then((cities)=>dispatch(receiveCities(cities)))
)
