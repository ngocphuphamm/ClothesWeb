import { NavbarToggler, Collapse, Nav, NavItem, Navbar, Container } from 'reactstrap';
import Logo from '../../../assets/images/hyperX.jpeg';
import '../../../assets/styles/customize.navbar.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PostFilterForm from './search';
import { useDispatch } from 'react-redux';
import { setHeightNav } from '../../../actions/layout';
import PopupCart from '../../cart/cart';
import Auth from '../../auth/auth';
import { useCookies } from 'react-cookie';
import { useWindowSize } from '../../../CustomHook/useWindowResize';
import 'boxicons';
export default function NavbarApp() {
    //State define
    const [isOpen, setIsOpen] = useState(false);
    //Navbar toggle
    const toggle = () => setIsOpen(!isOpen);
    const [cookies] = useCookies(['user']);
    //=========START== Calculate nav height -->store redux =======
    const size = useWindowSize();
    const [height, setHeight] = useState(0);
    const ref = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
        setHeight(ref.current.clientHeight);
    }, [size?.width]);
    useEffect(() => {
        height > 0 && dispatch(setHeightNav(height));
    }, [height]);
    //=========END== Calculate nav height -->store redux =======

    return (
        <div ref={ref} className="header-custom">
            <div style={{ backgroundColor: 'white' }} className="m-nav">
                <div className="container-fluid">
                    <Navbar style={{ backgroundColor: 'white' }} light expand="lg">
                        <div className="d-flex justify-content-between">
                            <NavbarToggler onClick={toggle} />
                            <Link className="d-block d-lg-none " to="/">
                                <img id="logo" src={Logo} alt="" className="logo-Img"></img>
                            </Link>
                        </div>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="me-auto align-items-lg-center" navbar>
                                <NavItem className="d-none d-lg-block ">
                                    <Link to="/">
                                        <img id="logo" src={Logo} alt="" className="logo-Img"></img>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/" className="nav-link">
                                        Trang ch???
                                    </Link>
                                </NavItem>
                                {/* DANH M???C */}
                                <NavItem className="sub-nav">
                                    <Link to="/categories/new-arrivals" className="nav-link ">
                                        Danh m???c s???n ph???m
                                        <i className="bx bx-chevron-down"></i>
                                    </Link>
                                    <div className="sub-nav-content">
                                        <NavItem>
                                            <Link
                                                to="/categories/new-arrivals"
                                                className="sub-nav-link"
                                            >
                                                S???n ph???m m???i??? NEW ARRIVALS
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/categories/tops" className="sub-nav-link">
                                                ??o???TOPS
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link to="/categories/bottoms" className="sub-nav-link">
                                                Qu???n??? BOTTOMS
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link
                                                to="/categories/outerwears"
                                                className="sub-nav-link"
                                            >
                                                ??o kho??c??? OUTERWEARS
                                            </Link>
                                        </NavItem>
                                        <NavItem>
                                            <Link
                                                to="/categories/accessories"
                                                className="sub-nav-link"
                                            >
                                                Ph??? ki???n??? ACCESSORIES
                                            </Link>
                                        </NavItem>
                                    </div>
                                </NavItem>
                                {/* ?????A CH??? */}
                                <NavItem className="sub-nav">
                                    <Link to="/" className="nav-link ">
                                        ?????a ch??? c???a h??ng
                                        <i className="bx bx-chevron-down"></i>
                                    </Link>
                                    <div className="sub-nav-content">
                                        <NavItem>
                                            <Link to="/" className="sub-nav-link">
                                                155 S?? V???n H???nh, P13, Q10
                                            </Link>
                                        </NavItem>
                                    </div>
                                </NavItem>

                                <NavItem className="sub-nav">
                                    <div className="nav-link" style={{ pointer: 'cursor' }}>
                                        Ti???n ??ch
                                        <i className="bx bx-chevron-down"></i>
                                    </div>
                                    <div className="sub-nav-content">
                                        <NavItem>
                                            <Link to="/followOrder" className="sub-nav-link">
                                                Theo D??i ????n H??ng
                                            </Link>
                                        </NavItem>
                                    </div>
                                </NavItem>
                                {/* VOUCHER */}
                                <NavItem>
                                    <Link to="/collections/sale" className="nav-link">
                                        M?? gi???m gi??
                                    </Link>
                                </NavItem>
                            </Nav>
                            <Nav
                                navbar
                                className="d-none d-lg-flex align-items-center"
                                style={{ backgroundColor: 'white' }}
                            >
                                <NavItem className="mr-2">
                                    <PostFilterForm />
                                </NavItem>
                                <NavItem className="mr-2" style={{ listStyle: 'none' }}>
                                    <PopupCart></PopupCart>
                                </NavItem>
                                <NavItem style={{ listStyle: 'none' }}>
                                    <Auth />
                                </NavItem>
                                {cookies.user && (
                                    <NavItem className="mr-2">
                                        {cookies.user.information?.name}
                                    </NavItem>
                                )}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}
