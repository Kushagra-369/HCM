import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize toast configuration globally
export const toastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

// Success Notification
export const showSuccessToast = (message) => {
  toast.success(message, toastConfig);
};

// Error Notification
export const showErrorToast = (message) => {
  toast.error(message, toastConfig);
};

// Info Notification
export const showInfoToast = (message) => {
  toast.info(message, toastConfig);
};

// Warning Notification
export const showWarningToast = (message) => {
  toast.warn(message, toastConfig);
};