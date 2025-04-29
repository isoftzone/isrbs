const express = require("express");
const router =express.Router();
// const upload = require('../path/to/your/multer/config'); // Adjust the path to your multer configuration

const users = require('../controllers/user');
const hometable = require('../controllers/hometable');
const homepage = require('../controllers/homepage');
const employee= require('../controllers/employee');
const agent = require('../controllers/agent');
const dealer = require('../controllers/dealer');
const transport = require('../controllers/transport');
const customer = require('../controllers/customer');
const itemmaster = require('../controllers/itemMaster')
const pagemaster = require('../controllers/pagemaster')
const lablemaster = require('../controllers/label_barcode')
const masterSetting = require('../controllers/masterSetting');
const sti = require('../controllers/sti');
const fillCombo = require('../controllers/fillCombo');
const addProductData= require('../controllers/addProductData');
// const imageupdate = require("../controllers/imageupdate");
const master = require('../controllers/master');
const salesmaster = require('../controllers/salesmaster');
const salesdetail = require('../controllers/salesdetail');
const rfmaster = require('../controllers/rfmaster');
const verifyToken = require('../middlewares/authMiddleware');


// router.post("/addProducts",verifyToken,addProductData.addProducts);
// router.get('/getCodeTypeData',verifyToken, addProductData.getCodeTypeData);
// router.get('/getCodeTypeAllData',verifyToken, addProductData.getCodeTypeAllData);
// router.put('/editProducts/:primekeyid',verifyToken, addProductData.editProduct);
// router.delete('/deleteProducts/:primekeyid',verifyToken, addProductData.deleteProduct);
// router.get('/getCompanyId',verifyToken, addProductData.getCompanyId);
// router.get('/getNextSequence',verifyToken, addProductData.getNextSequence);

// // const { addItem } = require('../controllers/itemMaster');


// // router.post("/add_Images",imageupdate.addImages);


// router.post("/addItem",verifyToken,itemmaster.addItem);
// router.get("/items/:id",verifyToken,itemmaster.getItems);
// router.get("/getallitems",verifyToken,itemmaster.getallitems);
// router.put("/update/:id",verifyToken,itemmaster.updateItem);
// // router.put('/update/:id', upload.single('image'), itemController.updateItem);
// router.delete("/delete/:id",verifyToken,itemmaster.deleteItem);
// // router.get("/unique-values",verifyToken,itemmaster.getUniqueValues)
// // router.get('/dropdowns',itemmaster.getDropdownValues);

// router.get('/dropdownsvalues',master.getDropdown);
// router.get('./postcsbAW',fillCombo.postcsbAW);


// router.post("/save-exchange-policy",verifyToken,pagemaster.addPolicy);
// router.get("/get-exchange-policy",verifyToken,pagemaster.getPolicy);
// router.get("/get-page-info",verifyToken,pagemaster.getPageInfo);
// router.post("/save-page-info",verifyToken,pagemaster.addPolicy);


// // Define the route with SALEID as a URL parameter
// // router.get("/getSalesMaster",verifyToken,salesmaster.getSalesMaster);
// router.get("/getSalesMaster/:saleId?",verifyToken, salesmaster.getSalesMaster);
// router.post("/addSalesMaster",verifyToken,salesmaster.addSalesMaster);


// router.get("/getSalesDetail/:saleId?",verifyToken,salesdetail.getSalesDetail);
// router.post("/addSalesDetail",verifyToken,salesdetail.addSalesDetail);
// // ✅ Route to Get Invoices
// router.get("/getInvoices",verifyToken, salesdetail.getInvoices);

router.post("/add_user",users.addUser);
router.post("/login",users.loginUser);
router.get("/getAllUsers",verifyToken,users.getAll);
router.delete("/deleteUsers/:id",verifyToken,users.deleteUser);
router.put("/editUser/:id",verifyToken,users.editUser);


// router.post("/add_customer",verifyToken,customer.addcustomer);
// router.post("/login_customer",verifyToken,customer.logincustomer);
// router.get("/getcustomerbyid/:customerId",verifyToken,customer.getcustomerbyid);
// router.put("/updateCustomerInfo",verifyToken,customer.updateCustomerInfo);
// router.get("/getAllcustomer",verifyToken,customer.getAll);
// // router.delete("/deletecustomer/:id",verifyToken,customer.deletecustomer);
// // router.put("/editcustomer/:id",verifyToken,customer.editcustomer);
router.post("/customeradd",verifyToken, customer.customerAdd); 
router.get("/getcustomer",verifyToken, customer.getcustomerMaster); 
router.get("/customerSearch",verifyToken, customer.customerMastersearch )

// //homepage
// router.post("/add_data",verifyToken,homepage.add_data);
// router.get("/get_data",verifyToken,homepage.get_data);
// router.delete("/delete_data/:id",verifyToken,homepage.delete_data);
// router.put("/update_data/:id",verifyToken,homepage.update_data);

// //hometable
// router.post("/add_hometable",verifyToken, hometable.add_data);
// router.get("/get_hometable",verifyToken, hometable.get_data);
// router.put("/update_hometable/:id",verifyToken, hometable.update_data);
// // router.delete("/delete_hometable/:id",verifyToken, hometable.delete_data);



// router.get("/getMasterSet",verifyToken,masterSetting.getMasterSetting);
// router.get("/getCodetype",verifyToken,masterSetting.getAllMasterSettings)

// // router.get("/getcmb/:id",verifyToken,fillCombo.getcmb);
// router.post("/postcmb",verifyToken,fillCombo.postcmb);
// router.post("/postcmbAW",verifyToken,fillCombo.postcmbAW);
// router.get("/getcmbAW",verifyToken,fillCombo.getcmbAW);

router.get("/getMaster",verifyToken,agent.getMaster);
router.get("/getMasterPagination",verifyToken,agent.agents);
router.post("/addMaster",verifyToken,agent.addMaster);

// router.get("/getStiDetail",verifyToken,sti.getStiDetail);

// router.get("/getEmployee",verifyToken,employee.getEmployee);

// router.get("/getDealer",verifyToken,dealer.getDealer);

// router.get("/getTransport",verifyToken,transport.getTransport);

// router.get("/getCustomer",verifyToken,customer.getCustomer);

// // router.get("/getItem",verifyToken,itemmaster.getItem);

// router.get("/getLable",verifyToken,lablemaster.getLable);

// router.get("/getrfmaster",verifyToken,rfmaster.getrfmaster);
// router.get("/getMasterSet",verifyToken,rfmaster.getMasterSet);

module.exports = router