const App =require('./src/app');
const app = new App()
app.app.listen(3000, () => console.log('server is running'));