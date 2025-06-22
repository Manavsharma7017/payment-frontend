import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Signup } from "../reactcomponents/Signup";
import { Loginup } from "../reactcomponents/Loginup";
import { Alertcom } from "@/reactcomponents/Alertcom";
import { useRecoilValue } from "recoil";
import { message } from "@/atoms/Atoms";

const Auth = () => {
  const mess = useRecoilValue(message);

  return (
    <div className="min-h-screen bg-white px-4 py-10 flex flex-col items-center">
      {/* Alert message */}
      <div className="w-full flex justify-end">
        <Alertcom message={mess} />
      </div>

      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mt-12 mb-10 text-black">
        Create or Login to your account
      </h1>

      {/* Tabs Section */}
      <Tabs defaultValue="Login" className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="Login">
          <Loginup />
        </TabsContent>

        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Auth;
