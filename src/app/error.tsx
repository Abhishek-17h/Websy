"use client"

const ErrorPage=()=>{
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-gray-600 mb-4">Something went wrong</p>
            <button 
                onClick={() => window.location.reload()} 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
                Try Again
            </button>
        </div>
    </div>
    </div>
  )
}
export default ErrorPage;