import { Button, Input } from 'antd'
import React, { useState } from 'react'
import BuyCreate from '../../components/create/BuyCreate'
import ProductCreate from '../../components/create/ProductCreate'

const PartnerBuy = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isCreate, setIsCreate] = useState<any>(false)
  return (
    <div>
        {
         ( !selectedProduct || !isCreate) && <>
            <Input/>
            <p onClick={()=> setSelectedProduct({})}>qalam</p>
            <Button onClick={()=> setIsCreate(true)}>Create</Button>
          </>
        }

        {
          selectedProduct ? 
          <BuyCreate/>
          :
          isCreate ?
          <ProductCreate/>
          :
          <></>
        }
    </div>
  )
}

export default React.memo(PartnerBuy)