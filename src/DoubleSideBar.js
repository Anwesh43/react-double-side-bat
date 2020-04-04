import React, {useEffect} from 'react'
import {useDimension, useAnimatedScale} from './hooks'
import SideBar from './SideBar'

const Button = ({w, h, scale, onClick}) => {
    const btnText = scale == 0 ? "start" : "updating.."
    const btnStyle = {position : 'absolute', top: '0px', left : `${0.35 * w}px`}
    return <button style = {btnStyle} {...onClick}>start</button>
}
const DoubleSideBar = () => {
    const {w, h, resize, disableResize} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 30)
    return <div>
        <Button w = {w} h = {h} scale = {scale} onClick = {start}/>
        <React.Fragment>
          {[0, 1].map(i => <SideBar scale = {scale} w = {w} h = {h} i = {i} key = {`sidebar_${i}`}/>)}
        </React.Fragment>
    </div>
}

export default DoubleSideBar
