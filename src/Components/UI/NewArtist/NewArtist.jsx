import config from '../../../config.json';

import React from 'react';
import { Formik, Field, Form } from 'formik';
import Icon from '@mdi/react';
import { mdiArrowLeft, mdiWeb } from '@mdi/js';

import classes from './NewArtist.module.css';
import Button from '../Shared/Button/Button';
import Anchor from '../Shared/Anchor/Anchor';
import InputTextWithLabelAndIcon from '../Shared/Form/Inputs/InputTextWithLabelAndIcon/InputTextWithLabelAndIcon';
import DragNDrop from '../Shared/Form/DragNDrop/DragNDrop';
import MultiSelect from '../Shared/Form/MultiSelect/MultiSelect';
import TextAreaWithLabelAndIcon from '../Shared/Form/Inputs/TextAreaWithLabelAndIcon/TextAreaWithLabelAndIcon';

const NewArtist = () => {
  return (
    <div className={classes.contentsWrapper}>
      <div className={classes.header}>
        <Anchor to=".." title="artists" className="secondary">
          <Icon path={mdiArrowLeft} size={1} />
          All Artists
        </Anchor>
      </div>

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
          imageUrl: '',
          artists: [],
          englishDescription: '',
          farsiDescription: '',
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
    </div>
  );
};

export default NewArtist;
