import React from 'react';

const JobComponent = ({ jobs }) => (
  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="token-transaction card card-full-height">
            <div className="card-innr">
              <div className="card-head has-aside">
                <h4 className="card-title">My Jobs</h4>
              </div>
              <table className="table tnx-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Endpoint</th>
                    <th>Next Ping</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th className="tnx-type">
                      <div className="tnx-type-text" />
                    </th>
                  </tr>
                  {/* tr */}
                </thead>
                {/* thead */}
                <tbody>
                  {
                    jobs.map(job => (
                      <tr>
                        <td>{job.title}</td>
                        <td>{job.webhook}</td>
                        <td>{job.methodType}</td>
                        <td>{job.status}</td>
                        <td className="tnx-type"><span className="tnx-type-md badge badge-outline badge-success badge-md">Details</span></td>
                      </tr>
                    ))
                  }
                </tbody>
                {/* tbody */}
              </table>
              {/* .table */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* .container */}
  </div>
);

export default JobComponent;
