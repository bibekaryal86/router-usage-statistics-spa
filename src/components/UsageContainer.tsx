import { connect } from 'react-redux';
import { fetchUsageStatistics } from '../actions/fetchUsageStatistics';
import Usage from './Usage';

const mapStateToProps = (state: any) => {
  return {
    loading: state.usageStatistics?.loading,
    data: state.usageStatistics?.data,
    error: state.usageStatistics?.error,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchStatistics: (selected?: string) => dispatch(fetchUsageStatistics(selected)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usage);
