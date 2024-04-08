import{React} from 'react';
import {Layout} from 'antd';
import Topheader from '../../components/header';
import Myfooter from '../../components/footer';
import Pagecontent from '../../components/content';



const Home = () => {
   
    return(
        <div>
 <Layout>
     <Topheader />
     <Pagecontent />
     <Myfooter />
 </Layout>
     
        </div>
    );
    
};

export default Home;