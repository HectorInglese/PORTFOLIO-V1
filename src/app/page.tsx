import ThemeSwticher from "@/components/ThemeSwitcher";
import { Button } from "@nextui-org/react";

const HomePage = () => {
  return (
    <div>
      <ThemeSwticher />
      <div className="flex gap-4">
        <Button color="primary" variant="solid">Solid</Button>
        <Button color="primary" variant="ghost">Ghost</Button>
      </div>
    </div>
  )
}

export default HomePage;