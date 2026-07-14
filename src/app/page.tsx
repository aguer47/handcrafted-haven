export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      <header style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e5e5', padding: '1rem 2rem' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#171717' }}>Handcrafted Haven</h1>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#525252', fontSize: '0.875rem' }}>Browse</a>
            <a href="#" style={{ textDecoration: 'none', color: '#525252', fontSize: '0.875rem' }}>Sell</a>
            <a href="#" style={{ textDecoration: 'none', color: '#525252', fontSize: '0.875rem' }}>About</a>
          </div>
        </nav>
      </header>

      <main style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
        <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#171717', marginBottom: '1rem' }}>
            Discover Unique Handmade Treasures
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#525252', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Connect with talented artisans and find one-of-a-kind handmade goods crafted with love and care.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button style={{ backgroundColor: '#171717', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
              Start Shopping
            </button>
            <button style={{ backgroundColor: 'white', color: '#171717', padding: '0.75rem 2rem', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: 500, border: '1px solid #e5e5e5', cursor: 'pointer' }}>
              Become a Seller
            </button>
          </div>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#171717', marginBottom: '2rem', textAlign: 'center' }}>
            Featured Categories
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Jewelry', description: 'Handcrafted accessories and adornments' },
              { name: 'Home Decor', description: 'Unique pieces for your living space' },
              { name: 'Art & Prints', description: 'Original artwork and prints' },
              { name: 'Textiles', description: 'Handmade fabrics and clothing' }
            ].map((category) => (
              <div key={category.name} style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #e5e5e5', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#171717', marginBottom: '0.5rem' }}>
                  {category.name}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#525252' }}>
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: '#171717', color: 'white', padding: '3rem', borderRadius: '0.5rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Join Our Community
          </h3>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem', opacity: 0.9 }}>
            Whether you're a buyer or a seller, become part of our growing community of handmade enthusiasts.
          </p>
          <button style={{ backgroundColor: 'white', color: '#171717', padding: '0.75rem 2rem', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}>
            Sign Up Now
          </button>
        </section>
      </main>

      <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e5e5e5', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', color: '#525252' }}>
          © 2024 Handcrafted Haven. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
