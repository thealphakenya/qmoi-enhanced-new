
import Link from 'next/link';
import { connectToQMOICloud, enhanceSecurity, ensureUnlimitedSpace, debugQMOISpace } from '../src/qmoi-api';

export default function Home() {
	// Simulate QMOI feature calls (for demo)
	connectToQMOICloud();
	enhanceSecurity();
	ensureUnlimitedSpace();
	debugQMOISpace();

	return (
		<main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
			<div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
				<h1 className="text-3xl font-bold text-center mb-6 text-blue-600">QMOI Enhanced Workspace</h1>
				<p className="text-center text-gray-700 mb-8">Welcome to your enhanced Next.js workspace with QMOI cloud automation, unlimited disk space, and advanced security features.</p>
				<nav className="flex flex-col gap-4 mb-8">
					<Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center">Dashboard</Link>
					<Link href="/automation" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center">Automation</Link>
					<Link href="/settings" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-center">Settings</Link>
				</nav>
				<div className="text-sm text-gray-500 text-center">
					<p>QMOI Cloud Status: <span className="font-semibold text-green-600">Connected</span></p>
					<p>Security: <span className="font-semibold text-blue-600">Enhanced</span></p>
					<p>Disk Space: <span className="font-semibold text-purple-600">Unlimited</span></p>
				</div>
			</div>
		</main>
	);
}
