import React from 'react';
import '../styles/Repository.css';
import RepositoryItem from './RepositoryItem';

const Repository = () => {
  const repositories = [
    { name: 'design-system', lastUpdated: '2 days ago' },
    { name: 'assistant-ui-sdk', lastUpdated: '3 days ago' },
    { name: 'analytics-dashboard', lastUpdated: '1 week ago' },
    { name: 'mobile-app', lastUpdated: '5 days ago' },
  ];

  return (
    <div className="repository-container">
      <div className="sidebar">
        <img src="/api/placeholder/40/40" alt="Logo" className="repo-logo" />
        <nav>
          <ul>
            <li className="active">Repositories</li>
            <li>Settings</li>
            <li>Profile</li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Repositories</h2>
          <div className="header-buttons">
            <button className="create-btn">+ Create</button>
            <button className="import-btn">Import</button>
          </div>
        </div>
        <div className="repository-list">
          {repositories.map((repo, index) => (
            <RepositoryItem key={index} {...repo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Repository;