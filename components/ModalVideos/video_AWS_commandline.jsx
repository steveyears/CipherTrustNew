import React, { useState, useEffect } from "react";
import Image from "next/image";
import { VscMultipleWindows } from "react-icons/vsc";

const ModalVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="text-left hover:text-n-9 transition-all"
      >
        Deploy CipherTrust Manager on AWS with Terraform{" "}
        <VscMultipleWindows className="inline-block -mt-1 ml-2" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-6xl p-4 bg-n-11 rounded-lg">
            <button
              onClick={toggleModal}
              className="absolute -top-9 -right-9 z-50 m-4 text-black"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/close_button.svg`}
                alt="close"
                width={36}
                height={36}
              />
            </button>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://app.heygen.com/embeds/001355cc46ae4a03b9529d8a9f2068e9"
                title="HeyGen Video Player"
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
