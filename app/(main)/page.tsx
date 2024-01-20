import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col mt-8">
      <Button className="w-16 rounde" variant={"link"}>Add</Button>
      <p className="text-red-600">Discord-Clone</p>
    </div>
  );
};

export default Home;
