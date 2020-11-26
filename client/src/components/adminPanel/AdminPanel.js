import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAusers } from '../../actions/usersActions';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { FormattedMessage } from 'react-intl';

const AdminPanel = (props) => {
  useEffect(() => {
    props.getAusers();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Fragment>
        {props.users.users !== null && !props.users.loading ? (
          <table class='table table-sm'>
            <thead>
              <tr>
                <th scope='col-sm'>id</th>
                <th scope='col-sm'>
                  Name
                  <FormattedMessage
                    id='adminPanel.name-tableheader'
                    defaultMessage='Name'
                  />
                </th>
                <th scope='col-sm'>Email</th>
                <th scope='col-sm'>
                  {' '}
                  <FormattedMessage
                    id='adminPanel.status-tableheader'
                    defaultMessage='Status'
                  />
                </th>
                <th scope='col-sm'>
                  <FormattedMessage
                    id='adminPanel.admin-tableheader'
                    defaultMessage='Admin'
                  />
                </th>
                <th scope='col-sm'>
                  <FormattedMessage
                    id='adminPanel.edit-tableheader'
                    defaultMessage='Edit'
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {props.users.users.map((user) => (
                <UserItem key={user._id} user={user} />
              ))}
            </tbody>
          </table>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </div>
  );
};

AdminPanel.propTypes = {
  getAusers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { getAusers })(AdminPanel);
