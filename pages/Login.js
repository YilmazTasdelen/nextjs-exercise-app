import { Button, Card, Checkbox, Form, Input } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import Register from './Register';
import axios from 'axios';
import { Store } from '../utils/Store';
import Router from 'next/router';
import Cookies from 'js-cookie';

const Login = () => {
  const { state, dispatch } = useContext(Store);
  const { muscleGroupByDayState, dayCount, dayList, notes, userInfo } = state;

  const onFinish = async (values) => {
    const { data } = await axios.post('/api/users/login', {
      email: values.user.email,
      password: values.user.password,
    });
    // console.log(data);
    // set states
    dispatch({
      type: 'SET_USER_INFO',
      payload: { data },
    });
    Cookies.set('userInfo', JSON.stringify(data));
    Router.push('/Start');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div
      //style={{ position: 'relative', width: '100%', paddingBottom: '20%' }}
      >
        <Image
          layout="fill"
          objectFit="contain" // Scale your image down to fit into the container
          src="/files/LoginBanner.png"
          alt="Picture of the author"
          width="100%"
          height={140}
          style={{ paddingTop: 100, paddingLeft: 55 }}
        />
      </div>
      <Card
        style={{
          backgroundColor: '#fff0',
          width: '50%',
          paddingTop: 20,
          margin: '0 auto',
          boxShadow:
            ' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
        }}
      >
        <Link href="/Register">
          <a
            style={{
              color: 'red',
              fontSize: 15,
              textDecoration: 'underline',
              position: 'absolute',
              top: 12,
              right: 43,
            }}
          >
            Register
          </a>
        </Link>
        <Form
          style={{ padding: 14, marginTop: 5 }}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<div style={{ minWidth: 70 }}>Email</div>}
            name={['user', 'email']}
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={<div style={{ minWidth: 70 }}>Password</div>}
            name={['user', 'password']}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              shape="round"
              htmlType="submit"
              style={{
                borderColor: '#3266c5ed',
                color: '#3266c5ed',
                width: '100%',
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default Login;
