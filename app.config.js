const HOST_SERVER_ADDRESS = 'http://10.0.2.2:80'
const API_VERSION = '/v1'

export default ({ config }) => ({
    ...config,
    extra: {
        SERVER_API_URL: `${HOST_SERVER_ADDRESS}/api/${API_VERSION}`,
    },
})
