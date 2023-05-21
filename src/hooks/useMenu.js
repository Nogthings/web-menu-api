import { useContext } from "react";
import MenuContext from "../providers/MenuProvider";

const useMenu = () =>{
    return useContext(MenuContext)
}

export default useMenu