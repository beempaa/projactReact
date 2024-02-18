import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {

  //State
  const [name, setName] = useState("")
  const [qty, setQty] = useState(0)
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const [data,setData] = useState([])


  const addProduct = async () => {
    try {

      const url = "https://workshop-react-api.vercel.app/product"
      const user_id = localStorage.getItem('user_id')

      const res = await axios.post(url, { name, qty, price, image, user_id })
      fetchData()
    } catch (error) {
      console.log(error);

    }

  }

  const fetchData = async () => {
    try {
      const user_id = localStorage.getItem('user_id')
      const url = `https://workshop-react-api.vercel.app/product?user_id=${user_id}`

      //api
      const res = await axios.get(url)
      console.log(res.data);
      setData(res.data)


    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => { fetchData() }, [])

  const deleteProduct = async (id) => {
    try {

      const url = `https://workshop-react-api.vercel.app/product/${id}`
      const res = await axios.delete(url)
      fetchData()
    } catch (error) {
      console.log(error);

    }

  }

  return (
    <div>

      <div className='m-9'>
        name : {name} <br />
        qty : {qty} <br />
        price : {price} <br />
        image : {image} <br />
      </div>

      <div className=' bg-white rounded-lg shadow-lg m-10 p-5'>
        <input placeholder='ชื่อสินค้า' className='border border-gray-400 px-2 py-2 m-3' type="text" name="name" onChange={(e) => setName(e.target.value)} />
        <input placeholder='จำนวน' className='border border-gray-400 px-2 py-2 m-3' type="number" name="name"
          onChange={(e) => setQty(e.target.value)} />
        <input placeholder='ราคา' className='border border-gray-400 px-2 py-2 m-3' type="number" name="name"
          onChange={(e) => setPrice(e.target.value)} />
        <input placeholder='รูปภาพ' className='border border-gray-400 px-2 py-2 m-3' type="text" name="name"
          onChange={(e) => setImage(e.target.value)} />
        <button className=' bg-green-600 text-white  rounded-lg shadow-lg py-2 px-4' onClick={addProduct}>บันทึก</button>

      </div>




      <div className="relative overflow-x-auto  bg-white rounded-lg shadow-lg m-10 p-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                ลบ/แก้ไข
              </th>
            </tr>
          </thead>
          <tbody>
          
          { data.map((item,index) =>( 
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 " >
              
             
            <td >
              <img className="w-40" src={item.image} alt=""/>
            </td>
            
            <td>{item.name}</td>
            
           
            <td>{item.qty}</td>

            <td>{item.price}</td>
            <td><button  onClick={() => deleteProduct(item.id)} className=' bg-red-500 text-white m-2 rounded-lg shadow-lg px-2 py-1 '>ลบ</button>
            <button className=' bg-yellow-500 text-white m-2 rounded-lg shadow-lg px-2 py-1'>แก้ไข</button></td>
            
            </tr>
            

          )) }


            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">
                Silver
              </td>
              <td className="px-6 py-4">
                Laptop
              </td>
              <td className="px-6 py-4">
                $2999
              </td>
              <td className="px-6 py-4">
                <button className=' bg-red-500 text-white m-2 rounded-lg shadow-lg px-2 py-1 '>ลบ</button>
                <button className=' bg-yellow-500 text-white m-2 rounded-lg shadow-lg px-2 py-1'>แก้ไข</button>
              </td>
            </tr> */}

          </tbody>

        </table>
      </div>





    </div>
  )
}

export default Product