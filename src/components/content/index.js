import {React} from 'react';
import { Layout,Carousel,Image, Typography,Card,Flex,Col,Row } from 'antd';
import {
  CodeSandboxCircleFilled,
  AlipayCircleFilled,   
  SketchCircleFilled
} from '@ant-design/icons';





const imgStyle = {
  display: 'block',
  width: 273,
  height: 273,
  border:'01px solid #1677ff' ,
  borderradius:'500%'
};

const { Text } = Typography;
const cardStyle = {
  
  position:' absolute',
  top: '190px',
  right: '100px',
  width:' 45%',
  height: '200px',
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
    height: '350px',
    color: '#fff',
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
    width:'70%',
    margin:'50px 0 0 50px'
    
  };
const {Content} = Layout;
const Pagecontent = () => {
    return(

            



    <Content style={{padding: '0 0',}}>
     
     <Carousel autoplay dots={false} >
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
              <Flex justify="space-between">
                
                <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32, }}>
                  <Typography.Title  level={2} style={{color:'#1677ff',fontFamily:"Montserrat",fontWeight:'800',cursor:'default',textTransform:'uppercase'}}>
                  Journey Through Sri Lanka Culture, Nature, and Beyond
                  </Typography.Title>
                  
                </Flex>
              </Flex>
      </Card >

      <Row style={{ margin:'50px 0 0 50px' }}>
            <Col span={8}>
              
              <Flex vertical  justify='center' align='center'>  
                
                      <p>< AlipayCircleFilled  style={{ fontSize: '64px',color:'#1677ff' }} /></p>
                      <Text strong>Transparent Pricing</Text>
              </Flex>
              
            </Col>

            <Col span={8}>

              <Flex vertical  justify='center' align='center'>  

                      <p>< CodeSandboxCircleFilled  style={{ fontSize: '64px',color:'#1677ff' }} /></p>
                      <Text strong>Expert Guidance</Text>
              </Flex>

            </Col>


            <Col span={8}>

              <Flex vertical  justify='center' align='center'>  

                      <p>< SketchCircleFilled  style={{ fontSize: '64px',color:'#1677ff' }} /></p>
                      <Text strong>Safety and Comfort</Text>
              </Flex>

            </Col>
       </Row>
                
       {/* About us */}
      <Card style={{ margin:'50px 0 0 50px' }}>
       <Flex justify="space-between">
      <img
        alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={3}>
          “antd is an enterprise-class UI design language and React UI library.”
        </Typography.Title>
       
      </Flex>
    </Flex>
    </Card>
     </Content>
    );
};

export default Pagecontent;