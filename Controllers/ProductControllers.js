import ProductModel from "../Models/ProductModel.js"

export const addProducts=async(req,res)=>{
try {
    const {name,price,image,category}=req.body
  if(!name||!price||!image||!category){
    return res.status(401).json({success:false,message:"Please provide all fields1"})
  }
  const product2= new ProductModel({
    name,price,image,category
  })
  await product2.save()

return res.status(200).json({success:true, message:"Product added"})

    
} catch (error) {
    return res.status(500).json({success:false, message:"Something wnet wrong"})
}
}
export const getAllProducts=async(req,res)=>{
    try {
        const products2= await ProductModel.find({})
        if(products2.length===0){
return res.status(404).json({success:false,message:"No products found"})
        }
        return res.status(200).json({success:true,message:"Products found",products2})
    } catch (error) {
        return res.status(500).json({success:false, message:"Something wnet wrong"})   
    }
}