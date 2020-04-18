const getAllProduct = async(req,res,service)=>{
    const product = await service.getAllProduct()
    res.status(200);
    res.json(product);
}

const addNewProduct = async(req,res,service)=>{
    const product = req.body
    const products = await service.addNewProduct(product)
    res.status(200);
    res.json(products)
}

const updateProduct = async(req,res,service)=>{
    const newProductId = req.body
    const products = await service.updateProduct(newProductId)
    res.status(200);
    res.json(products)
}

const deleteProduct = async(req,res,service)=>{
    const productId = req.params.id
    const products = await service.deleteProduct(productId)
    res.status(200);
    res.json({id:productId})
}

module.exports = {getAllProduct,addNewProduct,updateProduct,deleteProduct}