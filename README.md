---
# ClothesWeb-MERNSTACK
---
* Member : Ngoc Phu , Thanh Long , Duy Khang
* Function : Authentication(JWT),Send OTP, Cart,Payment method stripe,CRUD(item,promotion,account user),Statistical table,Search,..  
## CONFIG 
*  1.IMPORT DATAMONGO
*  2.FILL .ENV
*  3 . admin :  email : ngocphu@gmail.com,pass:123
---
### Backend
```
.
├── api
│   ├── v1
│   │   ├── controllers
│   │   │   ├── admin
│   │   │   │   ├── AdminController.js
│   │   │   │   ├── BillAdminController.js
│   │   │   │   ├── ProductAdminController.js
│   │   │   │   ├── RateAdminController.js
│   │   │   │   ├── StatisticController.js
│   │   │   │   ├── UserAdminController.js
│   │   │   │   └── VoucherAdminController.js
│   │   │   ├── AuthenticationController.js
│   │   │   └── user
│   │   │       ├── BillController.js
│   │   │       ├── CartController.js
│   │   │       ├── CollectionsController.js
│   │   │       ├── ProductController.js
│   │   │       ├── RateController.js
│   │   │       ├── RewardController.js
│   │   │       ├── SiteController.js
│   │   │       ├── UserController.js
│   │   │       └── VoucherController.js
│   │   ├── middlewares
│   │   │   ├── auth.cookie.middleware.js
│   │   │   ├── auth.middleware.js
│   │   │   ├── cache.middleware.js
│   │   │   ├── index.js
│   │   │   └── session.middleware.js
│   │   ├── models
│   │   │   ├── Bill.js
│   │   │   ├── CancelBill.js
│   │   │   ├── Collections.js
│   │   │   ├── Customers.js
│   │   │   ├── DeliveryInfo.js
│   │   │   ├── index.js
│   │   │   ├── Product.js
│   │   │   ├── Rate.js
│   │   │   ├── Sessions.js
│   │   │   ├── Types.js
│   │   │   ├── User.js
│   │   │   ├── UserOTPVerificationForgetPassword.js
│   │   │   ├── UserOTPVerification.js
│   │   │   └── Vouchers.js
│   │   ├── routes
│   │   │   ├── admin
│   │   │   │   ├── bill.admin.route.js
│   │   │   │   ├── index.js
│   │   │   │   ├── product.admin.route.js
│   │   │   │   ├── rate.admin.route.js
│   │   │   │   ├── statistic.admin.route.js
│   │   │   │   ├── user.admin.route.js
│   │   │   │   └── voucher.route.js
│   │   │   ├── auth.JWT.route.js
│   │   │   ├── index.js
│   │   │   └── user
│   │   │       ├── bill.route.js
│   │   │       ├── cart.route.js
│   │   │       ├── collections.route.js
│   │   │       ├── index.js
│   │   │       ├── products.route.js
│   │   │       ├── site.route.js
│   │   │       ├── user.route.js
│   │   │       └── voucher.route.js
│   │   ├── services
│   │   │   ├── admin
│   │   │   │   ├── bill
│   │   │   │   │   ├── ConcreteStrategy
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── UpdateCancel.js
│   │   │   │   │   │   ├── UpdateConfirmation.js
│   │   │   │   │   │   ├── UpdateFailedConfirm.js
│   │   │   │   │   │   └── UpdatePending.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── IStrategy.js
│   │   │   │   ├── manageUser
│   │   │   │   │   └── index.js
│   │   │   │   ├── product
│   │   │   │   │   ├── action
│   │   │   │   │   │   ├── CommandCreate.js
│   │   │   │   │   │   ├── CommandDelete.js
│   │   │   │   │   │   ├── CommandEditImage.js
│   │   │   │   │   │   ├── CommandEditProduct.js
│   │   │   │   │   │   ├── CommandGetList.js
│   │   │   │   │   │   ├── CommandView.js
│   │   │   │   │   │   └── index.js
│   │   │   │   │   ├── IManager.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── ProductManager.js
│   │   │   │   ├── rate
│   │   │   │   │   └── index.js
│   │   │   │   ├── statistic
│   │   │   │   │   └── index.js
│   │   │   │   └── voucher
│   │   │   │       └── index.js
│   │   │   ├── authenticator
│   │   │   │   ├── AbtractValidator.js
│   │   │   │   ├── ConcreteHandler
│   │   │   │   │   ├── CheckBillBelongUser.js
│   │   │   │   │   ├── CheckOldPassword.js
│   │   │   │   │   ├── CheckStatusValidator.js
│   │   │   │   │   ├── CheckVerifyNewPassword.js
│   │   │   │   │   ├── EmailValidator.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── IsEmptyValidator.js
│   │   │   │   │   ├── IsEmptyValidatorToken.js
│   │   │   │   │   └── PasswordValidator.js
│   │   │   │   ├── index.js
│   │   │   │   └── ValidatorChainBuilder.js
│   │   │   └── user
│   │   │       ├── account
│   │   │       │   └── index.js
│   │   │       ├── bill
│   │   │       │   ├── delivery
│   │   │       │   │   ├── Command
│   │   │       │   │   │   ├── CommandAdd.js
│   │   │       │   │   │   ├── CommandDelete.js
│   │   │       │   │   │   ├── CommandEdit.js
│   │   │       │   │   │   ├── CommandView.js
│   │   │       │   │   │   └── index.js
│   │   │       │   │   ├── DeliveryUserManager.js
│   │   │       │   │   ├── IDeliveryUser.js
│   │   │       │   │   └── index.js
│   │   │       │   └── serviceBill
│   │   │       │       └── index.js
│   │   │       ├── collections
│   │   │       │   ├── index.js
│   │   │       │   ├── list
│   │   │       │   │   ├── accessories.js
│   │   │       │   │   ├── bottoms.js
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── new-arrivals.js
│   │   │       │   │   ├── outerwears.js
│   │   │       │   │   └── tops.js
│   │   │       │   └── products.js
│   │   │       ├── rate
│   │   │       │   └── index.js
│   │   │       ├── reward
│   │   │       │   └── index.js
│   │   │       ├── search
│   │   │       │   ├── ConcreteStrategy
│   │   │       │   │   ├── index.js
│   │   │       │   │   ├── SearchBestSeller.js
│   │   │       │   │   ├── SearchKeyWord.js
│   │   │       │   │   ├── SearchPriceAscending.js
│   │   │       │   │   └── SearchPriceDescending.js
│   │   │       │   ├── index.js
│   │   │       │   └── IStrategy.js
│   │   │       ├── site
│   │   │       │   └── index.js
│   │   │       └── voucher
│   │   │           └── index.js
│   │   └── utils
│   │       ├── datadangkyvitir.json
│   │       ├── function.js
│   │       ├── HandleResponse.js
│   │       ├── helper.js
│   │       ├── mailer.js
│   │       ├── service.js
│   │       └── validator.js
│   └── v2
│       ├── components
│       │   ├── authentication
│       │   │   ├── auth.controller.js
│       │   │   ├── auth.routes.js
│       │   │   └── auth.service.js
│       │   ├── manager
│       │   │   ├── admin
│       │   │   │   ├── admin.controller.js
│       │   │   │   ├── admin.routes.js
│       │   │   │   └── admin.service.js
│       │   │   ├── bill
│       │   │   │   ├── bill.controller.js
│       │   │   │   ├── bill.routes.js
│       │   │   │   └── bill.service.js
│       │   │   ├── product
│       │   │   │   ├── product.controller.js
│       │   │   │   ├── product.routes.js
│       │   │   │   └── product.service.js
│       │   │   ├── rate
│       │   │   │   ├── rate.controller.js
│       │   │   │   ├── rate.routes.js
│       │   │   │   └── rate.service.js
│       │   │   ├── statistic
│       │   │   │   ├── statistic.controller.js
│       │   │   │   ├── statistic.routes.js
│       │   │   │   └── statistic.service.js
│       │   │   ├── user
│       │   │   │   ├── user.controller.js
│       │   │   │   ├── user.routes.js
│       │   │   │   └── user.service.js
│       │   │   └── voucher
│       │   │       ├── voucher.controller.js
│       │   │       ├── voucher.routes.js
│       │   │       └── voucher.service.js
│       │   └── user
│       │       ├── bill
│       │       │   ├── bill.controller.js
│       │       │   ├── bill.routes.js
│       │       │   └── bill.service.js
│       │       ├── cart
│       │       │   ├── cart.controller.js
│       │       │   ├── cart.routes.js
│       │       │   └── cart.service.js
│       │       ├── collections
│       │       │   ├── collections.controller.js
│       │       │   ├── collections.routes.js
│       │       │   └── collections.service.js
│       │       ├── product
│       │       │   ├── product.controller.js
│       │       │   ├── product.routes.js
│       │       │   └── product.service.js
│       │       ├── rate
│       │       │   ├── rate.controller.js
│       │       │   ├── rate.routes.js
│       │       │   └── rate.service.js
│       │       ├── reward
│       │       │   ├── reward.controller.js
│       │       │   ├── reward.routes.js
│       │       │   └── reward.service.js
│       │       ├── site
│       │       │   ├── site.controller.js
│       │       │   ├── site.routes.js
│       │       │   └── site.service.js
│       │       └── user
│       │           ├── site.service.js
│       │           ├── user.controller.js
│       │           └── user.routes.js
│       ├── database
│       │   └── models
│       │       ├── BIll.js
│       │       ├── Bills.js
│       │       ├── CancelBill.js
│       │       ├── Collections.js
│       │       ├── Customers.js
│       │       ├── DeliveryInfo.js
│       │       ├── Discount.js
│       │       ├── index.js
│       │       ├── Product.js
│       │       ├── Rate.js
│       │       ├── Sessions.js
│       │       ├── Types.js
│       │       ├── User.js
│       │       ├── UserOTPVerificationForgetPassword.js
│       │       ├── UserOTPVerification.js
│       │       └── Vouchers.js
│       └── router.js
├── config
│   ├── db
│   │   ├── mongo.js
│   │   └── redis.js
│   ├── env.js
│   ├── express.js
│   ├── index.js
│   ├── logger.js
│   └── proxy
│       ├── core
│       │   └── rateLimit.js
│       └── index.js
├── ecosystem.config.js
├── index.js
└── logs.log

```

