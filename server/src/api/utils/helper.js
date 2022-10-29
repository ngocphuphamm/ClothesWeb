const { BOTTOMS, ACCESSORIES, NEWARRIVALS, OUTERWEARS, TOPS } = require('../../config/env');
module.exports = {
    getCartUtil: (thisSession) => {
        const cart = thisSession.cart;
        const cartQty = cart.reduce((a, b) => {
            return a + b.qty;
        }, 0);
        const cartTotal = cart.reduce((a, b) => {
            return a + b.price * b.qty;
        }, 0);
        return { success: true, cart, cartTotal, cartQty };
    },
    calculateOrderAmount: (items) => {
        const reduce =
            items.reduce((a, b) => {
                return a + b.sum;
            }, 0) / 23;
        const total = parseInt(reduce.toFixed(2).replace('.', ''));
        return total;
    },
    returnIdCollection: (nameCollection) => {
        switch (nameCollection) {
            case 'new-arrivals':
                return NEWARRIVALS;
            case 'tops':
                return TOPS;
            case 'bottoms':
                return BOTTOMS;
            case 'outerwears':
                return OUTERWEARS;
            case 'accessories':
                return ACCESSORIES;

            default:
                return null;
        }
    },
    filterQty: async (listProduct) => {
        const list = [];
        await listProduct.forEach(async (el) => {
            if (el.size[0].qty === 0 && el.size[1].qty === 0 && el.size[2].qty === 0) {
                return;
            } else {
                await list.push(el);
            }
        });
        return list;
    },
    analystVip : async(myPoint)=>{
        const point = myPoint;
        switch(true)
        {
            case point < 500:
                return 'Bronze';
            case  point >= 500 & point < 1000:
                return 'Silver';
            case point >= 1000 && point < 5000:
                return 'Gold';
            case point > 5000 :
                return 'Plantium';
            default: 
                return 'Bronze';
        }            
    }
};
