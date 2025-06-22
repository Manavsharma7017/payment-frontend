
import {  useSearchParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { message } from "@/atoms/Atoms";
import { Alertcom } from "../reactcomponents/Alertcom";
const API_BASE_URL = import.meta.env.VITE_API_URL;

const Transferemail = () => {
 const [amount,seta]=useState(0)
 const [email, setEmail] = useState("");
 const [description, setDescription] = useState("");
  const [mess, setMess] = useRecoilState(message);
 
  const setter=(e)=>{
      seta(e.target.value)
    }
    const setteremail = (e) => {
    setEmail(e.target.value);
  };
  const setterdescription = (e) => {
    setDescription(e.target.value);
    };

  const handleTransfer = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setMess("Please enter a valid amount.");
      return;
    }

    try {
      const res = await axios.post(
        `${API_BASE_URL}/account/transfer/email`,
        { amount, email,description },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const msg = res.data.message;

      if (msg === "insufficent balance") setMess("Insufficient balance.");
      else if (msg === "invalid uuser") setMess("Invalid user.");
      else if (msg === "Transfer successful") setMess("Transfer successful.");
      window.location.href = "/das"; // Redirect to dashboard after transfer
    } catch (e) {
      setMess("Transfer failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50 flex flex-col items-center py-10 px-4">
      <div className="mb-6">
        <Alertcom message={mess} />
      </div>

      <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white text-black">
        <CardHeader>
          <CardDescription>Send money to user</CardDescription>
        </CardHeader>
         <CardContent>
          <Input name="email" placeholder="email" onChange={setteremail} ></Input>
        </CardContent>
       
        <CardContent>
          <Input name="amount" placeholder="enter amount" onChange={setter} ></Input>
        </CardContent>
        <CardContent>
          <Input name="description" placeholder="enter description" onChange={setterdescription} ></Input>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button onClick={handleTransfer}>Send</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Transferemail;