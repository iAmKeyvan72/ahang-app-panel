import React, { useState, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';

import classes from './DragNDrop.module.css';

import Button from '../../Button/Button';

const DragNDrop = ({ setFieldValue, imagePlaceholder, style }) => {
  const [files, setFiles] = useState([]);

  const dropzoneRef = useRef();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFieldValue('files', acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        )
      );
    },
  });

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const openDialog = () => {
    if (dropzoneRef) {
      dropzoneRef.current.open();
    }
  };

  return (
    <div className={classes.wrapper} style={style}>
      <div {...getRootProps({ className: 'dropZone' })} ref={dropzoneRef}>
        <input {...getInputProps()} />
        <div className={classes.contentsWrapper}>
          <img
            className={classes.thumbnail}
            src={files[0] ? files[0]?.preview : imagePlaceholder}
            alt="preview"
            width={60}
            height={60}
          />
          <div className={classes.contents}>
            <p>Drag image here or browse it</p>
            <Button
              className="secondary"
              type="button"
              onClick={() => openDialog}
              title="Choose image"
            >
              Choose image
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragNDrop;
