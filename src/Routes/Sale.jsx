import { Box, Container, Img, SimpleGrid, Stack , Image } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
 
function Sale() {

   const[sale , setSale] = useState([])

   useEffect(()=>{
    fetch(`https://database-pravin.herokuapp.com/sale`).then((res) => res.json())
    .then((res)=>{
      console.log(res)
      setSale(res)
    }).catch((err) =>{
      console.log(err)
    })
   },[])

  return (
    <>
    <Container maxW='550%' mt="15px" >
   <Box className="row7th_img" >
   <Box> <Image src="https://logan.nnnow.com/content/dam/nnnow-project/30-sep-2020/30SEP20_SEPHORA-OFFERPAGEZ_PREHEADER_DESK.jpg" alt="saleTag" /> </Box>
   </Box>
   </Container>

       <SimpleGrid border="5px solid black" minChildWidth='350px' spacing='35px'>
       {sale &&
         sale.map((elem) => (
           <Stack key={elem.id}>
             <Box >
               <Img src={elem.image} />
              </Box>
           </Stack>
         ))}
       {/* <ModalComponent isOpen={isModalOpen} setIsOpe={setIsModalOpen} /> */}
     </SimpleGrid>
    
     
    </>
  )
}

export default Sale