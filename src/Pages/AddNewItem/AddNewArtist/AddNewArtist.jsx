import config from '../../../config.json';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { mdiWeb } from '@mdi/js';

import classes from './AddNewArtist.module.css';

import Button from '../../../Components/UI/Shared/Button/Button';
import InputTextWithLabelAndIcon from '../../../Components/UI/Shared/Form/Inputs/InputTextWithLabelAndIcon/InputTextWithLabelAndIcon';
import DragNDrop from '../../../Components/UI/Shared/Form/DragNDrop/DragNDrop';
import MultiSelect from '../../../Components/UI/Shared/Form/MultiSelect/MultiSelect';
import TextAreaWithLabelAndIcon from '../../../Components/UI/Shared/Form/Inputs/TextAreaWithLabelAndIcon/TextAreaWithLabelAndIcon';

import useRequests from '../../../hooks/useRequests';

const AddNewArtist = () => {
  const { insertRecord } = useRequests();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        nameEnglish: '',
        nameFarsi: '',
        isIllegal: false,
        isBand: false,
        bandArtists: [],
        profilePic: '',
        enDescription: '',
        faDescription: '',
        files: [],
        imageUrl: '',
        artists: [],
        englishDescription: '',
        farsiDescription: '',
      }}
      onSubmit={async (values) => {
        const convertedValues = {
          name: {
            english: values.nameEnglish,
            farsi: values.nameFarsi,
          },
          image: {
            rawImage: values.imageUrl,
          },
          description: values.englishDescription,
          isBand: values.isBand,
        };

        const response = await insertRecord(convertedValues);
        console.log(response.data);
        navigate('/artists');
      }}
    >
      {(props) => (
        <Form className={classes.formWrapper}>
          <div className={classes.formItem}>
            <InputTextWithLabelAndIcon
              label="Artist's name (english)"
              id="nameEnglish"
              name="nameEnglish"
              placeholder="Artist's name in english"
              icon="en"
            />
          </div>
          <div className={classes.formItem}>
            <InputTextWithLabelAndIcon
              label="نام خواننده (فارسی)"
              id="nameFarsi"
              name="nameFarsi"
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
                endpoint={process.env.REACT_APP_ARTISTS}
              />
            )}
          </div>

          <div className={classes.formItem}>
            <DragNDrop
              setFieldValue={props.setFieldValue}
              imagePlaceholder={config.placeholders.artists}
              style={{ marginBottom: 20 }}
            />
            <InputTextWithLabelAndIcon
              label="Or paste the image address url below"
              id="imageUrl"
              name="imageUrl"
              placeholder="address of image"
              icon={mdiWeb}
            />
          </div>

          <div className={classes.formItem}>
            <TextAreaWithLabelAndIcon
              label="Description (bio or sth...)"
              id="englishDescription"
              name="englishDescription"
              placeholder="Say something about his bio or somethings..."
              icon="en"
              rows={10}
            />
          </div>

          <div className={classes.formItem}>
            <TextAreaWithLabelAndIcon
              label="توضیحات"
              id="farsiDescription"
              name="farsiDescription"
              placeholder="درباره‌ی بیوگرافی یا امثالش بنویس..."
              icon="fa"
              direction="rtl"
              rows={10}
            />
          </div>

          <Button
            type="submit"
            className="primary"
            style={{ margin: '30px 10px' }}
          >
            Submit Artist
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewArtist;
