import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import DATA from "../../api/data.json";
import GENRE from "../../api/genre.json"
import Product from "../../views/components/Product/Product";
import { Link } from "react-router-dom/cjs/react-router-dom";
import BaseSelect from "../../views/components/BaseSelect/BaseSelect";
import { FilterName } from "../../helper/FilterName";
import './About.scss'

About.propTypes = {};

function About() {
  const [indActive, setIndActive] = useState(-1);
  const [filterActive, setFilterActive] = useState(false)
  const getCate = () => {
    let listCate = [];
    let listProduct = [];
    for(const [key,value] of Object.entries(DATA)) {
      listCate.push(key);
      listProduct.push(...value)
    }
    return {listCate,listProduct};
  }
  const getGenre = () => {
    let isGenre = [];
    let isCate = [{value: 'all', label: 'all'}];
    GENRE.data.map((genre) => {
      isGenre.push({value: `${genre.genreName}`, label: `${genre.genreName}`})
    });
    getCate().listCate.map((item) => {
      isCate.push({value: `${item}`, label: `${item}`})
    })
    return {isGenre,isCate}
  }
  const isOptions = getGenre().isGenre;
  const isCategory = getGenre().isCate;
  const VALIDATE_FORM = (Yup) => {
    const schema = {
      title: Yup.string(),
      form: Yup.mixed(),
      category: Yup.mixed(),
      tag: Yup.string(),
    }
    const initialValues = {
      title:'',
      form: {value: 'all', label: 'all'},
      category: []
    }
    return {schema,initialValues}
  }
    const [product,setProduct] = useState(getCate().listProduct);
  const validationSchema = Yup.object().shape({
    ...VALIDATE_FORM(Yup).schema
  })
  const handleOnChange = (value,setFieldValue,name) => {
    setFieldValue(name,value)
  }
  const isCate = getCate().listCate;
  const handleFilterForCate = (cate,ind) => {
    setIndActive(ind)
    setProduct(DATA[`${cate}`])
  }
  const handleFilter = (data,list,title) => {
    let arr = [];
    let listData = []
    list.map((item) => {
      arr.push(item.value)
    });
    if(list.length != 0) {
      for(let a = 0; a < data.length; a++) {
        for(let i = 0; i < list.length; i++) {
          data[a].Genre.map((child) => {
            if(child.genreName === list[i].value){
              listData.push(data[a])
            }
          })
        }
      }
      const resultData = FilterName(listData,title);
      return resultData;
    }
    return FilterName(data,title);
  }
  const handleSubmit = (value) => {
    let data = [];
    const arrValue = value.form.value == 'all' ? getCate().listProduct : DATA[value.form.value];
    data = [...arrValue];
    if(value.category) {
      data = handleFilter(data,value.category,value.title)
    }
    setProduct(data)
  }
  return (
    <main>
      <section className="lib__cate">
        <div className="inner">
          <div className="container">
            <ul className="lib__list">
              {
                isCate.map((cate,ind) => (
                  <li key={`cat_${ind}`} onClick={() => handleFilterForCate(cate,ind)} className={ind === indActive ? "active" : ""}><Link to={`/about?cate=${cate}`}>{cate}</Link></li>
                ))
              }
            </ul>
            <div className="lib__filter">
              <div className="lib__filter--btn" onClick={() => setFilterActive(true)}>
                <p className="is-btn"><i className="fa-solid fa-filter"></i><span>Bộ lọc</span></p>
              </div>
              <div className={filterActive ? "is-filter active" : "is-filter"}>
                <Formik
                  initialValues={VALIDATE_FORM(Yup).initialValues}
                  enableReinitialize
                  validationSchema={validationSchema}
                  onSubmit={values => {
                    handleSubmit(values)
                  }}
                >
                  {({values, isSubmitting,setFieldValue, handleChange, handleBlur}) => (
                    <Form>
                        <div className="form-group">
                          <Field name="title" placeholder="Tựa đề chứa cụm từ" value={values.title}></Field>
                        </div>
                        <div className="form-group">
                          <BaseSelect isMulti={false} name={`form`} options={isCategory} placeholder={'Thể loại'}></BaseSelect>
                        </div>
                        <div className="form-group">
                          <BaseSelect defaultValue={[]} isMulti={true} name={`category`} options={isOptions} placeholder={'Tag'}></BaseSelect>
                        </div>
                         <button type="submit" onClick={() => setFilterActive(false)}>Submit</button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lib__wrap">
        <div className="inner">
          <div className="container">
            <div className="resource__row">
              {
               product.length != 0 
               ?  <>
                {
                  product.map((item,ind) => (
                   <div className="resource__col" key={`product_${ind}`}>
                      <Product dataProduct={item}></Product>
                    </div>
                ))
                }
               </>
               : <p className="list-none">
               không có dữ liệu
               </p>
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About;
