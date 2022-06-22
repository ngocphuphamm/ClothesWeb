import "../../../assets/styles/admin/user.css";
import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";

import axios from "axios";
import InfoProduct from './infoProduct';
import EditProduct from './editProduct';
export default function DetailProduct() {
  let { id } = useParams();

  const [dataDetail, setDataDetail] = useState(null);
  const [cookies] = useCookies();
  const getData = async () => {
    const endpoint = `${process.env.REACT_APP_API_URL}admin/products/detailProduct/${id}`;

    const { data } = await axios.get(endpoint, {
      headers: {
        authorization: "Bearer " + cookies.accessToken,
      },
    });
    setDataDetail(data.customData);
  };



  useEffect(() => {
    getData();

  }, []);

  const renderProduct = ()=>{
        if(dataDetail!==null)
        {
          return (
            <>
            <div className="userContainer">
              <InfoProduct infoProduct={dataDetail}/>
              <EditProduct infoProduct={dataDetail} idProduct={id}/>

            </div>
          </>
          )
        }
  }
  return (
    <>
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Chi Tiết Món Ăn</h1>
      </div>
      {renderProduct()}
    </div>
  </>
  );
}
