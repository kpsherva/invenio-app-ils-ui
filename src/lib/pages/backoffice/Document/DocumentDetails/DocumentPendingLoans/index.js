import { connect } from 'react-redux';

import { fetchPendingLoans } from './state/actions';
import DocumentPendingLoansComponent from './DocumentPendingLoans';

const mapStateToProps = state => ({
  documentPendingLoans: state.documentPendingLoans.data,
  documentDetails: state.documentDetails.data,
  error: state.documentPendingLoans.error,
  isLoading: state.documentPendingLoans.isLoading,
  hasError: state.documentPendingLoans.hasError,
});

const mapDispatchToProps = dispatch => ({
  fetchPendingLoans: documentPid => dispatch(fetchPendingLoans(documentPid)),
});

export const DocumentPendingLoans = connect(
  mapStateToProps,
  mapDispatchToProps
)(DocumentPendingLoansComponent);
