import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {fetchPost} from '../api/config';
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

@Form.create({})

export default class Login extends React.Component{
  state = {
    checkNick: false,

  };
  check = () => {
    this.props.form.validateFields(
      (err,values) => {
        if (!err) {
          fetchPost('/register',values).then((data)=>{
          	console.log(data);
          });
        }
      },
    );
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <FormItem {...formItemLayout} label="用户名">
          {getFieldDecorator('username', {
            rules: [{
              required: true,
              message: '请输入你的用户名'
            }],
          })(
            <Input  prefix={<Icon type="user" style={{ fontSize: 14 }} />} placeholder="Please input your name" />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="密码">
          {getFieldDecorator('nickname', {
            rules: [{
              required: true,
              message: '请输入你的密码'
            }],
          })(
            <Input  prefix={<Icon type="lock" style={{ fontSize: 14 }} />} placeholder="Please input your passowrd" type="password" />
          )}
        </FormItem>
        <FormItem {...formTailLayout}>
          <Checkbox
            value={this.state.checkNick}
          >
            记住你的密码
          </Checkbox>
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            注册
          </Button>
        </FormItem>
      </div>
    );
  }
}