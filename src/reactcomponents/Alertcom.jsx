import { useEffect } from "react";
import { Terminal } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../components/ui/alert";
import { useRecoilState } from "recoil";
import { message as messageAtom } from "@/atoms/Atoms";

export const Alertcom = ({ message }) => {
  const [mess, setMess] = useRecoilState(messageAtom);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMess(""); // Clear message after 2 seconds
      }, 2000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [message, setMess]);

  if (!message) return null;

  return (
    <div className="animate-fade-in transition-opacity duration-300">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Alert</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
};
