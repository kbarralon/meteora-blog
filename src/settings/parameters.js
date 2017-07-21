const NODE_ENV = process.env.NODE_ENV || 'development';

const parameters = {
    environment: NODE_ENV,
    apiUrl: NODE_ENV === 'development' ? 'https://api.meteora.io' : 'https://api.meteora.io'
};
export default parameters;