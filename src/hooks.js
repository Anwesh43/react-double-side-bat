import {useState} from 'react'

export const useAnimatedScale = (scGap, dir) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale
                let interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                })
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    return {
        w,
        h,
        resize() {
            window.onresize = () => {
                setW(window.innerWidth)
                setH(window.innerHeight)
            }
        },
        disableResize() {
            window.onresize = () => {
                
            }
        }
    }
}
