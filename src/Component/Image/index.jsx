import { useDispatch, useSelector } from "react-redux";
import { removeImage } from "../../Redux/slices/image.slice";
const Image = () =>{
      const dispatch = useDispatch();
      const res = useSelector(res=>res);
      const {imagesSlice} = res;
      return(
            <>
             <div className="p-16">
                  <div className="grid grid-cols-4 gap-4">
                       {
                        imagesSlice.map((item,index)=>(
                              <img 
                              onClick = {()=>dispatch(removeImage(index))}
                              key={index}
                              src={item} 
                              alt={item} 
                              width={400}
                              />
                        ))
                       }
                  </div>
             </div>
            </>
      );
}
export default Image;