import React from 'react'
import BigTitle from '../components/BigTitle'
import "../components/scss/BigTitle.scss";
import Cube from '../components/Cube';

const Main = () => {
    return (
        <div className='main index'>
            <div className='content-inner'>
                <BigTitle title="FROND END"
                    desTitle='DEVELOPER' subTitle="GIL DONG" />
                <Cube />
            </div>
        </div>
    )
}

export default Main
