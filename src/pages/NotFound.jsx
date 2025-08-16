import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold bg-red-600 mb-4">404</h1>
      <p className="text-lg">A página que procuras não existe.</p>
      <a
        href="/"
        className="mt-6 text-blue-600 underline hover:text-blue-800 transition duration-500"
      >
        Voltar ao início
      </a>
    </div>
  );
}

export default NotFound;
