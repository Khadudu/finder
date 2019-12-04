import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="mx-auto ">
          <img
            className="portrait img-fluid rounded-circle p-2"
            src={avatar_url}
            alt="avatar"
          />
          <p>{login}</p>
          <div>
            <a href={html_url} className="btn btn-dark p-1">
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
