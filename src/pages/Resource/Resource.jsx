import React from 'react';
import SourceManga from '../../views/components/SourceManga/SourceManga';
import DATA from '../../api/data.json'
import Product from '../../views/components/Product/Product';
import './Resource.scss'

function Resource() {
  const getUrlParam = () => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    return urlParams.get('cate');
  }
  const pageUrl = getUrlParam();
  const pageData = DATA[`${pageUrl}`];
 return (
  <main>
     <section className='home__block02 home__bg'>
        <SourceManga title={`${pageUrl}`} name={`${pageUrl}`} description={`${pageUrl}`} data={pageData}></SourceManga>
      </section>
      <section className="resource">
        <div className="inner">
          <h3 className="resource__title">{`Tổng hợp ${pageUrl}`}</h3>
          <div className="container">
            <div className="resource__row">
              {
                  pageData.map((item) => (
                    <div className="resource__col" key={`${pageUrl}__${item.id}`}>
                      <Product dataProduct={item}></Product>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </section>
  </main>
 );
}

export default Resource;