import { useState, useRef } from "react";
import { X, Image } from "react-feather";

function ImageUpload({ initialImage, onImageChange, className = "" }) {
  const [image, setImage] = useState(initialImage);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const processFile = (file) => {
    if (!file.type.match("image.*")) {
      alert("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;
      setImage(imageData);
      onImageChange(imageData);
    };
    reader.readAsDataURL(file);
  };

  const handleClearImage = (e) => {
    e.stopPropagation();
    setImage(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={`${className}`}>
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 ${
          image
            ? "h-56"
            : "h-40 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400"
        } ${
          isDragging
            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20"
            : ""
        }`}
      >
        {image ? (
          <div className="relative w-full h-full group">
            <img
              src={image || "/placeholder.svg"}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm px-3 py-1 bg-black/50 rounded-full">
                Click to change
              </span>
            </div>
            <button
              type="button"
              onClick={handleClearImage}
              className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-3">
              <Image className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center font-medium">
              Click to upload an image or drag and drop
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 text-center">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default ImageUpload;
