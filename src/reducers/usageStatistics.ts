import { FETCH_USAGE_DATA_BEGIN, FETCH_USAGE_DATA_FAILURE, FETCH_USAGE_DATA_SUCCESS } from '../types/actionTypes';
import { DefaultUsageResponse } from '../types/dataTypes';

const initialState = {
  loading: false,
  data: DefaultUsageResponse,
  error: null,
};

export default function usageStatistics(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_USAGE_DATA_BEGIN:
      return {
        loading: true,
        data: DefaultUsageResponse,
        error: null,
      };
    case FETCH_USAGE_DATA_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case FETCH_USAGE_DATA_FAILURE:
      return {
        loading: false,
        data: DefaultUsageResponse,
        error: action.error,
      };
    default:
      return state;
  }
}
