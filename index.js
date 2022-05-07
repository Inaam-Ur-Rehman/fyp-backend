const userRoute = require('./routes/user');
const stockRoute = require('./routes/stock');
const suppliersRoute = require('./routes/suppliers');
const salesRoute = require('./routes/sales');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors())

app.get("/", userRoute.getUsers)
app.get("/user/:id", userRoute.getUser)

app.get("/stock", stockRoute.getStock)

app.get("/suppliers", suppliersRoute.getSuppliers)


app.get("/sales", salesRoute.getSales)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})