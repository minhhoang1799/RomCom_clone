import React from 'react';
import DATA from '../../../../api/data.json'
import PropTypes from 'prop-types';
import SourceManga from '../../../../views/components/SourceManga/SourceManga';

Section02.propTypes = {
 
};

function Section02(props) {
 const Manga = DATA.Manga;
 const showData = [];
 for(let i = 0; i< 10; i++) {
  showData.push(Manga[i])
 }
 return (
  <section className='home__block02 home__bg'>
   <SourceManga title={`Top RomCom`} name={`ROMCOM`} description={`Top RomCom nên đọc dù bé lớn già trẻ`} data={showData}></SourceManga>
  </section>
 );
}

export default Section02;