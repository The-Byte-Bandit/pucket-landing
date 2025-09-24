import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vite + React + TypeScript
          </h1>
          <p className="text-gray-600">
            Now with <span className="text-cyan-600 font-semibold">Tailwind CSS</span>
          </p>
        </div>
        
        <div className="mb-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ease-in-out"
          >
            Count is {count}
          </button>
        </div>
        
        <div className="space-y-4 text-sm text-gray-600">
          <p className="bg-gray-50 rounded-lg p-3">
            Edit <code className="bg-gray-200 px-2 py-1 rounded text-gray-800 font-mono text-xs">src/App.tsx</code> and save to test HMR
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">React 19</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">TypeScript</span>
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium">Tailwind CSS</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Vite</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App