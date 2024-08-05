import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ModalVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button onClick={toggleModal} className="btn">Open Video</button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-6xl p-4 bg-n-11 rounded-lg">
            <button onClick={toggleModal} className="absolute -top-9 -right-9 z-50 m-4 text-black">
                <Image src="/images/close_button.svg" alt="close" width={36} height={36} />
            </button>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://app.heygen.com/embeds/001355cc46ae4a03b9529d8a9f2068e9"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalVideo;
