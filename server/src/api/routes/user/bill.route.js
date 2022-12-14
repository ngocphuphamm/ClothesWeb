const express = require('express');
const router = express.Router();
const { validateStatusBill } = require('../../middlewares/auth.middleware');
const billController = require('../../controllers/user/BillController');
router.post('/', billController.postBill);
router.get('/:id', billController.getBill);
router.post('/info', billController.addNewInfoUser);
router.put('/info/:id', billController.editInfoUser);
router.delete('/info/:id', billController.deleteInfoUser);
router.post('/listInfo', billController.listInfo);
router.put('/update-cancelBill/:idBill', validateStatusBill, billController.updateCancelBill);

module.exports = router;
