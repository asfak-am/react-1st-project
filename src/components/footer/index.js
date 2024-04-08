import {React} from 'react';
import {Layout} from 'antd';
import { Col, Row } from 'antd';
import '../footer/style.css'
import { Flex,Image} from 'antd';
import { Typography} from 'antd';
import {
  LinkedinFilled,
  FacebookFilled,
  InstagramFilled
} from '@ant-design/icons';




const { Title } = Typography;
const {Footer } = Layout;

const Myfooter= () => {

    return(
        <Footer style={{ textAlign: 'center',}}
      >
   
          <Row>
                <Col span={12}>
                <Flex justify={'flex-start'} align={'center'}>
                    <Row>
                    
                      <Image preview={false} 
                      width={'4rem'}
                      src='data:image/png;base64,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'
                      ></Image>
                      
                      <Title className='cname'
                       level={2}>
                             
                                DIGITAL LERNER'S
                              
                      </Title>
                    </Row>
                </Flex>  
                  </Col>


                <Col span={12}>

                <Flex 
                justify={'space-around'} 
                align={'space-around'}>
                 
               
                  <Col style={{ fontSize: '32px', color: '#1677ff' }} span={4}><LinkedinFilled /></Col>
                  <Col style={{ fontSize: '32px', color: '#1677ff' }}span={4}><FacebookFilled /></Col>
                  <Col style={{ fontSize: '32px', color: '#1677ff' }}span={4}><InstagramFilled /></Col>
                
                </Flex>  

                </Col>
          </Row>
    

        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>

    );
};

export default Myfooter;