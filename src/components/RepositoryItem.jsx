import React from 'react';

const RepositoryItem = ({ name, lastUpdated }) => {
  return (
    <div className="repository-item">
      <div className="repo-info">
        <h3>{name}</h3>
        <p>Updated {lastUpdated}</p>
      </div>
    </div>
  );
};

export default RepositoryItem;