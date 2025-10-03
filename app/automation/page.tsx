import Link from 'next/link';

export default function Automation() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600">QMOI Automation</h1>
        <p className="text-center text-gray-700 mb-8">Automate workspace tasks, offload large files, and manage cloud resources with QMOI.</p>
        <nav className="flex flex-col gap-4 mb-8">
          <Link href="/" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-center">Home</Link>
          <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">Dashboard</Link>
          <Link href="/settings" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">Settings</Link>
        </nav>
        <div className="text-sm text-gray-500 text-center">
          <p>Automation Status: <span className="font-semibold text-green-600">Running</span></p>
          <p>Last Offload: <span className="font-semibold text-purple-600">Just Now</span></p>
        </div>
      </div>
    </main>
  );
}
