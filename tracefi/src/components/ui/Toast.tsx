"use client";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 px-5 py-3 bg-green-400/20 border border-green-400 text-green-400 rounded-full shadow-lg flex items-center gap-2 animate-slide-in z-50">
      <CheckCircle size={20} />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
