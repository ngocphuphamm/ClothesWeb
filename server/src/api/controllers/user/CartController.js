const Session = require('../../models/Sessions');
const Product = require('../../models/Product');
const { getCartUtil } = require('../../utils/helper.js');
class CartController {
    async addToCart(req, res, next) {
        let { idProduct, qty, size, img, name, price } = req.body;
        const product = await Product.findById(idProduct);
        const productPrice = product.price;
        const currentSession = res.locals.session;
        const productExisted = currentSession.cart.find((item) => {
            return item.idProduct.equals(idProduct) && item.size === size;
        });
        if (!productExisted) {
            currentSession.cart.push({
                idProduct,
                qty,
                size,
                total: productPrice,
                img,
                name,
                price,
            });
        } else {
            if (size !== productExisted.size) {
                currentSession.cart.push({
                    idProduct,
                    qty,
                    size,
                    total: productPrice,
                    img,
                    name,
                    price,
                });
            } else {
                productExisted.set({
                    qty: productExisted.qty + qty,
                    total: productPrice * (productExisted.qty + qty),
                });
            }
        }
        res.status(200).json(getCartUtil(await currentSession.save()));
    }
    async getCart(req, res, next) {
        try {
            const sessionId = res.locals.session;
            res.status(200).json(getCartUtil(sessionId));
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
    async deleteProduct(req, res, next) {
        const { idProduct } = req.params;
        const { size } = req.body;
        try {
            const currentSession = res.locals.session;
            if (!idProduct) {
                return res.status(404).json({
                    success: false,
                    message: 'Lỗi không có param',
                });
            }
            if (!size) {
                return res.status(404).json({
                    success: false,
                    message: 'Thiếu size',
                });
            }
            let subDoc = currentSession.cart.find(
                (item) => item.idProduct.equals(idProduct) && item.size === size
            );
            if (!subDoc) {
                return res.status(404).json({ success: false, message: 'Not found' });
            }
            subDoc.remove();
            res.status(200).json(getCartUtil(await currentSession.save()));
        } catch (err) {
            res.status(400).json({
                success: false,
                message: err.message,
            });
        }
    }
}

module.exports = new CartController();
