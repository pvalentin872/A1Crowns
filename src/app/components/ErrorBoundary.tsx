import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("Section error:", error.message, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div
            className="w-full py-12 flex items-center justify-center"
            style={{
              backgroundColor: "#0F0F0F",
              minHeight: "200px",
            }}
          >
            <p
              style={{
                fontFamily: "Lato, sans-serif",
                color: "rgba(249,249,249,0.5)",
                fontSize: "14px",
              }}
            >
              Section unavailable
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
