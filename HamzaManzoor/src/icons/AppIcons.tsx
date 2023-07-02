// this file is responsible for all icons used in this app we need to use this icon as AppIcons("abc")
import { GrReactjs } from "react-icons/gr";
import { BsBoxFill , BsBootstrap , BsFiletypeScss} from "react-icons/bs";
import { TbBrandJavascript , TbBrandTypescript,TbBrandFirebase,TbCurrencyEthereum} from "react-icons/tb";
import { FaVuejs } from "react-icons/fa";
import { SiGreensock,SiStyledcomponents,SiTailwindcss } from "react-icons/si";

const AppIcons = (type:string, size = 20) => {
  switch (type?.toLowerCase()?.trim()) {
    case "react.js":
      return <GrReactjs style={{ width: `${size}px`, height: `${size}px` }} />;
      case "vue.js":
      return <FaVuejs style={{ width: `${size}px`, height: `${size}px` }} />;
      case "bootstrap":
      return <BsBootstrap style={{ width: `${size}px`, height: `${size}px` }} />;
      case "scss":
      return <BsFiletypeScss style={{ width: `${size}px`, height: `${size}px` }} />;
      case "javascript":
      return <TbBrandJavascript style={{ width: `${size}px`, height: `${size}px` }} />;
      case "typescript":
      return <TbBrandTypescript style={{ width: `${size}px`, height: `${size}px` }} />;
      case "gsap":
      return <SiGreensock style={{ width: `${size}px`, height: `${size}px` }} />;
      case "styled-component":
        return <SiStyledcomponents style={{ width: `${size}px`, height: `${size}px` }} />;
      case "tailwind":
        return <SiTailwindcss style={{ width: `${size}px`, height: `${size}px` }} />;
      case "firebase":
        return <TbBrandFirebase style={{ width: `${size}px`, height: `${size}px` }} />;
      case "ethereum":
        return <TbCurrencyEthereum style={{ width: `${size}px`, height: `${size}px` }} />;
    default:
      return <BsBoxFill style={{ width: `${size}px`, height: `${size}px` }} />;
  }
};

export default AppIcons;
