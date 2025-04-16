
import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-olive-900">About Valarmathi Oil Store</h1>
            <p className="text-muted-foreground italic text-lg">
              Preserving tradition, nurturing health since 1998
            </p>
          </div>
          
          <div className="space-y-10">
            {/* Our Story */}
            <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-serif font-bold mb-4 text-olive-800">Our Story</h2>
              <div className="prose prose-olive max-w-none">
                <p>
                  Valarmathi Oil Store began as a small family business in the heart of Tamil Nadu, driven by a passion for traditional oil extraction methods and a commitment to preserving the authentic flavors and health benefits of natural oils.
                </p>
                <p>
                  Founded by Mr. Valarmathi in 1998, our journey started with a modest oil press and a vision to provide pure, unadulterated oils to the local community. What began as a small operation has now grown into a trusted name in premium cold-pressed oils across South India.
                </p>
                <p>
                  Through the years, we have maintained our commitment to traditional extraction processes while incorporating modern quality standards and sustainable practices.
                </p>
              </div>
            </section>
            
            {/* Our Mission */}
            <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-serif font-bold mb-4 text-olive-800">Our Mission</h2>
              <div className="prose prose-olive max-w-none">
                <p>
                  At Valarmathi Oil Store, our mission is to reconnect people with the authentic taste and health benefits of traditionally extracted oils. We believe that the wisdom of traditional oil extraction methods, combined with organic farming practices, offers the best nutritional value and flavor.
                </p>
                <p>
                  We are committed to:
                </p>
                <ul>
                  <li>Preserving traditional oil extraction methods</li>
                  <li>Supporting organic farming and sustainable agriculture</li>
                  <li>Providing chemical-free, pure oils that promote better health</li>
                  <li>Ensuring transparency in our sourcing and production processes</li>
                  <li>Contributing to the welfare of farming communities</li>
                </ul>
              </div>
            </section>
            
            {/* Our Process */}
            <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-2xl font-serif font-bold mb-4 text-olive-800">Our Process</h2>
              <div className="prose prose-olive max-w-none">
                <p>
                  Our cold-pressing technique is what sets our oils apart. Unlike commercial oil production that uses heat and chemicals to extract maximum oil, our cold-pressing method ensures that the oil retains all its natural nutrients, flavors, and aromas.
                </p>
                <p>
                  The process involves:
                </p>
                <ol>
                  <li><strong>Careful Sourcing:</strong> We partner with organic farmers who grow crops without pesticides or chemical fertilizers.</li>
                  <li><strong>Traditional Extraction:</strong> Our oils are extracted using wooden cold-press machines (chekku/ghani) that apply pressure without generating heat.</li>
                  <li><strong>Natural Filtering:</strong> We use natural filtering methods that preserve the beneficial properties of the oil.</li>
                  <li><strong>Quality Testing:</strong> Every batch undergoes rigorous quality tests before packaging.</li>
                  <li><strong>Eco-friendly Packaging:</strong> We use glass bottles and sustainable packaging materials.</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
