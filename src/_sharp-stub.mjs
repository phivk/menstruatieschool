// Sharp is not available in the Cloudflare Workers runtime.
// passthroughImageService() ensures sharp is never actually invoked.
const noop = () => noop;
export default noop;
