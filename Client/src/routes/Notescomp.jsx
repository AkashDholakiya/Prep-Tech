import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function openPdfInNewPage(props) {
  window.open('your_pdf_file_url', '_blank');
}

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <button onClick={openPdfInNewPage}>Open PDF</button>
      <Document file="your_pdf_file_url" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}