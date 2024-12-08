import { useState } from 'react';
import {
  DashboardOutlined,
  BookOutlined,
  CheckSquareOutlined,
  LineChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';

const { Sider } = Layout;

// Utility function to create menu items
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

// Menu items
const items = [
  getItem('Dashboard', '/student/dashboard', <DashboardOutlined />),
  getItem('My Courses', '/student/course', <BookOutlined />),
  getItem('Attendance', '/student/attendance', <CheckSquareOutlined />),
  getItem('Progress', '/student/progress', <LineChartOutlined />),
  getItem('Profile Settings', '/student/setting', <SettingOutlined />),
];

const Student = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Handle menu click to navigate
  const handleMenuClick = ({ key }) => {
    navigate(key); // Navigate to the route associated with the clicked menu item
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline" items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Outlet />
    </Layout>
  );
};

export default Student;