import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PasswordIcon from '@mui/icons-material/Password';
import { Link } from 'react-router-dom';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';

export default function SideBarUser() {
    return (
        <>
            <h3 className="AccountTitle titleSidebar">Tài khoản</h3>
            <div className="AccountContent">
                <div className="AccountList">
                    <ul className="list-unstyled mt-3">
                        <li className="current">
                            <Link to="/user">
                                <label>
                                    <PermIdentityRoundedIcon />
                                </label>
                                Thông tin tài khoản
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link to="/user/changePassword">
                                <label>
                                    <PasswordIcon />
                                </label>
                                Đổi mật khẩu
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link to="/user/voucher">
                                <label>
                                    <CardGiftcardIcon />
                                </label>
                                Voucher của tôi
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link to="/user/historyBill">
                                <label>
                                    <HistoryRoundedIcon />
                                </label>
                                Lịch Sử
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
