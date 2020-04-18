const getProductList = async (req, res, service) => {
    const products = await service.getAllProduct();
    res.send(products);
};

const addNewProduct = async (req, res, service) => {
    const product = req.body;
    const newProduct = await service.createProduct(product);
    res.send(newProduct);
};

const updateProduct = async (req, res, service) => {
    const product = req.body;
    const updatedProduct = await service.updateProduct(product);
    res.send(updatedProduct);
};

const deleteProduct = async (req, res, service) => {
    const productId = req.params.id;
    const deleteProduct = await service.deleteProduct(productId);
    res.send({id: productId});
};

module.exports = {
    getProductList, addNewProduct, updateProduct, deleteProduct
};