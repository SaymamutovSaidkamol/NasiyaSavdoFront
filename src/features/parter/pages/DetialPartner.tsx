import Box from '@/shared/ui/Box';
// import Title from '@/shared/ui/Title';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePartner } from '../service/usePartner';
import { MdEdit } from "react-icons/md"
import { FaPhoneAlt, FaMapMarkerAlt, FaUserPlus, FaClock, FaBalanceScale } from 'react-icons/fa';
import { format } from 'date-fns';
import PartnerPopup from '../components/partner-popup/PartnerPopup';
import { Spin } from 'antd';


const DetialPartner = () => {
  const { id } = useParams()

  const { OnePartner } = usePartner()
  const { mutate, data, isPending, error } = OnePartner

  useEffect(() => {
    mutate(String(id))

  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  console.log(data);

  return (
    <Box>
      {isPending && <p className='w-full h-full flex justify-center items-center'><Spin />;</p>}
      {error && <p style={{ color: 'red' }}>Xatolik yuz berdi</p>}

      {data ? (
        <div className="flex justify-center items-center py-10 px-4 bg-gradient-to-b from-white to-gray-100 min-h-screen">
          <div className="bg-white shadow-2xl rounded-3xl w-full max-w-5xl p-10 space-y-10 border border-gray-100 transition-all">

            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative w-48 h-48 flex-shrink-0">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JubudY8W24qdlboOFiBJmF5rW2uVH1wRhQ&s"
                  className="w-full h-full object-cover rounded-full border-4 border-gray-200 shadow-md"
                  alt="Avatar"
                />
                <button
                  className="absolute top-2 right-2 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-300 hover:shadow-lg hover:bg-gray-100 transition cursor-pointer"
                  title="Tahrirlash"
                >
                  <MdEdit onClick={showModal} className="text-gray-700 text-xl" />
                </button>
              </div>

              <div className="flex-1 space-y-3">
                <h1 className="text-4xl font-bold text-gray-800">{data?.fullname}</h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                    {data?.role}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${data?.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {data?.isActive ? 'Faol' : 'Nofaol'}
                  </span>
                  {data?.pin && (
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">PIN belgilangani</span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border space-y-3">
                <h3 className="text-lg font-semibold text-gray-700">📞 Telefon raqamlari:</h3>
                {data?.phone?.map((phone: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <FaPhoneAlt className="text-blue-500" />
                    <span>{phone}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm border space-y-2">
                <h3 className="text-lg font-semibold text-gray-700">📍 Manzil & Lokatsiya:</h3>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>{data?.adress}</span>
                </div>
                <p className="text-sm text-gray-500 pl-6">
                  Koordinatalar: {data?.location?.lat}, {data?.location?.lng}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
              <div className="bg-white border rounded-xl p-5 shadow-sm space-y-2 flex items-center gap-3">
                <FaBalanceScale className={`text-2xl ${data?.balance < 0 ? 'text-red-500' : 'text-green-500'}`} />
                <div>
                  <p className="text-sm text-gray-500">Balans</p>
                  <p className={`text-xl font-bold ${data?.balance < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {data?.balance} so‘m
                  </p>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-5 shadow-sm space-y-2 flex items-center gap-3">
                <FaClock className="text-2xl text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Yaratilgan vaqt</p>
                  <p className="text-base">{format(new Date(data?.createdAt), 'yyyy-MM-dd HH:mm')}</p>
                </div>
              </div>

              <div className="bg-white border rounded-xl p-5 shadow-sm space-y-2 flex items-center gap-3">
                <FaUserPlus className="text-2xl text-purple-500" />
                <div>
                  <p className="text-sm text-gray-500">Yaratgan foydalanuvchi</p>
                  <p className="text-base">{data?.createdBy?.fname} {data?.createdBy?.lname}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        !isPending && <p>Maʼlumot topilmadi</p>
      )}
      <PartnerPopup isModalOpen={isModalOpen}
        handleCancel={handleCancel} previousData={data} />
    </Box>
  )
}

export default React.memo(DetialPartner)