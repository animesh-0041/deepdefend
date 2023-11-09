import { Box, Button, Heading, Img, Progress, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { BsFillHexagonFill } from 'react-icons/bs';
import { BsFillGearFill } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
const Home = () => {
  return (
   <Box>

{/* 1st */}
<Box display={'flex'} justifyContent={'space-between'} h={'150px'} p={'10px'}>

<Box p={'15px'} bg={"#34495E"}>
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>

<BsFillHexagonFill size={'50px'} color={'#FF5722'}/>
    </Box>
<Heading textAlign={'center'} size={'sm'}>70</Heading>
<Text textAlign={'center'} color={'gray'}>-1 ~ Finish last month </Text>

</Box>



<Box>
    <Heading size={'sm'} color={'gray'}>Compare Senerios</Heading>
    <ul>
       <li>fhf</li>
       <li>tryut</li>
       <li>tuhtryh</li>
    </ul>

    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
<BsFillGearFill/>
<Text>Select Senerios</Text>
    </Box>
</Box>



<Box w={'60%'}>
    <Img src='https://learn.microsoft.com/en-us/power-bi/visuals/media/power-bi-line-charts/power-bi-line.png' h={'150px'} w={'100%'}/>
</Box>

</Box>

{/* 2nd */}

<Box display={'flex'} justifyContent={'space-between'} w={'20%'} m={'20px 0'}>
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'15px'}>
        <Text>All Scenarios</Text>
        <AiOutlineDown/>
    </Box>
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={'15px'}>
    <Text>Past 30days</Text>
        <AiOutlineDown/>
    </Box>
</Box>



{/* 3rd */}

<Box m={'20px 0'}>

<Box>
    <Box display={'flex'} justifyContent={'space-between'} w={'20%'}>
    <Heading size={'sm'}>Scenarios at high risk</Heading>
<Button size={'xs'} colorScheme='none' >View all</Button>
</Box>

</Box>


<Box display={'flex'} justifyContent={'space-between'} gap={'25px'} m={'10px 0'}>

<Box w={'50%'} bg={'#263238'} p={'20px'}>
    <Box display={'flex'} justifyContent={'space-between'} p={'5px'} >
        <BsFillHexagonFill color='#B71C1C'/>
        <Text>(22) - on-Prem Risk | Worksstation &gt; DC</Text>
        <Button colorScheme='none' border={'1px solid gray'} size={'sm'} >Take action</Button>
    </Box>
    <Box display={'flex'} justifyContent={'space-between'} p={'5px'} >
        <BsFillHexagonFill color='#B71C1C'/>
        <Text>(22) - on-Prem Risk | Worksstation &gt; DC</Text>
        <Button colorScheme='none' border={'1px solid gray'} size={'sm'} >Take action</Button>
    </Box>
    <Box display={'flex'} justifyContent={'space-between'}  p={'5px'}>
        <BsFillHexagonFill color='#B71C1C'/>
        <Text>(22) - on-Prem Risk | Worksstation &gt; DC</Text>
        <Button colorScheme='none' border={'1px solid gray'} size={'sm'}  >Take action</Button>
    </Box>
</Box>



<Box display={'flex'} justifyContent={'space-between'}  w={'50%'}>
    <Box>
    <Text>
        Top 3 Entities which are part of the most attack vectors to critical assets that affect 43.1% of critical assets (267/619)
    </Text>
    <Table variant='simple' size={'sm'}>
    <Thead>
      <Tr border={'none'}>
        <Th>Entity name</Th>
        <Th>critical as...</Th>
        <Th >Trend</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Hezi nagar</Td>
        <Td display={'flex'} alignItems={'center'} gap={'10px'}><Text>233</Text><Progress borderRadius={'10px'} w={'30%'} value={20} size='xs' colorScheme='red' /></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td>Compute Engine default service account</Td>
        <Td display={'flex'} alignItems={'center'} gap={'10px'}><Text>141</Text><Progress borderRadius={'10px'} w={'30%'} value={10} size='xs' colorScheme='red' /></Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td>gc-ppoca</Td>
        <Td display={'flex'} alignItems={'center'} gap={'10px'}><Text>64</Text><Progress borderRadius={'10px'} w={'30%'} value={5} size='xs' colorScheme='red' /></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
    </Tbody>
  </Table>
    </Box>

    <Box w={'40%'} display={'flex'} alignItems={'center'}>
        <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh--0lTiYjuRCdF_ZIrjaVqqWm7nmqSJ9KMowN43w73Gx_5n_DH5qHhJWtCGxJIWwh10&usqp=CAU' w={'100%'}/>
    </Box>
</Box>



</Box>




</Box>















{/* 4th */}

<Box p={'0 10px '} >

<Box>


<Box display={'flex'} justifyContent={'space-around'} gap={'25px'} alignItems={'center'}>

<Box display={'flex'} justifyContent={'space-between'} p={'25px'}>
    <Box>
    <Text>
        Top 3 Entities which are part of the most attack vectors to critical assets that affect 43.1% of critical assets (267/619)
    </Text>
    <Table variant='simple' size={'sm'}>
    <Thead>
      <Tr border={'none'}>
        <Th>Entity name</Th>
        <Th>critical as...</Th>
        <Th >Trend</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Hezi nagar</Td>
        <Td display={'flex'} alignItems={'center'} gap={'10px'}><Text>233</Text><Progress borderRadius={'10px'} w={'30%'} value={20} size='xs' colorScheme='red' /></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td>Compute Engine default service account</Td>
        <Td display={'flex'} alignItems={'center'} gap={'10px'}><Text>141</Text><Progress borderRadius={'10px'} w={'30%'} value={10} size='xs' colorScheme='red' /></Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td>gc-ppoca</Td>
        <Td display={'flex'} alignItems={'center'} gap={'10px'}><Text>64</Text><Progress borderRadius={'10px'} w={'30%'} value={5} size='xs' colorScheme='red' /></Td>
        <Td ></Td>
        <Td ></Td>
      </Tr>
    </Tbody>
  </Table>
    </Box>

    <Box w={'18%'} display={'flex'} alignItems={'center'}>
        <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh--0lTiYjuRCdF_ZIrjaVqqWm7nmqSJ9KMowN43w73Gx_5n_DH5qHhJWtCGxJIWwh10&usqp=CAU' w={'100%'}/>
    </Box>
</Box>


<Box>
<Box>
    <Box display={'flex'} justifyContent={'space-between'} w={'50%'} p={'10px 0'}>
    <Heading size={'sm'}>Top choke points</Heading>
<Button size={'xs'} colorScheme='none' >View all</Button>
</Box>
</Box>

    
<Box > 
<Box display={'flex'} justifyContent={'space-around'} gap={'25px'}>
<Box bg={'#263238'} p={'15px'} borderRadius={'5px'}>
    <Heading size={'sm'}>Local Credentials</Heading>
    <Text size={'sm'}>Complexity: <Text as={'span'} color={'#B71C1C'}>Low</Text></Text>
    <Text size={'sm'}>Security: <Text as={'span'} color={'#FF6F00'}>Medium</Text></Text>
    <Box display={'flex'} justifyContent={'space-around'} gap={'25px'}>
        <Box>
            <Text textAlign={'center'} fontWeight={'800'}>10</Text>
            <Text textAlign={'center'}>Affected entites</Text>
        </Box>
        <Box color={'#B71C1C'}>
        <Text textAlign={'center'} fontWeight={'800'}>45%</Text>
            <Text textAlign={'center'}>Affected entites</Text> 
        </Box>
    </Box>
    <Text>View remediations</Text>
</Box>

<Box bg={'#263238'} p={'15px'} borderRadius={'5px'}>
    <Heading size={'sm'}>Local Credentials</Heading>
    <Text size={'sm'}>Complexity: <Text as={'span'} color={'#B71C1C'}>Low</Text></Text>
    <Text size={'sm'}>Security: <Text as={'span'} color={'#FF6F00'}>Medium</Text></Text>
    <Box display={'flex'} justifyContent={'space-around'}>
        <Box>
            <Text>10</Text>
            <Text>Affected entites</Text>
        </Box>
        <Box color={'#B71C1C'}>
        <Text fontWeight={'800'}>45%</Text>
            <Text >Affected entites</Text> 
        </Box>
    </Box>
    <Text p={'10px 0'}>View remediations</Text>
</Box>



<Box bg={'#263238'} borderRadius={'5px'}>
    <Heading size={'sm'}>Local Credentials</Heading>
    <Text size={'sm'}>Complexity: <Text as={'span'} color={'#B71C1C'}>Low</Text></Text>
    <Text size={'sm'}>Security: <Text as={'span'} color={'#FF6F00'}>Medium</Text></Text>
    <Box display={'flex'} justifyContent={'space-around'} p={'10px 0'}>
        <Box>
            <Text fontWeight={'800'}>10</Text>
            <Text>Affected entites</Text>
        </Box>
        <Box color={'#B71C1C'}>
        <Text>45%</Text>
            <Text>Affected entites</Text> 
        </Box>
    </Box>
    <Text p={'20px 0'}>View remediations</Text>
</Box>

</Box>



</Box>
</Box>




</Box>







</Box>
</Box>








   </Box>
  )
}

export default Home
