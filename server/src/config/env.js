const path = require('path');
require('dotenv').config({ path: `${path.join(__dirname, '../../')}.env.${process.env.NODE_ENV}` });

module.exports = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    STRIPE_KEY: process.env.STRIPE_KEY,
    SENTRY_URL: process.env.SENTRY_URL,
    signed_cookie: process.env.signed_cookie,
    API_HOST: process.env.API_HOST,
    URL_FRONTEND: process.env.URL_FRONTEND,
    AUTH_EMAIL: process.env.AUTH_EMAIL,
    AUTH_PASSWORD: process.env.AUTH_PASSWORD,
    SIZE_PAGE: process.env.SIZE_PAGE,
    BOTTOMS: process.env.BOTTOMS,
    ACCESSORIES: process.env.ACCESSORIES,
    NEW: process.env.NEWARRIVALS,
    OUTERWEARS: process.env.OUTERWEARS,
    TOPS: process.env.TOPS,
    NEWARRIVALS: process.env.NEWARRIVALS,
    MIN_PASSWORD_LENGTH: process.env.MIN_PASSWORD_LENGTH,
    REDIS_URL : process.env.REDIS_URL,
    REDIS_KEY : process.env.REDIS_KEY
};
