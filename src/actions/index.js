import { FETCHING_DEALS_SEARCH, BACK_TO_DEAL_LIST, FETCHING_DEAL_DETAIL } from "../util/constants";

export const searchDeals = (searchStr = "") => {
    return { type: FETCHING_DEALS_SEARCH, payload: searchStr } 
}

export const fetchDetail = (dealId) => {
    return { type: FETCHING_DEAL_DETAIL, payload: dealId }
}

export const backToDealList = () => {
    return { type: BACK_TO_DEAL_LIST } 
}
