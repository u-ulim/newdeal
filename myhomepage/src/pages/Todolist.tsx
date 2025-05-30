import React from 'react'
import SectionTitle from '../components/SectionTitle'

const Todolist = () => {
    return (
        <div className="main todolist">
            <div className='content-inner'>
                <SectionTitle title="Todo List" subTitle="오늘의 할일 스케줄을 관리해보세요" />
                <div>contact 본문</div>
            </div>
        </div>
    )
}

export default Todolist
