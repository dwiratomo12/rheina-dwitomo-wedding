export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-sm text-gray-400">
          Wedding Invitation
        </p>
        <p className="font-script text-2xl text-gold-500 mt-2 mb-4">
          Rheina & Dwi Tomo
        </p>
        <p className="text-xs text-gray-500">
          Made with ❤️ | © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
