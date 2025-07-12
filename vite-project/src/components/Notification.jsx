import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./horror-toast.css"; // 👈 custom styles

export const toastConfig = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark", // 👈 using dark theme as base
  className: "horror-toast", // 👈 add custom class
  bodyClassName: "horror-toast-body", // 👈 customize body
  progressClassName: "horror-toast-progress", // 👈 customize progress
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
