import React from 'react';

const Image = ({ image, onChange, id }) => {
  return (
    <div className="max-w-sm flex flex-col gap-3">
      <label
        htmlFor={`imageUpload-${id}`}
        className="block w-20 h-20 border-2 relative border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100"
      >
        {image ? (
          <div
            className="w-20 h-20 bg-cover bg-center absolute top-0 left-0 rounded-lg"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ) : (
          <span className="text-gray-500 flex justify-center items-center h-full">📷</span>
        )}
        <input
          type="file"
          id={`imageUpload-${id}`}
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Image;
