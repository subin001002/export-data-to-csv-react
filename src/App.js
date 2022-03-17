import React from 'react';
import { CSVLink } from "react-csv";
import AsyncCSV from './AsyncCSV';
 
const data = [
  { id: "15970", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirts", baseColour: "Navy Blue", season: "Fall", year: "2011", usage: "Casual", productDisplayName: "Turtle Check Men Navy Blue Shirt" },
  { id: "39386", gender: "Men", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Jeans", baseColour: "Blue", season: "Summer", year: "2012", usage: "Casual", productDisplayName: "Peter England Men Party Blue Jeans" },
  { id: "59263", gender: "Women", masterCategory: "Accessories", subCategory: "Watches", articleType: "Watches", baseColour: "Silver", season: "Winter", year: "2016", usage: "Casual", productDisplayName: "Titan Women Silver Watch" },
  { id: "21379", gender: "Men", masterCategory: "Apparel", subCategory: "Bottomwear", articleType: "Track Pants", baseColour: "Black", season: "Fall", year: "2011", usage: "Casual", productDisplayName: "Manchester United Men Solid Black Track Pants" },
  { id: "53759", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tshirts", baseColour: "Grey", season: "Summer", year: "2012", usage: "Casual", productDisplayName: "Puma Men Grey T-shirt" },
  { id: "1855", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Tshirts", baseColour: "Grey", season: "Summer", year: "2011", usage: "Casual", productDisplayName: "Inkfruit Mens Chain Reaction T-shirt" },
  { id: "30805", gender: "Men", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirts", baseColour: "Green", season: "Summer", year: "2012", usage: "Ethnic", productDisplayName: "Fabindia Men Striped Green Shirt" },
  { id: "26960", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirts", baseColour: "Purple", season: "Summer", year: "2012", usage: "Casual", productDisplayName: "Jealous 21 Women Purple Shirt " },
  { id: "29114", gender: "Men", masterCategory: "Accessories", subCategory: "Socks", articleType: "Socks", baseColour: "Navy Blue", season: "Summer", year: "2012", usage: "Casual", productDisplayName: "Puma Men Pack of 3 Socks" },
  { id: "30039", gender: "Men", masterCategory: "Accessories", subCategory: "Watches", articleType: "Watches", baseColour: "Black", season: "Winter", year: "2016", usage: "Casual", productDisplayName: "Skagen Men Black Watch" },
  { id: "9204", gender: "Men", masterCategory: "Footwear", subCategory: "Shoes", articleType: "Casual Shoes", baseColour: "Black", season: "Summer", year: "2011", usage: "Casual", productDisplayName: "Puma Men Future Cat Remix SF Black Casual Shoes" },
  { id: "48123", gender: "Women", masterCategory: "Accessories", subCategory: "Belts", articleType: "Belts", baseColour: "Black", season: "Summer", year: "2012", usage: "Casual", productDisplayName: "Fossil Women Black Huarache Weave Belt" },
  { id: "18653", gender: "Men", masterCategory: "Footwear", subCategory: "Flip Flops", articleType: "Flip Flops", baseColour: "Black", season: "Fall", year: "2011", usage: "Casual", productDisplayName: "Fila Men Cush Flex Black Slippers" },
  { id: "47957", gender: "Women", masterCategory: "Accessories", subCategory: "Bags", articleType: "Handbags", baseColour: "Blue", season: "Summer", year: "2012", usage: "Casual", productDisplayName: "Murcia Women Blue Handbag" },
  { id: "46885", gender: "Boys", masterCategory: "Footwear", subCategory: "Flip Flops", articleType: "Flip Flops", baseColour: "Navy Blue", season: "Fall", year: "2012", usage: "Casual", productDisplayName: "Ben 10 Boys Navy Blue Slippers" },
  { id: "12369", gender: "Women", masterCategory: "Apparel", subCategory: "Topwear", articleType: "Shirts", baseColour: "Purple", season: "Fall", year: "d", usage: "Formal", productDisplayName: "Reid & Taylor Men Check Purple Shirts" },
];
 
const headers = [
  { label: "Id", key: "id" },
  { label: "Gender", key: "gender" },
  { label: "MasterCategory", key: "masterCategory" },
  { label: "SubCategory", key: "subCategory" },
  { label: "ArticleType", key: "articleType" },
  { label: "BaseColour", key: "baseColour" },
  { label: "Season", key: "season" },
  { label: "Year", key: "year" },
  { label: "Usage", key: "usage" },
  { label: "ProductDisplayName", key: "productDisplayName" }
];

const csvReport = {
  filename: 'cloth_classification.csv',
  headers: headers, 
  data: data,
};
 
function App() {
  return (
    <div classname="App">
      <CSVLink {...csvReport}>Export to CSV</CSVLink>
      <br />
      <br />
      <AsyncCSV />
    </div>
  );
}
 
export default App;