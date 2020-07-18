import React, { useState, useEffect } from "react";
import firebase  from '../../firebase';
import { Box, Heading } from '@chakra-ui/core';
import { COLLECTION_NAMES } from '../../utilities/constants';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        firebase
            .db
            .collection(COLLECTION_NAMES.CATEGORIES)
            .get()
            .then(snapshot => {
                return snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            })
            .then(catDocs => {
                setCategories(catDocs);
            })
    }, []);

    return (
        <Box>
            <Heading>Categories</Heading>
            <Box>
                {categories.map(category => <Box>{category.id}</Box>)}
            </Box>
        </Box>
    )
}

export default Categories;