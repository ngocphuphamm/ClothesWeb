import Collections from "./features/Collections/pages/collections";
import Tops from "./features/Tops/pages/tops";
import Bottoms from "./features/Bottoms/pages/bottoms";
import Outerwears from "./features/Outerwears/pages/outerwears";
import Accessories from "./features/Accessories/pages/accessories";
import Sale from "./features/Sale/pages/sale";
import Layout from "./layouts/layout";
import Detail from "./features/ProductDetail/pages/detail";
import CollectionsLayout from "./features/Collections/pages/collections.layout";
import DetailLayout from "./features/ProductDetail/pages/detail.layout";
import NewArrivals from "./features/New-Arrivals/pages/new.arrivals";
import Search from "./features/Search/search";
import Cart from "./features/Cart/pages/cart";
import Checkout from "./features/Checkout/pages/checkout";
import { Routes, Route, Navigate } from "react-router-dom";
import PaymentSuccess from "./features/Payment/pages/success";
import CustomerInfo from "./features/Checkout/components/customer.info";
import PaymentMethod from "./features/Checkout/pages/payment.method";
import OnlinePayment from "./features/Payment/pages/index";
import { useCookies } from "react-cookie";
import LayoutAdmin from "./layouts/layoutAdmin";
import Register from "./components/auth/register";
import Home from "./features/home/home";
import Dashboard from "./features/admin/dashboard/dashboard";
import ListUser from "./features/admin/user/listUser";
import ProductList from "./features/admin/product/productList";
import DetailProduct from "./features/admin/product/productDetail";
import CreateProduct from "./features/admin/product/createProduct";
import ListBill from "./features/admin/bill/listBill";
import DetailBill from "./features/admin/bill/detailBill";
import VerifyOtp from './components/auth/otp';
function App() {
	const [cookies] = useCookies(["user"]);
	let user;
	if (cookies.user !== undefined) {
		user = cookies.user.isAdmin;
	}
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Home />}></Route>
					<Route
						path="collections"
						element={<CollectionsLayout />}
					>
						<Route index element={<Collections />} />
						<Route
							path="tops"
							index
							element={<Tops />}
						></Route>
						<Route
							path="bottoms"
							index
							element={<Bottoms />}
						></Route>
						<Route
							path="outerwears"
							index
							element={<Outerwears />}
						></Route>
						<Route
							path="accessories"
							index
							element={<Accessories />}
						></Route>
						<Route
							path="sale"
							index
							element={<Sale />}
						></Route>
						<Route
							path="new-arrivals"
							index
							element={<NewArrivals />}
						></Route>
					</Route>
					<Route
						path="product"
						element={<DetailLayout></DetailLayout>}
					>
						<Route
							path=":id"
							index
							element={<Detail></Detail>}
						></Route>
					</Route>
					<Route
						path="account/register"
						element={<Register />}
					></Route>
					<Route
						path="account/verify/:id"
						element={<VerifyOtp />}
					></Route>

					<Route
						path="checkout/method/:payment/success"
						index
						element={<PaymentSuccess />}
					></Route>
					<Route path="search">
						<Route index element={<Search />}></Route>
					</Route>
					<Route path="cart" index element={<Cart />}></Route>
					<Route path="checkout" element={<Checkout />}>
						<Route index element={<CustomerInfo />} />
						<Route
							path="method"
							index
							element={<PaymentMethod />}
						></Route>
						<Route
							path="method/online"
							index
							element={<OnlinePayment />}
						></Route>
					</Route>

					<Route
						path="checkout/method/:payment/success"
						index
						element={<PaymentSuccess />}
					></Route>
				</Route>
				<Route
					path="/admin"
					element={user ? <LayoutAdmin /> : <Navigate to="/" />}
				>
					<Route
						path="dashboard"
						element={<Dashboard />}
					></Route>
					<Route path="users" element={<ListUser />}></Route>
					<Route
						path="products"
						element={<ProductList />}
					></Route>

					<Route
						path="products/:id"
						element={<DetailProduct />}
					></Route>
					<Route
						path="products/create"
						element={<CreateProduct />}
					></Route>
					<Route path="bills" element={<ListBill />}></Route>
					<Route
						path="bills/:id"
						element={<DetailBill />}
					></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
