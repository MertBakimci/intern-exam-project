import { Flex ,Text,Image} from '@chakra-ui/react'
import React from 'react'
import { breakpoints } from '../App'
import banner from '../img/homePageBanner.svg'


const  Homepage =() => {
    return (
        <>
      <Flex align='center' justify='center' gap={10} marginTop={20} direction={{base:"column",lg:"row"}}>
      <Image src={banner} width={{base:"100%",lg:"40%",md:"50%"}}/>
      <Text width="80%" align={{base:"center",lg:"justify"}} fontSize='2xl'>Bu projede kurallar gereğince beş tane olmak üzere PHP, Javascript, React ve Mobil Tarafda ise Flutter ile React Native'e yer verdim.</Text>
      </Flex>
        </>
    )
}

export default Homepage
