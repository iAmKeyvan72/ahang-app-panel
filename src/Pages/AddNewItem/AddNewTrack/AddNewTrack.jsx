import config from '../../../config.json';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { mdiMusic, mdiWeb } from '@mdi/js';

import classes from './AddNewTrack.module.css';

import Button from '../../../Components/UI/Shared/Button/Button';
import InputTextWithLabelAndIcon from '../../../Components/UI/Shared/Form/Inputs/InputTextWithLabelAndIcon/InputTextWithLabelAndIcon';
import DragNDrop from '../../../Components/UI/Shared/Form/DragNDrop/DragNDrop';
import MultiSelect from '../../../Components/UI/Shared/Form/MultiSelect/MultiSelect';
import TextAreaWithLabelAndIcon from '../../../Components/UI/Shared/Form/Inputs/TextAreaWithLabelAndIcon/TextAreaWithLabelAndIcon';

import useRequests from '../../../hooks/useRequests';

const AddNewTrack = () => {
  const { insertRecord } = useRequests();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        nameEnglish: '',
        nameFarsi: '',
        releaseYear: 0,
        coverRowImage: '',
        description: '',
        lyricsText: '',
        artists: [],
        hqUrl: '',
        mqUrl: '',
        lqUrl: '',
        videoUrl: '',
      }}
      onSubmit={async (values) => {
        const convertedValues = {
          title: {
            english: values.nameEnglish,
            farsi: values.nameFarsi,
          },
          releaseYear: values.releaseYear,
          cover: {
            rowImage: values.coverRowImage,
          },
          description: values.description,
          lyricsText: values.lyricsText,
          artists: values.artists,
          hqUrl: values.hqUrl,
          mqUrl: values.mqUrl,
          lqUrl: values.lqUrl,
          videoUrl: values.videoUrl,
        };
        const response = await insertRecord(convertedValues);
        console.log(response.data);
        navigate('/tracks');
      }}
    >
      {(props) => (
        <Form className={classes.formWrapper}>
          <div className={classes.formItem}>
            <InputTextWithLabelAndIcon
              label="Track's name (english)"
              id="nameEnglish"
              name="nameEnglish"
              placeholder="Track's name in english"
              icon="en"
            />
          </div>
          <div className={classes.formItem}>
            <InputTextWithLabelAndIcon
              label="?????? ???????? (??????????)"
              id="nameFarsi"
              name="nameFarsi"
              placeholder="?????? ???????? ???? ??????????"
              icon="fa"
              direction="rtl"
            />
          </div>

          <div className={classes.formItem}>
            <MultiSelect
              label="Artists"
              onChange={props.setFieldValue}
              onBlur={props.setFieldTouched}
              id="artists"
              value={props.values.artists}
              selectArrName="artists"
              endpoint={process.env.REACT_APP_ARTISTS}
            />
            <InputTextWithLabelAndIcon
              label="High Quality Mp3 (320)"
              id="hqUrl"
              name="hqUrl"
              placeholder="High Quality Mp3 (320) Link"
              icon={mdiMusic}
              style={{ margin: '20px 0' }}
            />
            <InputTextWithLabelAndIcon
              label="Medium Quality Mp3 (128)"
              id="mqUrl"
              name="mqUrl"
              placeholder="Medium Quality Mp3 (128) Link"
              icon={mdiMusic}
              style={{ marginBottom: 20 }}
            />
            <InputTextWithLabelAndIcon
              label="Low Quality Mp3 (64)"
              id="lqUrl"
              name="lqUrl"
              placeholder="Low Quality Mp3 (64) Link"
              icon={mdiMusic}
              style={{ marginBottom: 20 }}
            />
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
              label="??????????????"
              id="farsiDescription"
              name="farsiDescription"
              placeholder="????????????????? ???????????????? ???? ???????????? ??????????..."
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

export default AddNewTrack;
