import Head from 'next/head';

const Index = () => (
  <div className="test">
    <Head>
      <title>Hello world!!!</title>
      <link href="/static/style.css" rel="stylesheet" />
    </Head>
    <p>Hello World! I set up this entire website from my iPad :D</p>
  </div>
);

export default Index;
