import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Updates status to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-4xl font-bold bg-red-600 mb-4">Ups, algo correu mal.</h1>
            <p className="text-lg mb-4">Estamos a trabalhar para resolver o problema.</p>
            <p className="text-sm text-gray-500">Por favor, tenta novamente mais tarde.</p>
            <p className="text-sm text-gray-500">Se o problema persistir, por favor, contacta-nos.</p>
            <p className="text-sm text-gray-500">Obrigado pela tua compreensão.</p>
        </div>
      );
    }
    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
