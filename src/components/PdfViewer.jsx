import React, { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './PdfViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const PdfViewer = ({ file, downloadUrl, title }) => {
    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const onDocumentLoadSuccess = useCallback(({ numPages }) => {
        setNumPages(numPages);
        setLoading(false);
    }, []);

    const onDocumentLoadError = useCallback(() => {
        setError(true);
        setLoading(false);
    }, []);

    return (
        <div className="pdfviewer">
            <div className="pdfviewer__toolbar">
                <span className="pdfviewer__title">{title}</span>
                <div className="pdfviewer__actions">
                    {numPages && (
                        <span className="pdfviewer__pages">{numPages} stran</span>
                    )}
                    <a
                        href={downloadUrl}
                        download
                        className="btn btn--gold pdfviewer__download"
                        aria-label="Stáhnout PDF"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Stáhnout PDF
                    </a>
                </div>
            </div>

            <div className="pdfviewer__scroll">
                {loading && (
                    <div className="pdfviewer__loading">
                        <div className="pdfviewer__spinner" />
                        <span>Načítám PDF…</span>
                    </div>
                )}
                {error && (
                    <div className="pdfviewer__error">
                        <p>PDF se nepodařilo načíst.</p>
                        <a href={downloadUrl} download className="btn btn--gold">Stáhnout PDF</a>
                    </div>
                )}
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={onDocumentLoadError}
                    loading={null}
                >
                    {Array.from({ length: numPages || 0 }, (_, i) => (
                        <div key={i} className="pdfviewer__page-wrap">
                            <Page
                                pageNumber={i + 1}
                                width={Math.min(window.innerWidth - 80, 900)}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                            <div className="pdfviewer__page-num">{i + 1} / {numPages}</div>
                        </div>
                    ))}
                </Document>
            </div>
        </div>
    );
};

export default PdfViewer;
