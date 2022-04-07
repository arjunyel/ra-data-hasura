import dynamic from 'next/dynamic';
const App = dynamic(() => import('../src/App'), { ssr: false });

const AdminPage = () => {
  return <App />;
};

export default AdminPage;
