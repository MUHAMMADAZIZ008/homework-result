import React from 'react'
import { data } from '../../../data/data'
import ProductSection from './product-section'

const data1 = data.filter((item) => item.category === 'Новинка')
const data2 = data.filter((item) => item.category === 'Скидки')



const Sections = () => {
  return (<>
    <ProductSection data={data1} title={'Новинка'} link={'#'}/>
    <ProductSection data={data2} title={'Скидки'} link={'#'}/>
  </>)
}

export default Sections