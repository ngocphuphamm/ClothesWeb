const express = require('express');
const router = express.Router();
const voucherController = require('../../controllers/admin/VoucherController');

router.post('/', voucherController.createVoucher);
router.get('/', voucherController.listVoucher);
router.put('/:id', voucherController.editVoucher);
router.delete('/:id', voucherController.deleteVoucher);
router.get('/:id', voucherController.detailVoucher);
router.post('/apply', voucherController.applyVoucher);
router.post('/getVoucher', voucherController.userGetVoucher);
router.put('/updateState/:id', voucherController.updateState);
router.get('/myVoucher/:id', voucherController.myVoucher);
module.exports = router;
