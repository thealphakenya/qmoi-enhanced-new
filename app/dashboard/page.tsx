import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">QMOI Dashboard</h1>
        <p className="text-center text-gray-700 mb-8">Monitor your QMOI cloud resources, automation status, and workspace health.</p>
        <nav className="flex flex-col gap-4 mb-8">
          <Link href="/" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-center">Home</Link>
          <Link href="/automation" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center">Automation</Link>
          <Link href="/settings" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">Settings</Link>
        </nav>
        <div className="text-sm text-gray-500 text-center">
          <p>Cloud Status: <span className="font-semibold text-green-600">Connected</span></p>
          <p>Automation: <span className="font-semibold text-purple-600">Active</span></p>
          <p>Workspace Health: <span className="font-semibold text-blue-600">Optimal</span></p>
        </div>
      </div>
    </main>
  );
}
