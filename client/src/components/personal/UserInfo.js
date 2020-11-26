import React, { useState, useEffect, Fragment } from 'react';
import { getProfile, updateProfile } from '../../actions/profileActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const initialState = {
  location: '',
  bio: '',
  youtube: '',
  facebook: '',
  instagram: '',
};

export const UserInfo = ({
  getProfile,
  profile: { profile, loading },
  updateProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }

    //eslint-disable-next-line
  }, [loading, getProfile, profile]);


  return (
    <Fragment>
    </Fragment>
  );
};

UserInfo.propTypes = {
  getProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getProfile, updateProfile })(
  UserInfo
);
