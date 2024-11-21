import {useState, forwardRef } from "react";
import images from '~/assets/images'
const Image = forwardRef(({src,alt, fallback: customFallBack = images.noImage,...props} , ref)=>{
    const [fallBack, setFallBack] = useState('')
    const handleError =()=>{
        setFallBack(customFallBack)
    }
    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError}/>
})

export default Image;