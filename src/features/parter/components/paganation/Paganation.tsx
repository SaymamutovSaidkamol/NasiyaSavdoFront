import { Pagination } from 'antd'
import React, { type FC } from 'react'
import './style.css'

interface Props {
    page: number
    setPage: (page: number) => void
    total: number
}

const Paganation: FC<Props> = ({ page, setPage, total }) => {


    return (
        <div className='mt-5'>
            <Pagination
                onChange={(newPage) => setPage(newPage)}
                align="center"
                className="big-pagination"
                current={page}
                defaultCurrent={1}
                total={total}
            />
        </div>
    )
}

export default React.memo(Paganation)
