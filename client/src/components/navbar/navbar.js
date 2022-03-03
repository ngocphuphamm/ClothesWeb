import {
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavbarText,
	Navbar,
	Input,
} from "reactstrap";
import Logo from "../../assets/images/hyperX.jpeg";
import "../../assets/styles/customize.navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import globalStateAndAction from "../../container/global.state.action";

function NavbarApp({ searchInput, searchInputHandleChange }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar expand="md" light>
			<Link to="/">
				<div id="center-logo">
					<img
						id="logo"
						src={Logo}
						alt=""
						className="rounded-circle"
					></img>
					<p id="brand-name" className="text-dark fs-3 fw-bold">
						HyperX™
					</p>
				</div>
			</Link>
			<NavbarToggler onClick={toggle} />

			<Collapse isOpen={isOpen} navbar>
				<Nav className="m-auto" navbar>
					<NavItem>
						<Link
							to="/collections/new-arrivals"
							className="nav-link"
						>
							NEW ARRIVALS
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/collections/tops" className="nav-link">
							TOPS
						</Link>
					</NavItem>
					<NavItem>
						<Link
							to="/collections/bottoms"
							className="nav-link"
						>
							BOTTOMS
						</Link>
					</NavItem>
					<NavItem>
						<Link
							to="/collections/outerwears"
							className="nav-link"
						>
							OUTERWEARS
						</Link>
					</NavItem>
					<NavItem>
						<Link
							to="/collections/accessories"
							className="nav-link"
						>
							ACCESSORIES
						</Link>
					</NavItem>
					<NavItem>
						<Link to="/collections/sale" className="nav-link">
							SALE
						</Link>
					</NavItem>
					<NavbarText>
						<form action="/search">
							<Input
								name="q"
								value={searchInput}
								placeholder="Search"
								onChange={searchInputHandleChange}
							></Input>
						</form>
					</NavbarText>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export default globalStateAndAction(NavbarApp);
