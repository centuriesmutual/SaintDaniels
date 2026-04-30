'use client';

import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { FaSnapchatGhost, FaUserEdit, FaCheckCircle } from 'react-icons/fa';
import SnapchatAvatar from './SnapchatAvatar';

const SnapchatProfileModal = ({ show, onHide, onConnect }) => {
  const [username, setUsername] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setError('');
    setSuccess('');
  };

  const handleSaveUsername = async () => {
    if (!username.trim()) {
      setError('Username cannot be empty');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      // This would be replaced with actual Snapchat API call
      // await updateSnapchatUsername(username);
      setSuccess('Username updated successfully');
      setIsEditing(false);
    } catch (error) {
      setError('Failed to update username. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleConnect = () => {
    onConnect();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FaSnapchatGhost className="me-2" />
          Snapchat Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="snapchat-profile-modal">
          <div className="profile-header text-center mb-4">
            <SnapchatAvatar size="large" className="mx-auto mb-3" />
            
            {isEditing ? (
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter Snapchat username"
                    disabled={isLoading}
                  />
                  <Button
                    variant="primary"
                    onClick={handleSaveUsername}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                    ) : (
                      <FaCheckCircle />
                    )}
                  </Button>
                </div>
                {error && <Form.Text className="text-danger">{error}</Form.Text>}
                {success && <Form.Text className="text-success">{success}</Form.Text>}
              </Form.Group>
            ) : (
              <div className="username-section">
                <h4 className="mb-2">@health_warrior</h4>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={handleEditClick}
                >
                  <FaUserEdit className="me-1" />
                  Change Username
                </Button>
              </div>
            )}
          </div>

          <div className="text-center mb-4">
            <h5 className="text-primary mb-3">Coming Soon: Exciting Gaming Features!</h5>
            <p className="text-muted mb-4">
              Connect your Snapchat account to be among the first to experience our upcoming fitness gaming platform.
              Get ready for team challenges, multiplayer games, and exclusive career development benefits!
            </p>
          </div>

          <div className="profile-actions d-flex justify-content-center">
            <Button 
              className="profile-action-btn"
              onClick={handleConnect}
              size="lg"
            >
              <FaSnapchatGhost className="me-2" />
              Connect Snapchat
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SnapchatProfileModal; 