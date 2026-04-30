'use client';

import { useState, useRef } from 'react';
import { Modal, Button, Form, Spinner, Tabs, Tab } from 'react-bootstrap';

export default function ReceiptScanner({ show, onHide, onSuccess }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState('');
  const [pointsEarned, setPointsEarned] = useState(null);
  const [activeTab, setActiveTab] = useState('upload');
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError('Unable to access camera. Please check permissions or use file upload instead.');
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setError('');
    
    if (key === 'camera') {
      startCamera();
    } else {
      stopCamera();
    }
  };

  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame on canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert to file
    canvas.toBlob((blob) => {
      if (!blob) {
        setError('Failed to capture image. Please try again.');
        return;
      }
      
      const capturedFile = new File([blob], 'receipt-capture.jpg', { type: 'image/jpeg' });
      setFile(capturedFile);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(capturedFile);
      
      // Stop camera after capture
      stopCamera();
      setActiveTab('upload');
    }, 'image/jpeg', 0.95);
  };

  const handleFileChange = (e) => {
    setError('');
    setPointsEarned(null);
    
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    
    // Check file type
    if (!selectedFile.type.includes('image/')) {
      setError('Please upload an image file (jpeg, png, etc)');
      return;
    }
    
    // Check file size (max 5MB)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }
    
    setFile(selectedFile);
    
    // Generate preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a receipt image to upload');
      return;
    }
    
    setScanning(true);
    setError('');
    
    // Simulate API call to process receipt
    // In a real app, you'd send the file to a backend service for OCR processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing delay
      
      // Simulate a successful scan with random USDA purchase amount
      const amountSpent = Math.floor(Math.random() * 150) + 10; // Random $10-$160
      const pointsAwarded = amountSpent; // 1 point per dollar
      
      setPointsEarned({
        amountSpent,
        pointsAwarded
      });
      
      // In a real app, we would save this to the user's account
    } catch (err) {
      setError('Error processing receipt. Please try again.');
      console.error(err);
    } finally {
      setScanning(false);
    }
  };

  const handleComplete = () => {
    if (onSuccess && pointsEarned) {
      onSuccess(pointsEarned);
    }
    handleReset();
    onHide();
  };

  const handleReset = () => {
    setFile(null);
    setPreview(null);
    setPointsEarned(null);
    setError('');
    stopCamera();
  };

  const handleModalHide = () => {
    handleReset();
    onHide();
  };

  return (
    <Modal show={show} onHide={handleModalHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Grocery Points Rebate</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        {!pointsEarned ? (
          <>
            <div className="text-center mb-4">
              <p>Upload your grocery receipt and earn 1 point for every dollar spent on USDA food!</p>
            </div>
            
            <Tabs
              activeKey={activeTab}
              onSelect={handleTabChange}
              className="mb-4"
            >
              <Tab eventKey="upload" title="Upload Receipt">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Upload Receipt Image</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={scanning}
                    />
                    <Form.Text className="text-muted">
                      Upload a clear image of your receipt. Max file size: 5MB.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Tab>
              
              <Tab eventKey="camera" title="Take Photo">
                <div className="camera-container mb-3">
                  <div className="text-center mb-3">
                    <video 
                      ref={videoRef}
                      autoPlay 
                      playsInline 
                      className="camera-preview"
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '300px', 
                        border: '1px solid #ddd',
                        borderRadius: '8px'
                      }}
                    ></video>
                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
                  </div>
                  
                  <div className="d-grid">
                    <Button 
                      variant="primary"
                      onClick={captureImage}
                      className="btn-gold"
                    >
                      Capture Receipt
                    </Button>
                  </div>
                </div>
              </Tab>
            </Tabs>
            
            {error && (
              <div className="alert alert-danger">{error}</div>
            )}
            
            {preview && (
              <div className="my-3 text-center">
                <p>Receipt Preview:</p>
                <img 
                  src={preview} 
                  alt="Receipt preview" 
                  className="img-fluid receipt-preview" 
                  style={{ maxHeight: '300px', border: '1px solid #ddd' }}
                />
              </div>
            )}
            
            <div className="d-grid gap-2 mt-4">
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={!file || scanning}
                className="btn-gold"
              >
                {scanning ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                    <span className="ms-2">Scanning...</span>
                  </>
                ) : "Scan Receipt"}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="mb-4">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#4CAF50" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            
            <h3 className="mb-3">Rebate Approved!</h3>
            <p className="mb-1">Amount spent on USDA products: <strong>${pointsEarned.amountSpent.toFixed(2)}</strong></p>
            <p className="mb-4">Points earned: <strong>{pointsEarned.pointsAwarded}</strong></p>
            
            <Button 
              variant="primary" 
              onClick={handleComplete}
              className="btn-gold"
            >
              Complete
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
} 