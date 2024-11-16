import  { memo ,useState} from 'react';
import { Modal } from 'antd';
import {  UILoginContainer} from './style';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useAppSelector } from '@/store/index';
import { useAppDispatch } from '@/store/index';
import { changeShowModal } from '@/views/login/store/index';
import { getLoginByPhone }  from '@/api/login';

const LoginModal = () => {
  const isShowModal = useAppSelector((state) => state.login.isShowModal);
  const dispatch = useAppDispatch();

  //弹框的显隐
  const handleCancel = () => {
    // console.log('取消');
    dispatch(changeShowModal(false));
  }

  //表单提交
  const onFinish = (values: any) => {
    // console.log('点击登录按钮', values);
    dispatch(changeShowModal(false));
    getLoginByPhone(values.phone, values.password).then((res) => {
      console.log(res);
    })
  }
 

  return (
    <Modal
      title="登录"
      open={isShowModal}
      centered
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: 'none' } }}//隐藏取消按钮
      okButtonProps={{ style:{display: 'none'}}}//隐藏确定按钮
    >
      < UILoginContainer>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ height: '400px' }}
        onFinish={onFinish}
      >
      <Form.Item
          name="phone"
          validateTrigger="onChange"
          validateDebounce={2000}
          rules={[
              { required: true, message: '请输入手机号码！' },
              { pattern: /^1[1-9]\d{9}$/, message: '手机号码格式不对' },
              { max: 11, message: '手机号码长度不能超过11位' }
            ]}
      >
        <Input prefix={<UserOutlined />} placeholder="请输入手机号码" />
      </Form.Item>
        
      <Form.Item
          name="password"
          validateTrigger="onChange"
          validateDebounce={2000}
          rules={[
              { required: true, message: '请输入密码！' },
              { pattern:/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,8}$/, message: '密码格式不对' },
              { max: 8, message: '密码长度不能超过8位' },
              { min: 6, message: '密码长度不能少于6位' },
            ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="请输入密码" />
      </Form.Item>
        
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a href="">忘记密码？</a>
        </Flex>
        </Form.Item>

       <Form.Item>
        <Button block htmlType="submit">
          登录
        </Button>
      </Form.Item>    
      </Form>   
      </ UILoginContainer>
    </Modal> 
  )
}

export default memo(LoginModal);