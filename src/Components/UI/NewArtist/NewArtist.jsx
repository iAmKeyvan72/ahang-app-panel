import config from '../../../config.json';

import React from 'react';
import { Formik, Field, Form } from 'formik';

import classes from './NewArtist.module.css';
import Button from '../Shared/Button/Button';
import InputTextWithLabelAndIcon from '../Shared/Form/Inputs/InputTextWithLabelAndIcon/InputTextWithLabelAndIcon';
import DragNDrop from '../Shared/Form/DragNDrop/DragNDrop';
import MultiSelect from '../Shared/Form/MultiSelect/MultiSelect';

const NewArtist = () => {
  return (
    <Formik
      initialValues={{
        enName: '',
        faName: '',
        isIllegal: false,
        isBand: false,
        bandArtists: [],
        profilePic: '',
        enDescription: '',
        faDescription: '',
        files: [],
        artists: [],
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 2000));
        alert(JSON.stringify(values, null, 10));
      }}
    >
      {(props) => (
        <Form className={classes.formWrapper}>
          <div className={classes.formItem}>
            <InputTextWithLabelAndIcon
              label="Artist's name (english)"
              id="enName"
              name="enName"
              placeholder="Artist's name in english"
              icon="en"
            />
          </div>
          <div className={classes.formItem}>
            <InputTextWithLabelAndIcon
              label="نام خواننده (فارسی)"
              id="faName"
              name="faName"
              placeholder="نام خواننده به فارسی"
              icon="fa"
              direction="rtl"
            />
          </div>

          <div className={classes.formItem}>
            <div className={classes.checkboxWrapper}>
              <label htmlFor="isIllegal">
                <Field type="checkbox" id="isIllegal" name="isIllegal" /> This
                is Illegal.
              </label>
            </div>

            <div className={classes.checkboxWrapper}>
              <label htmlFor="isBand">
                <Field type="checkbox" id="isBand" name="isBand" /> This is a
                Band.
              </label>
            </div>

            {props.values.isBand && (
              <MultiSelect
                onChange={props.setFieldValue}
                onBlur={props.setFieldTouched}
                id="artists"
                value={props.values.artists}
                selectArrName="artists"
              />
            )}
          </div>

          <div className={classes.formItem}>
            <DragNDrop
              setFieldValue={props.setFieldValue}
              imagePlaceholder={config.placeholders.artists}
            />
          </div>
          <Button type="submit" className="primary">
            Submit Artist
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewArtist;
