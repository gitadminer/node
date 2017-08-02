import React from 'react';
import { bindActionCreators } from 'redux'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import RouteWithSubRoutes from '../router/config.js';
import IndexInfo from '../components/IndexInfo.js';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import '../assets/style/home.scss';
@connect(
    (state, props) => ({
    	getState:state
    })
)
export default class App extends React.Component{
	state = {
    	collapsed: false,
	};
	onCollapse = (collapsed) => {
	    this.setState({ collapsed });
	 }
	constructor(props,contex){
		super(props);
	}
	componentDidMount() {
	    let { dispatch } = this.props;
	 }
	 componentWillUnmount() {
	    // 清除事件处理函数
	    console.log(2)
	 }
	 shouldComponentUpdate(nextprops,nextstate){
	 	console.log(nextprops,nextstate)
	 	return true;
	}
	handerClickMenu(e){
		console.log(e);
	}
	render(){
		const {routes} = this.props;
		console.log(this)
		return(
			<Layout>
		        <Sider
		          collapsible
		          collapsed={this.state.collapsed}
		          onCollapse={this.onCollapse}
		        >
		          <div className="menulogo" />
		          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handerClickMenu}>
		          	<Menu.Item key="1" path='/'>
		              <Icon type="pie-chart" />
		              <span>数据中心</span>
		            </Menu.Item>
		            <Menu.Item key="2" path='/chat'>
		              <Icon type="message" />
		              <span>CHAT</span>
		            </Menu.Item>
		            <SubMenu
		              key="sub1"
		              title={<span><Icon type="user" /><span>User</span></span>}
		            >
		              <Menu.Item key="3">Tom</Menu.Item>
		              <Menu.Item key="4">Bill</Menu.Item>
		              <Menu.Item key="5">Alex</Menu.Item>
		            </SubMenu>
		            <SubMenu
		              key="sub2"
		              title={<span><Icon type="team" /><span>Team</span></span>}
		            >
		              <Menu.Item key="6">Team 1</Menu.Item>
		              <Menu.Item key="8">Team 2</Menu.Item>
		            </SubMenu>
		          </Menu>
		        </Sider>
		        <Layout>
		          <Header style={{ background: '#fff', padding: 0 }} />
		          <Content style={{ margin: '0 16px' }}>
		            <Breadcrumb style={{ margin: '12px 0' }}>
		              <Breadcrumb.Item>User</Breadcrumb.Item>
		              <Breadcrumb.Item>Bill</Breadcrumb.Item>
		            </Breadcrumb>
		            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
			            {routes.map((route, i) => (
					        <RouteWithSubRoutes key={i} {...route}/>
					     ))}
		            </div>
		          </Content>
		          <Footer style={{ textAlign: 'center' }}>
		            Ant Design ©2016 Created by Ant UED
		          </Footer>
		        </Layout>
  			</Layout>
		)
	}
}