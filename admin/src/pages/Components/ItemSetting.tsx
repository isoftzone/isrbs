import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import './ItemSettings.css'; // We'll create this CSS file
interface ItemSettingsProps {}
const ItemSettings: React.FC<ItemSettingsProps> = () => {
  return (
    <div className="item-settings-container">
      <h2>Item Settings</h2>
      <Tabs>
        <TabList>
          <Tab>Item Master</Tab>
          <Tab>Purchase</Tab>
          <Tab>Sales</Tab>
        </TabList>
        <TabPanel>
          <ItemMasterSettings />
        </TabPanel>
        <TabPanel>
          <PurchaseSettings />
        </TabPanel>
        <TabPanel>
          <SalesSettings />
        </TabPanel>
      </Tabs>
      <div className="button-container">
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};
const ItemMasterSettings: React.FC = () => {
  return (
    <div className="tab-content">
      <h3>Item Master</h3>
      <div className="grid-container">
        {Array.from({ length: 36 }, (_, index) => (
          <div key={`field${index + 1}`} className="grid-item">
            <label htmlFor={`field${index + 1}`}>Field{index + 1}</label>
            <input type="text" id={`field${index + 1}`} />
            <select>
              <option value="">-Select-</option>
              <option value="">Active</option>
              <option value="">Non Active</option>
              {/* Add options dynamically if needed */}
            </select>
          </div>
        ))}
      </div>
      <h1>System Defined Fields</h1>
      <div className="system-fields-container">
        <div className="system-field-item">
          <label htmlFor="barcode">Barcode</label>
          <input type="text" id="barcode" />
        </div>
        <div className="system-field-item">
          <label htmlFor="fatch">Fatch</label>
          <input type="text" id="fatch" />
        </div>
        <div className="system-field-item">
          <label htmlFor="salePrice">Sale Price</label>
          <input type="text" id="salePrice" />
        </div>
        <div className="system-field-item">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input type="text" id="expiryDate" />
        </div>
        <div className="system-field-item">
          <label htmlFor="itemName">Item Name</label>
          <input type="text" id="itemName" />
        </div>
        <div className="system-field-item">
          <label htmlFor="markUp">Mark Up</label>
          <select id="markUp">
            <option value="">-Select-</option>
          </select>
        </div>
        <div className="system-field-item">
          <label htmlFor="uomQty">UOM Qty</label>
          <select id="uomQty">
            <option value="">-Select-</option>
          </select>
        </div>
        <div className="system-field-item">
          <label htmlFor="dealer">Dealer</label>
          <select id="dealer">
            <option value="">-Select-</option>
          </select>
        </div>
        <div className="system-field-item">
          <label htmlFor="role">Role</label>
          <select id="role">
            <option value="">-Select-</option>
          </select>
        </div>
        <div className="system-field-item">
          <label htmlFor="mrp">MRP</label>
          <input type="text" id="mrp" />
        </div>
        <div className="system-field-item">
          <label htmlFor="minQty">Min Qty</label>
          <input type="text" id="minQty" />
        </div>
        <div className="system-field-item">
          <label htmlFor="reorderQty">Reorder Qty</label>
          <input type="text" id="reorderQty" />
        </div>
        <div className="system-field-item">
          <label htmlFor="tax">Tax</label>
          <select id="tax">
            <option value="">-Select-</option>
          </select>
        </div>
        <div className="system-field-item">
          <label htmlFor="markDown">Mark Down</label>
          <select id="markDown">
            <option value="">-Select-</option>
          </select>
        </div>
        <div className="system-field-item">
          <label htmlFor="fractionQty">Fraction Qty</label>
          <select id="fractionQty">
            <option value="">-Select-</option>
          </select>
        </div>
        {/* Add any other system-defined fields here */}
      </div>
    </div>
  );
};
const PurchaseSettings: React.FC = () => (
  <div className="tab-content">
    <h3>Purchase</h3>
    {/* Add Purchase-specific fields here */}
    <div className="grid-container">
        {Array.from({ length: 14}, (_, index) => (
          <div key={`field${index + 1}`} className="grid-item">
            <label htmlFor={`field${index + 1}`}>Field{index + 1}</label>
            <input type="text" id={`field${index + 1}`} />
            <select>
              <option value="">-Select-</option>
              <option value="">Active</option>
              <option value="">Non Active</option>
              {/* Add options dynamically if needed */}
            </select>
          </div>
        ))}
      </div>
  </div>
);
const SalesSettings: React.FC = () => (
  <div className="tab-content">
    <h3>Sales</h3>
    {/* Add Sales-specific fields here */}
    <div className="grid-container">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={`field${index + 1}`} className="grid-item">
            <label htmlFor={`field${index + 1}`}>Field{index + 1}</label>
            <input type="text" id={`field${index + 1}`} />
            <select>
              <option value="">-Select-</option>
              <option value="">Active</option>
              <option value="">Non Active</option>
              {/* Add options dynamically if needed */}
            </select>
          </div>
        ))}
      </div>
  </div>
);
export default ItemSettings;