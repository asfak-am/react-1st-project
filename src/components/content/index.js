import {React} from 'react';
import { Layout,Carousel,Image, Typography,Flex,Col,Row,Card,Button,Avatar,Divider,Rate } from 'antd';
import {
  CodeSandboxCircleFilled,
  AlipayCircleFilled,   
  SketchCircleFilled,
  
} from '@ant-design/icons';





const contentStyle2 = {
  
  color: 'black',
  
  textAlign: 'center',
 padding:'30px'
  
};

const { Meta } = Card;
const gridStyle1 = {

  width: '25%',
  textAlign: 'center',
  


}

const gridStyle2 = {

  width: '50%',
  textAlign: 'center',

}

const gridStyle3 = {

  width: '100%',
  textAlign: 'center',

}
const { Text } = Typography;
const cardStyle = {
  
  position:' absolute',
  top: '165px',
  right: '50px',
  width:' 50%',
  height:'200px',
  lineHeight:'200px',
  color:'#1677ff',
  background: 'rgba( 255, 255, 255, 0.8 )',
  boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  backdropfilter: 'blur( 16.5px )',
  webkitbackdropfilter: 'blur( 16.5px )',
  borderradius: '10px',
  border: '0px solid #1677ff'  
};

const cardStyle2 = {
  
 
  color:'#1677ff',
  background: 'rgba( 255, 255, 255, 0.8 )',
  boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  backdropfilter: 'blur( 16.5px )',
  webkitbackdropfilter: 'blur( 16.5px )',
  borderradius: '10px',
  margin:'15px 50px 0 50px',
  padding:'15px'
  
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
     
    <Row>
      <Col xs={0}  sm={0} md={18}  xl={24}>
      <Carousel  autoplay dots={false} >
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
      </Col>
    </Row>


     <Row style={{display:'grid'}} >
        <Col  xs={0}  sm={0} md={18}  xl={24}  hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden', } }}>
             
                        
                            
                       
                          <Typography.Title   level={2} style={{color:'#1677ff',fontFamily:"Montserrat",fontWeight:'800',cursor:'default',textTransform:'uppercase',padding:'0 0 0 30px',}}>
                          Journey Through Sri Lanka Culture, Nature, and Beyond
                          </Typography.Title>
                          
                       
                      
             
        </Col>
        <Col  xs={24}  sm={24} md={0}  xl={0} hoverable style={cardStyle2} >

                          <Typography.Title   level={3} style={{color:'#1677ff',fontFamily:"Montserrat",fontWeight:'700',cursor:'default',textTransform:'uppercase',textAlign:'center',}}>
                                            Journey Through Sri Lanka Culture, Nature, and Beyond
                          </Typography.Title>
        
        </Col>
     </Row>

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

       <Row gutter={'24,24'} style={{ backgroundColor:'#1677ff',padding:'50px' }}>        
            
          
          <Col xs={0} sm={0} md={24}  lg={12}  xl={12} style={{padding:'20px',}}>   
            
            <Image preview={false} style={{height:320,width:320,borderRadius:'50%',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',border:'15px solid white'}}src='https://wallpapersmug.com/large/9f22ba/tropical-beach-top-view-sea-coast.jpg'/>
            
        
          </Col>    

          <Col xs={24} sm={24} md={0}  lg={0}  xl={0} style={{padding:'20px'}}>   
              
              <Image preview={false} style={{height:175,width:175,borderRadius:'50%',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}src='https://wallpapersmug.com/large/9f22ba/tropical-beach-top-view-sea-coast.jpg'/>
              
          
          </Col> 

      <Col md={24}  lg={12}  xl={12} >

              <Typography.Title style={{color:'white',fontSize:'60px',margin:'0'}} level={1}>
                     About Us
              </Typography.Title>

              <Typography level={4} style={{margin:'0', textAlign:'justify',color:'white'}}><strong>
              ArugambayAgenda was born out of a passion for showcasing the diverse beauty and cultural richness of Arugambay, Sri Lanka. Founded by a group of local enthusiasts with deep ties to the region, the company aimed to provide a gateway for travelers to experience the authentic wonders of this coastal paradise.</strong>
              </Typography>
      
       </Col>     
        
   
       
          

      
       </Row>
       <Row style={{justifyContent:'center'}} >

       <Col>
          <Typography.Title  level={1}> Types of Explore </Typography.Title>
       </Col>


       </Row>

<Row style={{margin:'0 50px'}}>
  <Col xs={0} sm={0} md={0} lg={24} xl={24}>
  
        <Card >

      <Card.Grid style={gridStyle1}>
        <Image  preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzRt5B9yUujEkcWx32muYWQafxXE4UMvsvg&s' />
        <Meta title='wild Safari' />
      </Card.Grid>

      <Card.Grid style={gridStyle1}>
        <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJO2gWrYmXaJd_u2kq_ljsi9cGLErCDuBIg&s' />
        <Meta title='Experiences' />
      </Card.Grid>

      <Card.Grid style={gridStyle1}>
        <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uhaa315PsNe4fSY48t4sfDJcpL34J1DB8g&s' />
        <Meta title='Surfing' />
      </Card.Grid>

      <Card.Grid style={gridStyle1}>
        <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruGgDGkK-pYyymiaAa1lT7dl_5YZrSKIgbw&s' />
        <Meta title='Special Try' />
      </Card.Grid>

      </Card>

  </Col>


  <Col xs={0} sm={24} md={24} lg={0} xl={0}>
  
          <Card >

        <Card.Grid style={gridStyle2}>
          <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzRt5B9yUujEkcWx32muYWQafxXE4UMvsvg&s' />
          <Meta title='wild Safari' />
          
        </Card.Grid>

        <Card.Grid style={gridStyle2}>
          <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJO2gWrYmXaJd_u2kq_ljsi9cGLErCDuBIg&s' />
          <Meta title='Experiences' />
        </Card.Grid>

        <Card.Grid style={gridStyle2}>
          <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uhaa315PsNe4fSY48t4sfDJcpL34J1DB8g&s' />
          <Meta title='Surfing' />
        </Card.Grid>

        <Card.Grid style={gridStyle2}>
          <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruGgDGkK-pYyymiaAa1lT7dl_5YZrSKIgbw&s' />
          <Meta title='Special Try' />
        </Card.Grid>

        </Card>

  </Col>
  <Col xs={24} sm={0} md={0} lg={0} xl={0}>
  
            <Card >

          <Card.Grid style={gridStyle3}>
            <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzRt5B9yUujEkcWx32muYWQafxXE4UMvsvg&s' />
            <Meta title='wild Safari' />
          </Card.Grid>

          <Card.Grid style={gridStyle3}>
            <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJO2gWrYmXaJd_u2kq_ljsi9cGLErCDuBIg&s' />
            <Meta title='Experiences' />
          </Card.Grid>

          <Card.Grid style={gridStyle3}>
            <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uhaa315PsNe4fSY48t4sfDJcpL34J1DB8g&s' />
            <Meta title='Surfing' />
          </Card.Grid>

          <Card.Grid style={gridStyle3}>
            <Image preview={false} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruGgDGkK-pYyymiaAa1lT7dl_5YZrSKIgbw&s' />
            <Meta title='Special Try' />
          </Card.Grid>

          </Card>

       </Col>
</Row>

<Row>

<Col span={24} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
<Button style={{margin:'30px 30px 0 30px',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} type="primary">Read more</Button>
</Col>

</Row>


<Row style={{justifyContent:'center'}} >

<Col>
   <Typography.Title  level={1}> Testimonial </Typography.Title>
</Col>


</Row>


<Row >
  <Col style={{margin:'0 50px',maxWidth:'500px'}}>
  
  <Carousel style={{textAlign:'center',}}   >
    <div>
      <h3 style={contentStyle2}>
                    <Avatar style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',margin:'5px'}} size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 100 }} src={<img src={'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p22962921_i_v9_aa.jpg'} alt="avatar" />} />
                          
                    <Divider orientation="plain">Asfak Ahamed</Divider>
                    <Rate defaultValue={2.5} />
                    <br />
                    &ldquo;ArugambayAgenda curated a seamless journey, blending surf adventures with cultural delights. An unforgettable Sri Lankan experience&rdquo;
           
            
        </h3>
    </div>
    <div>
      <h3 style={contentStyle2}>
        <Card style={{background:'rgb(240 250 255)',color:'white'}}>
                    <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZm19QPo_aaWyn57tRqGJtMqHglAa7PdN4g&s'} alt="avatar" />} />
                    <Meta description='&ldquo;ArugambayAgenda curated a seamless journey, blending surf adventures with cultural delights. An unforgettable Sri Lankan experience&rdquo;' title='Asfak Ahamed' />              
        </Card></h3>
    </div>
    <div>
      <h3 style={contentStyle2}><Card style={{background:'rgb(240 250 255)',color:'white'}}>
                    <Avatar style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',margin:'15px'}} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKmjPYGTiQcLvIcdQRdCiU4OYD7gerORuMw&s'} alt="avatar" />} />
                    <Meta description='&ldquo;ArugambayAgenda curated a seamless journey, blending surf adventures with cultural delights. An unforgettable Sri Lankan experience&rdquo;' title='Asfak Ahamed' />              
        </Card></h3>
    </div>
    <div>
      <h3 style={contentStyle2}><Card style={{background:'rgb(240 250 255)',color:'white'}}>
                    <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcC6--ATWiEPEVSzgyN2pPpt3bkyBaS0TWA&s'} alt="avatar" />} />
                    <Meta description='&ldquo;ArugambayAgenda curated a seamless journey, blending surf adventures with cultural delights. An unforgettable Sri Lankan experience&rdquo;' title='Asfak Ahamed' />              
        </Card></h3>
    </div>
  </Carousel>

  </Col>
</Row>
     </Content>
    );
};

export default Pagecontent;