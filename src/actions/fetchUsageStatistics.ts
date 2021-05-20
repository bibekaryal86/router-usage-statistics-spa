import { FETCH_USAGE_DATA_BEGIN, FETCH_USAGE_DATA_FAILURE, FETCH_USAGE_DATA_SUCCESS } from '../types/actionTypes';
import { UsageResponse, UsageStatistics } from '../types/dataTypes';
import { Async } from '../utils/fetch';

export const fetchUsageStatistics = (selected = '') => {
  return async (dispatch: Function) => {
    dispatch(fetchInternetUsageStatisticsBegin());

    try {
      console.log('ROUTER_STAT_URL: ', process?.env?.ROUTER_STAT_URL);
      const routerStatUrl = 'http://routerstat.appspot.com';
      const { modelList, yearMonthSet, modelTotal } = await Async.fetch<UsageResponse>(routerStatUrl, {
        queryParams: {
          toJson: true,
          selected,
        },
      });

      dispatch(fetchInternetUsageStatisticsSuccess(modelList, yearMonthSet, modelTotal));
    } catch (err) {
      console.error('Error Fetching Internet Usage Statistics', err);
      dispatch(fetchInternetUsageStatisticsFailure('Error Fetching Internet Usage Statistics: ' + err?.message));
    }
  };
};

const fetchInternetUsageStatisticsBegin = () => ({
  type: FETCH_USAGE_DATA_BEGIN,
});

const fetchInternetUsageStatisticsSuccess = (
  modelList: UsageStatistics[],
  yearMonthSet: string[],
  modelTotal: UsageStatistics,
) => ({
  type: FETCH_USAGE_DATA_SUCCESS,
  data: {
    modelList,
    yearMonthSet,
    modelTotal,
  },
});

const fetchInternetUsageStatisticsFailure = (error: string) => ({
  type: FETCH_USAGE_DATA_FAILURE,
  error,
});
