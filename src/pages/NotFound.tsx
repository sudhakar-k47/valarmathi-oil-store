
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container-custom py-24">
        <div className="max-w-md mx-auto text-center animate-fade-in">
          <h1 className="text-6xl font-serif font-bold mb-4 text-olive-900">404</h1>
          <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary inline-flex">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
