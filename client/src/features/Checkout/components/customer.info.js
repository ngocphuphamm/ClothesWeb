import globalStateAndAction from '../../../container/global.state.action';
import { Link } from 'react-router-dom';
import '../../../assets/styles/checkout.css';
import { useState, useEffect } from 'react';
import axiosMethod from '../../../middlewares/axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Toast from '../../../utils/toast';
import ModalCreateInfo from './modal.create.info';
import ModalEditInfo from './modal.edit.info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DetailAddress from './detail.address';
import { useCookies } from 'react-cookie';

function CustomerInfo({ cart }) {
    const cartStore = cart.cartStore;
    const total = cart.total;
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const [cookies] = useCookies(['user']);

    const [detailAddress, setDetailAddress] = useState({
        city: '',
        province: '',
        ward: '',
        listProvince: [],
        listWard: [],
        listAddress: [],
    });

    const [inputs, setInputs] = useState({
        nameCustomer: '',
        email: '',
        phoneNumber: '',
        address: '',
        idDelivery: '',
        detailInputHidden: false,
    });

    const [changeInfo, setChangeInfo] = useState({
        view: false,
        modalCreate: false,
        modalEdit: false,
        listInfo: [],
        checkedInfo: cookies.user && cookies.user.id,
    });

    useEffect(() => {
        if (cookies.user) {
            setInputs({
                ...inputs,
                nameCustomer: cookies.user.information.name,
                email: cookies.user.email,
                phoneNumber: cookies.user.information.phoneNumber,
                address: cookies.user.information.address,
                detailInputHidden: !inputs.detailInputHidden,
            });
        } else {
            setInputs({
                ...inputs,
                nameCustomer: '',
                email: '',
                phoneNumber: '',
                address: '',
            });
        }

        async function fetchData() {
            const location = await axiosMethod('getLocation', 'get');
            setDetailAddress({
                ...detailAddress,
                listAddress: location,
            });

            if (cookies.user) {
                const listInfo = await axiosMethod('bill/listInfo', 'post', {
                    userID: cookies.user.id,
                });
                setChangeInfo({ ...changeInfo, listInfo: listInfo.body });
            }
        }
        fetchData();
    }, [cookies.user]);

    //Get inputs
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const validation = () => {
        if (!cookies.user) {
            if (
                !inputs.nameCustomer ||
                !inputs.email ||
                !inputs.phoneNumber ||
                !inputs.address ||
                !detailAddress.city ||
                !detailAddress.ward ||
                !detailAddress.province
            ) {
                return true;
            }
        } else {
            if (
                !inputs.nameCustomer ||
                !inputs.email ||
                !inputs.phoneNumber ||
                !inputs.address ||
                !detailAddress.city ||
                !detailAddress.ward ||
                !detailAddress.province
            ) {
                if (inputs.detailInputHidden) {
                    return false;
                }
                return true;
            }
        }
    };

    //Submit Form
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validation()) {
            return Toast.fire({
                title: 'Vui l??ng nh???p ?????y ????? th??ng tin !',
                icon: 'warning',
            });
        }

        const data = {
            ...inputs,
            listProduct: cartStore.cart.map((el) => {
                return {
                    _id: el._id,
                    name: el.name,
                    img: el.img,
                    idProduct: el.idProduct,
                    price: el.price,
                    size: el.size,
                    qty: el.qty,
                    sum: el.total,
                };
            }),
            total,
        };
        if (cookies.user) {
            data.userID = cookies.user.id;
        }
        if (!inputs.address.includes('Ph?????ng')) {
            if (!inputs.address.includes('X??')) {
                data.address = `${inputs.address} ${detailAddress.ward},${detailAddress.province},${detailAddress.city}`;
            }
        }

        localStorage.setItem('customer', JSON.stringify(data));
        MySwal.fire({
            title: <p>Chuy???n ?????n trang ph????ng th???c thanh to??n</p>,
            didOpen: () => {
                MySwal.showLoading();
            },
            timer: 1000,
        }).then(() => {
            navigate('/checkout/method');
        });
    };

    const handleChangeInfo = () => {
        setChangeInfo({ ...changeInfo, view: !changeInfo.view });
    };

    const handleSubmitInfo = () => {
        const info = changeInfo.listInfo.find((el) => el._id === changeInfo.checkedInfo);

        if (!info) {
            return Toast.fire({
                title: 'C???p nh???t th??ng tin th???t b???i',
                icon: 'error',
            });
        }
        const data = {
            ...info,
            email: cookies.user.email,
            id: cookies.user.id,
        };
        setInputs({
            ...inputs,
            nameCustomer: data.nameCustomer,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            idDelivery: changeInfo.checkedInfo,
        });
        Toast.fire({
            title: 'C???p nh???t th??ng tin th??nh c??ng',
            icon: 'success',
        });
    };

    const onDeleteInfoClick = async (id) => {
        if (cookies.user.id === id) {
            return Toast.fire({
                title: 'Kh??ng th??? x??a th??ng tin m???c ?????nh',
                icon: 'warning',
            });
        }
        const deleteInfo = await axiosMethod(`bill/info/${id}`, 'delete');
        if (deleteInfo.success) {
            const findById = changeInfo.listInfo.find((a) => a._id === id);
            const index = changeInfo.listInfo.indexOf(findById);
            setChangeInfo({
                ...changeInfo,
                listInfo: [
                    ...changeInfo.listInfo.slice(0, index),
                    ...changeInfo.listInfo.slice(index + 1),
                ],
            });
            Toast.fire({
                title: 'X??a th??ng tin th??nh c??ng',
                icon: 'success',
            });
        }
    };
    return (
        <>
            <div className="header pb-2">
                <h2 className="m-0">HIGHCLUB</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0 mt-2">
                        <li className="breadcrumb-item">
                            <Link to="#">Gi??? h??ng</Link>
                        </li>
                        <li className="breadcrumb-item">Th??ng tin gi??? h??ng</li>
                        <li className="breadcrumb-item active" aria-current="page">
                            <small className="text-muted">Ph????ng th???c thanh to??n</small>
                        </li>
                    </ol>
                </nav>
            </div>
            <form className="section" onSubmit={handleSubmit}>
                <span>Th??ng tin giao h??ng</span>
                {!cookies.user && (
                    <p className="mt-3">
                        B???n ???? c?? t??i kho???n ?<Link to="#"> ????ng nh???p</Link>
                    </p>
                )}

                <input
                    type="text"
                    name="nameCustomer"
                    value={inputs.nameCustomer || ''}
                    className="form-control"
                    placeholder="H??? v?? t??n"
                    onChange={handleChange}
                ></input>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            value={inputs.email || ''}
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="text"
                            name="phoneNumber"
                            value={inputs.phoneNumber || ''}
                            className="form-control"
                            onChange={handleChange}
                            placeholder="S??? ??i???n tho???i"
                        />
                    </div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={inputs.address || ''}
                    onChange={handleChange}
                    placeholder="?????a ch???"
                ></input>
                {!inputs.detailInputHidden && (
                    <DetailAddress
                        detailAddress={detailAddress}
                        setDetailAddress={setDetailAddress}
                    />
                )}

                {cookies.user && (
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="changeInfoInput"
                            onChange={handleChangeInfo}
                        />
                        <label className="form-check-label" for="changeInfoInput">
                            Thay ?????i th??ng tin giao h??ng ?
                        </label>
                    </div>
                )}

                {changeInfo.view && cookies.user && (
                    <div className="p-4 shadow mt-3 mb-5">
                        <div className="d-flex fw-bold text-danger fs-5">
                            <div>?????a ch??? nh???n h??ng</div>
                            <button
                                className="btn btn-outline-dark ms-auto"
                                type="button"
                                onClick={() =>
                                    setChangeInfo({
                                        ...changeInfo,
                                        modalCreate: !changeInfo.modalCreate,
                                    })
                                }
                            >
                                Th??m ?????a ch??? m???i
                            </button>
                        </div>
                        <ModalCreateInfo
                            changeInfo={changeInfo}
                            setChangeInfo={setChangeInfo}
                            detailAddress={detailAddress}
                            setDetailAddress={setDetailAddress}
                        />
                        <ModalEditInfo
                            changeInfo={changeInfo}
                            setChangeInfo={setChangeInfo}
                            detailAddress={detailAddress}
                            setDetailAddress={setDetailAddress}
                        />
                        <div className="py-3 my-4">
                            {changeInfo.listInfo.length &&
                                changeInfo.listInfo.map((item, index) => (
                                    <div className="form-check mb-2" key={index}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            checked={changeInfo.checkedInfo === item._id}
                                            onChange={() =>
                                                setChangeInfo({
                                                    ...changeInfo,
                                                    checkedInfo: item._id,
                                                })
                                            }
                                            id={index}
                                        />
                                        <label className="form-check-label row" for={index}>
                                            <div className="col fw-bold">
                                                {`${item.nameCustomer} ${item.phoneNumber}`}
                                            </div>
                                            <div className="col">{item.address}</div>
                                            <div className="col-3">
                                                <EditIcon
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => {
                                                        if (cookies.user.id === item._id) {
                                                            return Toast.fire({
                                                                title: 'Kh??ng th??? s???a th??ng tin m???c ?????nh',
                                                                icon: 'warning',
                                                            });
                                                        }
                                                        setChangeInfo({
                                                            ...changeInfo,
                                                            modalEdit: !changeInfo.modalEdit,
                                                        });
                                                    }}
                                                />
                                                <DeleteIcon
                                                    className="ms-2"
                                                    style={{
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => onDeleteInfoClick(item._id)}
                                                />
                                            </div>
                                        </label>
                                    </div>
                                ))}
                        </div>

                        <div className="text-center">
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={handleSubmitInfo}
                            >
                                Ho??n th??nh
                            </button>
                        </div>
                    </div>
                )}

                <div className="row mb-3">
                    <div className="col d-flex align-items-center">
                        <Link to="#" className="">
                            Gi??? h??ng
                        </Link>
                    </div>

                    <div className="col">
                        <button className="btn btn-dark button-step-footer" type="submit">
                            Ti???p t???c ?????n ph????ng th???c thanh to??n
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default globalStateAndAction(CustomerInfo);
