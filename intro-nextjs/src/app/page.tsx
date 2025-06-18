// tsx (typescript xml) ---> Menyisipkan tag html kedalam code ts
// jsx (javascript xml) ---> Menyisipkan tag html kedalam code js

// app router ---> Next.js dalam melakukan routing
//    Membuat directory didalam file app, maka directory tersebut akan dianggap sebagai halaman baru/url baru
//    Didalam directory tsb, membuat file dengan nama page.tsx / page.jsx

// Function
// Class
import Card from '@/features/home/components/Card';

function HomePage() {
  return (
    <>
      <h1>Belajar React/Next</h1>

      <div style={{ display: 'flex' }}>
        <Card description='abc' icon="https://icons8.com" />
        <Card description='bca' icon="" />
        <Card description='def' icon="" />
      </div>
    </>
  );
}

export default HomePage;
