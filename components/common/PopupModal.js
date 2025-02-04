import React from "react";

function PopupModal({ handleClose, children }) {
  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              class="absolute top-1 right-2 rotate-45 cursor"
              onClick={handleClose}
            >
              +
            </div>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupModal;
