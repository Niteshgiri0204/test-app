import React from "react";
import styles from "../styles/components/ErrorBoundary.module.css";

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundaryContainer}>
          <h1 className={styles.errorBoundaryTitle}>
            Oops! Something went wrong.
          </h1>
          <p className={styles.errorBoundaryMessage}>
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <details className={styles.errorDetailsToggle}>
            <summary>Error Details</summary>
            <pre className={styles.errorDetailsPre}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
