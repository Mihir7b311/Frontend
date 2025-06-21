import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import './FileUpload.scss';

const FileUpload = ({ onFileUpload, accept }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  }, [onFileUpload]);

  const handleChange = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  }, [onFileUpload]);

  return (
    <motion.div
      className={`file-upload ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      whileHover={{ scale: 1.02 }}
    >
      <input 
        type="file" 
        id="file-upload-input" 
        onChange={handleChange}
        accept={accept}
      />
      <label htmlFor="file-upload-input">
        <div className="upload-content">
          <motion.div 
            className="upload-icon"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📁
          </motion.div>
          <p>Drag & drop your file here or click to browse</p>
          <p className="file-types">{accept}</p>
        </div>
      </label>
    </motion.div>
  );
};

export default FileUpload;