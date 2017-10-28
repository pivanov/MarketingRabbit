import * as APINativesUtil from '../util/natives_api_util'

export const RECEIVE_INDUSTRIES = 'RECEIVE_INDUSTRIES'
export const RECEIVE_SECTORS = 'RECEIVE_SECTORS'

export const receiveIndustries = (industries) => ({
  type: RECEIVE_INDUSTRIES,
  industries: industries
})

export const receiveSectors = (sectors) => ({
  type:RECEIVE_SECTORS,
  sectors: sectors
})


export const fetchSectors = () => (dispatch) => (
  APINativesUtil.fetchSectors()
    .then((sectors)=>dispatch(receiveSectors(sectors)))
)

export const fetchIndustries = () => (dispatch) => (
  APINativesUtil.fetchIndustries()
    .then((industries)=>dispatch(receiveIndustries(industries)))
)
