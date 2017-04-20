import React, { PropTypes } from 'react';

const RepoItem = ({ repo }) => {
  // console.log(repo)
  return (
    <div>
      <h3>{repo.name}</h3>
        <ul>
          <li>{repo.description}</li>
          <li><a href={repo.html_url}>{repo.html_url}</a></li>
          <li >{repo.language}</li>
        </ul>
    </div>

  );
};

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired
};

export default RepoItem;