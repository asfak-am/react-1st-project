import {React} from 'react';
import {Layout,Menu,Image} from 'antd';
const {Header } = Layout;
const Topheader= () =>{

return(
    <Header
        style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        }}
    >
        <div className="demo-logo" />

        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={
            [
                {
                    key:'home',
                    label:'Home'
                },
                {
                    key:'services',
                    label:'Services'
                },
                {
                    key:'about',
                    label:'About'
                },
                {
                    key:'contact us',
                    label:'Contact Us'
                } 
            ]
        }
        style={{
            flex: 1,
            minWidth: 0,
        }}
        
        />

<Image preview={false} style={{ width:180,marginTop:12}}  src='https://www.arugambayagenda.com/assets/images/logo/Arugabay_agenda_logo_menu1%201.png'/>
    </Header>
);

};

export default Topheader;