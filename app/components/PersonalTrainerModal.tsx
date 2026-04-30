'use client';

import { useState } from 'react';
import { Modal, Button, Card, Tabs, Tab, Row, Col, Table, ProgressBar, Form } from 'react-bootstrap';
import Image from 'next/image';

export default function PersonalTrainerModal({ show, onHide }) {
  const [activeTab, setActiveTab] = useState('trainers');
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [healthStats, setHealthStats] = useState({
    heartRate: 72,
    steps: 7845,
    calories: 1250,
    sleep: 7.2,
    workouts: 3
  });

  // Dummy trainers data
  const trainers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiovascular Health',
      experience: '12 years',
      rating: 4.8,
      bio: 'Dr. Sarah Johnson specializes in exercise physiology with a focus on cardiovascular health. She has helped hundreds of clients improve their heart health through customized workout plans.',
      image: '/images/saintdanielslogo.jpeg', // Using logo as placeholder
      availability: 'Mon, Wed, Fri'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Strength Training',
      experience: '10 years',
      rating: 4.7,
      bio: 'Dr. Michael Chen has extensive experience in sports medicine and strength training. His approach combines science-based methods with practical applications for optimal results.',
      image: '/images/saintdanielslogo.jpeg',
      availability: 'Tue, Thu, Sat'
    }
  ];

  // Dummy workout schedule
  const workoutSchedule = [
    { day: 'Monday', activity: 'Cardio', duration: '45 min', time: '7:00 AM', intensity: 'Moderate' },
    { day: 'Tuesday', activity: 'Rest', duration: '—', time: '—', intensity: '—' },
    { day: 'Wednesday', activity: 'Strength Training', duration: '60 min', time: '6:30 AM', intensity: 'High' },
    { day: 'Thursday', activity: 'Flexibility', duration: '30 min', time: '7:00 PM', intensity: 'Low' },
    { day: 'Friday', activity: 'HIIT Workout', duration: '30 min', time: '7:00 AM', intensity: 'High' },
    { day: 'Saturday', activity: 'Light Cardio', duration: '45 min', time: '9:00 AM', intensity: 'Low' },
    { day: 'Sunday', activity: 'Rest', duration: '—', time: '—', intensity: '—' }
  ];

  const handleConnect = () => {
    // In a real app, this would redirect to the external personal trainer platform
    window.open('https://www.example.com/personal-trainer', '_blank');
  };

  const handleSelectTrainer = (trainer) => {
    setSelectedTrainer(trainer);
    setActiveTab('schedule');
  };

  const handleBackToTrainers = () => {
    setSelectedTrainer(null);
    setActiveTab('trainers');
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" dialogClassName="trainer-modal">
      <Modal.Header closeButton>
        <Modal.Title>Personal Training Program</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Tabs
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-4"
        >
          <Tab eventKey="trainers" title="Select Trainer">
            <div className="text-center mb-4">
              <p>Connect with certified personal trainers to develop a customized fitness plan that works for you.</p>
            </div>
            
            <div className="trainer-options">
              {trainers.map(trainer => (
                <Card className="mb-3" key={trainer.id}>
                  <Card.Body>
                    <Row>
                      <Col xs={12} md={3} className="mb-3 mb-md-0">
                        <div className="trainer-avatar">
                          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '100px', height: '100px' }}>
                            <Image 
                              src={trainer.image} 
                              alt={trainer.name} 
                              width={100} 
                              height={100} 
                              className="trainer-image"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} md={9}>
                        <div className="d-flex justify-content-between align-items-start">
                          <h5 className="mb-1">{trainer.name}</h5>
                          <span className="badge bg-primary">{trainer.rating} ★</span>
                        </div>
                        <p className="text-muted mb-2">Specialty: {trainer.specialty} • {trainer.experience} experience</p>
                        <p className="small mb-3">{trainer.bio}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">Available: {trainer.availability}</small>
                          <Button 
                            variant="primary" 
                            size="sm"
                            className="btn-gold"
                            onClick={() => handleSelectTrainer(trainer)}
                          >
                            Select Trainer
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
            
            <div className="benefits-section mt-4 p-3 bg-light rounded">
              <h5>Benefits</h5>
              <ul>
                <li>Improved physical health and fitness</li>
                <li>Personalized workouts based on your goals</li>
                <li>Professional guidance to prevent injuries</li>
                <li>Accountability to stay on track</li>
              </ul>
            </div>
          </Tab>
          
          <Tab eventKey="schedule" title="Workout Schedule">
            {selectedTrainer ? (
              <>
                <div className="selected-trainer-info mb-4">
                  <Row>
                    <Col xs={12} md={3} className="text-center">
                      <div className="rounded-circle bg-light d-flex align-items-center justify-content-center overflow-hidden mx-auto" style={{ width: '100px', height: '100px' }}>
                        <Image 
                          src={selectedTrainer.image} 
                          alt={selectedTrainer.name} 
                          width={100} 
                          height={100} 
                        />
                      </div>
                    </Col>
                    <Col xs={12} md={9}>
                      <h5>Your Trainer: {selectedTrainer.name}</h5>
                      <p className="text-muted small mb-1">Specialty: {selectedTrainer.specialty}</p>
                      <p className="text-muted small">Availability: {selectedTrainer.availability}</p>
                      <Button 
                        variant="link" 
                        className="p-0 text-primary" 
                        onClick={handleBackToTrainers}
                      >
                        Change Trainer
                      </Button>
                    </Col>
                  </Row>
                </div>
                
                <h5 className="mb-3">Your Weekly Workout Schedule</h5>
                
                <div className="table-responsive mb-4">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Activity</th>
                        <th>Duration</th>
                        <th>Time</th>
                        <th>Intensity</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workoutSchedule.map((workout, index) => (
                        <tr key={index}>
                          <td><strong>{workout.day}</strong></td>
                          <td>{workout.activity}</td>
                          <td>{workout.duration}</td>
                          <td>{workout.time}</td>
                          <td>{workout.intensity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                
                <div className="text-center mb-3">
                  <Button 
                    variant="primary" 
                    className="btn-gold"
                    onClick={() => setActiveTab('metrics')}
                  >
                    View Health Metrics
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-5">
                <p>Please select a trainer first</p>
                <Button 
                  variant="primary" 
                  onClick={() => setActiveTab('trainers')}
                  className="btn-gold"
                >
                  Select Trainer
                </Button>
              </div>
            )}
          </Tab>
          
          <Tab eventKey="metrics" title="Health Metrics">
            <h5 className="mb-4">Your Health Statistics</h5>
            
            <Row className="mb-4">
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <h6>Heart Rate</h6>
                    <div className="d-flex align-items-center mb-2">
                      <div className="display-5 me-2">{healthStats.heartRate}</div>
                      <div className="text-muted">BPM</div>
                    </div>
                    <div className="small text-muted">Normal resting heart rate</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <h6>Steps</h6>
                    <div className="d-flex align-items-center mb-2">
                      <div className="display-5 me-2">{healthStats.steps.toLocaleString()}</div>
                      <div className="text-muted">steps</div>
                    </div>
                    <ProgressBar now={78} variant="success" className="mt-2" />
                    <div className="small text-muted mt-1">78% of daily goal</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <h6>Calories Burned</h6>
                    <div className="d-flex align-items-center mb-2">
                      <div className="display-5 me-2">{healthStats.calories}</div>
                      <div className="text-muted">kcal</div>
                    </div>
                    <ProgressBar now={62} variant="warning" className="mt-2" />
                    <div className="small text-muted mt-1">62% of daily goal</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-3">
                <Card className="h-100">
                  <Card.Body>
                    <h6>Sleep</h6>
                    <div className="d-flex align-items-center mb-2">
                      <div className="display-5 me-2">{healthStats.sleep}</div>
                      <div className="text-muted">hours</div>
                    </div>
                    <ProgressBar now={90} variant="info" className="mt-2" />
                    <div className="small text-muted mt-1">90% of recommended sleep</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <h6 className="mb-3">Weekly Progress</h6>
            <div className="chart-placeholder bg-light p-4 rounded text-center mb-4">
              <p className="text-muted mb-0">Health metrics chart would appear here</p>
              <p className="small text-muted">(Connect a fitness device to see real-time data)</p>
            </div>
            
            <Form className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Connect your fitness device</Form.Label>
                <Form.Select>
                  <option>Select device...</option>
                  <option>Fitbit</option>
                  <option>Apple Watch</option>
                  <option>Garmin</option>
                  <option>Samsung Health</option>
                  <option>Google Fit</option>
                </Form.Select>
              </Form.Group>
              <Button variant="outline-primary" size="sm">Connect Device</Button>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleConnect} className="btn-gold">
          Schedule Consultation
        </Button>
      </Modal.Footer>
    </Modal>
  );
} 