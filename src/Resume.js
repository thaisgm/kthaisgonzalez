import React from 'react';
import './Resume.css';
import Button from 'react-bootstrap/Button';

function Resume() {
  return (
    <div className="Resume">
      <div className="download">
        <div className="downloadTextBox">
          <p className="downloadText"> Throughout my time at Michigan, I've gathered a variety of experience in fullstack development, marketing automation, and product design. Click below to download my resume!</p>
        </div>
        <Button className="downloadBtn" variant="primary" href="https://drive.google.com/open?id=1Qy75I026BvIH7E9ikZRd7OEZfxXPnURp">
        </Button>
      </div>
    </div>
  );
}

export default Resume;
