import Head from 'next/head';
import Image from 'next/image';
export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Head>
        <title>Our Services</title>
      </Head>

      <h1 className="text-3xl font-bold mb-8 my-6">Our Services</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="service-card w-[300px]">
          <Image src="/pic3.jpg" alt="Service 1" className="rounded-lg mb-4 h-[200px]" width={300} height={300} />
          <h2 className="text-xl font-bold mb-2">Service Name 1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
        </div>

        <div className="service-card w-[300px]">
          <Image src="/pic1.jpg" alt="Service 2" className="rounded-lg mb-4 h-[200px]" width={300} height={300} />
          <h2 className="text-xl font-bold mb-2">Service Name 2</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
        </div>

        <div className="service-card w-[300px]">
          <Image src="/pic2.jpg" alt="Service 3" className="rounded-lg mb-4 h-[200px]" width={300 } height={300} />
          <h2 className="text-xl font-bold mb-2">Service Name 3</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
        </div>
      </section>
    </div>
  );
}
