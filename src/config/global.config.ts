export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3000,
  jwt_secret: process.env.JWT_SECRET as string,
});
