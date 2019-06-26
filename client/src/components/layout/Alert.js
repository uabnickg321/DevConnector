import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// destructuring props.alerts to just alerts
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

// We want to get the Alert state, the array needs to be fetched into this component
const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
