import React from 'react';
import { Formik } from 'formik';

import cronstrue from 'cronstrue';

const getCronText = (expression) => {
  try {
    return cronstrue.toString(expression);
  } catch (err) {
    return '';
  }
};

const CreateJobComponent = () => (
  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="main-content col-lg-12">
          <div className="d-lg-none">
            <div className="gaps-1x mgb-0-5x d-lg-none d-none d-sm-block" />
          </div>
          <Formik
            initialValues={{
              title: '', description: '', webhook: '', cronString: '', customPayload: '', methodType: 'GET',
            }}
            validate={(values) => {
              const errors = {};

              if (!values.email) {
                errors.email = 'Required';
              }
              if (!values.password) {
                errors.password = 'Required';
              }
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }

              return errors;
            }}
            onSubmit={(values) => {
              console.log('Values', values);
            }}
            render={props => (
              <form>
                <div className="content-area card">
                  <div className="card-innr">
                    <div className="card-head">
                      <span className="card-sub-title text-primary font-mid">Step 1</span>
                      <h4 className="card-title">Job Title</h4>
                    </div>
                    <div className="input-item input-with-label">
                      <input className="input-bordered" type="text" name="title" value={props.values.title} onChange={props.handleChange} />
                    </div>
                    <div className="card-head">
                      <span className="card-sub-title text-primary font-mid">Step 2</span>
                      <h4 className="card-title">Job Description</h4>
                    </div>
                    <div className="input-item input-with-label">
                      <textarea className="input-bordered input-textarea" onChange={props.handleChange}>
                        {props.values.description}
                      </textarea>
                    </div>
                    <div className="card-head">
                      <span className="card-sub-title text-primary font-mid">Step 3</span>
                      <h4 className="card-title">Enter URL endpoint</h4>
                    </div>
                    <div className="input-item input-with-label">
                      <input
                        className="input-bordered"
                        type="text"
                        id="webhook"
                        name="webhook"
                        placeholder="e.g http://yourwebsite.com/target/endpoint"
                        value={props.values.webhook}
                        onChange={props.handleChange}
                      />
                    </div>
                    <div className="card-head">
                      <span className="card-sub-title text-primary font-mid">Step 4</span>
                      <h4 className="card-title">Choose HTTP Request Method</h4>

                    </div>
                    <div className="card-text">
                      <div className="select-wrapper">
                        <select
                          className="input-bordered"
                          selected={props.values.methodType}
                          onChange={props.handleChange}
                        >
                          <option value="GET">GET</option>
                          <option value="POST">POST</option>
                          <option value="PUT">PUT</option>
                          <option value="DELETE">DELETE</option>
                        </select>
                      </div>
                    </div>
                    {/* .row */}
                    <div className="row">
                      <div className="input-item input-with-label" style={{ width: '100%', marginTop: '25px' }}>
                        <label className="input-item-label">Request payload</label>
                        <textarea className="input-bordered input-textarea" onChange={props.handleChange}>
                          { props.values.customPayload }
                        </textarea>
                      </div>
                    </div>
                    <div className="card-head">
                      <span className="card-sub-title text-primary font-mid">Step 5</span>
                      <h4 className="card-title">CRON Expression</h4>
                    </div>
                    <div className="card-text">
                      <p>Enter the cron expression for your job.</p>
                    </div>
                    <div className="input-item input-with-label">
                      <input
                        className="input-bordered"
                        type="text"
                        id="cronString"
                        name="cronString"
                        placeholder="3 * * * 5"
                        value={props.values.cronString}
                        onChange={props.handleChange}
                      />
                      <p>{ getCronText(props.values.cronString) }</p>
                    </div>
                    <div className="pay-buttons">
                      <div className="pay-button">
                        <button type="submit" className="btn btn-primary btn-between w-100">
                        Schedule Job
                          <em className="ti ti-arrow-right" />
                        </button>

                      </div>
                    </div>
                    <div className="pay-notes">
                      <div className="note note-plane note-light note-md font-italic">
                        <em className="fas fa-info-circle" />
                        <p>Please note that, URL endpoint that do not respond with a success status of 200 will be automatically disabled after 1 week. </p>
                      </div>
                    </div>
                  </div>
                  {/* .card-innr */}
                </div>
                {/* .content-area */}
              </form>
            )}
          />
        </div>
      </div>
      {/* .container */}
    </div>
  </div>

);

export default CreateJobComponent;
