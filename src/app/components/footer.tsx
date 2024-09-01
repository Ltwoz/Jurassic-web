export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="text-sm">&copy; 2024 Jurassic</div>
          <div className="flex items-center">
            <a href="/about" className="mr-4 hover:underline">
              About Us
            </a>
            <a href="/service" className="mr-4 hover:underline">
              Services
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
