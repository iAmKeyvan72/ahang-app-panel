import React from 'react';
import AsyncSelect from 'react-select/async';

import classes from './MultiSelect.module.css';

const artists = [
  {
    id: 0,
    enName: 'Behnam Bani',
    faName: 'بهنام بانی',
    image:
      'https://m.nex1music.ir/upload/2019-10-31/behnam-bani-in-eshgheh-2019-10-31-20-47-37.jpg',
  },
  {
    id: 1,
    enName: 'Behnam Safavi',
    faName: 'بهنام صفوی',
    image:
      'https://golsarmusic.ir/wp-content/uploads/2019/05/Behnam-Safavi-%E2%80%93-Donya-Be-Man-Nayomade.jpg',
  },
  {
    id: 2,
    enName: 'Shadmehr Aghili',
    faName: 'شادمهر عقیلی',
    image:
      'https://arga-mag.com/file/img/2019/01/Biography-of-Shadmehr-Aghili-9.jpg',
  },
  {
    id: 3,
    enName: 'Aron Afshar',
    faName: 'آرون افشار',
    image:
      'https://m.nex1music.ir/upload/2021-08-30/aron-afshar-khandehato-ghorboon-2021-08-30-19-17-12.jpg',
  },
  {
    id: 4,
    enName: 'Abbas Bouazar',
    faName: 'عباس بوعزار',
    image:
      'https://img.a.transfermarkt.technology/portrait/big/303572-1549214175.jpg?lm=1',
  },
  {
    id: 5,
    enName: 'Ali Abbasi',
    faName: 'علی عباسی',
    image:
      'https://www.ganja2music.com/Image/Post/2.2019/Ali%20Abbasi%20-%20Nafas.jpg',
  },
];

const MultiSelect = (props) => {
  const handleChange = (value) => {
    props.onChange(props.selectArrName, value);
  };

  const handleBlur = () => {
    props.onBlur(props.selectArrName, true);
  };

  const handleRemoteSearch = (value) => {
    return artists.filter(
      (artist) =>
        artist.enName.toLowerCase().includes(value.toLowerCase()) ||
        artist.faName.includes(value)
    );
  };

  const handleLoadOptions = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(handleRemoteSearch(value)), 1000);
    });
  };

  return (
    <div>
      <AsyncSelect
        isMulti
        id={props.id}
        loadOptions={handleLoadOptions}
        onChange={handleChange}
        onBlur={handleBlur}
        getOptionLabel={(option) => option.enName}
        getOptionValue={(option) => option.enName + option.faName}
      />
      {!!props.error && props.touched && (
        <div style={{ color: 'red', marginTop: '.5rem' }}>{props.error}</div>
      )}
    </div>
  );
};

export default MultiSelect;
