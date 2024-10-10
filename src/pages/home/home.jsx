import React from "react";

const PDFViewer = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/laziz-khamidov-cv.pdf";
    link.download = "laziz-khamidov-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className=" py-10 max-w-screen-lg w-[90%] min-h-screen text-center">
        <iframe
          src="/public/laziz-khamidov-cv.pdf"
          title="PDF Viewer"
          className="w-full max-h-[600px] h-screen min-h-[500px] rounded-lg"
        ></iframe>

        <button
          onClick={handleDownload}
          className="mt-5 align-middle px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-green-500 transition-all"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
