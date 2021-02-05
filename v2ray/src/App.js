import React from "react";
import "antd/dist/antd.css";
import { Button, Space, Upload, Popconfirm,Layout } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>

    <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>

    </>
  );
}

export default App;
