import React, { useState, useEffect } from "react";
import firebase  from '../../firebase';
import { Box, Heading } from '@chakra-ui/core';
import { COLLECTION_NAMES } from '../../utilities/constants';

const Retailers = () => {

    const [retailers, setRetailers] = useState([]);
    
    useEffect(() => {
        firebase
            .db
            .collection(COLLECTION_NAMES.RETAILERS)
            .get()
            .then(snapshot => {
                return snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
            })
            .then(retDocs => {
                setRetailers(retDocs);
            })
    }, []);

    return (
        <Box>
            <Heading>Retailers</Heading>
            <Box>
                {retailers.map(retailer => <Box>{retailer.name}</Box>)}
            </Box>
        </Box>
    )
}

export default Retailers;