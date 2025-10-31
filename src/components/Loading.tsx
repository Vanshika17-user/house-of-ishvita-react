// Loading Component for Suspense fallback
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mx-auto mb-4"></div>
        <p className="text-textLight text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
