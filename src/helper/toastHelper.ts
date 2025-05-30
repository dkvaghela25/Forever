import { toast } from 'react-toastify';

const ToastHelper = {
  success: (message : string) => {
    toast.success(message);
  },
  error: (message : string) => {
    toast.error(message);
  }
};

export default ToastHelper;