### Frontend
```
.
├── docker-compose.yml
├── Dockerfile
├── nginx.conf
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.txt
├── README.md
├── src
│   ├── actions
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── collections.js
│   │   ├── dashboard.js
│   │   ├── layout.js
│   │   ├── loading.js
│   │   ├── pagination.js
│   │   └── payment.js
│   ├── App.css
│   ├── App.js
│   ├── assets
│   │   ├── images
│   │   │   ├── avatar.jpeg
│   │   │   ├── freenium.webp
│   │   │   ├── gold.webp
│   │   │   ├── hyperOLD.jpeg
│   │   │   ├── hyperX.jpeg
│   │   │   ├── point.svg
│   │   │   ├── rank1.png.webp
│   │   │   ├── silver.webp
│   │   │   ├── slide_up.svg
│   │   │   └── voucher.svg
│   │   └── styles
│   │       ├── admin
│   │       │   ├── chart.css
│   │       │   ├── createUser.css
│   │       │   ├── featuredInfo.css
│   │       │   ├── home.css
│   │       │   ├── layoutadmin.css
│   │       │   ├── narbaradmin.css
│   │       │   ├── newProduct.css
│   │       │   ├── product.css
│   │       │   ├── productList.css
│   │       │   ├── sidebar.css
│   │       │   ├── user.css
│   │       │   ├── userList.css
│   │       │   ├── widgetLg.css
│   │       │   └── widgetSm.css
│   │       ├── auth.css
│   │       ├── bill.css
│   │       ├── cart.detail.css
│   │       ├── changePassword.css
│   │       ├── checkout.css
│   │       ├── collections.nav.css
│   │       ├── customize.navbar.css
│   │       ├── detail.css
│   │       ├── go.to.top.css
│   │       ├── home.css
│   │       ├── layout.css
│   │       ├── otp.css
│   │       ├── payment.css
│   │       ├── register.css
│   │       ├── resetNewPassword.css
│   │       ├── resetPassword.css
│   │       └── userInfo.css
│   ├── components
│   │   ├── auth
│   │   │   ├── auth.js
│   │   │   ├── otp.js
│   │   │   ├── register.js
│   │   │   ├── resetNewPassword.js
│   │   │   ├── resetPassword.js
│   │   │   └── verifyOTPForgetPassword.js
│   │   ├── Bill
│   │   │   └── bill.js
│   │   ├── Breadcrumb
│   │   │   ├── index.jsx
│   │   │   └── style.css
│   │   ├── cart
│   │   │   └── cart.js
│   │   ├── footer
│   │   │   └── footer.js
│   │   ├── listBill
│   │   │   ├── bill.component.jsx
│   │   │   ├── bill.js
│   │   │   └── emptyBill.js
│   │   ├── loading
│   │   │   ├── index.jsx
│   │   │   ├── loading.css
│   │   │   ├── loadingOverplay.js
│   │   │   └── mloading.css
│   │   ├── navbars
│   │   │   ├── navbar
│   │   │   │   ├── navbar.js
│   │   │   │   └── search.js
│   │   │   └── navbarAdmin
│   │   │       ├── navbarAdmin.js
│   │   │       └── sideBarAdmin.js
│   │   ├── productCard
│   │   │   ├── card.css
│   │   │   └── product.card.js
│   │   ├── ProductList
│   │   │   ├── card.css
│   │   │   └── index.js
│   │   ├── Tab
│   │   │   └── index.js
│   │   ├── TableBoostrap
│   │   │   ├── index.css
│   │   │   └── index.jsx
│   │   └── voucher
│   │       └── voucher.component.js
│   ├── constants
│   │   └── constants.js
│   ├── container
│   │   └── global.state.action.js
│   ├── CustomHook
│   │   └── useWindowResize.js
│   ├── features
│   │   ├── Accessories
│   │   │   └── pages
│   │   │       └── accessories.js
│   │   ├── admin
│   │   │   ├── bill
│   │   │   │   ├── billTable.js
│   │   │   │   ├── detailBill.js
│   │   │   │   ├── index.css
│   │   │   │   └── listBill.js
│   │   │   ├── dashboard
│   │   │   │   ├── chart.js
│   │   │   │   ├── dashboard.js
│   │   │   │   ├── dummyData.js
│   │   │   │   ├── featuredInfo.js
│   │   │   │   └── statisticFilter.js
│   │   │   ├── product
│   │   │   │   ├── createProduct.js
│   │   │   │   ├── editProduct.js
│   │   │   │   ├── infoProduct.js
│   │   │   │   ├── productDetail.js
│   │   │   │   └── productList.js
│   │   │   ├── ReviewManagement
│   │   │   │   ├── components
│   │   │   │   │   └── RatingList.jsx
│   │   │   │   ├── index.css
│   │   │   │   └── index.jsx
│   │   │   ├── user
│   │   │   │   ├── editUser
│   │   │   │   │   ├── action
│   │   │   │   │   │   ├── changePassword.js
│   │   │   │   │   │   └── editInfoUser.js
│   │   │   │   │   ├── actionUser.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── infoUser.js
│   │   │   │   └── listUser.js
│   │   │   └── voucher
│   │   │       ├── createVoucher.js
│   │   │       ├── detailVoucher.js
│   │   │       ├── editVoucher.js
│   │   │       └── listVoucher.js
│   │   ├── Bottoms
│   │   │   └── pages
│   │   │       └── bottoms.js
│   │   ├── Cart
│   │   │   └── pages
│   │   │       └── cart.js
│   │   ├── Categories
│   │   │   └── index.js
│   │   ├── Checkout
│   │   │   ├── components
│   │   │   │   ├── customer.info.js
│   │   │   │   ├── detail.address.js
│   │   │   │   ├── modal.create.info.js
│   │   │   │   └── modal.edit.info.js
│   │   │   └── pages
│   │   │       ├── checkout.js
│   │   │       └── payment.method.js
│   │   ├── Collections
│   │   │   └── pages
│   │   │       ├── collections.js
│   │   │       └── collections.layout.js
│   │   ├── followOrder
│   │   │   └── index.js
│   │   ├── Home
│   │   │   └── index.js
│   │   ├── infoUser
│   │   │   ├── changePassword.js
│   │   │   ├── Feedback
│   │   │   │   ├── component
│   │   │   │   │   └── FeedBack.jsx
│   │   │   │   └── index.jsx
│   │   │   ├── index.css
│   │   │   ├── point.jsx
│   │   │   ├── sideBar.js
│   │   │   ├── user.js
│   │   │   ├── VoucherImageUI.jsx
│   │   │   └── voucher.me.js
│   │   ├── New-Arrivals
│   │   │   └── pages
│   │   │       └── new.arrivals.js
│   │   ├── Outerwears
│   │   │   └── pages
│   │   │       └── outerwears.js
│   │   ├── Payment
│   │   │   └── pages
│   │   │       ├── index.js
│   │   │       ├── payment.js
│   │   │       └── success.js
│   │   ├── ProductDetail
│   │   │   ├── components
│   │   │   │   ├── RatingList.jsx
│   │   │   │   └── Review.jsx
│   │   │   └── pages
│   │   │       ├── detail.js
│   │   │       └── detail.layout.js
│   │   ├── Sale
│   │   │   └── pages
│   │   │       └── sale.js
│   │   ├── Search
│   │   │   └── search.js
│   │   └── Tops
│   │       ├── components
│   │       │   └── tops.addform.js
│   │       └── pages
│   │           └── tops.js
│   ├── index.css
│   ├── index.js
│   ├── layouts
│   │   ├── index.css
│   │   ├── layoutAdmin.js
│   │   ├── layout.js
│   │   └── layoutUser.js
│   ├── logo.svg
│   ├── middlewares
│   │   ├── axios.js
│   │   └── handle.address.js
│   ├── reducers
│   │   ├── admin.js
│   │   ├── auth.js
│   │   ├── cart.js
│   │   ├── collections.js
│   │   ├── index.js
│   │   ├── layout.js
│   │   ├── loading.js
│   │   ├── pagination.js
│   │   └── payment.info.js
│   ├── reportWebVitals.js
│   ├── routes.js
│   ├── setupTests.js
│   ├── store.js
│   └── utils
│       ├── delete.confirm.js
│       ├── format.price.js
│       ├── functionValidate.js
│       ├── returnHTML.js
│       ├── toast.js
│       ├── updateUserData.js
│       └── validate.voucher.js
└── yarn.lock

```

