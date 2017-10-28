import * as APINativesUtil from '../util/natives_api_util'

export const RECEIVE_INDUSTRIES = 'RECEIVE_INDUSTRIES'

export const receiveIndustries = (industries) => ({
  type: RECEIVE_INDUSTRIES,
  industries: industries
})
