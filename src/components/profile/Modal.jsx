import React from 'react'
import './modal.css'
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from "react-share";


const Modal = ({open, onClose}) => {
  const url = "https://tcg-linktree-task.netlify.app/";
    if(!open) return null
  return (
    <div onClick={onClose} className='overlay' >
        <div onClick={(e) => {
          e.stopPropagation()
        }} className="modal__con">
            <div className="modal__right">
                <p onClick={onClose} className="close__btn">X</p>
            </div>
            <div className='modal__content' >
              <div className="facebook">
                <FacebookShareButton url={url} className="w-full">
                  <div className="flex relative items-center w-full gap-2 rounded-lg p-4 hover:text-white  hover:text-white hover:bg-gray-600 hover:border-gray-300-600 hover:border-gray-300">
                    <FacebookIcon size={32} borderRadius={12} />
                    Share on Facebook
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      //   enable-background="new 0 0 24 24"
                      className="absolute top-6 right-4 "
                    >
                    <path
                      d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                      fill="black"
                    ></path>
                      </svg>
                    </div>
                </FacebookShareButton>

              </div>

              <div className="linkedin">
                 {/* Share to LinkedIn button */}
                <LinkedinShareButton url={url} className="w-full">
                  <div className="flex relative items-center w-full gap-2 rounded-lg p-4  hover:text-white hover:bg-gray-600 hover:border-gray-300">
                    <LinkedinIcon size={32} borderRadius={12} />
                    Share on LinkedIn
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      //   enable-background="new 0 0 24 24"
                      className="absolute top-6 right-4 "
                    >
                      <path
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </LinkedinShareButton>
              </div>

              <div className="twitter">
                <TwitterShareButton url={url} className="w-full">
                  <div className="flex relative items-center w-full gap-2 rounded-lg p-4  hover:text-white hover:bg-gray-600 hover:border-gray-300">
                    <TwitterIcon size={32} borderRadius={12} />
                    Share on Twitter
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      //   enable-background="new 0 0 24 24"
                      className="absolute top-6 right-4 "
                    >
                      <path
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </TwitterShareButton>
              </div>

              <div className="whatsapp">
                <WhatsappShareButton url={url} className="w-full">
                  <div className="flex relative items-center w-full gap-2 rounded-lg p-4  hover:text-white hover:bg-gray-600 hover:border-gray-300">
                    <WhatsappIcon size={32} borderRadius={12} />
                    Share via WhatsApp
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      //   enable-background="new 0 0 24 24"
                      className="absolute top-6 right-4 "
                    >
                      <path
                        d="M4.70714 1.29297L5.06069 1.64652L11.0607 7.64652V8.35363L5.06069 14.3536L4.70714 14.7072L4.00003 14.0001L4.35358 13.6465L10 8.00008L4.35358 2.35363L4.00003 2.00008L4.70714 1.29297Z"
                        fill="black"
                      ></path>
                    </svg>
                  </div>
                </WhatsappShareButton>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Modal