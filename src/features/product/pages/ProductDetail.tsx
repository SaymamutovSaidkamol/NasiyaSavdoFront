import React from 'react'
import { Outlet, useParams } from 'react-router-dom';
import { useProduct } from '../service/useProduct';
import { useShow } from '@/shared/hooks/useShow';
import { Button, Skeleton, Tag } from 'antd';
import Box from '@/shared/ui/Box';
import Title from '@/shared/ui/Title';
import PartnerPopup from '@/features/parter/components/partner-popup/PartnerPopup';

const ProductDetail = () => {
    const { id } = useParams();
    const { getProduct } = useProduct();
    const { data, isPending } = getProduct(id || "");
    const { handleCancel, isModalOpen } = useShow();

    const previousData = {
        id: data?.id,
        price: data?.price,
        title: data?.title,
        quantity: data?.quantity,
        units: data?.units,
    };


    return (
        <div className="flex gap-4 flex-col">
            {isPending ? (
                <Box>
                    <Skeleton active />
                </Box>
            ) : (
                <Box>
                    <div className="flex justify-between max-[550px]:flex-col relative">
                        <div className=" flex flex-col items-start gap-2">

                            <Title>{data?.title}</Title>
                            <p className=" text-gray-500"><strong>CODE: </strong>{data?.productCode}</p>
                            <Tag
                                color={data.quantity > 0 ? "green" : "red"}
                            >
                                {data.quantity > 0
                                    ? "Active"
                                    : "O'chirilgan"}{" "}
                            </Tag>
                            <div className="text-sm text-gray-500">
                                <p>Yaratilgan vaqti</p>
                                <p className="font-bold">
                                    {data.createdAt.slice(0, 10)}
                                </p>
                            </div>
                        </div>
                        <div className=" flex items-end flex-col gap-2">
                            <h2
                                style={{
                                    color:
                                        data?.quantity <= 0
                                            ? "crimson"
                                            : data?.quantity > 0
                                                ? "green"
                                                : "grey",
                                }}
                                className="text-2xl font-bold"
                            >
                                {data?.price.fprice()}
                            </h2>
                            <div>
                                <p className="text-gray-500 text-xl"><strong>Qoldiq: </strong>{data.quantity} dona</p>
                            </div>
                            <div className="mt-10">
                                <Button >
                                    Xarid qilish
                                </Button>
                            </div>
                        </div>
                    </div>
                </Box>
            )}
            <Box>
                <Outlet />
            </Box>
            {isModalOpen && (
                <PartnerPopup
                    isModalOpen={isModalOpen}
                    handleCancel={handleCancel}
                    previousData={previousData}
                />
            )}
        </div>
    );
};

export default React.memo(ProductDetail)
