import React from "react";
import COLLECTION from "../../../../api/collection.json"
import "./Section01.scss";
import Collection from "./components/Collection/Collection";


function Section01() {
 const data = COLLECTION.collection;
 const handleLike = (id,status) => {
  console.log(id,status)
 }
  return (
    <section className="home__block">
      <div className="inner">
        <div className="container">
          <div className="block01__wrapper">
            <h3 className="home__title">Top chuyện hay</h3>
            <p className="block01__description">
              Nói đéo với isekai fantasy đánh đấm, harem rác, NTR thượng đắng.{" "}
              <br />
              Ngọt và only ngọt.
            </p>
          </div>
          <div className="block01__row">
            {data.map((collection,index) => (
              <div className="block01__col3" key={`collection_${index}`}>
                <Collection data={collection} handleLike={handleLike}></Collection>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section01;
