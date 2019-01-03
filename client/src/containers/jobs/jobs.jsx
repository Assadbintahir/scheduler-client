import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJobs } from '../../thunks/jobs.thunks';
import { getJobList } from '../../reducers/job.reducer';
import Header from '../../components/header/Header';
import JobComponent from '../../components/job/JobComponent';

class Job extends React.Component {
  componentDidMount() {
    const { loadJobs } = this.props;
    loadJobs();
  }

  render() {
    const { jobs } = this.props;
    return (
      <Fragment>
        <Header />
        <JobComponent jobs={jobs} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  jobs: getJobList(state.jobReducer.jobs),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  loadJobs: fetchJobs,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Job);
