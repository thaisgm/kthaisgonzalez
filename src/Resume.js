import React from 'react';
import './Resume.css';
import Button from 'react-bootstrap/Button';
import DownloadLink from "react-download-link";


function Resume() {
  return (
    <div className="Resume">
      <div className="download">
        <div className="downloadTextBox">
          <p className="downloadText"> Throughout my time at Michigan, I've gathered a variety of experience in fullstack development, marketing automation, and product design. Click below to download my resume!</p>
        </div>
        <Button className="downloadBtn" variant="primary">
          <DownloadLink
            className="pdfDownload"
            label="Download Resume as PDF"
            filename="ThaisGonzalezResume.pdf"
            exportFile={() => Promise.resolve("My cached data")}
            onLoadError={console.error}
          />
        </Button>
      </div>
    </div>
  );
}

export default Resume;
