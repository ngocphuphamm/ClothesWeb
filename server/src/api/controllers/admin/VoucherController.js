const {
    CreateVoucher,
    ApplyVoucher,
    DeleteVoucher,
    DetailVoucher,
    EditVoucher,
    ListVoucher,
    MyVoucher,
    UpdateState,
    UserGetVoucher,
} = require('../../services/admin/voucher/command/crud');
const Command = require('../../services/admin/voucher/command');
const { throwErr, successRes } = require('../../utils/HandleResponse');
const command = new Command();
const Voucher = require('../../models/Vouchers');
class VoucherController {
    async createVoucher(req, res) {
        try {
            if (Object.keys(req.body).length === 0) {
                return throwErr(res, 400, 'Cannot post without body');
            }
            const newVoucher = await command.execute(new CreateVoucher(req.body));
            if (!newVoucher) {
                return throwErr(res, 400, 'Something went wrong ~!');
            }
            return successRes(res, 201, newVoucher);
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }
    async editVoucher(req, res) {
        try {
            const { id } = req.params;
            if (Object.keys(req.body).length === 0) {
                return throwErr(res, 400, 'Cannot post without body');
            }
            if (!id) {
                return throwErr(res, 400, 'Cannot post without id');
            }
            const editVoucher = await command.execute(new EditVoucher(id, req.body));
            if (!editVoucher) {
                return throwErr(res, 400, 'Cannot find voucher with id ' + id);
            }
            return successRes(res, 200, editVoucher);
        } catch (err) {
            throwErr(res, 400, false, err.message);
        }
    }
    async deleteVoucher(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return throwErr(res, 400, 'Cannot post without body');
            }
            const deleteVoucher = await command.execute(new DeleteVoucher(id));
            if (!deleteVoucher) {
                throwErr(res, 400, 'Cannot find voucher with id ' + id);
            }
            return successRes(res, 200, deleteVoucher);
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }

    async listVoucher(req, res) {
        try {
            const { code, amount } = req.query;
            const { user } = req.headers;
            const listVoucher = await command.execute(new ListVoucher(code, amount, user));
            if (typeof listVoucher === 'string') {
                return throwErr(res, 400, listVoucher);
            }
            if (code && amount) {
                return successRes(res, 200, 'Voucher kh??? d???ng');
            }
            return successRes(res, 200, listVoucher);
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }
    async applyVoucher(req, res) {
        try {
            const { code, amount } = req.body;
            const { user } = req.headers;
            if (!code || !amount || !user) {
                return throwErr(res, 400, 'Voucher kh??ng kh??? d???ng');
            }

            const applyVoucher = await command.execute(new ApplyVoucher(code, amount));
            if (typeof applyVoucher === 'string') {
                return throwErr(res, 400, applyVoucher);
            }
            if (!applyVoucher) {
                return throwErr(res, 400, '??p d???ng voucher th???t b???i');
            }
            return successRes(res, 200, applyVoucher, '??p d???ng voucher th??nh c??ng');
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }

    async userGetVoucher(req, res) {
        try {
            const { code } = req.body;
            const { user } = req.headers;
            if (!code || !user) {
                return res.status(400).json({ success: false, message: 'L???y voucher th???t b???i' });
            }

            const userGetVoucher = await command.execute(new UserGetVoucher(code, user));
            if (typeof userGetVoucher === 'string') {
                return throwErr(res, 400, userGetVoucher);
            }
            return successRes(res, 200, userGetVoucher, 'L???y voucher th??nh c??ng');
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message,
            });
        }
    }

    async updateState(req, res) {
        try {
            const { id } = req.params;
            const userID = req.headers.user;
            if (!id || !userID) {
                return throwErr(res, 400, 'C???p nh???t tr???ng th??i voucher th???t b???i');
            }

            const updateState = await command.execute(new UpdateState(id, userID));
            if (typeof updateState === 'string') {
                return throwErr(res, 400, updateState);
            }
            return successRes(res, 200, updateState);
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }

    async detailVoucher(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                throwErr(res, 400, 'Cannot post without ID');
            }

            const detailVoucher = await command.execute(new DetailVoucher(id));
            if (!detailVoucher) {
                throwErr(res, 400, 'Cannot find voucher id ' + id);
            }
            return successRes(res, 200, detailVoucher);
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }

    async myVoucher(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                throwErr(res, 400, 'Kh??ng th??? l???y danh s??ch voucher');
            }

            const myVoucher = await command.execute(new MyVoucher(id));
            return successRes(res, 200, myVoucher);
        } catch (err) {
            throwErr(res, 400, err.message);
        }
    }
}

module.exports = new VoucherController();
