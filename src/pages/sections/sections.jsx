import React from 'react'
import { data } from '../../data/data'
import Section from '../../components/section/section'

const data1 = data.filter((item) => item.category === 'Новинка')
const data2 = data.filter((item) => item.category === 'Скидки')



const Sections = () => {
  return (<>
    <Section data={data1} title={'Новинка'} link={'#'}/>
    <Section data={data2} title={'Скидки'} link={'#'}/>
  </>)
}

export default Sections