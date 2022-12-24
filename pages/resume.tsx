
import dynamic from "next/dynamic";
const Resume = dynamic(() => import("../components/screens/Resume"), {
  ssr: false,
});

function resume() {
  return (
    <Resume/>
  );
}

export default resume