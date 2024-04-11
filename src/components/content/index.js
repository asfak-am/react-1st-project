import {React} from 'react';
import { Layout,Carousel,Image, Typography,Card,Flex,Col,Row } from 'antd';
import {
  CodeSandboxCircleFilled,
  AlipayCircleFilled,   
  SketchCircleFilled
} from '@ant-design/icons';






  


const { Text } = Typography;
const cardStyle = {
  
  position:' absolute',
  top: '155px',
  right: '50px',
  width:' 45%',
  lineHeight:'200px',
  color:'#1677ff',
  background: 'rgba( 255, 255, 255, 0.8 )',
  boxshadow:' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdropfilter: 'blur( 16.5px )',
  webkitbackdropfilter: 'blur( 16.5px )',
  borderradius: '10px',
  border: '0px solid #1677ff'  
};

const contentStyle = {
    height: '340px',
    color: '#fff',
    lineHeight: '340px',
    textAlign: 'center',
    background: '#364d79',
    width:'70%',
    margin:'30px 0 0 50px'
    
  };
const {Content} = Layout;
const Pagecontent = () => {
    return(

            



    <Content style={{padding: '0 0',}}>
     
     <Carousel  dots={false} >
        <div >
        <h3 style={contentStyle}><Image preview={false} height={400} width={'100%'} src='https://newtecservices.ie/wp-content/uploads/2020/05/shutterstock_566877226-1536x830.jpg'/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><Image preview={false} height={400} width={'100%'} src='https://newtecservices.ie/wp-content/uploads/2020/05/shutterstock_566877226-1536x830.jpg'/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><Image preview={false} height={400} width={'100%'} src='https://newtecservices.ie/wp-content/uploads/2020/05/shutterstock_566877226-1536x830.jpg'/></h3>
        </div>
        <div>
        <h3 style={contentStyle}><Image preview={false} height={400} width={'100%'} src='https://newtecservices.ie/wp-content/uploads/2020/05/shutterstock_566877226-1536x830.jpg'/></h3>
        </div>
      </Carousel>


      <Card className='absolute' hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
             
                
                <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32, }}>
                  <Typography.Title  level={2} style={{color:'#1677ff',fontFamily:"Montserrat",fontWeight:'800',cursor:'default',textTransform:'uppercase'}}>
                  Journey Through Sri Lanka Culture, Nature, and Beyond
                  </Typography.Title>
                  
                </Flex>
              
      </Card >

      <Row style={{ margin:'30px 50px 50px 30px ' }} gutter={'24,24'} >
            <Col xs={24}  md={12}  xl={8} >
              
              <Flex vertical  justify='center' align='center'>  
                
                      <p>< AlipayCircleFilled  style={{ fontSize: '64px',color:'#1677ff' }} /></p>
                      <Text strong>Transparent Pricing</Text>
              </Flex>
              
            </Col>

            <Col  xs={24}  md={12}  xl={8}>

              <Flex vertical  justify='center' align='center'>  

                      <p>< CodeSandboxCircleFilled  style={{ fontSize: '64px',color:'#1677ff' }} /></p>
                      <Text strong>Expert Guidance</Text>
              </Flex>

            </Col>


            <Col  xs={24}  md={12}  xl={8}>

              <Flex vertical  justify='center' align='center'>  

                      <p>< SketchCircleFilled  style={{ fontSize: '64px',color:'#1677ff' }} /></p>
                      <Text strong>Safety and Comfort</Text>
              </Flex>

            </Col>
       </Row>

        {/* About us */}

       <Row gutter={'24,24'} style={{ margin:'15px 50px 50px 50px' ,backgroundColor:'rgb(240 250 255)',border:'30px solid rgb(240 250 255)' }}>        
            
       
       <Col xs={24}  lg={12}  xl={12} style={{padding:'20px'}}>   
        
        <Image preview={false} style={{height:300,width:300,borderRadius:'50%'}}src='https://wallpapersmug.com/large/9f22ba/tropical-beach-top-view-sea-coast.jpg'/>
        
    
    </Col>    

      <Col xs={24}  lg={12}  xl={12} style={{padding:'20px'}}>
     
            
      

              <Typography.Title level={1}>
                     About Us
              </Typography.Title>

              <Typography level={4} style={{margin:'0', textAlign:'justify'}}>
              ArugambayAgenda was born out of a passion for showcasing the diverse beauty and cultural richness of Arugambay, Sri Lanka. Founded by a group of local enthusiasts with deep ties to the region, the company aimed to provide a gateway for travelers to experience the authentic wonders of this coastal paradise.
              </Typography>
      
        </Col>     
        
   
       
          

      
       </Row>
       <Row style={{justifyContent:'center'}} >

       <Typography.Title  level={1}> Types of Explore </Typography.Title>


       </Row>



     </Content>
    );
};

export default Pagecontent;