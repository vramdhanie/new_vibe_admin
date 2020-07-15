// import React, { useContext, useEffect, useState } from "react";
// import raw_products from "../../raw/data.json";
// import { Box, Heading, Flex, Image, IconButton } from "@chakra-ui/core";
// import raw_categories from "../../raw/categories";
// import useImage from "../../hooks/useImage";
// import { FirebaseContext } from "../../firebase";
// import { GiWaterBottle } from "react-icons/gi";
// import { FaTag } from "react-icons/fa";
// import InventoryContext from "../../data/inventoryContext";
// import { COLLECTION_NAMES } from "../../utilities/constants";

// const Raw = () => {
//   const { firebase, user } = useContext(FirebaseContext);
//   const { image } = useImage(firebase.storage);
//   const { addCategory, addProduct } = useContext(InventoryContext);

//   const [products, setProducts] = useState(raw_products);
//   const [categories, setCategories] = useState(raw_categories);
//   const { USERS } = COLLECTION_NAMES;

//   const userRef = firebase.db.collection(USERS).doc("ITnQqZZoNkgN75hGMvMH"); // definitely need to link to the logged in user here

//   useEffect(() => {
//     setProducts(
//       raw_products.map((product) => ({
//         ...product,
//         image: image,
//         ...categories[product.main_category],
//         created_by: userRef,
//         UPC: product.UPC ? Math.trunc(product.UPC) : null,
//       }))
//     );
//   }, [image]);

//   const addCategoryHandler = () => {
//     return; // ensure this function is not accidentally triggered
//     const cats = Object.values(categories).reduce((acc, curr) => {
//       if (acc[curr.main_category]) {
//         acc[curr.main_category].push(curr.sub_category);
//       } else {
//         acc[curr.main_category] = [curr.sub_category];
//       }
//       return acc;
//     }, {});
//     delete cats.UNKNOWN;
//     const total = Object.keys(cats).length;
//     Object.keys(cats).forEach(async (cat) => {
//       await addCategory({ name: cat });

//       // create top level cat
//       const subs = [...new Set(cats[cat].filter((c) => c !== ""))];

//       // remove duplicates and blanks
//       // create sub cats
//       subs.forEach(async (sub) => {
//         await addCategory({ name: sub, parent: cat });
//         await new Promise((r) =>
//           setTimeout(r, Math.floor(Math.random() * 100) + 50)
//         );
//       });
//     });
//   };

//   const addProductsHandler = () => {
//     products
//       .filter((product) => product.main_category !== "UNKNOWN")
//       //.slice(0, 2)
//       .forEach(async (product) => {
//         await addProduct(product);
//         await new Promise((r) =>
//           setTimeout(r, Math.floor(Math.random() * 100) + 50)
//         );
//       });
//   };

//   return (
//     <Box>
//       <Box>
//         <Heading>Categories</Heading>
//         <IconButton
//           variant="solid"
//           variantColor="secondary"
//           aria-label="Add product"
//           fontSize="24px"
//           isRound="true"
//           icon={FaTag}
//           _focus={{
//             outline: "none",
//           }}
//           transition="all 0.5s linear"
//           boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
//           onClick={addCategoryHandler}
//         />

//         <Flex>
//           <Box flex={1}>Original</Box>
//           <Box flex={1}>Main Category</Box>
//           <Box flex={1}>Sub Category</Box>
//         </Flex>
//         {Object.entries(categories).map(
//           ([key, { main_category: main, sub_category: sub }]) => (
//             <Flex key={key}>
//               <Box flex={1}>{key}</Box>
//               <Box flex={1}>{main}</Box>
//               <Box flex={1}>{sub}</Box>
//             </Flex>
//           )
//         )}
//       </Box>
//       <Box>
//         <Heading>Products</Heading>
//         <IconButton
//           variant="solid"
//           variantColor="secondary"
//           aria-label="Add product"
//           fontSize="24px"
//           isRound="true"
//           icon={GiWaterBottle}
//           _focus={{
//             outline: "none",
//           }}
//           transition="all 0.5s linear"
//           boxShadow="1px 1px 2px 2px rgba(0,0,0,0.2)"
//           onClick={addProductsHandler}
//         />
//         <Flex
//           borderBottomColor="primary.500"
//           borderBottomStyle="solid"
//           borderBottomWidth={1}
//         >
//           <Box flex={1}>Retailer Item Number</Box>
//           <Box flex={1}>Name</Box>
//           <Box flex={2}>Description</Box>
//           <Box flex={1}>Price</Box>
//           <Box flex={1}>UPC</Box>
//           <Box flex={1}>size</Box>
//           <Box flex={1}>item type</Box>
//           <Box flex={1}>Category</Box>
//           <Box flex={1}>manufacturer</Box>
//           <Box flex={1}>weight</Box>
//           <Box flex={1}>quantity</Box>
//           <Box flex={1}>Image</Box>
//         </Flex>
//         {products[0] ? (
//           <Flex borderBottom="solid 1px rgba(0,0,0,0.2)" mb={1}>
//             <Box flex={1}>{products[0].retailer_item_number}</Box>
//             <Box flex={1}>{products[0].name}</Box>
//             <Box flex={2}>{products[0].description}</Box>
//             <Box flex={1}>
//               {Intl.NumberFormat("en-US", {
//                 style: "currency",
//                 currency: "TTD",
//                 currencyDisplay: "narrowSymbol",
//               }).format(products[0].price)}
//             </Box>
//             <Box flex={1}>{products[0].UPC}</Box>
//             <Box flex={1}>{products[0].size}</Box>
//             <Box flex={1}>{products[0].item_type}</Box>
//             <Box flex={1}>
//               {products[0].main_category}/{products[0].sub_category}
//             </Box>
//             <Box flex={1}>{products[0].manufacturer}</Box>
//             <Box flex={1}>{products[0].weight}</Box>
//             <Box flex={1}>{products[0].quantity}</Box>
//             <Box flex={1}>
//               <Image src={products[0].image} />
//             </Box>
//           </Flex>
//         ) : (
//           ""
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default Raw;
